"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { num: "5,606", label: "Total Yards" },
  { num: "Par 69", label: "Course Par" },
  { num: "18",    label: "Holes" },
  { num: "1990",  label: "Est." },
];

export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", background: "#1a3a2a", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 64 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/aerial-main.jpeg')", backgroundSize: "cover", backgroundPosition: "center 45%", opacity: 0.4 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(26,58,42,0.95) 0%, rgba(26,58,42,0.65) 55%, rgba(26,58,42,0.15) 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "2rem 1.25rem 8rem", width: "100%" }}>
        <div style={{ maxWidth: 600 }}>
          <p style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem", fontWeight: 500 }}>
            South Armagh · Northern Ireland
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px, 6vw, 58px)", lineHeight: 1.1, color: "#f5f0e8", marginBottom: "1.25rem" }}>
            The Home of Golf<br />in <em style={{ color: "#c9a84c" }}>South Armagh</em>
          </h1>
          <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(245,240,232,0.78)", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300 }}>
            A 5,606 yard par 69 parkland course, GUI affiliated since 1992. Set in the heart of South Armagh — 1 hour from both Dublin and Belfast.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/visitors" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "13px 22px", borderRadius: 2, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
              Plan Your Visit <ArrowRight size={15} />
            </Link>
            <Link href="/course" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#f5f0e8", padding: "13px 22px", borderRadius: 2, border: "1px solid rgba(245,240,232,0.35)", fontSize: 14, textDecoration: "none" }}>
              Explore the Course
            </Link>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, display: "flex", flexWrap: "wrap" }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ background: "rgba(26,58,42,0.9)", backdropFilter: "blur(6px)", borderTop: "1px solid rgba(201,168,76,0.2)", borderRight: "1px solid rgba(201,168,76,0.15)", padding: "1rem 1.5rem", textAlign: "center", flex: "1 1 80px" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 3vw, 26px)", color: "#c9a84c", display: "block", lineHeight: 1.1 }}>{s.num}</span>
            <span style={{ fontSize: 10, color: "rgba(245,240,232,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}