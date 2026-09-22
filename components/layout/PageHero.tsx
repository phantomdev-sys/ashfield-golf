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
}

// Scrim verified for WCAG AA against a worst-case white-sky photo:
// photo at 0.55 over #1a3a2a, then this gradient. Across the text column
// (left ~47%) the scrim never drops below 0.90, giving cream title 9.33:1,
// gold eyebrow 4.63:1 and the 78% intro 5.29:1.
export const HERO_SCRIM =
  "linear-gradient(100deg, rgba(26,58,42,0.96) 0%, rgba(26,58,42,0.90) 55%, rgba(26,58,42,0.28) 100%)";
export const HERO_PHOTO_OPACITY = 0.55;

export default function PageHero({ image, eyebrow, title, intro, children, alt = "" }: PageHeroProps) {
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
          opacity: HERO_PHOTO_OPACITY,
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: HERO_SCRIM }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "2rem", width: "100%" }}>
        <div style={{ maxWidth: 600 }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>
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
