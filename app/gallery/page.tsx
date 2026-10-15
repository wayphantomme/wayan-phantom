"use client";

import { useState } from "react";
import { portfolioGallery, certifications } from "../data/cv";

const CATEGORIES = ["All", ...Array.from(new Set(portfolioGallery.map((g) => g.category)))];

function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <div className="gallery-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <button className="gallery-lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={title} className="gallery-lightbox-img" onClick={(e) => e.stopPropagation()} />
      <p className="gallery-lightbox-caption">{title}</p>
    </div>
  );
}

export default function JourneyPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const filtered = active === "All"
    ? portfolioGallery
    : portfolioGallery.filter((g) => g.category === active);

  return (
    <div className="page-shell">
      <div className="page-wrap-gallery">

        {/* Places & Communities */}
        <div className="gallery-header">
          <h1 className="page-title">Gallery</h1>
          <p className="gallery-subtitle">Places and communities along the way.</p>
        </div>

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
                <span className="gallery-item-cat">{item.category}</span>
                <span className="gallery-item-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Certifications */}
        <div className="gallery-cert-section">
          <h2 className="gallery-cert-title">🎓 Certifications</h2>
          <div className="gallery-grid">
            {certifications.map((c) => (
              <button
                key={c.id}
                className="gallery-item"
                onClick={() => setLightbox({ src: c.img, title: "Certificate" })}
                aria-label="View certificate"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="Certificate" className="gallery-item-img" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-cat">Certification</span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} title={lightbox.title} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}
