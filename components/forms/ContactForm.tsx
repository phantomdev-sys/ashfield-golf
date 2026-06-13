"use client";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import {
  fieldWrap, labelStyle, inputStyle, textareaStyle, errorTextStyle,
  successBanner, errorBanner,
} from "./formStyles";

const SUBJECTS = [
  "General Enquiry",
  "Green Fee / Visitor Booking",
  "Society / Group Booking",
  "Membership",
  "Other",
];

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ ...EMPTY });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const update =
    (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => (prev[key] ? { ...prev, [key]: "" } : prev));
    };

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (!form.subject) e.subject = "Please choose a subject.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    else if (form.message.trim().length < 10) e.message = "Your message should be at least 10 characters.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ ...EMPTY });
        setErrors({});
      } else {
        setStatus("error");
        setServerError(data.error || "Something went wrong. Please try again or call 028 30 868180.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error — please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === "success" && (
        <div style={successBanner} role="status">
          Thanks for your message — we&apos;ve received it and will be in touch shortly.
        </div>
      )}
      {status === "error" && serverError && (
        <div style={errorBanner} role="alert">{serverError}</div>
      )}

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="cf-name">Full Name <span style={{ color: "#b4452f" }}>*</span></label>
        <input id="cf-name" type="text" value={form.name} onChange={update("name")} style={inputStyle(!!errors.name)} autoComplete="name" />
        {errors.name && <span style={errorTextStyle}>{errors.name}</span>}
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="cf-email">Email Address <span style={{ color: "#b4452f" }}>*</span></label>
        <input id="cf-email" type="email" value={form.email} onChange={update("email")} style={inputStyle(!!errors.email)} autoComplete="email" />
        {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="cf-phone">Phone Number</label>
        <input id="cf-phone" type="tel" value={form.phone} onChange={update("phone")} style={inputStyle(false)} autoComplete="tel" />
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="cf-subject">Subject <span style={{ color: "#b4452f" }}>*</span></label>
        <select id="cf-subject" value={form.subject} onChange={update("subject")} style={inputStyle(!!errors.subject)}>
          <option value="">Please select…</option>
          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.subject && <span style={errorTextStyle}>{errors.subject}</span>}
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="cf-message">Message <span style={{ color: "#b4452f" }}>*</span></label>
        <textarea id="cf-message" value={form.message} onChange={update("message")} style={textareaStyle(!!errors.message)} />
        {errors.message && <span style={errorTextStyle}>{errors.message}</span>}
      </div>

      <SubmitButton idleLabel="Send Message" submitting={status === "submitting"} />
    </form>
  );
}
