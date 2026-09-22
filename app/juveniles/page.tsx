import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, IdCard } from "lucide-react";
import { MEMBERSHIP_RATES } from "@/lib/data";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Juvenile Golf",
  description: "Introducing the next generation to the game at Ashfield Golf Club. Juvenile coaching on Saturday mornings, a GUI handicap, and junior membership from £100 in South Armagh.",
};

// Juvenile membership tiers — pulled from MEMBERSHIP_RATES so they can't drift.
const juvenileRates = MEMBERSHIP_RATES.filter((r) => r.category.includes("Juvenile"));
const fromPrice = [...juvenileRates]
  .sort((a, b) => parseInt(a.price.replace(/\D/g, ""), 10) - parseInt(b.price.replace(/\D/g, ""), 10))[0]?.price ?? "";

const ctaLink: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: 6,
  color: "#c9a84c", fontSize: 15, fontWeight: 500, textDecoration: "none",
};

const tileStyle: React.CSSProperties = {
  background: "#fff", border: "1px solid rgba(26,58,42,0.12)", borderTop: "3px solid #2d5a3f",
  borderRadius: 2, padding: "1.75rem",
};

export default function JuvenilesPage() {
  return (
    <>
      <PageHero
        image="/images/course/green-and-red-flag.webp"
        eyebrow="Junior Golf"
        title={<>Juvenile <em style={{ color: "#c9a84c" }}>Golf</em></>}
        intro={<>Introducing the next generation to the game at Ashfield Golf Club.</>}
      />

      <div style={{ background: "#f5f0e8", padding: "4rem 2rem 5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* Section 1 — intro card */}
          <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", borderRadius: 4, padding: "2.5rem", boxShadow: "0 2px 16px rgba(26,58,42,0.06)", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#1a3a2a", margin: "0 0 1rem" }}>
              Juveniles are the future of our Club
            </h2>
            <p style={{ fontSize: 16, color: "#3d4f3a", lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
              At Ashfield Golf Club, we actively encourage all young players to get involved. Our Club Pro offers juvenile coaching sessions on Saturday mornings from April to October — a great way to learn the game in a friendly, welcoming environment.
            </p>
          </div>

          {/* Section 2 — info tiles */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={tileStyle}>
              <GraduationCap size={26} style={{ color: "#c9a84c", marginBottom: "0.75rem" }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", margin: "0 0 0.6rem" }}>Coaching</h3>
              <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.65, margin: 0 }}>
                Saturday mornings, April to October. Led by our Club Pro. Open to all juvenile members. Contact the club to register your interest.
              </p>
            </div>

            <div style={tileStyle}>
              <IdCard size={26} style={{ color: "#c9a84c", marginBottom: "0.75rem" }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", margin: "0 0 0.6rem" }}>Membership</h3>
              <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.65, margin: 0 }}>
                Juvenile membership from {fromPrice}. Get a GUI handicap, play competitions, and join a growing community of young golfers at Ashfield.
              </p>
              <div style={{ marginTop: "1rem", borderTop: "1px solid rgba(26,58,42,0.08)", paddingTop: "0.75rem" }}>
                {juvenileRates.map((r) => (
                  <div key={r.category} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.3rem 0" }}>
                    <span style={{ fontSize: 14, color: "#1a2218" }}>{r.category}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "#2d5a3f", fontWeight: 500 }}>{r.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/contact" style={ctaLink}>Contact the Club →</Link>
            <Link href="/membership" style={ctaLink}>View Membership Rates →</Link>
          </div>

        </div>
      </div>
    </>
  );
}
