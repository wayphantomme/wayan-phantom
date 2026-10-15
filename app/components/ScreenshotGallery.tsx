"use client";

import { useState } from "react";

interface Props {
  mockups: string[];
  name: string;
}

export default function ScreenshotGallery({ mockups, name }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (mockups.length <= 1) return null;

  return (
    <>
      <div className="post-blog-gallery">
        <p className="post-blog-gallery-label">Screenshots</p>
        <div className="post-blog-gallery-grid">
          {mockups.map((m, i) => (
            <button
              key={i}
              className="post-gallery-btn"
              onClick={() => setLightbox(m)}
              aria-label={`View ${name} screenshot ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m} alt={`${name} ${i + 1}`} className="post-blog-gallery-img" />
              <span className="post-gallery-zoom">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-2 2l3 3" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="post-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
        >
          <button
            className="post-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt={name}
            className="post-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
