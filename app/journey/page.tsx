"use client";

import { useState } from "react";
import { portfolioGallery, certifications } from "../data/cv";

// All gallery items combined — places + certs
const ALL_ITEMS = [
  ...portfolioGallery.map((g) => ({ id: g.id, img: g.img, title: g.title, cat: g.category })),
  ...certifications.map((c) => ({ id: c.id, img: c.img, title: "Certificate", cat: "Certification" })),
];

const CATEGORIES = ["All", ...Array.from(new Set(ALL_ITEMS.map((i) => i.cat)))];

function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <div className="gallery-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <button className="gallery-lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={title}
        className="gallery-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="gallery-lightbox-caption">{title}</p>
    </div>
  );
}

export default function JourneyPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const filtered = active === "All" ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.cat === active);

  return (
    <div className="page-shell">
      <div className="page-wrap-gallery">
        <div className="gallery-header">
          <h1 className="page-title">Journey</h1>
          <p className="gallery-subtitle">Places, communities, and certifications along the way.</p>
        </div>

        {/* Filter tabs */}
        <div className="gallery-filters" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`gallery-filter-btn ${active === cat ? "gallery-filter-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid">
          {filtered.map((item) => (
            <button
              key={item.id}
              className="gallery-item"
              onClick={() => setLightbox({ src: item.img, title: item.title })}
              aria-label={`View ${item.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.title} className="gallery-item-img" />
              <div className="gallery-item-overlay">
                <span className="gallery-item-cat">{item.cat}</span>
                <span className="gallery-item-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
