import type { Metadata } from "next";
import { GREEN_FEES } from "@/lib/data";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Visitors",
  description: "Visit Ashfield Golf Club, South Armagh. Green fees and society packages for one of Northern Ireland's most welcoming parkland golf courses near Newry.",
};

export default function VisitorsPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Welcome</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Visitors to <em style={{ color: "#c9a84c" }}>Ashfield</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            You don't need to be a member to play. Walk-ins welcome, and our society packages offer outstanding value.
          </p>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#1a3a2a", marginBottom: "2rem" }}>Green Fees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {GREEN_FEES.map((f, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid " + (i === 1 ? "#c9a84c" : "#4a8c62"), padding: "2rem", borderRadius: 2, textAlign: "center" }}>
                <p style={{ fontSize: 13, color: "#6b7c68", marginBottom: "0.75rem" }}>{f.type}</p>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: "#1a3a2a", lineHeight: 1 }}>{f.price}</div>
                <p style={{ fontSize: 12, color: "#6b7c68", marginTop: "0.5rem" }}>{f.note}</p>
              </div>
            ))}
          </div>
          <div id="societies" style={{ background: "#1a3a2a", padding: "2.5rem", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#c9a84c", marginBottom: "1rem" }}>Society Packages</h2>
            <p style={{ fontSize: 15, color: "rgba(245,240,232,0.8)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Ashfield is a popular venue for golfing societies. We guarantee a great welcome, a fine golf course, tasty food, and excellent value. Pre-booking is essential.
            </p>
            <a href="tel:02830868180" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "12px 24px", borderRadius: 2, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
              Call to Book
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
