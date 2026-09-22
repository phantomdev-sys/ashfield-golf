import type { Metadata } from "next";
import InteractiveScorecard from "@/components/scorecard/InteractiveScorecard";
import { LOCAL_RULES } from "@/lib/data";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Interactive Scorecard",
  description: "Track your round at Ashfield Golf Club with our interactive scorecard. Calculates stableford points, gross and net totals hole by hole.",
};

export default function ScorecardPage() {
  return (
    <>
      <PageHero
        image="/images/course/elevated-tee-view.webp"
        eyebrow="Ashfield Golf Club"
        title={<>Interactive <em style={{ color: "#c9a84c" }}>Scorecard</em></>}
        intro={<>Select your tee, enter your handicap, and track your round hole by hole. Stableford points are calculated automatically.</>}
      />
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <InteractiveScorecard />
          <div style={{ marginTop: "3rem", background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", padding: "2rem", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1a3a2a", marginBottom: "1.25rem" }}>Local Rules</h2>
            {LOCAL_RULES.map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: i < LOCAL_RULES.length - 1 ? "1px solid rgba(26,58,42,0.08)" : "none" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#c9a84c", flexShrink: 0, width: 24 }}>{i + 1}</span>
                <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.65 }}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
