"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section style={{ background: "#1a3a2a", padding: "6rem 2rem", position: "relative", overflow: "hidden", textAlign: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/aerial-main.jpeg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Ready to Play?</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.75rem 0 1rem", lineHeight: 1.15 }}>
          From the First Tee to the <em style={{ color: "#c9a84c" }}>19th Hole</em>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, marginBottom: "2.5rem", fontWeight: 300 }}>
          We'll have the kettle on. Contact Ashfield Golf Club to book your round, enquire about membership, or plan your society day.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "14px 28px", borderRadius: 2, fontWeight: 500, fontSize: 15, textDecoration: "none" }}>
            Get in Touch
          </Link>
          <a href="tel:02830868180" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#f5f0e8", padding: "14px 28px", borderRadius: 2, border: "1px solid rgba(245,240,232,0.3)", fontSize: 15, textDecoration: "none" }}>
            <Phone size={16} /> 028 30 868180
          </a>
        </div>
      </div>
    </section>
  );
}
