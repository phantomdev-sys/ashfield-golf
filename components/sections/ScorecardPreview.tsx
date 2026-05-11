"use client";
import Link from "next/link";
import { HOLES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function ScorecardPreview() {
  const preview = HOLES.slice(0, 9);
  return (
    <section style={{ background: "#1a3a2a", padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.07)" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>The Course</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 38px)", color: "#f5f0e8", margin: "0.5rem 0 1rem", lineHeight: 1.2 }}>
              18 Holes, 18 <em style={{ color: "#c9a84c" }}>Stories</em>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, marginBottom: "1.5rem", fontWeight: 300 }}>
              Each hole at Ashfield carries a name rooted in the land — from Fáilte (Welcome) on the first tee to Slán Abhaile (Safe Home) on the 18th green. Our interactive scorecard lets you track your round in real time, calculating stableford points and net scores on the fly.
            </p>
            <Link href="/scorecard" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#c9a84c", color: "#1a3a2a", padding: "12px 24px",
              borderRadius: 2, fontWeight: 500, fontSize: 14, textDecoration: "none",
            }}>
              Open Scorecard <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {["Hole","Name","Yards","Par","SI"].map(h => (
                    <th key={h} style={{ padding: "9px 10px", fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", color: "#c9a84c", background: "rgba(201,168,76,0.1)", textAlign: h === "Name" ? "left" : "center", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.map((h) => (
                  <tr key={h.hole} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "9px 10px", color: "#c9a84c", fontWeight: 500, textAlign: "center" }}>{h.hole}</td>
                    <td style={{ padding: "9px 10px", color: "rgba(245,240,232,0.9)", fontStyle: "italic" }}>{h.name}</td>
                    <td style={{ padding: "9px 10px", color: "rgba(245,240,232,0.7)", textAlign: "center" }}>{h.gentsYards}</td>
                    <td style={{ padding: "9px 10px", color: "rgba(245,240,232,0.7)", textAlign: "center" }}>{h.par}</td>
                    <td style={{ padding: "9px 10px", color: "rgba(245,240,232,0.7)", textAlign: "center" }}>{h.si}</td>
                  </tr>
                ))}
                <tr style={{ background: "rgba(201,168,76,0.1)", borderTop: "2px solid rgba(201,168,76,0.3)" }}>
                  <td colSpan={2} style={{ padding: "9px 10px", color: "#c9a84c", fontWeight: 500, textAlign: "center" }}>OUT</td>
                  <td style={{ padding: "9px 10px", color: "#c9a84c", fontWeight: 500, textAlign: "center" }}>2,666</td>
                  <td style={{ padding: "9px 10px", color: "#c9a84c", fontWeight: 500, textAlign: "center" }}>34</td>
                  <td style={{ padding: "9px 10px", color: "#c9a84c", textAlign: "center" }}>—</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: "0.75rem", fontSize: 12, color: "rgba(245,240,232,0.35)", textAlign: "right" }}>Holes 10–18 on full scorecard →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
