import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import ComingSoon from "@/components/sections/ComingSoon";
import PageHero from "@/components/layout/PageHero";

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
      <PageHero
        image="/images/course/sunset-through-trees.webp"
        scrim="linear-gradient(100deg, rgba(26,58,42,0.69) 0%, rgba(26,58,42,0.74) 47%, rgba(26,58,42,0.15) 100%)"
        eyebrow="The Course"
        title={<>Course <em style={{ color: "#c9a84c" }}>Development</em></>}
        intro={<>We are continually investing in the future of Ashfield Golf Club. Updates on course development projects will appear here.</>}
      />
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
