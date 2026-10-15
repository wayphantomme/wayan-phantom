import type { Metadata } from "next";
import { experience, education } from "../data/cv";

export const metadata: Metadata = {
  title: "Works — Wayan Phantom",
  description: "Work experience and education of Wayan Phantom Megaditha.",
};

export default function WorksPage() {
  return (
    <div className="page-shell">
      <div className="page-wrap cv-page-wrap">

        {/* Work Experience */}
        <section className="cv-section">
          <div className="cv-section-header">
            <h2 className="cv-section-label">Work Experience</h2>
            <div className="cv-section-line" />
          </div>
          <div className="cv-entries">
            {experience.map((exp, i) => (
              <div key={exp.id} className="cv-entry">
                <div className="cv-entry-header">
                  <div className="cv-entry-left">
                    <span className="cv-entry-role">{exp.role}</span>
                    <span className="cv-entry-company">{exp.company} · {exp.type}</span>
                  </div>
                  <span className="cv-entry-period">{exp.period}</span>
                </div>
                <ul className="cv-entry-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {i < experience.length - 1 && <div className="cv-entry-divider" />}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <div className="cv-section-header">
            <h2 className="cv-section-label">Education</h2>
            <div className="cv-section-line" />
          </div>
          <div className="cv-entries">
            {education.map((edu, i) => (
              <div key={edu.id} className="cv-entry">
                <div className="cv-entry-header">
                  <div className="cv-entry-left">
                    <span className="cv-entry-role">{edu.degree}</span>
                    <span className="cv-entry-company">{edu.school} · {edu.location}</span>
                  </div>
                  <span className="cv-entry-period">{edu.period}</span>
                </div>
                <p className="cv-entry-note">{edu.notes}</p>
                {i < education.length - 1 && <div className="cv-entry-divider" />}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
