"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CARDS = [
  { title: "Adult Male",   price: "£500", note: "Full GUI membership", featured: true },
  { title: "Adult Female", price: "£300", note: "Full ILGU membership" },
  { title: "Family",       price: "£550", note: "Husband & wife" },
  { title: "Junior",       price: "From £100", note: "Under-16s" },
];

export default function MembershipSnapshot() {
  return (
    <section style={{ background: "#ede5d8", padding: "4rem 1.25rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>Join the Club</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 36px)", color: "#1a3a2a", margin: "0.5rem 0 1rem", lineHeight: 1.2 }}>
              Membership at <em style={{ color: "#c9a84c" }}>Ashfield</em>
            </h2>
            <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "#3d4f3a", lineHeight: 1.7, marginBottom: "1rem", fontWeight: 300 }}>
              New members are welcome. All memberships include full GUI handicap eligibility, competition access, and a community built on a love of the game.
            </p>
            <p style={{ fontSize: 13, color: "#6b7c68", marginBottom: "1.5rem" }}>
              Refer a new member — receive a <strong style={{ color: "#1a3a2a" }}>£50 discount</strong> on your next renewal.
            </p>
            <Link href="/membership" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a3a2a", color: "#f5f0e8", padding: "12px 22px", borderRadius: 2, fontSize: 14, textDecoration: "none" }}>
              View All Rates <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {CARDS.map((c) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: `3px solid ${c.featured ? "#c9a84c" : "#2d5a3f"}`, padding: "1.25rem", borderRadius: 2, position: "relative" }}>
                {c.featured && <span style={{ position: "absolute", top: 10, right: 10, background: "#c9a84c", color: "#1a3a2a", fontSize: 9, padding: "2px 7px", borderRadius: 1, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500 }}>Popular</span>}
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#1a3a2a", marginBottom: "0.2rem" }}>{c.title}</h3>
                <div style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: "#2d5a3f", marginBottom: "0.2rem" }}>{c.price}</div>
                <p style={{ fontSize: 12, color: "#6b7c68" }}>{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}