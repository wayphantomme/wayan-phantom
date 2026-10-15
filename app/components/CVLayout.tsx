"use client";

import { useState } from "react";
import { projects } from "../data/projects";

// ─── Data ───────────────────────────────────────────────────────────────────

const techStacks = [
  { name: "Next.js", bg: "#111111", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "React", bg: "#61DAFB", icon: "https://cdn.simpleicons.org/react/000000" },
  { name: "TypeScript", bg: "#3178C6", icon: "https://cdn.simpleicons.org/typescript/ffffff" },
  { name: "Node.js", bg: "#339933", icon: "https://cdn.simpleicons.org/nodedotjs/ffffff" },
  { name: "Tailwind", bg: "#06B6D4", icon: "https://cdn.simpleicons.org/tailwindcss/ffffff" },
  { name: "PostgreSQL", bg: "#4169E1", icon: "https://cdn.simpleicons.org/postgresql/ffffff" },
  { name: "Figma", bg: "#F24E1E", icon: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "Git", bg: "#F05032", icon: "https://cdn.simpleicons.org/git/ffffff" },
  { name: "GitHub", bg: "#181717", icon: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "n8n", bg: "#EA4B22", icon: "https://cdn.simpleicons.org/n8n/ffffff" },
  { name: "Claude", bg: "#D97757", icon: "https://cdn.simpleicons.org/anthropic/ffffff" },
  { name: "Gemini", bg: "#4285F4", icon: "https://cdn.simpleicons.org/googlegemini/ffffff" },
  { name: "Solana", bg: "#9945FF", icon: "https://cdn.simpleicons.org/solana/ffffff" },
  { name: "Ethereum", bg: "#627EEA", icon: "https://cdn.simpleicons.org/ethereum/ffffff" },
];

const hackathonWins = [
  {
    id: "solana2026",
    name: "Solana Foundation Indonesia 2026",
    sub: "Bali Community Grants $4,000",
    icon: "🌐",
    color: "#9945ff",
  },
  {
    id: "superteam2026",
    name: "Superteam Startup Village 2026",
    sub: "Top 30 Builders Ideathon",
    icon: "💡",
    color: "#f59e0b",
  },
  {
    id: "lisk2025",
    name: "Lisk Spark Incubator 2025",
    sub: "Krono Finance - Grants $4,000 Funding",
    icon: "💎",
    color: "#3b82f6",
  },
  {
    id: "icp2024",
    name: "Internet Computer Hackathon 8.0 2024",
    sub: "Nekotip - 2nd Place",
    icon: "🏆",
    color: "#f59e0b",
  },
  {
    id: "mandala2024",
    name: "Mandala Blockchain Academy 2024",
    sub: "Bootcamp Completion",
    icon: "🎓",
    color: "#10b981",
  },
];

const portfolio = [
  { id: "lisk", title: "Lisk Builders SEA", category: "Hackathon", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440980/lisk-winner_gtpvlt.jpg" },
  { id: "cursor", title: "Cursor Hackathon", category: "Hackathon", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441579/cursor-hackathon_gblcd7.jpg" },
  { id: "icp", title: "ICP Hackathon", category: "Hackathon", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785468532/ICP_Hackathon_bbziiv.jpg" },
  { id: "startup", title: "Startup Village", category: "Event", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441581/startup-village_qaxvkp.jpg" },
  { id: "bali", title: "Bali Blockchain Summit", category: "Event", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440979/bali-blockchain-summit_eqgftm.jpg" },
  { id: "retreat", title: "Builders Retreat", category: "Event", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440976/lisk-villa_ci2j7a.jpg" },
  { id: "supersg", title: "Superteam Singapore", category: "Community", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441353/Superteam-Singapore_d4cadr.jpg" },
  { id: "superid", title: "Superteam Indonesia", category: "Community", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441351/Superteam-ID_sixibw.jpg" },
  { id: "jupiter", title: "Jupiter Malaysia", category: "Community", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785466792/Jupiter_Malaysia_z6lyqa.jpg" },
  { id: "apple", title: "Apple Developer Academy", category: "Education", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441589/apple-developer-academy_ms2iiz.jpg" },
];

const certifications = [
  { id: "c1", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467874/Wayan_Phantom_Megaditha_page-0001_r3er15.jpg" },
  { id: "c2", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467873/phantom-megaditha-certificate-completion-damc22_page-0001_hya5j6.jpg" },
  { id: "c3", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467859/Hubspot_xsqxel.png" },
  { id: "c4", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467733/n8n_gr6o33.jpg" },
  { id: "c5", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467732/Udemy_m3zwsg.jpg" },
  { id: "c6", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467730/ICP_Hackathon_utve5y.jpg" },
  { id: "c7", img: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1785467730/Lisk_Spark_Incubator_mnjlwz.jpg" },
];


const skillTree = [
  {
    id: "fullstack",
    label: "fullstack",
    children: [
      { id: "fe", label: "frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { id: "be", label: "backend", items: ["Node.js", "PostgreSQL", "REST API", "Prisma"] },
      { id: "hosting", label: "hosting-devops", items: ["Vercel", "GitHub CI/CD", "VPS", "Docker"] },
    ],
  },
  {
    id: "ai",
    label: "ai-automation",
    children: [
      { id: "aidev", label: "ai-development", items: ["Gemini", "Claude", "OpenAI", "RAG", "Streaming"] },
      { id: "n8n", label: "n8n-workflows", items: ["Webhooks", "HTTP Nodes", "AI Agent", "Telegram Bot"] },
      { id: "img", label: "image-generation", items: ["Cloudflare Workers AI", "Flux", "DALL-E"] },
    ],
  },
  {
    id: "blockchain",
    label: "blockchain",
    children: [
      { id: "eth", label: "ethereum", items: ["Solidity", "ethers.js", "ERC-20", "ERC-721", "Hardhat"] },
      { id: "sol", label: "solana", items: ["Rust", "Anchor", "SPL Token", "Metaplex", "Web3.js"] },
      { id: "dapp", label: "dapps", items: ["DEX", "Liquidity Pool", "NFT Marketplace", "DeFi", "RWA"] },
    ],
  },
];

function FolderIcon({ open }: { open: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      {open
        ? <path d="M2 6a2 2 0 012-2h5l2 2h7a2 2 0 012 2v1H2V6zm0 4h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8z" />
        : <path d="M2 6a2 2 0 012-2h5l2 2h7a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      }
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function WhatIBuild() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    fullstack: true,
    ai: false,
    blockchain: false,
    fe: true,
    be: false,
    hosting: false,
  });
  const toggle = (id: string) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="cv-hackathon-panel">
      <h2 className="cv-hackathon-title">⚡ What I Build</h2>
      <div className="ftree-root">
        {skillTree.map((cat, ci) => (
          <div key={cat.id} className="ftree-node">
            {/* Root folder */}
            <button className="ftree-row ftree-folder" onClick={() => toggle(cat.id)}>
              <span className="ftree-indent" />
              <span className={`ftree-folder-icon${open[cat.id] ? " ftree-folder-open" : ""}`}>
                <FolderIcon open={open[cat.id]} />
              </span>
              <span className="ftree-label">{cat.label}</span>
            </button>

            {open[cat.id] && (
              <div className="ftree-children">
                {cat.children.map((child, gi) => {
                  const isLast = gi === cat.children.length - 1;
                  return (
                    <div key={child.id} className="ftree-node">
                      {/* Sub folder */}
                      <button className="ftree-row ftree-subfolder" onClick={() => toggle(child.id)}>
                        <span className="ftree-connector">{isLast ? "└" : "├"}</span>
                        <span className={`ftree-folder-icon ftree-folder-sub${open[child.id] ? " ftree-folder-open" : ""}`}>
                          <FolderIcon open={open[child.id]} />
                        </span>
                        <span className="ftree-label">{child.label}</span>
                      </button>

                      {open[child.id] && (
                        <div className="ftree-files">
                          {child.items.map((item, fi) => {
                            const fileLast = fi === child.items.length - 1;
                            return (
                              <div key={item} className="ftree-row ftree-file">
                                <span className="ftree-pipe">{isLast ? " " : "│"}</span>
                                <span className="ftree-connector">{fileLast ? "└" : "├"}</span>
                                <span className="ftree-file-icon"><FileIcon /></span>
                                <span className="ftree-file-label">{item}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Tab types ──────────────────────────────────────────────────────────────

type Tab = "About" | "Works" | "Journey" | "Contact";

// ─── ProfileCard ─────────────────────────────────────────────────────────────

function ProfileCard() {
  return (
    <div className="cv-profile-card">
      {/* Avatar area */}
      <div className="cv-avatar-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png"
          alt="Wayan Phantom"
          className="cv-avatar-img"
        />
      </div>

      {/* Name + role */}
      <div className="cv-profile-name-wrap">
        <h1 className="cv-name">Wayan Phantom Megaditha</h1>
        <div className="cv-role-row">
          <span className="cv-role-icon">🧑‍💻</span>
          <span className="cv-role-label">Fullstack Software Engineer</span>
        </div>
        <p className="cv-bio">Building full-stack web apps and AI automation systems that help businesses move faster, cut manual work, and scale operations without growing headcount.</p>
      </div>

      {/* Social links + Portfolio button */}
      <div className="cv-social-row">
        <a href="https://github.com/wayphantomme" aria-label="GitHub" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/wayphantomme/" aria-label="LinkedIn" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://x.com/wayphantomme" aria-label="X (Twitter)" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="https://n8n.io/creators/wayphantomme/" aria-label="n8n" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://cdn.simpleicons.org/n8n/EA4B22" alt="n8n" width={16} height={16} style={{ display: "block" }} />
        </a>
      </div>

      {/* Stats */}
      <div className="cv-stats-row">
        <div className="cv-stat">
          <span className="cv-stat-num">20+</span>
          <span className="cv-stat-label">Projects Shipped</span>
        </div>
        <div className="cv-stat">
          <span className="cv-stat-num">5+</span>
          <span className="cv-stat-label">Satisfied Clients</span>
        </div>
        <div className="cv-stat">
          <span className="cv-stat-num">3+</span>
          <span className="cv-stat-label">Years of Journey</span>
        </div>
      </div>
    </div>
  );
}

// ─── CertificationsPanel ─────────────────────────────────────────────────────

function CertificationsPanel() {
  return (
    <aside className="cv-hackathon-panel cv-cert-panel">
      <h2 className="cv-hackathon-title">🎓 Certifications</h2>
      <div className="cv-cert-track-outer">
        <div className="cv-cert-track">
          {[...certifications, ...certifications].map((c, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${c.id}-${i}`}
              src={c.img}
              alt="Certificate"
              className="cv-cert-img"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

// ─── HackathonPanel ──────────────────────────────────────────────────────────

function HackathonPanel() {
  return (
    <aside className="cv-hackathon-panel">
      <h2 className="cv-hackathon-title">🏆 My Hackathon Journey</h2>
      <ul className="cv-hackathon-list">
        {hackathonWins.map((win) => (
          <li key={win.id} className="cv-hackathon-item">
            <div className="cv-hackathon-icon" style={{ background: win.color + "22", color: win.color }}>
              {win.icon}
            </div>
            <div className="cv-hackathon-info">
              <p className="cv-hackathon-name">{win.name}</p>
              {win.sub && <p className="cv-hackathon-sub">{win.sub}</p>}
            </div>
            <svg className="cv-hackathon-arrow" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10m0 0v10m0-10L7 17" />
            </svg>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// ─── TechStackPanel ──────────────────────────────────────────────────────────

function TechStackPanel() {
  return (
    <aside className="cv-hackathon-panel">
      <h2 className="cv-hackathon-title">🛠️ Tech Stack</h2>
      <div className="cv-tech-grid">
        {techStacks.map((tech) => (
          <div key={tech.name} className="cv-tech-badge" style={{ background: tech.bg }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.icon}
              alt={tech.name}
              className="cv-tech-icon"
              width={16}
              height={16}
            />
            <span className="cv-tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── Tab content panels ──────────────────────────────────────────────────────

function AboutTab() {
  return (
    <div className="cv-tab-content">
      <h3 className="cv-tab-section-title">How I Think About Problems</h3>

      {/* YouTube Video Embed */}
      <div className="cv-video-container">
        <iframe
          className="cv-video-iframe"
          src="https://www.youtube.com/embed/DLLj7CZmHco"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="cv-video-caption">
        Archive (2024) : Application video submission for the Apple Developer Academy.
      </p>

      <div className="cv-about-body">
        <p className="cv-about-lead">
          Most technical problems are actually people problems in disguise. Before writing a single line of code, I try to understand who is affected, why the current situation is not working, and what a better outcome actually looks like for them.
        </p>
        <p className="cv-about-muted">
          When a client came in with a restaurant running on paper tickets and a whiteboard for table status, the surface problem was &ldquo;we need software.&rdquo; The real problem was that staff were making decisions without shared context orders got lost, tables sat empty while guests waited. The solution was not just digitizing the workflow, it was designing around how information actually moves during a busy service.
        </p>
        <p className="cv-about-muted">
          I use the same pattern on every project: clarify the situation first, define what success looks like before touching the implementation, then work backwards from the outcome to the architecture. Documentation BRD, PRD, TRD is how I externalize that thinking so the whole team is solving the same problem.
        </p>
        <p className="cv-about-muted">
          The hardest part is usually not the code. It is knowing which problem is worth solving and which requirements are symptoms of a deeper issue. That clarity is what separates a working product from a technically correct one that nobody uses.
        </p>
      </div>
    </div>
  );
}

const experience = [
  {
    id: "megatha",
    role: "Fullstack Developer",
    company: "Megatha Tech",
    type: "Hybrid, Bali",
    period: "Jul 2025 – Jun 2026",
    bullets: [
      "Delivering AI automation, web development, and digital transformation services",
      "Built websites, landing pages, and business systems for startups and SMEs",
      "Managed project delivery and client relationships for 10+ clients",
    ],
  },
  {
    id: "sody",
    role: "UI/UX Designer",
    company: "Sody App Pte Ltd",
    type: "Remote, Singapore",
    period: "Apr 2025 – Jun 2025",
    bullets: [
      "Designed intuitive user interfaces and user experiences using Figma",
      "Developed 22+ visual assets and content systems for social media marketing",
      "Contributed to product strategy through user-centered design approaches",
    ],
  },
  {
    id: "mainstreet",
    role: "WordPress Developer",
    company: "Mainstreet Global Inc",
    type: "Remote, Canada",
    period: "Apr 2024 – Mar 2025",
    bullets: [
      "Developed and optimized 3 corporate websites for international clients",
      "Improved website performance to 99/100 Google PageSpeed score",
      "Designed responsive user experiences across desktop and mobile devices",
    ],
  },
  {
    id: "educlaas",
    role: "Business Development Associate",
    company: "EduCLaaS Pte Ltd",
    type: "Remote, Singapore",
    period: "Aug 2023 – Mar 2024",
    bullets: [
      "Generated and nurtured business leads through HubSpot CRM campaigns with 3 teams",
      "Collaborated with marketing teams to acquire 500+ potential customer contacts",
      "Supported regional business expansion initiatives across Southeast Asia",
    ],
  },
];

function WorksTab() {
  return (
    <div className="cv-tab-content">
      <h3 className="cv-tab-section-title">💼 Working Experiences</h3>
      <div className="cv-exp-list">
        {experience.map((exp, i) => (
          <div key={exp.id} className={`cv-exp-item ${i < experience.length - 1 ? "cv-exp-divider" : ""}`}>
            <div className="cv-exp-header">
              <div className="cv-exp-left">
                <span className="cv-exp-role">{exp.role}</span>
                <span className="cv-exp-company">{exp.company} • {exp.type}</span>
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
    </div>
  );
}

const PER_PAGE = 6;

function PlacesGallery() {
  const [page, setPage] = useState(0);
  const total = Math.ceil(portfolio.length / PER_PAGE);
  const visible = portfolio.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(total - 1, p + 1));

  return (
    <div className="cv-places-card">
      <div className="cv-portfolio-grid">
        {visible.map((item) => (
          <div key={item.id} className="cv-portfolio-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.title} className="cv-portfolio-img" />
            <div className="cv-portfolio-info">
              <span className="cv-portfolio-cat">{item.category}</span>
              <span className="cv-portfolio-title">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="cv-places-nav">
          <button onClick={prev} disabled={page === 0} className="cv-places-arrow" aria-label="Previous">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="cv-places-dots">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`cv-places-dot ${i === page ? "cv-places-dot-active" : ""}`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <span className="cv-places-counter">{page + 1} / {total}</span>
          <button onClick={next} disabled={page === total - 1} className="cv-places-arrow" aria-label="Next">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function ExperiencesTab() {
  return (
    <div className="cv-tab-content">
      <h3 className="cv-tab-section-title">🌏 Places &amp; Communities</h3>
      <PlacesGallery />
    </div>
  );
}

function ContactTab() {
  return (
    <div className="cv-tab-content">
      <h3 className="cv-tab-section-title">✉️ Get In Touch</h3>
      <div className="cv-contact-body">
        <p className="cv-about-muted">
          Book a free 30-minute call and I&apos;ll identify exactly what to automate first and what it will take to build it. Zero obligation.
        </p>
        <div className="cv-contact-links">
          <a href="mailto:wayanphantomme@gmail.com" className="cv-contact-link">
            <span className="cv-contact-icon">📧</span>
            <span>wayanphantomme@gmail.com</span>
          </a>
          <a href="https://wa.me/+6289688072039" className="cv-contact-link">
            <span className="cv-contact-icon">💬</span>
            <span>WhatsApp me</span>
          </a>
          <a href="https://github.com/wayphantomme" className="cv-contact-link">
            <span className="cv-contact-icon">💻</span>
            <span>github.com/wayphantomme</span>
          </a>
        </div>
        <a
          href="https://calendly.com/wayanphantomme/30min"
          className="cv-cta-btn"
        >
          Book a Free Call ↗
        </a>
      </div>
    </div>
  );
}

// ─── Main Layout ─────────────────────────────────────────────────────────────

export default function CVLayout() {
  return (
    <div className="cv-page">
      {/* Top announcement bar */}
      <div className="cv-announcement">
        <span className="cv-announcement-dot" />
        Actively exploring opportunities with{" "}
        <strong>Web3 Startups, Ecosystem Foundations, &amp; VC Talent Hubs.</strong>
      </div>

      {/* Main content area */}
      <div className="cv-main">
        {/* ── Left column ──────────────────────────────────────── */}
        <div className="cv-left-col">
          <ProfileCard />
          <div className="cv-panel">
            <AboutTab />
          </div>
        </div>

        {/* ── Right column ─────────────────────────────────────── */}
        <div className="cv-right-col">
          <HackathonPanel />
          <TechStackPanel />

          {/* ── What I Build ── */}
          <WhatIBuild />

          {/* ── Certifications ── */}
          <CertificationsPanel />
        </div>
      </div>
    </div>
  );
}
