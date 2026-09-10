import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | Wayan Phantom",
  description: "Developer documentation and notes by Wayan Phantom.",
};

const CATEGORIES = [
  {
    href: "/docs/fullstack",
    icon: "🖥️",
    label: "Fullstack",
    desc: "Notes on building end-to-end web apps. Next.js, React, TypeScript, Node.js, PostgreSQL, and deployment patterns I use in production.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    color: "#3b82f6",
  },
  {
    href: "/docs/web3",
    icon: "⛓️",
    label: "Web3 & Blockchain",
    desc: "Everything I've learned building DeFi protocols on Ethereum and Solana. Smart contracts, token swaps, liquidity pools, wallet integrations.",
    tags: ["Solidity", "ethers.js", "Solana", "DeFi", "EVM"],
    color: "#8b5cf6",
  },
  {
    href: "/docs/ai-dev",
    icon: "🤖",
    label: "AI Developer",
    desc: "Building with AI APIs. LLM integration, Google Gemini, RAG pipelines, and production chatbot architecture.",
    tags: ["Gemini", "LLMs", "RAG", "Embeddings", "Streaming"],
    color: "#10b981",
  },
  {
    href: "/docs/ai-auto",
    icon: "⚙️",
    label: "AI Automation",
    desc: "Low-code automation with n8n. Workflow design, AI agent nodes, webhooks, and real client delivery patterns.",
    tags: ["n8n", "Webhooks", "Workflows", "No-Code", "Agents"],
    color: "#f59e0b",
  },
];

export default function DocsPage() {
  return (
    <div className="docs-landing">
      <div className="docs-landing-header">
        <h1 className="docs-landing-title">Developer Docs</h1>
        <p className="docs-landing-sub">
          Notes, patterns, and things I&apos;ve built across Fullstack, Web3, and AI.
          Written for developers, feel free to use anything here.
        </p>
      </div>

      <div className="docs-category-grid">
        {CATEGORIES.map((cat) => (
          <Link key={cat.href} href={cat.href} className="docs-category-card">
            <div className="docs-category-icon" style={{ background: cat.color + "18", color: cat.color }}>
              {cat.icon}
            </div>
            <h2 className="docs-category-label">{cat.label}</h2>
            <p className="docs-category-desc">{cat.desc}</p>
            <div className="docs-category-tags">
              {cat.tags.map((t) => (
                <span key={t} className="docs-tag">{t}</span>
              ))}
            </div>
            <span className="docs-category-arrow">
              Read docs
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10m0 0v10m0-10L7 17" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
