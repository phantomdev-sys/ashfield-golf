"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(26,58,42,0.98)" : "#1a3a2a",
        borderBottom: "1px solid rgba(201,168,76,0.25)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div style={{ width: 44, height: 44, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/images/logo.webp"
              alt="Ashfield Golf Club crest"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#c9a84c", display: "block", lineHeight: 1.1 }}>
              Ashfield
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.65)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Golf Club · Est. 1990
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(245,240,232,0.75)",
                textDecoration: "none",
                fontSize: 13,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:02830868180"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#c9a84c",
              color: "#1a3a2a",
              padding: "9px 18px",
              borderRadius: 2,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
          >
            <Phone size={14} />
            Book a Round
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", display: "none", padding: 4 }}
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          background: "#1a3a2a",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          padding: "1rem 2rem 2rem",
        }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "rgba(245,240,232,0.8)",
                textDecoration: "none",
                padding: "0.75rem 0",
                fontSize: 16,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:02830868180"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#c9a84c",
              color: "#1a3a2a",
              padding: "12px 20px",
              borderRadius: 2,
              marginTop: "1rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <Phone size={16} />
            028 30 868180
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
