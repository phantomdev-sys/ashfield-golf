"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ExternalLink } from "lucide-react";
import { COURSE_INFO, NAV_LINKS } from "@/lib/data";

const BOOKING_LABEL = "Book a Tee Time (opens in a new tab)";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? "rgba(26,58,42,0.98)" : "#1a3a2a",
      borderBottom: "1px solid rgba(201,168,76,0.25)",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ width: 38, height: 38, flexShrink: 0 }}>
            <img src="/images/logo.webp" alt="Ashfield Golf Club" style={{ width: "100%", height: "100%", objectFit: "contain" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#c9a84c", display: "block", lineHeight: 1.1 }}>Ashfield</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(245,240,232,0.6)", letterSpacing: "1.5px", textTransform: "uppercase" }}>Golf Club · Est. 1990</span>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }} className="agc-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: "rgba(245,240,232,0.75)", textDecoration: "none", fontSize: 12, letterSpacing: "0.5px", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}>
              {link.label}
            </Link>
          ))}
          <a href={COURSE_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={BOOKING_LABEL}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "#c9a84c", color: "#1a3a2a", padding: "8px 14px", borderRadius: 2, fontSize: 12, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
            Book a Tee Time <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", padding: 4, display: "none" }} className="agc-mobile-toggle" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div style={{ background: "#1a3a2a", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "1rem 1.25rem 1.5rem" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "rgba(245,240,232,0.85)", textDecoration: "none", padding: "0.85rem 0", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Playfair Display', serif" }}>
              {link.label}
            </Link>
          ))}
          <a href={COURSE_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={BOOKING_LABEL} onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "13px 20px", borderRadius: 2, marginTop: "1rem", fontWeight: 500, textDecoration: "none", fontSize: 15 }}>
            Book a Tee Time <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a href={`tel:${COURSE_INFO.phone.replace(/\s/g, "")}`} onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1px solid rgba(201,168,76,0.5)", color: "#c9a84c", padding: "12px 20px", borderRadius: 2, marginTop: "0.6rem", fontWeight: 500, textDecoration: "none", fontSize: 15 }}>
            <Phone size={16} aria-hidden="true" /> Call the club
          </a>
        </div>
      )}

      <style>{`
        /* 10 links + logo + the booking CTA need the full 1240px content box,
           so the desktop bar only fits at the 1280px container width. Below
           that it overflowed: "The Course" wrapped into the logo and the CTA
           was pushed off-screen. The mobile panel carries both CTAs, so the
           booking link stays reachable at every width. Was 860px. */
        @media (max-width: 1279px) {
          .agc-desktop-nav { display: none !important; }
          .agc-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}