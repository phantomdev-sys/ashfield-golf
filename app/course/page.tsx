import type { Metadata } from "next";
import { HOLES } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Course",
  description: "Explore all 18 holes of Ashfield Golf Club's parkland course in South Armagh. 5,606 yards, par 69, GUI affiliated. Each hole carries a name rooted in the local landscape.",
};

export default function CoursePage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>5,606 Yards · Par 69</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            The <em style={{ color: "#c9a84c" }}>Course</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            A classic parkland layout in rolling South Armagh countryside. Tree-lined fairways, water hazards, and 18 distinctly named holes.
          </p>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
            {HOLES.map((h) => (
              <div key={h.hole} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderLeft: `3px solid ${h.par === 3 ? "#c9a84c" : h.par === 5 ? "#4a8c62" : "#2d5a3f"}`, padding: "1.25rem 1.5rem", borderRadius: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span style={{ fontSize: 11, color: "#6b7c68", textTransform: "uppercase", letterSpacing: "1px" }}>Hole {h.hole}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#1a3a2a", marginTop: "0.15rem" }}>{h.name}</h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#2d5a3f", display: "block" }}>Par {h.par}</span>
                    <span style={{ fontSize: 12, color: "#6b7c68" }}>SI {h.si}</span>
                  </div>
                </div>
                <div style={{ marginTop: "0.75rem", display: "flex", gap: "1.5rem" }}>
                  <div><span style={{ fontSize: 11, color: "#6b7c68", display: "block" }}>Men</span><span style={{ fontSize: 14, color: "#1a2218", fontWeight: 500 }}>{h.gentsYards} yds</span></div>
                  <div><span style={{ fontSize: 11, color: "#6b7c68", display: "block" }}>Ladies</span><span style={{ fontSize: 14, color: "#1a2218", fontWeight: 500 }}>{h.ladiesYards} yds</span></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/scorecard" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a3a2a", color: "#f5f0e8", padding: "14px 28px", borderRadius: 2, fontSize: 15, textDecoration: "none" }}>
              Open Interactive Scorecard →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
