import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | Wayan Phantom",
  description:
    "Developer notes and documentation by Wayan Phantom — Fullstack, Web3, and AI.",
};

const NAV = [
  {
    label: "Overview",
    href: "/docs",
    icon: "📖",
  },
  {
    label: "Fullstack",
    href: "/docs/fullstack",
    icon: "🖥️",
    description: "Next.js, React, TypeScript, Node.js, PostgreSQL",
  },
  {
    label: "Web3 & Blockchain",
    href: "/docs/web3",
    icon: "⛓️",
    description: "Ethereum, Solana, Solidity, DeFi, ethers.js",
  },
  {
    label: "AI & Automation",
    href: "/docs/ai",
    icon: "🤖",
    description: "LLMs, n8n, RAG pipelines, AI chatbots",
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs-root">
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <header className="docs-topbar">
        <div className="docs-topbar-inner">
          <Link href="/" className="docs-home-link">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Wayan Phantom
          </Link>
          <span className="docs-topbar-sep">/</span>
          <span className="docs-topbar-title">Docs</span>
        </div>
      </header>

      <div className="docs-body">
        {/* ── Sidebar ──────────────────────────────────────────────── */}
        <aside className="docs-sidebar">
          <p className="docs-sidebar-heading">Developer Docs</p>
          <nav className="docs-sidebar-nav" aria-label="Docs navigation">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="docs-sidebar-link">
                <span className="docs-sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="docs-sidebar-footer">
            <a
              href="https://github.com/wayphantomme"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-sidebar-gh"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              wayphantomme
            </a>
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────────── */}
        <main className="docs-main">
          <article className="docs-article">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
