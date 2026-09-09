"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ─── Nav structure ────────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  {
    label: null,
    items: [{ label: "Introduction", href: "/docs" }],
  },
  {
    label: "Fullstack",
    items: [
      { label: "Overview", href: "/docs/fullstack" },
      { label: "Next.js & React", href: "/docs/fullstack#nextjs" },
      { label: "TypeScript Patterns", href: "/docs/fullstack#typescript" },
      { label: "Deployment", href: "/docs/fullstack#deployment" },
    ],
  },
  {
    label: "Web3 & Blockchain",
    items: [
      { label: "Overview", href: "/docs/web3" },
      { label: "Solidity Patterns", href: "/docs/web3#solidity" },
      { label: "ethers.js Integration", href: "/docs/web3#ethersjs" },
      { label: "Solana Ecosystem", href: "/docs/web3#solana" },
    ],
  },
  {
    label: "AI & Automation",
    items: [
      { label: "Overview", href: "/docs/ai" },
      { label: "LLM Stack", href: "/docs/ai#llm-stack" },
      { label: "n8n Workflows", href: "/docs/ai#n8n" },
      { label: "RAG Pipeline", href: "/docs/ai#rag" },
    ],
  },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setCollapsed((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <aside className="docs-sidebar">
      {/* Logo */}
      <div className="docs-sidebar-logo">
        <Link href="/" className="docs-logo-link">
          <span className="docs-logo-icon">WP</span>
          <span className="docs-logo-name">Wayan Phantom</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="docs-sidebar-nav" aria-label="Documentation">
        {NAV_SECTIONS.map((section, si) => (
          <div key={si} className="docs-nav-section">
            {section.label && (
              <button
                className="docs-nav-group-btn"
                onClick={() => toggle(section.label!)}
                aria-expanded={!collapsed[section.label]}
              >
                <span>{section.label}</span>
                <svg
                  width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  style={{
                    transform: collapsed[section.label] ? "rotate(-90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
            {!collapsed[section.label ?? ""] && (
              <div className={section.label ? "docs-nav-children" : ""}>
                {section.items.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/docs" && pathname.startsWith(item.href.split("#")[0]));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`docs-nav-item ${isActive ? "docs-nav-item-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="docs-sidebar-footer">
        <a
          href="https://github.com/wayphantomme"
          target="_blank"
          rel="noopener noreferrer"
          className="docs-sidebar-gh"
        >
          <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          wayphantomme
        </a>
      </div>
    </aside>
  );
}

// ─── Right TOC ────────────────────────────────────────────────────────────────

const TOC_MAP: Record<string, { label: string; href: string }[]> = {
  "/docs": [
    { label: "What's inside", href: "#whats-inside" },
  ],
  "/docs/fullstack": [
    { label: "Stack Overview", href: "#stack-overview" },
    { label: "Project Structure", href: "#project-structure" },
    { label: "App Router Patterns", href: "#nextjs" },
    { label: "TypeScript Patterns", href: "#typescript" },
    { label: "Performance Checklist", href: "#performance" },
    { label: "Deployment", href: "#deployment" },
  ],
  "/docs/web3": [
    { label: "Chains I Build On", href: "#chains" },
    { label: "Solidity Patterns", href: "#solidity" },
    { label: "ethers.js Integration", href: "#ethersjs" },
    { label: "Bulldex Architecture", href: "#bulldex" },
    { label: "Solana Ecosystem", href: "#solana" },
  ],
  "/docs/ai": [
    { label: "LLM Stack", href: "#llm-stack" },
    { label: "Chatbot Architecture", href: "#chatbot" },
    { label: "n8n Workflows", href: "#n8n" },
    { label: "RAG Pipeline", href: "#rag" },
    { label: "Prompt Engineering", href: "#prompts" },
  ],
};

function RightTOC() {
  const pathname = usePathname();
  const toc = TOC_MAP[pathname] ?? [];
  if (toc.length === 0) return null;

  return (
    <aside className="docs-toc">
      <p className="docs-toc-heading">On This Page</p>
      <nav>
        {toc.map((item) => (
          <a key={item.href} href={item.href} className="docs-toc-link">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="docs-toc-divider" />
      <a href="https://github.com/wayphantomme" className="docs-toc-action" target="_blank" rel="noopener noreferrer">
        Edit this page →
      </a>
    </aside>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

const BREADCRUMB_MAP: Record<string, string[]> = {
  "/docs": ["Introduction"],
  "/docs/fullstack": ["Fullstack", "Overview"],
  "/docs/web3": ["Web3 & Blockchain", "Overview"],
  "/docs/ai": ["AI & Automation", "Overview"],
};

function Breadcrumb() {
  const pathname = usePathname();
  const crumbs = BREADCRUMB_MAP[pathname] ?? [];
  return (
    <div className="docs-breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="docs-breadcrumb-sep">/</span>}
          <span className={i === crumbs.length - 1 ? "docs-breadcrumb-current" : "docs-breadcrumb-item"}>
            {c}
          </span>
        </span>
      ))}
    </div>
  );
}

// ─── Top bar ──────────────────────────────────────────────────────────────────

function Topbar() {
  return (
    <header className="docs-topbar">
      <div className="docs-topbar-left">
        <Link href="/" className="docs-topbar-logo">
          <span className="docs-logo-icon">WP</span>
          <span className="docs-logo-name">Wayan Phantom</span>
        </Link>
        <span className="docs-topbar-badge">Docs</span>
      </div>
      <div className="docs-topbar-right">
        <a
          href="https://github.com/wayphantomme"
          target="_blank"
          rel="noopener noreferrer"
          className="docs-topbar-gh"
          aria-label="GitHub"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </header>
  );
}

// ─── Root layout ──────────────────────────────────────────────────────────────

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-root">
      <Topbar />
      <div className="docs-body">
        <Sidebar />
        <main className="docs-main">
          <Breadcrumb />
          <article className="docs-article">
            {children}
          </article>
          <footer className="docs-footer">
            <span>Last updated · September 2026</span>
          </footer>
        </main>
        <RightTOC />
      </div>
    </div>
  );
}
