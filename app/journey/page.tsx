"use client";

import { useState } from "react";
import { portfolioGallery, hackathonWins, certifications } from "../data/cv";
import type { Metadata } from "next";

const PER_PAGE = 6;

function PlacesGallery() {
  const [page, setPage] = useState(0);
  const total = Math.ceil(portfolioGallery.length / PER_PAGE);
  const visible = portfolioGallery.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="cv-places-card">
      <div className="cv-portfolio-grid">
        {visible.map((item) => (
          <div key={item.id} className="cv-portfolio-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.title} className="cv-portfolio-img" />
            <div className="cv-portfolio-info">
              <span className="cv-portfolio-cat">{item.category}</span>
              <span className="cv-portfolio-title">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
      {total > 1 && (
        <div className="cv-places-nav">
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="cv-places-arrow" aria-label="Previous">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="cv-places-dots">
            {Array.from({ length: total }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} className={`cv-places-dot ${i === page ? "cv-places-dot-active" : ""}`} aria-label={`Page ${i + 1}`} />
            ))}
          </div>
          <span className="cv-places-counter">{page + 1} / {total}</span>
          <button onClick={() => setPage((p) => Math.min(total - 1, p + 1))} disabled={page === total - 1} className="cv-places-arrow" aria-label="Next">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function JourneyPage() {
  return (
    <div className="page-shell">
      <div className="page-wrap">
        <h1 className="page-title">Journey</h1>

        {/* Hackathons */}
        <section className="page-section">
          <h2 className="page-section-title">🏆 Hackathon Wins</h2>
          <ul className="cv-hackathon-list">
            {hackathonWins.map((win) => (
              <li key={win.id} className="cv-hackathon-item">
                <div className="cv-hackathon-icon" style={{ background: win.color + "22", color: win.color }}>
                  {win.icon}
                </div>
                <div className="cv-hackathon-info">
                  <p className="cv-hackathon-name">{win.name}</p>
                  {win.sub && <p className="cv-hackathon-sub">{win.sub}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section className="page-section">
          <h2 className="page-section-title">🌏 Places & Communities</h2>
          <PlacesGallery />
        </section>

        {/* Certifications */}
        <section className="page-section">
          <h2 className="page-section-title">🎓 Certifications</h2>
          <div className="journey-cert-grid">
            {certifications.map((c) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={c.id} src={c.img} alt="Certificate" className="journey-cert-img" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
