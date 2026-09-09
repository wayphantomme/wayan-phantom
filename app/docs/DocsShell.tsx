"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ─── Nav structure (3 levels: section → subgroup → items) ────────────────────

type NavItem  = { label: string; href: string };
type SubGroup = { label: string; href?: string; items: NavItem[] };
type Section  = {
  label: string | null;
  href?: string;
  items?: NavItem[];          // flat items (no subgroup)
  subgroups?: SubGroup[];     // nested subgroups
};

const NAV_SECTIONS: Section[] = [
  {
    label: null,
    items: [{ label: "Introduction", href: "/docs" }],
  },
  {
    label: "Fullstack",
    items: [
      { label: "Overview",            href: "/docs/fullstack" },
      { label: "Next.js & React",     href: "/docs/fullstack/nextjs" },
      { label: "TypeScript Patterns", href: "/docs/fullstack/typescript" },
      { label: "Monorepo vs Polyrepo",href: "/docs/fullstack/monorepo" },
      { label: "GitHub, Vercel & Env",href: "/docs/fullstack/github-vercel" },
      { label: "Deployment",          href: "/docs/fullstack/deployment" },
    ],
  },
  {
    label: "Web3 & Blockchain",
    href: "/docs/web3",
    items: [
      { label: "Overview", href: "/docs/web3" },
    ],
    subgroups: [
      {
        label: "Ethereum",
        href: "/docs/web3/ethereum",
        items: [
          { label: "Overview",          href: "/docs/web3/ethereum" },
          { label: "Solidity Patterns", href: "/docs/web3/ethereum/solidity" },
          { label: "ethers.js",         href: "/docs/web3/ethereum/ethersjs" },
        ],
      },
      {
        label: "Solana",
        href: "/docs/web3/solana",
        items: [
          { label: "Overview",          href: "/docs/web3/solana" },
          { label: "Wallet & Web3.js",  href: "/docs/web3/solana/wallet" },
          { label: "Anchor Programs",   href: "/docs/web3/solana/programs" },
        ],
      },
    ],
  },
  {
    label: "AI & Automation",
    items: [
      { label: "Overview",     href: "/docs/ai" },
      { label: "LLM Stack",    href: "/docs/ai/llm" },
      { label: "n8n Workflows",href: "/docs/ai/n8n" },
      { label: "RAG Pipeline", href: "/docs/ai/rag" },
    ],
  },
];

// ─── TOC map ─────────────────────────────────────────────────────────────────

const TOC_MAP: Record<string, { label: string; href: string }[]> = {
  "/docs": [
    { label: "What's inside", href: "#whats-inside" },
  ],
  "/docs/fullstack": [
    { label: "Stack Overview",    href: "#stack-overview" },
    { label: "Project Structure", href: "#project-structure" },
  ],
  "/docs/fullstack/nextjs": [
    { label: "App Router",       href: "#app-router" },
    { label: "Route Handlers",   href: "#route-handlers" },
    { label: "Server vs Client", href: "#server-vs-client" },
    { label: "Data Fetching",    href: "#data-fetching" },
  ],
  "/docs/fullstack/typescript": [
    { label: "Interfaces vs Types",    href: "#interfaces" },
    { label: "Utility Types",          href: "#utility-types" },
    { label: "Generic Patterns",       href: "#generics" },
    { label: "Discriminated Unions",   href: "#discriminated-unions" },
    { label: "Zod Validation",         href: "#zod" },
  ],
  "/docs/fullstack/monorepo": [
    { label: "Monorepo",           href: "#monorepo" },
    { label: "Polyrepo",           href: "#polyrepo" },
    { label: "When to Use Which",  href: "#when-to-use" },
    { label: "Turborepo Setup",    href: "#turborepo" },
    { label: "Shared Packages",    href: "#shared-packages" },
  ],
  "/docs/fullstack/github-vercel": [
    { label: "Create GitHub Repo",   href: "#github" },
    { label: "Connect to Vercel",    href: "#vercel" },
    { label: "Environment Variables",href: "#env" },
    { label: "Multi-Project Setup",  href: "#multi-project" },
    { label: "Web3 Contract Env",    href: "#web3-env" },
  ],
  "/docs/fullstack/deployment": [
    { label: "Vercel Setup",         href: "#vercel" },
    { label: "Env Variables",        href: "#env" },
    { label: "Build Checklist",      href: "#build-checklist" },
  ],
  "/docs/web3": [
    { label: "Ethereum", href: "#ethereum" },
    { label: "Solana",   href: "#solana" },
  ],
  "/docs/web3/ethereum": [
    { label: "Why Ethereum",   href: "#why-ethereum" },
    { label: "My Projects",    href: "#my-projects" },
    { label: "EVM Chains",     href: "#evm-chains" },
    { label: "Dev Toolchain",  href: "#dev-toolchain" },
  ],
  "/docs/web3/ethereum/solidity": [
    { label: "ERC-20 Token",      href: "#erc-20-token" },
    { label: "Reentrancy Guard",  href: "#reentrancy-guard" },
    { label: "Access Control",    href: "#access-control" },
    { label: "Events",            href: "#events" },
    { label: "Testing",           href: "#testing" },
  ],
  "/docs/web3/ethereum/ethersjs": [
    { label: "Connect Wallet",    href: "#connect-wallet" },
    { label: "Read Contract",     href: "#read-from-contract" },
    { label: "Write Transaction", href: "#write-transaction" },
    { label: "Format Values",     href: "#format--parse-values" },
    { label: "Events",            href: "#listen-to-events" },
  ],
  "/docs/web3/solana": [
    { label: "Why Solana",     href: "#why-solana" },
    { label: "My Activity",    href: "#my-solana-activity" },
    { label: "Core Stack",     href: "#core-stack" },
    { label: "vs Ethereum",    href: "#key-differences-from-ethereum" },
  ],
  "/docs/web3/solana/wallet": [
    { label: "Provider Setup",   href: "#provider-setup" },
    { label: "Connect Button",   href: "#connect-button" },
    { label: "SOL Balance",      href: "#read-sol-balance" },
    { label: "SPL Token Balance",href: "#read-spl-token-balance" },
    { label: "Send SOL",         href: "#transaction-send-sol" },
  ],
  "/docs/web3/solana/programs": [
    { label: "Program Structure", href: "#basic-program-structure" },
    { label: "Call from Frontend",href: "#call-from-frontend-typescript" },
    { label: "PDAs",              href: "#program-derived-addresses-pdas" },
    { label: "SPL in Anchor",     href: "#spl-token-in-anchor" },
  ],
  "/docs/ai": [
    { label: "LLM Stack",          href: "#llm-stack" },
    { label: "Chatbot Architecture",href: "#chatbot" },
  ],
  "/docs/ai/llm": [
    { label: "Models I Use",     href: "#models-i-use" },
    { label: "Fallback Chain",   href: "#model-fallback-chain" },
    { label: "Streaming",        href: "#streaming-responses" },
    { label: "System Prompts",   href: "#system-prompt-design" },
    { label: "Gemini SDK",       href: "#gemini-sdk-google" },
  ],
  "/docs/ai/n8n": [
    { label: "Core Concepts",       href: "#core-concepts" },
    { label: "Lead Capture",        href: "#lead-capture-workflow" },
    { label: "Content Pipeline",    href: "#ai-content-pipeline-impact-stories" },
    { label: "HTTP Request Node",   href: "#http-request-node" },
    { label: "Webhook + AI Agent",  href: "#webhook--ai-agent-pattern" },
  ],
  "/docs/ai/rag": [
    { label: "When to Use RAG",  href: "#when-to-use-rag" },
    { label: "Architecture",     href: "#architecture" },
    { label: "Stack",            href: "#stack" },
    { label: "Ingestion",        href: "#ingestion" },
    { label: "Query",            href: "#query" },
    { label: "Chunking Tips",    href: "#chunking-tips" },
  ],
};

// ─── Breadcrumb map ───────────────────────────────────────────────────────────

const BREADCRUMB_MAP: Record<string, string[]> = {
  "/docs":                           ["Introduction"],
  "/docs/fullstack":                 ["Fullstack", "Overview"],
  "/docs/fullstack/nextjs":          ["Fullstack", "Next.js & React"],
  "/docs/fullstack/typescript":      ["Fullstack", "TypeScript Patterns"],
  "/docs/fullstack/monorepo":        ["Fullstack", "Monorepo vs Polyrepo"],
  "/docs/fullstack/github-vercel":   ["Fullstack", "GitHub, Vercel & Env"],
  "/docs/fullstack/deployment":      ["Fullstack", "Deployment"],
  "/docs/web3":                      ["Web3 & Blockchain", "Overview"],
  "/docs/web3/ethereum":             ["Web3 & Blockchain", "Ethereum", "Overview"],
  "/docs/web3/ethereum/solidity":    ["Web3 & Blockchain", "Ethereum", "Solidity Patterns"],
  "/docs/web3/ethereum/ethersjs":    ["Web3 & Blockchain", "Ethereum", "ethers.js"],
  "/docs/web3/solana":               ["Web3 & Blockchain", "Solana", "Overview"],
  "/docs/web3/solana/wallet":        ["Web3 & Blockchain", "Solana", "Wallet & Web3.js"],
  "/docs/web3/solana/programs":      ["Web3 & Blockchain", "Solana", "Anchor Programs"],
  "/docs/ai":                        ["AI & Automation", "Overview"],
  "/docs/ai/llm":                    ["AI & Automation", "LLM Stack"],
  "/docs/ai/n8n":                    ["AI & Automation", "n8n Workflows"],
  "/docs/ai/rag":                    ["AI & Automation", "RAG Pipeline"],
};

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  const isUnder = (prefix: string) => pathname.startsWith(prefix);

  return (
    <aside className="docs-sidebar">
      <nav className="docs-sidebar-nav" aria-label="Documentation">
        {NAV_SECTIONS.map((section, si) => (
          <div key={si} className="docs-nav-section">

            {/* Section label (collapsible) */}
            {section.label && (
              <button
                className="docs-nav-group-btn"
                onClick={() => toggle(`s-${si}`)}
                aria-expanded={!collapsed[`s-${si}`]}
              >
                <span>{section.label}</span>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  style={{ transform: collapsed[`s-${si}`] ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}

            {!collapsed[`s-${si}`] && (
              <>
                {/* Flat items (no subgroup) */}
                {section.items && (
                  <div className={section.label ? "docs-nav-children" : ""}>
                    {section.items.map((item) => (
                      <Link key={item.href} href={item.href}
                        className={`docs-nav-item${pathname === item.href ? " docs-nav-item-active" : ""}`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Subgroups (3rd level) */}
                {section.subgroups && (
                  <div className="docs-nav-children">
                    {section.subgroups.map((sub, gi) => {
                      const subKey = `g-${si}-${gi}`;
                      const subOpen = !collapsed[subKey];
                      return (
                        <div key={gi} className="docs-nav-subgroup">
                          <button
                            className="docs-nav-subgroup-btn"
                            onClick={() => toggle(subKey)}
                            aria-expanded={subOpen}
                          >
                            <span>{sub.label}</span>
                            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                              style={{ transform: !subOpen ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.18s" }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {subOpen && (
                            <div className="docs-nav-sub-children">
                              {sub.items.map((item) => (
                                <Link key={item.href} href={item.href}
                                  className={`docs-nav-item docs-nav-item-deep${pathname === item.href ? " docs-nav-item-active" : ""}`}>
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="docs-sidebar-footer">
        <a href="https://github.com/wayphantomme" target="_blank" rel="noopener noreferrer" className="docs-sidebar-gh">
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

function RightTOC() {
  const pathname = usePathname();
  const toc = TOC_MAP[pathname] ?? [];
  if (toc.length === 0) return null;
  return (
    <aside className="docs-toc">
      <p className="docs-toc-heading">On This Page</p>
      <nav>
        {toc.map((item) => (
          <a key={item.href} href={item.href} className="docs-toc-link">{item.label}</a>
        ))}
      </nav>
      <div className="docs-toc-divider" />
      <a href="https://github.com/wayphantomme" className="docs-toc-action" target="_blank" rel="noopener noreferrer">
        Edit this page
      </a>
    </aside>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  const pathname = usePathname();
  const crumbs = BREADCRUMB_MAP[pathname] ?? [];
  if (crumbs.length === 0) return null;
  return (
    <div className="docs-breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="docs-breadcrumb-sep">/</span>}
          <span className={i === crumbs.length - 1 ? "docs-breadcrumb-current" : "docs-breadcrumb-item"}>{c}</span>
        </span>
      ))}
    </div>
  );
}

// ─── Topbar ───────────────────────────────────────────────────────────────────

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
        <a href="https://github.com/wayphantomme" target="_blank" rel="noopener noreferrer" className="docs-topbar-gh" aria-label="GitHub">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </header>
  );
}

// ─── Shell ────────────────────────────────────────────────────────────────────

export default function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-root">
      <Topbar />
      <div className="docs-body">
        <Sidebar />
        <main className="docs-main">
          <Breadcrumb />
          <article className="docs-article">{children}</article>
          <footer className="docs-footer">
            <span>Last updated · September 2026</span>
          </footer>
        </main>
        <RightTOC />
      </div>
    </div>
  );
}
