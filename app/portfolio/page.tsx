import { projects } from "../data/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Wayan Phantom",
  description: "Projects and case studies by Wayan Phantom Megaditha — Web3, AI, Fullstack.",
};

const AUTHOR = {
  name: "Wayan Phantom Megaditha",
  avatar: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png",
};

export default function PortfolioPage() {
  return (
    <div className="blog-page">
      <div className="blog-wrap-wide">

        {/* Header */}
        <div className="blog-header-center">
          <h1 className="blog-title-lg">Portfolio</h1>
          <p className="blog-subtitle-center">Case studies and projects shipped.</p>
        </div>

        {/* Grid */}
        <div className="blog-grid">
          {projects.map((p) => (
            <Link key={p.id} href={`/portfolio/${p.id}`} className="blog-card-v2">
              {/* Cover */}
              {p.mockups[0] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.mockups[0]} alt={p.name} className="blog-card-v2-cover" />
              )}

              <div className="blog-card-v2-body">
                {/* Category */}
                <span className="blog-card-v2-cat">{p.category}</span>

                {/* Title */}
                <h2 className="blog-card-v2-title">{p.name}</h2>

                {/* Excerpt */}
                <p className="blog-card-v2-excerpt">{p.excerpt}</p>

                {/* Author + year */}
                <div className="blog-card-v2-meta">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={AUTHOR.avatar} alt={AUTHOR.name} className="blog-card-v2-avatar" />
                  <span className="blog-card-v2-author">{AUTHOR.name}</span>
                  <span className="blog-card-v2-dot">·</span>
                  <span className="blog-card-v2-year">{p.year}</span>
                </div>

                {/* Read more */}
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
