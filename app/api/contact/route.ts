import { Resend } from "resend";
import { esc, emailShell, fieldRow } from "@/lib/email";
import { detectBot, logBlocked } from "@/lib/antiBot";

export const runtime = "nodejs";

const CLUB_EMAIL = "ashfieldgolfclub@gmail.com";
const SUBJECTS = [
  "General Enquiry",
  "Green Fee / Visitor Booking",
  "Society / Group Booking",
  "Membership",
  "Other",
];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bot checks run before validation so a blocked submission never does work
  // and never reveals which field it failed on. `ok` satisfies the silent-drop
  // contract; `success` keeps the response shape the form already expects, so
  // a bot (or a false positive) sees an ordinary success state.
  const botReason = detectBot(body);
  if (botReason) {
    logBlocked("/api/contact", botReason);
    return Response.json({ ok: true, success: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Server-side validation
  if (!name || !email || !subject || message.length < 10) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!SUBJECTS.includes(subject)) {
    return Response.json({ error: "Invalid subject." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email service is not configured. Please call the club on 028 30 868180." }, { status: 500 });
  }
  // Sender must be an address on a Resend-verified domain. Never fall back to
  // Resend's shared sandbox sender: it only delivers to the account owner,
  // which is what made every live submission fail with a 403.
  const from = process.env.RESEND_FROM;
  if (!from) {
    console.error("RESEND_FROM is not set — set it to a verified sender, e.g. \"Ashfield Golf Club <website@ashfieldgolfcourse.com>\"");
    return Response.json({ error: "Email service is not configured. Please call the club on 028 30 868180." }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  const clubHtml = emailShell({
    heading: "New Website Enquiry",
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse;">
        ${fieldRow("Name", name)}
        ${fieldRow("Email", email)}
        ${fieldRow("Phone", phone)}
        ${fieldRow("Subject", subject)}
      </table>
      <div style="margin-top:18px;padding-top:16px;border-top:1px solid #e6ddcf;">
        <div style="font-size:12px;color:#6b7c68;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Message</div>
        <div style="font-size:15px;line-height:1.6;color:#1a2218;">${esc(message).replace(/\n/g, "<br/>")}</div>
      </div>`,
  });

  const replyHtml = emailShell({
    heading: "Thanks for getting in touch",
    bodyHtml: `
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">Hi ${esc(name)},</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">Thank you for contacting Ashfield Golf Club. We&rsquo;ve received your message and a member of the team will be in touch shortly.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">For urgent enquiries, please call us on <strong>028 30 868180</strong>.</p>
      <p style="font-size:15px;line-height:1.7;margin:0;">Kind regards,<br/>Ashfield Golf Club</p>`,
  });

  try {
    // Club notification first, and only on success do we send the auto-reply.
    // Sending both in parallel let a spam submission trigger an outbound email
    // to an arbitrary address even when the club copy never arrived.
    const clubRes = await resend.emails.send({
      from, to: CLUB_EMAIL, replyTo: email,
      subject: `Website Enquiry: ${subject}`, html: clubHtml,
    });
    if (clubRes.error) {
      console.error("Resend club email error:", clubRes.error);
      return Response.json({ error: "We couldn't send your message. Please call the club on 028 30 868180." }, { status: 502 });
    }

    // The club has the enquiry — the auto-reply is best-effort from here, so a
    // failure (returned or thrown) is logged but never fails the request.
    try {
      const replyRes = await resend.emails.send({
        from, to: email, replyTo: CLUB_EMAIL,
        subject: "Thanks for contacting Ashfield Golf Club", html: replyHtml,
      });
      if (replyRes.error) console.error("Resend auto-reply error (non-fatal):", replyRes.error);
    } catch (err) {
      console.error("Resend auto-reply threw (non-fatal):", err);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact send failed:", err);
    return Response.json({ error: "Something went wrong sending your message. Please try again or call 028 30 868180." }, { status: 500 });
  }
}
