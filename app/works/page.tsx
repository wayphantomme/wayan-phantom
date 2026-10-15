import type { Metadata } from "next";
import { experience, education } from "../data/cv";

export const metadata: Metadata = {
  title: "Works — Wayan Phantom",
  description: "Work experience and education of Wayan Phantom Megaditha.",
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
