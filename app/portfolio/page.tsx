"use client";

import { projects } from "../data/projects";
import Link from "next/link";
import { useState } from "react";

const AUTHOR = {
  name: "Wayan Phantom Megaditha",
  avatar: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png",
};

const FILTERS = ["All", "Apps", "AI", "Blockchain"] as const;
type Filter = typeof FILTERS[number];

const COUNTS = {
  All: projects.length,
  Apps: projects.filter((p) => p.mainCategory === "Apps").length,
  AI: projects.filter((p) => p.mainCategory === "AI").length,
  Blockchain: projects.filter((p) => p.mainCategory === "Blockchain").length,
};

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.mainCategory === active);

  return (
    <div className="blog-page">
      <div className="blog-wrap-wide">

        {/* Header */}
        <div className="blog-header-center">
          <h1 className="blog-title-lg">Portfolio</h1>
          <p className="blog-subtitle-center">{projects.length} projects shipped.</p>
        </div>

        {/* Filter tabs */}
        <div className="pf-filter-row" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`pf-filter-btn${active === f ? " pf-filter-active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
              <span className="pf-filter-count">{COUNTS[f]}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="blog-grid">
          {filtered.map((p) => (
            <Link key={p.id} href={`/portfolio/${p.id}`} className="blog-card-v2">
              {/* Cover */}
              {p.mockups[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.mockups[0]} alt={p.name} className="blog-card-v2-cover" />
              ) : (
                <div className="blog-card-v2-cover blog-card-v2-placeholder">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.name} className="blog-card-v2-placeholder-logo" />
                </div>
              )}

              <div className="blog-card-v2-body">
                <div className="blog-card-v2-cats">
                  <span className="blog-card-v2-main-cat">{p.mainCategory}</span>
                  <span className="blog-card-v2-sub-cat">{p.subCategory}</span>
                </div>
                <h2 className="blog-card-v2-title">{p.name}</h2>
                <p className="blog-card-v2-excerpt">{p.excerpt}</p>
                <div className="blog-card-v2-meta">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={AUTHOR.avatar} alt={AUTHOR.name} className="blog-card-v2-avatar" />
                  <span className="blog-card-v2-author">{AUTHOR.name}</span>
                </div>
                <span className="blog-card-v2-read">
                  Read More
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="blog-footer-attr">wayan-phantom.vercel.app</p>
      </div>
    </div>
  );
}
