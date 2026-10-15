import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ScreenshotGallery from "../../components/ScreenshotGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

const AUTHOR = {
  name: "Wayan Phantom Megaditha",
  avatar: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png",
};

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

  return (
    <article className="post-page">
      <div className="post-wrap-blog">

        {/* Top nav */}
        <div className="post-blog-topnav">
          <Link href="/portfolio" className="post-blog-back">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            All works
          </Link>
        </div>

        {/* Category + tags */}
        <div className="post-blog-meta-top">
          <span className="post-blog-cat">{project.category}</span>
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="post-blog-tag">{t}</span>
          ))}
        </div>

        {/* Title */}
        <h1 className="post-blog-title">{project.name}</h1>

        {/* Author row */}
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

        {/* Client info */}
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

        {/* Content */}
        <div className="post-blog-content">
          {project.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Gallery with lightbox */}
        <ScreenshotGallery mockups={project.mockups} name={project.name} />

        {/* Footer tags */}
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

        {/* Prev / Next */}
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
    </article>
  );
}
