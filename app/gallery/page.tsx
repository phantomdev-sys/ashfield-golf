"use client";

const IMAGES = [
  { src: "/images/aerial-main.jpeg", alt: "Aerial view of Ashfield Golf Course" },
  { src: "/images/aerial-clean.png", alt: "Ashfield Golf Course from the air" },
  { src: "/images/aerial-2.jpg", alt: "Tree-lined fairways from above" },
  { src: "/images/lake-hazard.jpg", alt: "Water hazard on the course" },
  { src: "/images/fairway-summer.jpg", alt: "Summer golf at Ashfield" },
  { src: "/images/tee-golden.jpg", alt: "Golfer on the tee box" },
  { src: "/images/entrance-stone.jpg", alt: "Ashfield Golf Course entrance" },
  { src: "/images/juniors-walking.jpg", alt: "Junior golfers on the course" },
  { src: "/images/clubhouse-group.jpg", alt: "Members outside the clubhouse" },
  { src: "/images/green-flag.jpg", alt: "Approach to the green" },
];

export default function GalleryPage() {
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
          <div style={{ columns: "3 260px", gap: "1rem" }}>
            {IMAGES.map((img, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "1rem", overflow: "hidden", borderRadius: 2, background: "#2d5a3f" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block", transition: "transform 0.3s" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).parentElement!.style.display = "none"; }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
