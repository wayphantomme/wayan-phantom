import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Wayan Phantom",
  description: "Get in touch with Wayan Phantom Megaditha.",
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <div className="wk-wrap">
        <h1 className="wk-page-title">Contact</h1>

        <section className="wk-section">
          <p className="cv-about-muted">
            Book a free 30-minute call and I&apos;ll identify exactly what to automate first, and what it will take to build it. Zero obligation.
          </p>

          <div className="contact-links">
            <a href="mailto:wayanphantomme@gmail.com" className="contact-link">
              <span className="contact-link-icon">📧</span>
              <div>
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">wayanphantomme@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/6289688072039" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">💬</span>
              <div>
                <p className="contact-link-label">WhatsApp</p>
                <p className="contact-link-value">+62 896 8807 2039</p>
              </div>
            </a>
            <a href="https://github.com/wayphantomme" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">💻</span>
              <div>
                <p className="contact-link-label">GitHub</p>
                <p className="contact-link-value">github.com/wayphantomme</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/wayphantomme/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">🔗</span>
              <div>
                <p className="contact-link-label">LinkedIn</p>
                <p className="contact-link-value">linkedin.com/in/wayphantomme</p>
              </div>
            </a>
          </div>

          <a href="https://calendly.com/wayanphantomme/30min" target="_blank" rel="noopener noreferrer" className="cv-cta-btn" style={{ marginTop: "2rem", display: "inline-block" }}>
            Book a Free Call ↗
          </a>
        </section>
      </div>
    </div>
  );
}
