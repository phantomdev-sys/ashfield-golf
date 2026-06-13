"use client";

export default function GalleryStrip() {
  const images = [
    { src: "/images/aerial-main.jpeg", alt: "Ashfield Golf Course aerial view" },
    // Portrait photo (two club officials shaking hands) in a landscape tile —
    // bias object-position upward so heads/faces aren't cropped by object-fit: cover.
    { src: "/images/tee-golden.jpg", alt: "Club officials at Ashfield Golf Club", objectPosition: "center 20%" },
    { src: "/images/lake-hazard.jpg", alt: "Water hazard at Ashfield" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 4, height: "min(280px, 40vw)" }}>
      {images.map((img, i) => (
        <div key={i} style={{ overflow: "hidden", background: "#2d5a3f", position: "relative" }}>
          <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.objectPosition, opacity: 0.85, transition: "opacity 0.3s, transform 0.4s" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLImageElement; el.style.opacity = "1"; el.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLImageElement; el.style.opacity = "0.85"; el.style.transform = "scale(1)"; }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
        </div>
      ))}
    </div>
  );
}