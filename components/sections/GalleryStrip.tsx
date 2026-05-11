"use client";
export default function GalleryStrip() {
  const images = [
    { src: "/images/aerial-main.jpeg", alt: "Ashfield Golf Course aerial view", span: 2 },
    { src: "/images/fairway-summer.jpg", alt: "Ashfield fairway in summer" },
    { src: "/images/lake-hazard.jpg", alt: "Water hazard at Ashfield" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 4, height: 300 }}>
      {images.map((img, i) => (
        <div key={i} style={{ overflow: "hidden", background: "#2d5a3f", position: "relative" }}>
          <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85, transition: "opacity 0.3s, transform 0.4s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.85"; (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </div>
      ))}
    </div>
  );
}
