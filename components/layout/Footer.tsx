"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { COURSE_INFO } from "@/lib/data";

const FOOTER_LINKS = {
  "The Course": [
    { label: "Course Overview",  href: "/course" },
    { label: "Interactive Scorecard", href: "/scorecard" },
    { label: "Local Rules",      href: "/course#rules" },
    { label: "Course Map",       href: "/course#map" },
  ],
  "Visitors": [
    { label: "Green Fees",       href: "/visitors#greenfees" },
    { label: "Society Packages", href: "/visitors#societies" },
    { label: "Book a Round",     href: "/contact" },
    { label: "Getting Here",     href: "/contact#location" },
  ],
  "Members": [
    { label: "Membership Rates", href: "/membership" },
    { label: "Competitions",     href: "/competitions" },
    { label: "Results",          href: "/competitions#results" },
    { label: "Club News",        href: "/news" },
    { label: "Roll of Honour",   href: "/about#honour" },
  ],
  "The Club": [
    { label: "Our History",      href: "/about" },
    { label: "The Clubhouse",    href: "/about#clubhouse" },
    { label: "Junior Golf",      href: "/membership#juniors" },
    { label: "Photo Gallery",    href: "/gallery" },
    { label: "Contact Us",       href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <div style={{ background: "#0f2318", padding: "4rem 2rem 2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>

            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <img src="/images/logo.webp" alt="Ashfield Golf Club" style={{ width: 48, height: 48, objectFit: "contain" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#c9a84c", display: "block" }}>Ashfield</span>
                  <span style={{ fontSize: 11, color: "rgba(245,240,232,0.45)", letterSpacing: "1px", textTransform: "uppercase" }}>Golf Club · Est. 1990</span>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "rgba(245,240,232,0.5)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                A 5,606 yard par 69 parkland course in the heart of South Armagh. GUI affiliated since 1992. Visitors and societies always welcome.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href={`tel:${COURSE_INFO.phone.replace(/\s/g,"")}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.55)", fontSize: 13, textDecoration: "none" }}>
                  <Phone size={13} style={{ color: "#c9a84c" }} />
                  {COURSE_INFO.phone}
                </a>
                <a href={`mailto:${COURSE_INFO.emailGeneral}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.55)", fontSize: 13, textDecoration: "none" }}>
                  <Mail size={13} style={{ color: "#c9a84c" }} />
                  {COURSE_INFO.emailGeneral}
                </a>
                <span style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(245,240,232,0.55)", fontSize: 13 }}>
                  <MapPin size={13} style={{ color: "#c9a84c", marginTop: 2, flexShrink: 0 }} />
                  {COURSE_INFO.address}
                </span>
                <a href={COURSE_INFO.facebook} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.55)", fontSize: 13, textDecoration: "none", marginTop: "0.25rem" }}>
                  <ExternalLink size={13} style={{ color: "#c9a84c" }} />
                  Follow us on Facebook
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem", fontWeight: 500 }}>
                  {heading}
                </h4>
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{ display: "block", color: "rgba(245,240,232,0.5)", fontSize: 13, textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* GUI badge strip */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "rgba(245,240,232,0.3)", letterSpacing: "1px" }}>GUI AFFILIATED · ILGU AFFILIATED</span>
            <span style={{ fontSize: 12, color: "rgba(245,240,232,0.3)" }}>Designed by Frank Ainsworth · Opened by Fred Daly MBE, 28th September 1990</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ background: "#091710", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ fontSize: 12, color: "rgba(245,240,232,0.25)" }}>
          © {new Date().getFullYear()} Ashfield Golf Club. All rights reserved.
        </span>
        <span style={{ fontSize: 12, color: "rgba(245,240,232,0.25)" }}>
          Prices shown are indicative — please contact the club for current rates.
        </span>
      </div>
    </footer>
  );
}
