import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <article className="post-page">
      <div className="post-wrap-blog">

        {/* Category */}
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
            <p className="post-blog-author-meta">{project.role} · {project.year}</p>
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

        {/* Hero image */}
        {project.mockups[0] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.mockups[0]} alt={project.name} className="post-blog-hero" />
        )}

        {/* Content */}
        <div className="post-blog-content">
          {project.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Gallery */}
        {project.mockups.length > 1 && (
          <div className="post-blog-gallery">
            <p className="post-blog-gallery-label">Screenshots</p>
            <div className="post-blog-gallery-grid">
              {project.mockups.map((m, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={m} alt={`${project.name} ${i + 1}`} className="post-blog-gallery-img" />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
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

      </div>
    </article>
  );
}
