import type { Metadata } from "next";
import MembershipForm from "@/components/forms/MembershipForm";

export const metadata: Metadata = {
  title: "Apply for Membership",
  description: "Apply to join Ashfield Golf Club, South Armagh. Complete the membership application form and a committee member will be in touch to confirm your details.",
};

export default function MembershipApplyPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Join Us</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Membership <em style={{ color: "#c9a84c" }}>Application</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            Complete the form below to apply. A committee member will be in touch to confirm your details and arrange payment.
          </p>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem 5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", borderRadius: 4, padding: "2.5rem", boxShadow: "0 2px 16px rgba(26,58,42,0.06)" }}>
            <MembershipForm />
          </div>
        </div>
      </div>
    </>
  );
}
