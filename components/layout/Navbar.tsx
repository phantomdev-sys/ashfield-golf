"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "The Course",   href: "/course" },
  { label: "Visitors",     href: "/visitors" },
  { label: "Membership",   href: "/membership" },
  { label: "Competitions", href: "/competitions" },
  { label: "About",        href: "/about" },
  { label: "Gallery",      href: "/gallery" },
  { label: "Contact",      href: "/contact" },
];

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
          <a href="tel:02830868180" style={{ display: "flex", alignItems: "center", gap: 6, background: "#c9a84c", color: "#1a3a2a", padding: "8px 14px", borderRadius: 2, fontSize: 12, fontWeight: 500, textDecoration: "none" }}>
            <Phone size={13} /> Book a Round
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
          <a href="tel:02830868180" style={{ display: "flex", alignItems: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "13px 20px", borderRadius: 2, marginTop: "1rem", fontWeight: 500, textDecoration: "none", fontSize: 15 }}>
            <Phone size={16} /> 028 30 868180
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .agc-desktop-nav { display: none !important; }
          .agc-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}