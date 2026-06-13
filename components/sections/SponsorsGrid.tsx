"use client";
import { useState } from "react";
import { SPONSORS, type Sponsor } from "@/lib/data";

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const [imgFailed, setImgFailed] = useState(false);
  const dark = sponsor.theme === "dark";
  const showLogo = sponsor.logo && !imgFailed;

  return (
    <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderRadius: 6, boxShadow: "0 2px 12px rgba(26,58,42,0.08)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Themed logo well — same height for both cards, logo centered & contained */}
      <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 1.5rem", background: dark ? "#1a3a2a" : "#fff", borderBottom: "1px solid rgba(26,58,42,0.08)" }}>
        {showLogo ? (
          <img src={sponsor.logo} alt={`${sponsor.name} logo`} onError={() => setImgFailed(true)}
            style={{ maxHeight: sponsor.logoHeight, maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
        ) : (
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: dark ? "#f5f0e8" : "#1a3a2a", textAlign: "center" }}>{sponsor.name}</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flexGrow: 1 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", margin: 0 }}>{sponsor.name}</h3>
        <p style={{ fontSize: 14, color: "#6b7c68", margin: 0 }}>{sponsor.descriptor}</p>
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer"
          style={{ marginTop: "auto", paddingTop: "0.5rem", display: "inline-flex", alignItems: "center", gap: 6, color: "#c9a84c", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
          Visit website →
        </a>
      </div>
    </div>
  );
}

export default function SponsorsGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: 760, margin: "0 auto" }}>
      {SPONSORS.map((s) => (
        <SponsorCard key={s.name} sponsor={s} />
      ))}
    </div>
  );
}
