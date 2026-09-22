import type { Metadata } from "next";
import { COURSE_INFO, GREEN_FEES } from "@/lib/data";
import { ExternalLink, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Visitors",
  description: "Visit Ashfield Golf Club, South Armagh. Green fees and society packages for one of Northern Ireland's most welcoming parkland golf courses near Newry.",
};

export default function VisitorsPage() {
  return (
    <>
      <PageHero
        image="/images/course/oak-framed-fairway-evening.webp"
        scrim="linear-gradient(100deg, rgba(26,58,42,0.42) 0%, rgba(26,58,42,0.98) 47%, rgba(26,58,42,0.15) 100%)"
        eyebrow="Welcome"
        title={<>Visitors to <em style={{ color: "#c9a84c" }}>Ashfield</em></>}
        intro={<>You don&apos;t need to be a member to play. Walk-ins welcome, and our society packages offer outstanding value.</>}
      >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}>
            <a href={COURSE_INFO.bookingUrl} target="_blank" rel="noopener noreferrer"
              aria-label="Book a Tee Time (opens in a new tab)"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "13px 24px", borderRadius: 2, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
              Book a Tee Time <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a href={`tel:${COURSE_INFO.phone.replace(/\s/g, "")}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(201,168,76,0.5)", color: "#c9a84c", padding: "12px 24px", borderRadius: 2, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
              <Phone size={14} aria-hidden="true" /> Call to Book
            </a>
          </div>
      </PageHero>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* scrollMarginTop clears the fixed 64px navbar when linked to via #greenfees */}
          <h2 id="greenfees" style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#1a3a2a", marginBottom: "2rem", scrollMarginTop: 88 }}>Green Fees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {GREEN_FEES.map((f) => (
              <div key={f.type} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid " + (f.featured ? "#c9a84c" : "#4a8c62"), padding: "2rem", borderRadius: 2, textAlign: "center" }}>
                <p style={{ fontSize: 13, color: "#6b7c68", marginBottom: "0.75rem" }}>{f.type}</p>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: "#1a3a2a", lineHeight: 1 }}>{f.price}</div>
                <p style={{ fontSize: 12, color: "#6b7c68", marginTop: "0.5rem" }}>{f.note}</p>
              </div>
            ))}
          </div>
          <div id="societies" style={{ background: "#1a3a2a", padding: "2.5rem", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#c9a84c", marginBottom: "1rem" }}>Society Packages</h2>
            <p style={{ fontSize: 15, color: "rgba(245,240,232,0.8)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Ashfield is a popular venue for golfing societies. We guarantee a great welcome, a fine golf course, tasty food, and excellent value. Pre-booking is essential.
            </p>
            <a href="tel:02830868180" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "12px 24px", borderRadius: 2, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
              Call to Book
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
