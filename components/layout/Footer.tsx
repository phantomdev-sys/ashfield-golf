"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { COURSE_INFO } from "@/lib/data";

const FOOTER_LINKS = {
  "The Course": [
    { label: "Course Overview",       href: "/course" },
    { label: "Interactive Scorecard", href: "/scorecard" },
    { label: "Local Rules",           href: "/course#rules" },
  ],
  "Visitors": [
    { label: "Green Fees",            href: "/visitors#greenfees" },
    { label: "Society Packages",      href: "/visitors#societies" },
    { label: "Contact & Booking",     href: "/contact" },
  ],
  "Members": [
    { label: "Membership Rates",      href: "/membership" },
    { label: "Competitions",          href: "/competitions" },
    { label: "Club News",             href: "/news" },
  ],
  "The Club": [
    { label: "Our History",           href: "/about" },
    { label: "Photo Gallery",         href: "/gallery" },
    { label: "Contact Us",            href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div style={{ background: "#0f2318", padding: "3rem 1.25rem 2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <img src="/images/logo.webp" alt="Ashfield Golf Club" style={{ width: 44, height: 44, objectFit: "contain" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#c9a84c", display: "block" }}>Ashfield Golf Club</span>
              <span style={{ fontSize: 11, color: "rgba(245,240,232,0.45)", letterSpacing: "1px", textTransform: "uppercase" }}>Est. 1990 · South Armagh</span>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <a href={`tel:${COURSE_INFO.phone.replace(/\s/g,"")}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.6)", fontSize: 13, textDecoration: "none" }}>
              <Phone size={13} style={{ color: "#c9a84c" }} />{COURSE_INFO.phone}
            </a>
            <a href={`mailto:${COURSE_INFO.emailGeneral}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.6)", fontSize: 13, textDecoration: "none" }}>
              <Mail size={13} style={{ color: "#c9a84c" }} />{COURSE_INFO.emailGeneral}
            </a>
            <span style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(245,240,232,0.6)", fontSize: 13 }}>
              <MapPin size={13} style={{ color: "#c9a84c", marginTop: 1, flexShrink: 0 }} />{COURSE_INFO.address}
            </span>
            <a href={COURSE_INFO.facebook} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.6)", fontSize: 13, textDecoration: "none" }}>
              <ExternalLink size={13} style={{ color: "#c9a84c" }} />Facebook
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem", fontWeight: 500 }}>{heading}</h4>
                {links.map((l) => (
                  <Link key={l.href} href={l.href} style={{ display: "block", color: "rgba(245,240,232,0.5)", fontSize: 13, textDecoration: "none", marginBottom: "0.4rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.25)" }}>GUI Affiliated · ILGU Affiliated · Designed by Frank Ainsworth · Opened by Fred Daly MBE, 28 September 1990</p>
        </div>
      </div>

      <div style={{ background: "#091710", padding: "0.875rem 1.25rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ fontSize: 12, color: "rgba(245,240,232,0.25)" }}>© {new Date().getFullYear()} Ashfield Golf Club. All rights reserved.</span>
        <span style={{ fontSize: 12, color: "rgba(245,240,232,0.2)" }}>Prices are indicative — contact the club for current rates.</span>
      </div>
    </footer>
  );
}