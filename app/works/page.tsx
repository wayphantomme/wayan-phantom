import type { Metadata } from "next";
import { experience, education } from "../data/cv";
import { projects } from "../data/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Works — Wayan Phantom",
  description: "Work experience, projects, and education of Wayan Phantom Megaditha.",
};

export default function WorksPage() {
  return (
    <div className="page-shell">
      <div className="page-wrap">
        <h1 className="page-title">Works</h1>

        {/* Work Experience */}
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

        {/* Projects */}
        <section className="page-section">
          <h2 className="page-section-title">🚀 Projects</h2>
          <div className="cv-exp-list">
            {projects.map((p, i) => (
              <div key={p.id} className={`cv-exp-item ${i < projects.length - 1 ? "cv-exp-divider" : ""}`}>
                <div className="cv-exp-header">
                  <div className="cv-exp-left">
                    <span className="cv-exp-role">{p.name}</span>
                    <span className="cv-exp-company">{p.category} · {p.role}</span>
                  </div>
                  <span className="cv-exp-period">{p.year}</span>
                </div>
                <p className="cv-exp-excerpt">{p.excerpt}</p>
                <div className="cv-exp-project-links">
                  <Link href={`/portfolio/${p.id}`} className="cv-exp-link">Case study ↗</Link>
                  {p.web && <a href={p.web} target="_blank" rel="noopener noreferrer" className="cv-exp-link">Live ↗</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="cv-exp-link">GitHub ↗</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="page-section">
          <h2 className="page-section-title">🎓 Education</h2>
          <div className="cv-exp-list">
            {education.map((edu, i) => (
              <div key={edu.id} className={`cv-exp-item ${i < education.length - 1 ? "cv-exp-divider" : ""}`}>
                <div className="cv-exp-header">
                  <div className="cv-exp-left">
                    <span className="cv-exp-role">{edu.degree}</span>
                    <span className="cv-exp-company">{edu.school} · {edu.location}</span>
                  </div>
                  <span className="cv-exp-period">{edu.period}</span>
                </div>
                <p className="cv-exp-excerpt">{edu.notes}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
