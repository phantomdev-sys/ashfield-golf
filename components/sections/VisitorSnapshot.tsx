"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GREEN_FEES } from "@/lib/data";

export default function VisitorSnapshot() {
  return (
    <section style={{ background: "#f5f0e8", padding: "4rem 1.25rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>Visitor Green Fees</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 36px)", color: "#1a3a2a", margin: "0.5rem auto 1rem", lineHeight: 1.2 }}>
            You Don&apos;t Need to Be a Member to <em style={{ color: "#c9a84c" }}>Play</em>
          </h2>
          <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "#3d4f3a", lineHeight: 1.7, maxWidth: 500, margin: "0 auto", fontWeight: 300 }}>
            Walk-in visitors are always welcome. A great round in South Armagh awaits.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {GREEN_FEES.map((f) => (
            <div key={f.type} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: `3px solid ${f.featured ? "#c9a84c" : "#4a8c62"}`, padding: "1.5rem 1rem", borderRadius: 2, textAlign: "center" }}>
              <p style={{ fontSize: 12, color: "#6b7c68", marginBottom: "0.5rem" }}>{f.type}</p>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 36px)", color: "#1a3a2a", lineHeight: 1 }}>{f.price}</div>
              <p style={{ fontSize: 11, color: "#6b7c68", marginTop: "0.25rem" }}>{f.note}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/visitors" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a3a2a", color: "#f5f0e8", padding: "12px 24px", borderRadius: 2, fontSize: 14, textDecoration: "none" }}>
            Society Packages & Booking <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}