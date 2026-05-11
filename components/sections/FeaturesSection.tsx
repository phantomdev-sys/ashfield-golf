"use client";
import Link from "next/link";
import { Flag, Users, Trophy, GraduationCap, BadgeCheck, MapPin } from "lucide-react";

const FEATURES = [
  {
    icon: Flag,
    title: "The Course",
    body: "18 characterful holes, each with an Irish name and a distinct challenge. Water hazards, bunkers, and tree-lined corridors make every round unique.",
    href: "/course",
  },
  {
    icon: Users,
    title: "Society Days",
    body: "A popular venue for golf societies across Ireland. Great value packages, a warm welcome, fine food, and a course worth talking about.",
    href: "/visitors#societies",
  },
  {
    icon: Trophy,
    title: "Competitions",
    body: "Weekend stroke and stableford competitions, Wednesday evening 9-hole rounds, and the Fred Daly singles and doubles matchplay.",
    href: "/competitions",
  },
  {
    icon: GraduationCap,
    title: "Junior Golf",
    body: "Juveniles are the future of the club. Saturday morning coaching April to October, with dedicated junior membership rates.",
    href: "/membership#juniors",
  },
  {
    icon: BadgeCheck,
    title: "GUI Affiliated",
    body: "Fully affiliated with the Golfing Union of Ireland and the Irish Ladies Golf Union. Official GUI handicaps available to all members.",
    href: "/membership",
  },
  {
    icon: MapPin,
    title: "Easy to Find",
    body: "Cregganduff Road, Newry, Co. Down. Approximately 1 hour from both Dublin Airport and Belfast — accessible from across Ireland.",
    href: "/contact#location",
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: "5rem 2rem", background: "#f5f0e8" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Welcome quote */}
        <div style={{
          background: "#2d5a3f",
          borderLeft: "4px solid #c9a84c",
          padding: "1.75rem 2rem",
          marginBottom: "4rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}>
          <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, color: "rgba(245,240,232,0.85)", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
            Officially opened by <strong style={{ color: "#c9a84c", fontStyle: "normal" }}>Fred Daly MBE</strong> on 28th September 1990, Ashfield has grown into one of South Armagh's most beloved golfing destinations — offering a warm welcome to members, visitors, and societies alike.
          </p>
        </div>

        {/* Section header */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>Experience Ashfield</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 36px)", color: "#1a3a2a", marginTop: "0.5rem", lineHeight: 1.2 }}>
            A Course Built for <em style={{ color: "#c9a84c" }}>Every Golfer</em>
          </h2>
          <p style={{ fontSize: 16, color: "#3d4f3a", lineHeight: 1.7, maxWidth: 580, marginTop: "0.75rem", fontWeight: 300 }}>
            From the opening drive on Fáilte to the final approach of Slán Abhaile, every hole at Ashfield tells a story rooted in the landscape of South Armagh.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.title}
                href={f.href}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: "#fff",
                  border: "1px solid rgba(26,58,42,0.1)",
                  borderTop: "3px solid #4a8c62",
                  padding: "1.75rem",
                  borderRadius: 2,
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(26,58,42,0.1)";
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "#4a8c62";
                }}
                >
                  <div style={{
                    width: 44, height: 44,
                    background: "#1a3a2a",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={20} color="#c9a84c" />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.65 }}>{f.body}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
