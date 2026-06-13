"use client";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { MEMBERSHIP_RATES } from "@/lib/data";
import {
  fieldWrap, labelStyle, inputStyle, textareaStyle, errorTextStyle,
  successBanner, errorBanner,
} from "./formStyles";

// Category options derived from MEMBERSHIP_RATES so they can't drift.
const CATEGORY_OPTIONS = MEMBERSHIP_RATES.map((r) => `${r.category} (${r.price})`);

const EMPTY = {
  fullName: "", dob: "", street: "", town: "", postcode: "",
  phone: "", email: "", category: "", gui: "", hearAbout: "", notes: "",
};
type Status = "idle" | "submitting" | "success" | "error";

const required: (keyof typeof EMPTY)[] = ["fullName", "dob", "street", "town", "postcode", "phone", "email", "category"];

export default function MembershipForm() {
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
    for (const key of required) {
      if (!form[key].trim()) e[key] = "This field is required.";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
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
      const res = await fetch("/api/membership", {
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

  const star = <span style={{ color: "#b4452f" }}>*</span>;

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === "success" && (
        <div style={successBanner} role="status">
          Thank you — your membership application has been received. A committee member will be in touch to confirm your details and arrange payment.
        </div>
      )}
      {status === "error" && serverError && (
        <div style={errorBanner} role="alert">{serverError}</div>
      )}

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-name">Full Name {star}</label>
        <input id="mf-name" type="text" value={form.fullName} onChange={update("fullName")} style={inputStyle(!!errors.fullName)} autoComplete="name" />
        {errors.fullName && <span style={errorTextStyle}>{errors.fullName}</span>}
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-dob">Date of Birth {star}</label>
        <input id="mf-dob" type="date" value={form.dob} onChange={update("dob")} style={inputStyle(!!errors.dob)} />
        {errors.dob && <span style={errorTextStyle}>{errors.dob}</span>}
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-street">Street Address {star}</label>
        <input id="mf-street" type="text" value={form.street} onChange={update("street")} style={inputStyle(!!errors.street)} autoComplete="address-line1" />
        {errors.street && <span style={errorTextStyle}>{errors.street}</span>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="mf-town">Town / City {star}</label>
          <input id="mf-town" type="text" value={form.town} onChange={update("town")} style={inputStyle(!!errors.town)} autoComplete="address-level2" />
          {errors.town && <span style={errorTextStyle}>{errors.town}</span>}
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="mf-postcode">Postcode {star}</label>
          <input id="mf-postcode" type="text" value={form.postcode} onChange={update("postcode")} style={inputStyle(!!errors.postcode)} autoComplete="postal-code" />
          {errors.postcode && <span style={errorTextStyle}>{errors.postcode}</span>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="mf-phone">Phone Number {star}</label>
          <input id="mf-phone" type="tel" value={form.phone} onChange={update("phone")} style={inputStyle(!!errors.phone)} autoComplete="tel" />
          {errors.phone && <span style={errorTextStyle}>{errors.phone}</span>}
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="mf-email">Email Address {star}</label>
          <input id="mf-email" type="email" value={form.email} onChange={update("email")} style={inputStyle(!!errors.email)} autoComplete="email" />
          {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
        </div>
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-category">Membership Category {star}</label>
        <select id="mf-category" value={form.category} onChange={update("category")} style={inputStyle(!!errors.category)}>
          <option value="">Please select…</option>
          {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <span style={errorTextStyle}>{errors.category}</span>}
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-gui">GUI Number</label>
        <input id="mf-gui" type="text" value={form.gui} onChange={update("gui")} style={inputStyle(false)} placeholder="If you have an existing GUI handicap" />
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-hear">How did you hear about us?</label>
        <input id="mf-hear" type="text" value={form.hearAbout} onChange={update("hearAbout")} style={inputStyle(false)} />
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="mf-notes">Additional Notes</label>
        <textarea id="mf-notes" value={form.notes} onChange={update("notes")} style={textareaStyle(false)} />
      </div>

      <SubmitButton idleLabel="Submit Application" submitting={status === "submitting"} />
    </form>
  );
}
