import { projects } from "../data/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Wayan Phantom",
  description: "Projects built by Wayan Phantom Megaditha",
};

export default function PortfolioPage() {
  return (
    <div className="pf-page">
      <div className="pf-wrap">

        {/* Header */}
        <div className="pf-hero">
          <Link href="/" className="pf-back">← Back</Link>
          <h1 className="pf-title">My Works Highlights</h1>
          <p className="pf-subtitle">I&apos;ve worked on a lot of projects, here are some of my favorites.</p>
        </div>

        {/* Project cards */}
        <div className="pf-list">
          {projects.map((p) => (
            <div key={p.id} className="pf-card">
              {/* Card header */}
              <div className="pf-card-header">
                <div className="pf-card-left">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.name} className="pf-logo" />
                  <span className="pf-name">{p.name}</span>
                </div>
                <div className="cv-project-links">
                  {p.web && (
                    <a href={p.web} target="_blank" rel="noopener noreferrer" aria-label="Website" className="cv-project-link-btn">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                      </svg>
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cv-project-link-btn">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="pf-desc">{p.desc}</p>

              {/* Mockups */}
              {p.mockups.length > 0 && (
                <div className="pf-mockups">
                  {p.mockups.map((m, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={m}
                      alt={`${p.name} screenshot ${i + 1}`}
                      className="pf-mockup"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pf-footer">
          <a href="https://wayan-phantom.vercel.app/" className="pf-footer-link">
            wayan-phantom.vercel.app
          </a>
        </div>

      </div>
    </div>
  );
}
