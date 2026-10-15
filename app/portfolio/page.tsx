import { projects } from "../data/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Wayan Phantom",
  description: "Projects built by Wayan Phantom Megaditha — Web3, AI, fullstack.",
};

export default function PortfolioPage() {
  return (
    <div className="blog-page">
      <div className="blog-wrap">

        {/* Header */}
        <div className="blog-header">
          <Link href="/" className="blog-back">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Back
          </Link>
          <h1 className="blog-title">Works</h1>
          <p className="blog-subtitle">Things I have built — shipped products, client work, and experiments.</p>
        </div>

        {/* Post list */}
        <div className="blog-list">
          {projects.map((p) => (
            <Link key={p.id} href={`/portfolio/${p.id}`} className="blog-card">
              {/* Cover image */}
              {p.mockups[0] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.mockups[0]}
                  alt={p.name}
                  className="blog-card-cover"
                />
              )}

              <div className="blog-card-body">
                {/* Meta */}
                <div className="blog-card-meta">
                  <span className="blog-card-category">{p.category}</span>
                  <span className="blog-card-year">{p.year}</span>
                </div>

                {/* Title */}
                <h2 className="blog-card-name">{p.name}</h2>

                {/* Excerpt */}
                <p className="blog-card-excerpt">{p.excerpt}</p>

                {/* Tags */}
                <div className="blog-card-tags">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="blog-tag">{t}</span>
                  ))}
                </div>

                {/* Read more */}
                <span className="blog-card-read">
                  Read case study
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="blog-footer">
          <a href="https://wayan-phantom.vercel.app/" className="blog-footer-link">
            wayan-phantom.vercel.app
          </a>
        </div>

      </div>
    </div>
  );
}
