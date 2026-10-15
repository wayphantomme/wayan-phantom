import type { Metadata } from "next";
import { experience, works } from "../data/cv";

export const metadata: Metadata = {
  title: "Works — Wayan Phantom",
  description: "Work experience and what Wayan Phantom builds.",
};

export default function WorksPage() {
  return (
    <div className="page-shell">
      <div className="page-wrap">
        <h1 className="page-title">Works</h1>

        {/* What I Build */}
        <section className="page-section">
          <h2 className="page-section-title">⚡ What I Build</h2>
          <div className="works-grid">
            {works.map((w) => (
              <div key={w.id} className="works-card">
                <h3 className="works-card-title">{w.title}</h3>
                <p className="works-card-desc">{w.desc}</p>
                <div className="works-tags">
                  {w.tags.map((t) => (
                    <span key={t} className="cv-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="page-section">
          <h2 className="page-section-title">💼 Work Experience</h2>
          <div className="cv-exp-list">
            {experience.map((exp, i) => (
              <div key={exp.id} className={`cv-exp-item ${i < experience.length - 1 ? "cv-exp-divider" : ""}`}>
                <div className="cv-exp-header">
                  <div className="cv-exp-left">
                    <span className="cv-exp-role">{exp.role}</span>
                    <span className="cv-exp-company">{exp.company} · {exp.type}</span>
                  </div>
                  <span className="cv-exp-period">{exp.period}</span>
                </div>
                <ul className="cv-exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
