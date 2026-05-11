import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History",
  description: "The history of Ashfield Golf Club, South Armagh — from its opening by Fred Daly MBE in 1990 to becoming one of the most loved parkland golf courses in Northern Ireland.",
};

export default function AboutPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Est. 1990</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Our <em style={{ color: "#c9a84c" }}>History</em>
          </h1>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#1a3a2a", marginBottom: "1.25rem" }}>The Founding of Ashfield</h2>
              <p style={{ fontSize: 15, color: "#3d4f3a", lineHeight: 1.8, marginBottom: "1rem" }}>
                Ashfield Golf Club was officially opened by championship golfer <strong>Fred Daly MBE</strong> on Friday 28th September 1990, after over two years of work designing the layout by Frank Ainsworth of Malone Golf Club, Belfast.
              </p>
              <p style={{ fontSize: 15, color: "#3d4f3a", lineHeight: 1.8, marginBottom: "1rem" }}>
                The land was converted from an arable farming set-up by James and Elizabeth Quinn, whose vision brought a golf course to the heart of South Armagh.
              </p>
              <p style={{ fontSize: 15, color: "#3d4f3a", lineHeight: 1.8 }}>
                The club became GUI affiliated in 1992 and has maintained that affiliation ever since.
              </p>
            </div>
            <div style={{ background: "#2d5a3f", height: 280, borderRadius: 2, overflow: "hidden" }}>
              <img src="/images/entrance-stone.jpg" alt="Ashfield Golf Course entrance" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
            </div>
          </div>
          <div style={{ background: "#1a3a2a", padding: "2.5rem", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#c9a84c", marginBottom: "1rem" }}>Growth and Development</h2>
            <p style={{ fontSize: 15, color: "rgba(245,240,232,0.8)", lineHeight: 1.8 }}>
              The course has seen continuous improvement over the years — thousands of trees planted, new lakes added, maturing greens, and larger tee boxes, all aimed at enhancing the challenge and enjoyment for every golfer who visits Ashfield.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
