import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import GalleryGrid from "./GalleryGrid";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "A gallery of photographs from Ashfield Golf Club — the course, the clubhouse and life around the club.",
};

// Server Component: read the gallery folder at render time and pass the
// resulting web paths to the client grid.
// The 2026 professional set is named course-2026-* so it can lead the grid;
// everything else keeps its original gallery-NN ordering behind it.
const NEW_SET_PREFIX = "course-2026-";

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public/images/gallery");
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpg|webp)$/i.test(file))
    .sort((a, b) => {
      const aNew = a.startsWith(NEW_SET_PREFIX);
      const bNew = b.startsWith(NEW_SET_PREFIX);
      if (aNew !== bNew) return aNew ? -1 : 1;
      return a.localeCompare(b);
    })
    .map((file) => `/images/gallery/${file}`);
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHero
        image="/images/course/evening-fairway-trees.webp"
        scrim="linear-gradient(100deg, rgba(26,58,42,0.43) 0%, rgba(26,58,42,0.75) 47%, rgba(26,58,42,0.15) 100%)"
        eyebrow="Photography"
        title={<>Photo <em style={{ color: "#c9a84c" }}>Gallery</em></>}
        intro={<>The course through the seasons — fairways, greens and evening light at Ashfield.</>}
      />
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <GalleryGrid images={images} />
        </div>
      </div>
    </>
  );
}
