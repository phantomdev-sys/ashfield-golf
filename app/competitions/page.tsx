import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitions",
  description: "Ashfield Golf Club competitions — weekly stableford and stroke play, the Fred Daly matchplay, and inter-club competitions throughout the season.",
};

export default function CompetitionsPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Members</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Competitions & <em style={{ color: "#c9a84c" }}>Events</em>
          </h1>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
            {[
              { title: "Weekend Competitions", body: "Stroke play, stableford, and four ball better ball events run every weekend throughout the year across three divisions." },
              { title: "Wednesday Evenings", body: "9-hole competitions run every Wednesday evening from April to September — a great evening round after work." },
              { title: "Fred Daly Matchplay", body: "The prestigious Fred Daly Singles and Doubles Matchplay is a highlight of the Ashfield competitive calendar each year." },
              { title: "Inter-Club", body: "Ashfield competes in a number of inter-club competitions through the season, representing the club across the region." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", padding: "1.75rem", borderRadius: 2 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#1a3a2a", padding: "2rem", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#c9a84c", marginBottom: "0.75rem" }}>Latest Results</h2>
            <p style={{ fontSize: 14, color: "rgba(245,240,232,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>Results are posted on our Facebook page and the clubhouse notice board.</p>
            <a href="https://www.facebook.com/ashfieldgolfcourse" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c", textDecoration: "none", fontSize: 14 }}>View on Facebook →</a>
          </div>
        </div>
      </div>
    </>
  );
}
