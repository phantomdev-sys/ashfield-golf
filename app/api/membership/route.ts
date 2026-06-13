import { Resend } from "resend";
import { esc, emailShell, fieldRow } from "@/lib/email";
import { MEMBERSHIP_RATES } from "@/lib/data";

export const runtime = "nodejs";

const CLUB_EMAIL = "ashfieldgolfclub@gmail.com";
const FROM = "Ashfield Golf Club Website <onboarding@resend.dev>";
const VALID_CATEGORIES = MEMBERSHIP_RATES.map((r) => `${r.category} (${r.price})`);

// "YYYY-MM-DD" -> "DD/MM/YYYY" for UK-readable email output.
function formatDob(dob: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : dob;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const dob = String(body.dob ?? "").trim();
  const street = String(body.street ?? "").trim();
  const town = String(body.town ?? "").trim();
  const postcode = String(body.postcode ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const category = String(body.category ?? "").trim();
  const gui = String(body.gui ?? "").trim();
  const hearAbout = String(body.hearAbout ?? "").trim();
  const notes = String(body.notes ?? "").trim();

  // Server-side validation
  if (!fullName || !dob || !street || !town || !postcode || !phone || !email || !category) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!VALID_CATEGORIES.includes(category)) {
    return Response.json({ error: "Invalid membership category." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email service is not configured. Please call the club on 028 30 868180." }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  const subjectName = fullName.replace(/[\r\n]+/g, " ");
  const subjectCategory = category.replace(/[\r\n]+/g, " ");

  const clubHtml = emailShell({
    heading: "New Membership Application",
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse;">
        ${fieldRow("Name", fullName)}
        ${fieldRow("Date of Birth", formatDob(dob))}
        ${fieldRow("Phone", phone)}
        ${fieldRow("Email", email)}
      </table>
      <div style="margin:18px 0;padding:14px 16px;background:rgba(201,168,76,0.12);border:1px solid #c9a84c;border-radius:4px;">
        <div style="font-size:12px;color:#6b7c68;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Membership Category</div>
        <div style="font-size:18px;color:#1a3a2a;font-weight:bold;">${esc(category)}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${fieldRow("Street", street)}
        ${fieldRow("Town / City", town)}
        ${fieldRow("Postcode", postcode)}
        ${fieldRow("GUI Number", gui)}
        ${fieldRow("Heard About Us", hearAbout)}
      </table>
      ${notes ? `<div style="margin-top:18px;padding-top:16px;border-top:1px solid #e6ddcf;">
        <div style="font-size:12px;color:#6b7c68;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Additional Notes</div>
        <div style="font-size:15px;line-height:1.6;color:#1a2218;">${esc(notes).replace(/\n/g, "<br/>")}</div>
      </div>` : ""}`,
  });

  const replyHtml = emailShell({
    heading: "Application received",
    bodyHtml: `
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">Hi ${esc(fullName)},</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">Thank you for applying for membership at Ashfield Golf Club. We&rsquo;ve received your application for the <strong>${esc(category)}</strong> category.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">A member of our committee will be in touch to confirm your details and arrange payment.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 14px;">If you have any questions in the meantime, please call <strong>028 30 868180</strong> or email <a href="mailto:ashfieldgolfclub@gmail.com" style="color:#1a3a2a;">ashfieldgolfclub@gmail.com</a>.</p>
      <p style="font-size:15px;line-height:1.7;margin:0;">Kind regards,<br/>Ashfield Golf Club</p>`,
  });

  try {
    const [clubRes, replyRes] = await Promise.all([
      resend.emails.send({ from: FROM, to: CLUB_EMAIL, replyTo: email, subject: `New Membership Application: ${subjectName} — ${subjectCategory}`, html: clubHtml }),
      resend.emails.send({ from: FROM, to: email, replyTo: CLUB_EMAIL, subject: "Membership Application Received — Ashfield Golf Club", html: replyHtml }),
    ]);

    if (clubRes.error) {
      console.error("Resend club email error:", clubRes.error);
      return Response.json({ error: "We couldn't submit your application. Please call the club on 028 30 868180." }, { status: 502 });
    }
    if (replyRes.error) console.error("Resend auto-reply error (non-fatal):", replyRes.error);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Membership send failed:", err);
    return Response.json({ error: "Something went wrong submitting your application. Please try again or call 028 30 868180." }, { status: 500 });
  }
}
