"use client";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { num: "5,606", label: "Total Yards" },
  { num: "Par 69", label: "Course Par" },
  { num: "18", label: "Holes" },
  { num: "1990", label: "Est." },
];

export default function HeroSection() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 620, background: "#1a3a2a", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 68 }}>

      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/aerial-main.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center 45%",
        opacity: 0.4,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(100deg, rgba(26,58,42,0.95) 0%, rgba(26,58,42,0.65) 55%, rgba(26,58,42,0.15) 100%)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div style={{ maxWidth: 620, animation: "fadeUp 0.9s ease both" }}>

          <p style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem", fontWeight: 500 }}>
            South Armagh · Northern Ireland
          </p>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1.1, color: "#f5f0e8", marginBottom: "1.25rem" }}>
            The Home of Golf<br />
            in <em style={{ color: "#c9a84c" }}>South Armagh</em>
          </h1>

          <p style={{ fontSize: 17, color: "rgba(245,240,232,0.78)", lineHeight: 1.7, marginBottom: "2.25rem", fontWeight: 300, maxWidth: 520 }}>
            A 5,606 yard par 69 parkland course, officially opened in 1990 and proudly GUI affiliated since 1992. Set in the heart of South Armagh — 1 hour from both Dublin and Belfast.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/visitors" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#c9a84c", color: "#1a3a2a",
              padding: "14px 28px", borderRadius: 2,
              fontWeight: 500, fontSize: 14, textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
            >
              Plan Your Visit <ArrowRight size={16} />
            </Link>
            <Link href="/course" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#f5f0e8",
              padding: "14px 28px", borderRadius: 2,
              border: "1px solid rgba(245,240,232,0.35)",
              fontSize: 14, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.35)"; e.currentTarget.style.color = "#f5f0e8"; }}
            >
              Explore the Course
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: "absolute", bottom: 0, right: 0, zIndex: 2, display: "flex" }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            background: "rgba(26,58,42,0.88)",
            backdropFilter: "blur(6px)",
            borderLeft: "1px solid rgba(201,168,76,0.2)",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            padding: "1.25rem 1.75rem",
            textAlign: "center",
            minWidth: 110,
          }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#c9a84c", display: "block", lineHeight: 1.1 }}>{s.num}</span>
            <span style={{ fontSize: 11, color: "rgba(245,240,232,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, animation: "fadeIn 1s 1s both", opacity: 0 }}>
        <ChevronDown size={24} color="rgba(201,168,76,0.6)" style={{ animation: "bounce 2s infinite" }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
