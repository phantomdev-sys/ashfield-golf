"use client";
import Link from "next/link";
import { Flag, Users, Trophy, GraduationCap, BadgeCheck, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Flag, title: "The Course", body: "18 characterful holes, each with an Irish name. Water hazards, bunkers, and tree-lined corridors make every round unique.", href: "/course" },
  { icon: Users, title: "Society Days", body: "A popular venue for golf societies across Ireland. Great value packages, a warm welcome, and fine food.", href: "/visitors#societies" },
  { icon: Trophy, title: "Competitions", body: "Weekend stroke and stableford, Wednesday evening 9-hole rounds, and the Fred Daly singles and doubles matchplay.", href: "/competitions" },
  { icon: GraduationCap, title: "Junior Golf", body: "Saturday morning coaching April to October with our club professional. Dedicated junior membership rates.", href: "/membership#juniors" },
  { icon: BadgeCheck, title: "GUI Affiliated", body: "Fully affiliated with the Golfing Union of Ireland and the Irish Ladies Golf Union since 1992.", href: "/membership" },
  { icon: MapPin, title: "Easy to Find", body: "Cregganduff Road, Newry, Co. Down. Approximately 1 hour from Dublin Airport and Belfast.", href: "/contact#location" },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: "4rem 1.25rem", background: "#f5f0e8" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ background: "#2d5a3f", borderLeft: "4px solid #c9a84c", padding: "1.5rem", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(13px, 2vw, 15px)", color: "rgba(245,240,232,0.85)", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
            Officially opened by <strong style={{ color: "#c9a84c", fontStyle: "normal" }}>Fred Daly MBE</strong> on 28th September 1990, Ashfield has grown into one of South Armagh's most beloved golfing destinations — offering a warm welcome to members, visitors, and societies alike.
          </p>
        </div>

        <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>Experience Ashfield</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 36px)", color: "#1a3a2a", margin: "0.5rem 0 0.75rem", lineHeight: 1.2 }}>
          A Course Built for <em style={{ color: "#c9a84c" }}>Every Golfer</em>
        </h2>
        <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#3d4f3a", lineHeight: 1.7, maxWidth: 580, marginBottom: "2.5rem", fontWeight: 300 }}>
          From the opening drive on Fáilte to the final approach of Slán Abhaile, every hole tells a story rooted in the landscape of South Armagh.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <Link key={f.title} href={f.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #4a8c62", padding: "1.5rem", borderRadius: 2, height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer" }}
                  onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(-4px)"; d.style.boxShadow = "0 8px 28px rgba(26,58,42,0.1)"; d.style.borderTopColor = "#c9a84c"; }}
                  onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(0)"; d.style.boxShadow = "none"; d.style.borderTopColor = "#4a8c62"; }}>
                  <div style={{ width: 40, height: 40, background: "#1a3a2a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={18} color="#c9a84c" />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: "#1a3a2a", marginBottom: "0.4rem" }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "#3d4f3a", lineHeight: 1.6 }}>{f.body}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}