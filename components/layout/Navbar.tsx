"use client";
import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ExternalLink, ChevronDown } from "lucide-react";
import { COURSE_INFO, NAV_LINKS, type NavChild } from "@/lib/data";

const BOOKING_LABEL = "Book a Tee Time (opens in a new tab)";
const GOLD = "#c9a84c";
const DIM = "rgba(245,240,232,0.75)";
const DIM_DRAWER = "rgba(245,240,232,0.85)";
const CLUB_MENU_ID = "agc-club-menu";
const DRAWER_ID = "agc-mobile-drawer";
const HOVER_CLOSE_MS = 150;

// Mount check without setState-in-effect: returns false during SSR and on the
// hydration pass, true thereafter, so createPortal never runs on the server.
const emptySubscribe = () => () => {};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [clubOpen, setClubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const clubWrapRef = useRef<HTMLDivElement | null>(null);
  const clubBtnRef = useRef<HTMLButtonElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const wasOpen = useRef(false);

  // /membership also lights up on /membership/apply; /course does not match
  // /course-development because the separator check requires a trailing slash.
  const isActive = useCallback(
    (href: string) => pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );
  const groupActive = (children: NavChild[]) => children.some((c) => isActive(c.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus on route change. Adjusting state during render (rather
  // than in an effect) is React's documented pattern here: it settles before
  // paint, so the drawer never flashes on the new route.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setClubOpen(false);
  }

  // Escape closes the drawer wherever focus sits; the dropdown handles its own
  // Escape so it can hand focus back to the button that opened it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus into the drawer on open, back to the hamburger on close.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      drawerRef.current?.querySelector<HTMLElement>("button, a[href]")?.focus();
    } else if (wasOpen.current) {
      wasOpen.current = false;
      hamburgerRef.current?.focus();
    }
  }, [open]);

  // Click outside closes the desktop dropdown.
  useEffect(() => {
    if (!clubOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!clubWrapRef.current?.contains(e.target as Node)) setClubOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [clubOpen]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  // Small delay so a diagonal mouse path to the panel doesn't snap it shut.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setClubOpen(false), HOVER_CLOSE_MS);
  };

  const closeClub = (returnFocus: boolean) => {
    cancelClose();
    setClubOpen(false);
    if (returnFocus) clubBtnRef.current?.focus();
  };

  const hoverColor = (rest: string) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = GOLD;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = rest;
    },
  });

  // Keep Tab cycling inside the drawer while it is open.
  const trapTab = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const nodes = drawerRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
    if (!nodes || nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const navLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    fontSize: 12,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    transition: "color 0.2s",
    whiteSpace: "nowrap",
  };

  return (
    <>
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
          {NAV_LINKS.map((item) => {
            if (item.children) {
              const active = groupActive(item.children);
              const rest = active ? GOLD : DIM;
              return (
                <div
                  key={item.label}
                  ref={clubWrapRef}
                  // Stretching to the full bar height keeps the hover path to
                  // the panel unbroken.
                  style={{ position: "relative", display: "flex", alignItems: "center", alignSelf: "stretch" }}
                  onMouseEnter={() => { cancelClose(); setClubOpen(true); }}
                  onMouseLeave={scheduleClose}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) closeClub(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape" && clubOpen) {
                      e.stopPropagation();
                      closeClub(true);
                    }
                  }}
                >
                  <button
                    ref={clubBtnRef}
                    type="button"
                    aria-expanded={clubOpen}
                    aria-controls={CLUB_MENU_ID}
                    onClick={() => (clubOpen ? closeClub(false) : (cancelClose(), setClubOpen(true)))}
                    style={{
                      ...navLinkStyle,
                      display: "flex", alignItems: "center", gap: 4,
                      background: "none", border: "none", padding: 0, cursor: "pointer",
                      fontFamily: "inherit", color: rest,
                    }}
                    {...hoverColor(rest)}
                  >
                    {item.label}
                    <ChevronDown size={14} aria-hidden="true"
                      style={{ transform: clubOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>

                  <div
                    id={CLUB_MENU_ID}
                    hidden={!clubOpen}
                    style={{
                      position: "absolute", top: "100%", left: -14, minWidth: 210,
                      background: "#1a3a2a",
                      border: "1px solid rgba(201,168,76,0.25)",
                      borderRadius: 2,
                      boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
                      padding: "6px 0",
                    }}
                  >
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);
                      const childRest = childActive ? GOLD : "rgba(245,240,232,0.8)";
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          onClick={() => closeClub(false)}
                          style={{
                            ...navLinkStyle,
                            display: "block", padding: "9px 18px", color: childRest,
                          }}
                          {...hoverColor(childRest)}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const active = isActive(item.href!);
            const rest = active ? GOLD : DIM;
            return (
              <Link key={item.href} href={item.href!} aria-current={active ? "page" : undefined}
                style={{ ...navLinkStyle, color: rest }} {...hoverColor(rest)}>
                {item.label}
              </Link>
            );
          })}
          <a href={COURSE_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={BOOKING_LABEL}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "#c9a84c", color: "#1a3a2a", padding: "8px 14px", borderRadius: 2, fontSize: 12, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
            Book a Tee Time <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        <button ref={hamburgerRef} onClick={() => setOpen(true)}
          aria-label="Open menu" aria-expanded={open} aria-controls={DRAWER_ID}
          style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", padding: 4, display: "none" }} className="agc-mobile-toggle">
          <Menu size={24} aria-hidden="true" />
        </button>
      </nav>

      <style>{`
        /* Grouping five links under "The Club" cuts the desktop bar from
           ~1264px to ~945px of required width, so it now fits from 1024px.
           Was 1279px. */
        @media (max-width: 1023px) {
          .agc-desktop-nav { display: none !important; }
          .agc-mobile-toggle { display: flex !important; }
        }
        /* visibility is transitioned with a delay so the drawer stays out of
           the tab order when closed, without cutting the slide short. */
        .agc-drawer { transition: transform 250ms ease, visibility 0s linear 250ms; }
        .agc-drawer[data-open="true"] { transition: transform 250ms ease, visibility 0s linear 0s; }
        .agc-overlay { transition: opacity 250ms ease, visibility 0s linear 250ms; }
        .agc-overlay[data-open="true"] { transition: opacity 250ms ease, visibility 0s linear 0s; }
        @media (prefers-reduced-motion: reduce) {
          .agc-drawer, .agc-drawer[data-open="true"],
          .agc-overlay, .agc-overlay[data-open="true"] { transition: none !important; }
        }
      `}</style>
    </header>

    {/* The header gets backdrop-filter when scrolled, which makes it the
        containing block for any position:fixed descendant -- that clipped the
        drawer and overlay to the 64px bar. Portalling them to <body> keeps
        them viewport-sized while the header keeps its blur. */}
    {mounted &&
      createPortal(
        <>
          <div className="agc-overlay" data-open={open} aria-hidden="true" onClick={() => setOpen(false)}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 110,
              opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden",
            }} />

          <div
            ref={drawerRef}
            id={DRAWER_ID}
            className="agc-drawer"
            data-open={open}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onKeyDown={trapTab}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0, width: "min(400px, 100vw)",
              background: "#1a3a2a", zIndex: 120,
              borderLeft: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "-14px 0 34px rgba(0,0,0,0.4)",
              display: "flex", flexDirection: "column",
              transform: open ? "translateX(0)" : "translateX(100%)",
              visibility: open ? "visible" : "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem", height: 64, borderBottom: "1px solid rgba(201,168,76,0.2)", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#c9a84c" }}>Menu</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu"
                style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", padding: 4, display: "flex" }}>
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "0.5rem 1.25rem 1rem" }}>
              {NAV_LINKS.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} style={{ padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ display: "block", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.35rem" }}>
                        {item.label}
                      </span>
                      {item.children.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <Link key={child.href} href={child.href} onClick={() => setOpen(false)}
                            aria-current={childActive ? "page" : undefined}
                            style={{
                              display: "block", paddingLeft: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem",
                              color: childActive ? GOLD : DIM_DRAWER, textDecoration: "none", fontSize: 15,
                              fontFamily: "'Playfair Display', serif",
                            }}>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  );
                }
                const active = isActive(item.href!);
                return (
                  <Link key={item.href} href={item.href!} onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{
                      display: "block", color: active ? GOLD : DIM_DRAWER, textDecoration: "none",
                      padding: "0.85rem 0", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.06)",
                      fontFamily: "'Playfair Display', serif",
                    }}>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div style={{ padding: "1rem 1.25rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
              <a href={COURSE_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={BOOKING_LABEL} onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#c9a84c", color: "#1a3a2a", padding: "13px 20px", borderRadius: 2, fontWeight: 500, textDecoration: "none", fontSize: 15 }}>
                Book a Tee Time <ExternalLink size={16} aria-hidden="true" />
              </a>
              <a href={`tel:${COURSE_INFO.phone.replace(/\s/g, "")}`} onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1px solid rgba(201,168,76,0.5)", color: "#c9a84c", padding: "12px 20px", borderRadius: 2, marginTop: "0.6rem", fontWeight: 500, textDecoration: "none", fontSize: 15 }}>
                <Phone size={16} aria-hidden="true" /> Call the club
              </a>
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  );
}
