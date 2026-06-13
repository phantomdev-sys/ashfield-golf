import type { Metadata } from "next";
import SponsorsGrid from "@/components/sections/SponsorsGrid";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description: "Ashfield Golf Club is proud to be supported by local businesses including ASEE Group and Corlatt Construction Services Ltd. Thank you for your support.",
};

export default function SponsorsPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Support</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Our <em style={{ color: "#c9a84c" }}>Sponsors</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,240,232,0.7)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            Ashfield Golf Club is proud to be supported by the following local businesses. Thank you for your support.
          </p>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SponsorsGrid />
        </div>
      </div>
    </>
  );
}
