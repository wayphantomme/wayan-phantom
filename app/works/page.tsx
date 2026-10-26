import type { Metadata } from "next";
import { experience, education, training } from "../data/cv";

export const metadata: Metadata = {
  title: "Works — Wayan Phantom",
  description: "Work experience, education, and training of Wayan Phantom Megaditha.",
};

export default function WorksPage() {
  // Sort newest first
  const sortedExperience = [...experience];
  const sortedEducation = [...education].reverse();
  const sortedTraining = [...training];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <div className="wk-wrap">
        <h1 className="wk-page-title">Works</h1>

        {/* Work Experience */}
        <section className="wk-section">
          <div className="wk-section-header">
            <span className="wk-section-label">Work Experience</span>
            <span className="wk-section-rule" />
          </div>
          <div className="wk-list">
            {sortedExperience.map((exp, i) => (
              <div key={exp.id} className="wk-item">
                <div className="wk-item-top">
                  <div>
                    <p className="wk-role">{exp.role}</p>
                    <p className="wk-company">{exp.company} · {exp.type}</p>
                  </div>
                  <p className="wk-period">{exp.period}</p>
                </div>
                <ul className="wk-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {i < sortedExperience.length - 1 && <hr className="wk-rule" />}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="wk-section">
          <div className="wk-section-header">
            <span className="wk-section-label">Education</span>
            <span className="wk-section-rule" />
          </div>
          <div className="wk-list">
            {sortedEducation.map((edu, i) => (
              <div key={edu.id} className="wk-item">
                <div className="wk-item-top">
                  <div>
                    <p className="wk-role">{edu.degree}</p>
                    <p className="wk-company">{edu.school} · {edu.location}</p>
                  </div>
                  <p className="wk-period">{edu.period}</p>
                </div>
                <p className="wk-note">{edu.notes}</p>
                {i < sortedEducation.length - 1 && <hr className="wk-rule" />}
              </div>
            ))}
          </div>
        </section>

        {/* Bootcamps & Training */}
        <section className="wk-section">
          <div className="wk-section-header">
            <span className="wk-section-label">Bootcamps & Training</span>
            <span className="wk-section-rule" />
          </div>
          <div className="wk-list">
            {sortedTraining.map((t, i) => (
              <div key={t.id} className="wk-item">
                <div className="wk-item-top">
                  <div>
                    <p className="wk-role">{t.degree}</p>
                    <p className="wk-company">{t.school} · {t.location}</p>
                  </div>
                  <p className="wk-period">{t.period}</p>
                </div>
                <p className="wk-note">{t.notes}</p>
                {i < sortedTraining.length - 1 && <hr className="wk-rule" />}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
