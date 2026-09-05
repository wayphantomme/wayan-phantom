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


const works = [
  {
    id: "web",
    title: "Full-Stack Web Apps",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "API Integration"],
    desc: "End-to-end web applications built for real business scale — from pixel-perfect UI to robust backend infrastructure. Every project ships with clean architecture, optimized performance, and a full deployment pipeline on Vercel via GitHub.",
  },
  {
    id: "web3",
    title: "Web3 & Blockchain Engineer",
    tags: ["Ethereum", "Solana", "Solidity", "DeFi", "DEX", "Smart Contracts", "ethers.js"],
    desc: "Building production DeFi protocols on Ethereum and Solana — token swaps, liquidity pools, faucets, and on-chain integrations. From Solidity smart contracts to full-stack frontends like Bulldex Finance and Neko Singa AI.",
  },
  {
    id: "ai",
    title: "AI Apps & Automation",
    tags: ["Claude", "Gemini", "OpenAI", "n8n", "RAG", "Automation"],
    desc: "Designing and deploying intelligent systems that automate workflows, eliminate manual work, and connect your entire stack into one seamless ecosystem — running 24/7.",
  },
];

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
        <p className="cv-bio">Building full-stack web apps and DeFi protocols from first commit to production. Clean architecture, great UX, and code that scales.</p>
      </div>

      {/* Social links + Portfolio button */}
      <div className="cv-social-row">
        <a href="https://github.com/wayphantomme" aria-label="GitHub" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://wa.me/+6289688072039" aria-label="WhatsApp" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.03c0 2.12.553 4.184 1.603 6.008L.24 24l6.104-1.602A11.967 11.967 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.03S18.677 0 12.031 0zm6.541 17.202c-.276.776-1.583 1.488-2.188 1.558-.553.064-1.258.114-3.64-1.077-2.853-1.428-4.685-4.325-4.823-4.51-.138-.184-1.15-1.533-1.15-2.924 0-1.391.724-2.072.983-2.348.258-.276.564-.346.748-.346.184 0 .368.005.529.01.173.006.402-.064.629.483.287.69.979 2.392 1.066 2.564.086.172.144.373.028.603-.115.23-.173.373-.346.58-.172.207-.36.438-.506.586-.16.16-.328.334-.143.656.184.321.821 1.36 1.761 2.198 1.215 1.082 2.228 1.417 2.55 1.566.321.15.511.127.706-.098.195-.224.84-1.011 1.065-1.362.224-.35.448-.293.754-.184.305.109 1.933.914 2.266 1.08.334.167.558.253.639.391.081.138.081.798-.195 1.574z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/wayphantomme/" aria-label="LinkedIn" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@wayphantomme" aria-label="TikTok" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/wayphantomme" aria-label="Instagram" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="https://x.com/wayphantomme" aria-label="X (Twitter)" className="cv-social-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="/portfolio" className="cv-portfolio-btn">
          Portfolio
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10m0 0v10m0-10L7 17"/>
          </svg>
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
      <h3 className="cv-tab-section-title">I Build Products, Not Just Code</h3>
      
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
        Archive (2024) — Application video submission for the Apple Developer Academy.
      </p>

      <div className="cv-about-body">
        <p className="cv-about-lead">
          Turning real user problems and business ideas into working products, from architecture and development all the way to deployment and handoff.
        </p>
        <p className="cv-about-muted">
          Every project starts with BRD, PRD, and TRD before a single line of code is written. Built across Web3, AI, and full-stack, including Bulldex Finance (a DeFi monorepo on Ethereum) and Neko Singa AI (an AI-native crypto platform).
        </p>
        <p className="cv-about-muted">
          Talking directly with users at events like Coinfest Asia and CatLumpur in Malaysia helps understand what real problems actually look like, not just how they are described in a brief.
        </p>
        <p className="cv-about-muted">
          The goal is never just to build what is requested. Understanding why it is needed, who needs it, and how to make it actually work — that is what matters.
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
      <h3 className="cv-tab-section-title">� Places &amp; Communities</h3>
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
          Book a free 30-minute call and I&apos;ll identify exactly what to automate first — and what it will take to build it. Zero obligation.
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
  const [activeTab, setActiveTab] = useState<Tab>("About");

  const tabs: Tab[] = ["About", "Works", "Journey", "Contact"];

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

          {/* Tabs */}
          <nav className="cv-tabs" aria-label="Page sections">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cv-tab-btn ${activeTab === tab ? "cv-tab-active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Tab panels */}
          <div className="cv-panel">
            {activeTab === "About" && <AboutTab />}
            {activeTab === "Works" && <WorksTab />}
            {activeTab === "Journey" && <ExperiencesTab />}
            {activeTab === "Contact" && <ContactTab />}
          </div>
        </div>

        {/* ── Right column ─────────────────────────────────────── */}
        <div className="cv-right-col">
          <HackathonPanel />
          <TechStackPanel />

          {/* ── What I Build ── */}
          <div className="cv-hackathon-panel">
            <h2 className="cv-hackathon-title">⚡ What I Build</h2>
            <div className="cv-works-grid-right">
              {works.map((w) => (
                <div key={w.id} className="cv-works-card-right">
                  <h4 className="cv-works-title-right">{w.title}</h4>
                  <p className="cv-works-desc-right">{w.desc}</p>
                  <div className="cv-works-tags">
                    {w.tags.map((t) => (
                      <span key={t} className="cv-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Certifications ── */}
          <CertificationsPanel />
        </div>
      </div>
    </div>
  );
}
