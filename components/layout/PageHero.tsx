import type { ReactNode } from "react";

interface PageHeroProps {
  /** Pre-cropped 2:1 WebP from /images/course. The crop is the design, so
      object-position stays centred. */
  image: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional CTAs rendered under the intro. */
  children?: ReactNode;
  /** Heroes sit behind the title, so they are decorative by default. */
  alt?: string;
  /** Per-image scrim gradient. Defaults to a conservative ramp; each page
      passes the lightest ramp measured for its own photo. */
  scrim?: string;
}

// The photo renders at full opacity; only this scrim sits on top of it.
// Each page passes a ramp solved against its own pixels: the lightest
// 0%->47% gradient that still clears WCAG AA for every column in the text
// zone, measured against that column's 95th-percentile brightest pixel --
// eyebrow (cream @85%) 4.5:1, intro (cream @78%) 4.5:1, cream title 4.5:1,
// and the gold title word 3:1 as large text. The eyebrow is cream rather
// than gold precisely so the ramp can stay light; gold's luminance would
// force the left side almost opaque. The right edge stays at 0.15 so the
// photograph reads rather than washing into flat green.
export const HERO_EYEBROW_COLOR = "rgba(245,240,232,0.85)";
export const HERO_SCRIM_DEFAULT =
  "linear-gradient(100deg, rgba(26,58,42,0.76) 0%, rgba(26,58,42,0.80) 47%, rgba(26,58,42,0.15) 100%)";

export default function PageHero({ image, eyebrow, title, intro, children, alt = "", scrim = HERO_SCRIM_DEFAULT }: PageHeroProps) {
  return (
    <section
      className="agc-page-hero"
      style={{
        position: "relative",
        background: "#1a3a2a",
        marginTop: 64,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={alt}
        width={2400}
        height={1200}
        fetchPriority="high"
        decoding="async"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: scrim }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "2rem", width: "100%" }}>
        <div style={{ maxWidth: 600 }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: HERO_EYEBROW_COLOR, fontWeight: 500 }}>
            {eyebrow}
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            {title}
          </h1>
          {intro && (
            <p style={{ fontSize: 16, color: "rgba(245,240,232,0.78)", lineHeight: 1.7, maxWidth: 560, fontWeight: 300, margin: 0 }}>
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>

      <style>{`
        .agc-page-hero { height: 56vh; min-height: 340px; max-height: 560px; }
        @media (max-width: 1023px) {
          .agc-page-hero { height: 42vh; min-height: 300px; }
        }
      `}</style>
    </section>
  );
}
