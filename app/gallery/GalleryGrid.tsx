"use client";

import { useEffect, useRef, useState } from "react";

// Site palette
const FOREST = "#1a3a2a";
const CREAM = "#f5f0e8";
const GOLD = "#c9a84c";

export default function GalleryGrid({ images }: { images: string[] }) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Fade-in-on-scroll: reveal each item the first time it enters the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [images]);

  // Lightbox: close on Esc, lock body scroll while open.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <>
      <style>{`
        .ag-gallery-grid {
          columns: 4 220px;
          column-gap: 10px;
        }
        @media (max-width: 640px) {
          .ag-gallery-grid { columns: 2 auto; }
        }
        .ag-item {
          break-inside: avoid;
          margin-bottom: 10px;
          overflow: hidden;
          border-radius: 2px;
          background: ${FOREST};
          cursor: pointer;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ag-item.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .ag-img {
          width: 100%;
          display: block;
          transition: transform 0.4s ease;
        }
        .ag-item:hover .ag-img {
          transform: scale(1.03);
        }
        @media (prefers-reduced-motion: reduce) {
          .ag-item { transition: opacity 0.3s ease; transform: none; }
          .ag-img, .ag-item:hover .ag-img { transition: none; transform: none; }
        }
      `}</style>

      <div className="ag-gallery-grid">
        {images.map((src, i) => (
          <div
            key={src}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className="ag-item"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            onClick={() => setLightbox(src)}
          >
            <img
              className="ag-img"
              src={src}
              alt={`Ashfield Golf Club photo ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(15,35,24,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "transparent",
              border: "none",
              color: CREAM,
              fontSize: 34,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt=""
            decoding="async"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: `0 8px 40px rgba(0,0,0,0.5)`,
              border: `1px solid ${GOLD}33`,
            }}
          />
        </div>
      )}
    </>
  );
}
