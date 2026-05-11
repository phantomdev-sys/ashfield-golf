import type { Metadata } from "next";
import { MEMBERSHIP_RATES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join Ashfield Golf Club, South Armagh. GUI affiliated golf with competitive rates for individuals, families, juniors and seniors in Northern Ireland.",
};

export default function MembershipPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Join Us</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Membership at <em style={{ color: "#c9a84c" }}>Ashfield</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            New members are welcome. All memberships include full GUI handicap eligibility, competition access, and a community built on a genuine love of the game.
          </p>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#1a3a2a", marginBottom: "1rem" }}>Membership Rates</h2>
              <p style={{ fontSize: 13, color: "#6b7c68", marginBottom: "1.5rem", padding: "0.75rem 1rem", background: "#fff", border: "1px solid rgba(201,168,76,0.3)", borderLeft: "3px solid #c9a84c", borderRadius: 2 }}>
                Rates shown are indicative. Please contact the club directly for confirmed current pricing.
              </p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#1a3a2a" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", color: "#c9a84c", fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500 }}>Category</th>
                    <th style={{ padding: "12px 16px", textAlign: "right", color: "#c9a84c", fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500 }}>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {MEMBERSHIP_RATES.map((r, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "rgba(245,240,232,0.5)", borderBottom: "1px solid rgba(26,58,42,0.06)" }}>
                      <td style={{ padding: "12px 16px", fontSize: 14, color: "#1a2218" }}>{r.category}</td>
                      <td style={{ padding: "12px 16px", fontSize: 16, color: "#2d5a3f", fontWeight: 500, textAlign: "right", fontFamily: "'Playfair Display', serif" }}>{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div style={{ background: "#1a3a2a", padding: "2rem", borderRadius: 2, marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#c9a84c", marginBottom: "1rem" }}>How to Join</h3>
                <p style={{ fontSize: 14, color: "rgba(245,240,232,0.75)", lineHeight: 1.7, marginBottom: "1rem" }}>Contact the club by phone or email to request an application form.</p>
                <a href="tel:02830868180" style={{ display: "block", color: "#c9a84c", fontSize: 16, textDecoration: "none", marginBottom: "0.5rem", fontFamily: "'Playfair Display', serif" }}>028 30 868180</a>
                <a href="mailto:secretary@ashfieldgolfcourse.com" style={{ display: "block", color: "rgba(245,240,232,0.65)", fontSize: 13, textDecoration: "none" }}>secretary@ashfieldgolfcourse.com</a>
              </div>
              <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", padding: "1.5rem", borderRadius: 2 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", marginBottom: "0.75rem" }}>Refer &amp; Save</h3>
                <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.65 }}>Introduce a new member and receive a <strong>£50 discount</strong> off your next renewal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
