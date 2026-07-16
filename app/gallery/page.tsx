import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "A gallery of photographs from Ashfield Golf Club — the course, the clubhouse and life around the club.",
};

// Server Component: read the gallery folder at render time and pass the
// resulting web paths to the client grid.
function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public/images/gallery");
  return fs
    .readdirSync(dir)
    .filter((file) => file.toLowerCase().endsWith(".jpg"))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Photography</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0" }}>
            Photo <em style={{ color: "#c9a84c" }}>Gallery</em>
          </h1>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <GalleryGrid images={images} />
        </div>
      </div>
    </>
  );
}
