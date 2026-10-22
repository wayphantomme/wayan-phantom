import React from "react";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ScreenshotGallery from "../../components/ScreenshotGallery";
import type { Project } from "../../data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

const AUTHOR = {
  name: "Wayan Phantom Megaditha",
  avatar: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png",
};

const SECTION_HEADERS = ["The Problem", "How It Works", "Tech Stack", "What I Would Improve"];

function renderContentBlock(paragraph: string, inSection: string): React.ReactElement {
  // 1. Section header
  if (SECTION_HEADERS.includes(paragraph)) {
    return (
      <div>
        <hr className="post-section-divider" />
        <h3 className="post-section-header">{paragraph}</h3>
      </div>
    );
  }

  // 2. Numbered list
  const lines = paragraph.split("\n").filter((l) => l.trim() !== "");
  if (lines.some((l) => /^\d+\.\s/.test(l))) {
    return (
      <ol className="post-how-list">
        {lines.map((line, idx) => (
          <li key={idx}>{line.replace(/^\d+\.\s*/, "")}</li>
        ))}
      </ol>
    );
  }

  // 3. Tech Stack table
  if (inSection === "Tech Stack" && lines.some((l) => l.includes(" | "))) {
    return (
      <table className="post-tech-table">
        <tbody>
          {lines.filter((l) => l.includes(" | ")).map((line, idx) => {
            const [tech, reason] = line.split(" | ", 2);
            return (
              <tr key={idx}>
                <td>{tech.trim()}</td>
                <td>{reason.trim()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  // 4. Default
  return <p>{paragraph}</p>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Wayan Phantom`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.id === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  // Related projects: same category first, fill with others if needed
  const sameCat: Project[] = projects.filter(
    (p) => p.id !== project.id && p.category === project.category
  ).slice(0, 2);
  const related: Project[] = sameCat.length < 2
    ? [
        ...sameCat,
        ...projects
          .filter((p) => p.id !== project.id && !sameCat.includes(p))
          .slice(0, 2 - sameCat.length),
      ]
    : sameCat;

  return (
    <article className="post-page">
      <div className="post-detail-wrap">

        {/* Top nav — full width above grid */}
        <div className="post-blog-topnav">
          <Link href="/portfolio" className="post-blog-back">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            All works
          </Link>
        </div>

        {/* Two-column grid */}
        <div className="post-detail-grid">

          {/* ── Left: main content ── */}
          <div className="post-detail-main">

            {/* Hero image */}
            {project.mockups[0] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.mockups[0]} alt={project.name} className="post-blog-hero" />
            ) : (
              <div className="post-blog-hero post-blog-hero-placeholder">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.logo} alt={project.name} className="post-blog-hero-placeholder-logo" />
              </div>
            )}

            {/* Category + tags */}
            <div className="post-blog-meta-top">
              <span className="post-blog-cat">{project.category}</span>
              {project.tags.slice(0, 3).map((t) => (
                <span key={t} className="post-blog-tag">{t}</span>
              ))}
            </div>

            {/* Title */}
            <h1 className="post-blog-title">{project.name}</h1>

            {/* Author + role row with Live / GitHub buttons */}
            <div className="post-blog-author">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={AUTHOR.avatar} alt={AUTHOR.name} className="post-blog-avatar" />
              <div>
                <p className="post-blog-author-name">{AUTHOR.name}</p>
                <p className="post-blog-author-meta">{project.role}</p>
              </div>
              <div className="post-blog-links">
                {project.web && (
                  <a href={project.web} target="_blank" rel="noopener noreferrer" className="post-blog-btn post-blog-btn-primary">
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="post-blog-btn post-blog-btn-ghost">
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            {/* Client / Inspiration row — only when project.client exists */}
            {project.client && (
              <div className="post-blog-client">
                <span className="post-blog-client-label">Client</span>
                <span className="post-blog-client-name">{project.client.name}</span>
                <div className="post-blog-client-links">
                  {project.client.web && (
                    <a href={project.client.web} target="_blank" rel="noopener noreferrer" className="post-blog-client-link">
                      Website ↗
                    </a>
                  )}
                  {project.client.instagram && (
                    <a href={project.client.instagram} target="_blank" rel="noopener noreferrer" className="post-blog-client-link">
                      Instagram ↗
                    </a>
                  )}
                  {project.client.linkedin && (
                    <a href={project.client.linkedin} target="_blank" rel="noopener noreferrer" className="post-blog-client-link">
                      LinkedIn ↗
                    </a>
                  )}
                  {project.client.github && (
                    <a href={project.client.github} target="_blank" rel="noopener noreferrer" className="post-blog-client-link">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Parsed content with section header detection */}
            <div className="post-blog-content">
              {(() => {
                let currentSection = '';
                return project.content.split('\n\n').map((para, i) => {
                  const trimmed = para.trim();
                  if (SECTION_HEADERS.includes(trimmed)) currentSection = trimmed;
                  return <React.Fragment key={i}>{renderContentBlock(trimmed, currentSection)}</React.Fragment>;
                });
              })()}
            </div>

            {/* Screenshot gallery with lightbox */}
            <ScreenshotGallery mockups={project.mockups} name={project.name} />

            {/* Footer author card + all tags */}
            <div className="post-blog-footer">
              <div className="post-blog-author post-blog-author-footer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AUTHOR.avatar} alt={AUTHOR.name} className="post-blog-avatar" />
                <div>
                  <p className="post-blog-author-name">{AUTHOR.name}</p>
                  <p className="post-blog-author-meta">Fullstack Engineer · AI & Web3</p>
                </div>
              </div>
              <div className="post-blog-tags-row">
                {project.tags.map((t) => (
                  <span key={t} className="post-blog-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Prev / Next navigation */}
            <nav className="post-blog-prevnext">
              {prev ? (
                <Link href={`/portfolio/${prev.id}`} className="post-blog-prevnext-item post-blog-prevnext-prev">
                  <span className="post-blog-prevnext-label">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
                    </svg>
                    Previous
                  </span>
                  <span className="post-blog-prevnext-title">{prev.name}</span>
                </Link>
              ) : <div />}

              {next ? (
                <Link href={`/portfolio/${next.id}`} className="post-blog-prevnext-item post-blog-prevnext-next">
                  <span className="post-blog-prevnext-label">
                    Next
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </span>
                  <span className="post-blog-prevnext-title">{next.name}</span>
                </Link>
              ) : <div />}
            </nav>

          </div>
          {/* ── end main content ── */}

          {/* ── Right: sticky sidebar (hidden on mobile, visible >=1024px) ── */}
          <aside className="post-detail-sidebar">

            {/* Author card */}
            <div className="post-sidebar-card">
              <p className="post-sidebar-section-title">Author</p>
              <div className="post-sidebar-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AUTHOR.avatar} alt={AUTHOR.name} className="post-sidebar-avatar" />
                <div>
                  <p className="post-sidebar-author-name">{AUTHOR.name}</p>
                  <p className="post-sidebar-author-sub">Fullstack Engineer · AI & Web3</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="post-sidebar-card">
              <p className="post-sidebar-section-title">Tags</p>
              <div className="post-sidebar-tags">
                {project.tags.map((t) => (
                  <span key={t} className="post-blog-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Related projects */}
            {related.length > 0 && (
              <div className="post-sidebar-card">
                <p className="post-sidebar-section-title">Related Projects</p>
                <div className="post-sidebar-related-list">
                  {related.map((rel) => (
                    <Link key={rel.id} href={`/portfolio/${rel.id}`} className="post-sidebar-related-item">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={rel.logo} alt={rel.name} className="post-sidebar-related-logo" />
                      <div>
                        <p className="post-sidebar-related-name">{rel.name}</p>
                        <p className="post-sidebar-related-excerpt">
                          {rel.excerpt.slice(0, 60)}{rel.excerpt.length > 60 ? "…" : ""}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
          {/* ── end sidebar ── */}

        </div>
        {/* ── end two-column grid ── */}

      </div>
    </article>
  );
}
