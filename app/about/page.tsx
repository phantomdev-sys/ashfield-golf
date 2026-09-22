import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Our History",
  description: "The history of Ashfield Golf Club, South Armagh — from its opening by Fred Daly MBE in 1990 to becoming one of the most loved parkland golf courses in Northern Ireland.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/course/sunset-over-the-course.webp"
        scrim="linear-gradient(100deg, rgba(26,58,42,0.72) 0%, rgba(26,58,42,0.77) 47%, rgba(26,58,42,0.15) 100%)"
        eyebrow="Est. 1990"
        title={<>Our <em style={{ color: "#c9a84c" }}>History</em></>}
      />
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
              <img src="/images/course/ashfield-boulder-entrance.webp"
                alt="The engraved Ashfield Golf Course entrance stone, with the course beyond"
                width={1600} height={800} loading="lazy" decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
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
