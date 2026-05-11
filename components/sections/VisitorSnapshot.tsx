"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEES = [
  { type: "Weekdays",               price: "£15", sub: "Mon–Fri" },
  { type: "Weekends & Bank Hols",   price: "£20", sub: "Sat, Sun, BH" },
  { type: "Students & Seniors",     price: "£10", sub: "ID required" },
  { type: "Juniors (U16)",          price: "£10", sub: "All week" },
];

export default function VisitorSnapshot() {
  return (
    <section style={{ background: "#f5f0e8", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>Visitor Green Fees</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 36px)", color: "#1a3a2a", margin: "0.5rem auto 1rem", lineHeight: 1.2 }}>
            You Don't Need to Be a Member to <em style={{ color: "#c9a84c" }}>Play</em>
          </h2>
          <p style={{ fontSize: 15, color: "#3d4f3a", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 2.5rem", fontWeight: 300 }}>
            Visitors are always welcome at Ashfield. Walk in or call ahead — a great round in South Armagh awaits.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          {FEES.map((f, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: `3px solid ${i === 1 ? "#c9a84c" : "#4a8c62"}`, padding: "1.75rem", borderRadius: 2, textAlign: "center" }}>
              <p style={{ fontSize: 13, color: "#6b7c68", marginBottom: "0.5rem" }}>{f.type}</p>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#1a3a2a" }}>{f.price}</div>
              <p style={{ fontSize: 12, color: "#6b7c68", marginTop: "0.25rem" }}>{f.sub}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/visitors" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a3a2a", color: "#f5f0e8", padding: "12px 28px", borderRadius: 2, fontSize: 14, textDecoration: "none" }}>
            Society Packages & Booking <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
