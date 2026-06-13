import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import ComingSoon from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Course Development",
  description: "Ashfield Golf Club is continually investing in the future of the course. Updates on course improvements and development projects in South Armagh will appear here.",
};

const HISTORY = [
  { label: "Est. 1990", text: "Over 35 years of continuous improvement" },
  { label: "Trees",     text: "Thousands of trees planted across the course" },
  { label: "Lakes",     text: "New lakes added to enhance the challenge" },
];

export default function CourseDevelopmentPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>The Course</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Course <em style={{ color: "#c9a84c" }}>Development</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            We are continually investing in the future of Ashfield Golf Club. Updates on course development projects will appear here.
          </p>
        </div>
      </div>
      <ComingSoon
        icon={<Sprout size={28} />}
        message="Ashfield has seen continuous improvement since opening in 1990 — thousands of trees planted, new lakes added, and maturing greens and tee boxes that enhance both the challenge and the enjoyment of the course. Details of current and upcoming development projects will appear here."
      >
        {/* History highlight — understated facts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", textAlign: "center" }}>
          {HISTORY.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "2px solid #c9a84c", borderRadius: 2, padding: "1.5rem 1rem" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#1a3a2a", marginBottom: "0.4rem" }}>{s.label}</div>
              <p style={{ fontSize: 13, color: "#6b7c68", lineHeight: 1.5, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </ComingSoon>
    </>
  );
}
