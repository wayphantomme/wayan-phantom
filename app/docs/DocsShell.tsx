"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

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
      { label: "Overview",        href: "/docs/ai" },
      { label: "LLM Stack",       href: "/docs/ai/llm" },
      { label: "Google AI Studio", href: "/docs/ai/gemini" },
      { label: "n8n Workflows",   href: "/docs/ai/n8n" },
      { label: "RAG Pipeline",    href: "/docs/ai/rag" },
    ],
  },
  {
    label: "Fundamentals",
    href: "/docs/fundamentals",
    items: [
      { label: "Overview", href: "/docs/fundamentals" },
    ],
    subgroups: [
      {
        label: "Data Structures",
        items: [
          { label: "Overview",      href: "/docs/fundamentals/data-structures" },
          { label: "Arrays",        href: "/docs/fundamentals/data-structures/arrays" },
          { label: "Linked Lists",  href: "/docs/fundamentals/data-structures/linked-lists" },
          { label: "Trees & Graphs",href: "/docs/fundamentals/data-structures/trees" },
          { label: "Hash Maps",     href: "/docs/fundamentals/data-structures/hashmaps" },
        ],
      },
      {
        label: "Algorithms",
        items: [
          { label: "Overview",   href: "/docs/fundamentals/algorithms" },
          { label: "Sorting",    href: "/docs/fundamentals/algorithms/sorting" },
          { label: "DP",         href: "/docs/fundamentals/algorithms/dp" },
          { label: "Recursion",  href: "/docs/fundamentals/algorithms/recursion" },
        ],
      },
      {
        label: "Design System",
        items: [
          { label: "Overview",    href: "/docs/fundamentals/design-system" },
          { label: "Tokens",      href: "/docs/fundamentals/design-system/tokens" },
          { label: "Typography",  href: "/docs/fundamentals/design-system/typography" },
          { label: "Components",  href: "/docs/fundamentals/design-system/components" },
        ],
      },
      {
        label: "Leetcode Patterns",
        items: [
          { label: "Overview",        href: "/docs/fundamentals/leetcode" },
          { label: "Sliding Window",  href: "/docs/fundamentals/leetcode/sliding-window" },
          { label: "Two Pointers",    href: "/docs/fundamentals/leetcode/two-pointers" },
          { label: "BFS & DFS",       href: "/docs/fundamentals/leetcode/bfs-dfs" },
        ],
      },
    ],
  },
  {
    label: "Chains & Ecosystems",
    href: "/docs/chains",
    items: [
      { label: "Overview", href: "/docs/chains" },
    ],
    subgroups: [
      {
        label: "EVM L2s",
        items: [
          { label: "Overview",        href: "/docs/chains/evm-l2s" },
          { label: "Arbitrum",        href: "/docs/chains/evm-l2s/arbitrum" },
          { label: "Base",            href: "/docs/chains/evm-l2s/base" },
          { label: "Robinhood Chain", href: "/docs/chains/evm-l2s/robinhood" },
          { label: "OP Stack",        href: "/docs/chains/evm-l2s/op-stack" },
        ],
      },
      {
        label: "Polkadot",
        items: [
          { label: "Overview",   href: "/docs/chains/polkadot" },
          { label: "Substrate",  href: "/docs/chains/polkadot/substrate" },
          { label: "Mandala",    href: "/docs/chains/polkadot/mandala" },
        ],
      },
      {
        label: "Private Chains",
        items: [
          { label: "Overview",            href: "/docs/chains/private" },
          { label: "Hyperledger Fabric",  href: "/docs/chains/private/hyperledger" },
          { label: "Quorum",              href: "/docs/chains/private/quorum" },
        ],
      },
      {
        label: "Frameworks",
        items: [
          { label: "Overview",          href: "/docs/chains/frameworks" },
          { label: "Arbitrum Orbit",    href: "/docs/chains/frameworks/orbit" },
          { label: "Substrate",         href: "/docs/chains/frameworks/substrate" },
        ],
      },
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
  "/docs/ai/gemini": [
    { label: "What is AI Studio",  href: "#what-is-google-ai-studio" },
    { label: "Model Families",     href: "#gemini-model-families" },
    { label: "Capabilities",       href: "#what-each-model-can-do" },
    { label: "Free Tier Limits",   href: "#free-tier-rate-limits-real-data" },
    { label: "Model Selection",    href: "#model-selection-guide" },
    { label: "Fallback Chain",     href: "#fallback-chain-for-production" },
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
  "/docs/chains": [
    { label: "Public vs Private",  href: "#public-vs-private-blockchain" },
    { label: "L1 vs L2 vs L3",    href: "#l1-vs-l2-vs-l3" },
    { label: "Two Rollup Types",   href: "#two-rollup-approaches" },
    { label: "What's Covered",     href: "#whats-covered-here" },
  ],
  "/docs/chains/evm-l2s": [
    { label: "Why L2s Exist",      href: "#why-l2s-exist" },
    { label: "Rollup Stacks",      href: "#two-rollup-stacks" },
    { label: "Comparing Chains",   href: "#comparing-the-main-chains" },
    { label: "Deploy Everywhere",  href: "#deploy-the-same-contract-everywhere" },
  ],
  "/docs/chains/evm-l2s/arbitrum": [
    { label: "Products",          href: "#products" },
    { label: "How It Works",      href: "#how-arbitrum-works" },
    { label: "Deploy",            href: "#connect-and-deploy" },
    { label: "Orbit L3s",         href: "#arbitrum-orbit-l3s" },
  ],
  "/docs/chains/evm-l2s/base": [
    { label: "Why Base",          href: "#why-base" },
    { label: "Deploy",            href: "#deploy-to-base" },
    { label: "Base vs Arbitrum",  href: "#base-vs-arbitrum-when-to-choose" },
    { label: "Superchain",        href: "#superchain" },
  ],
  "/docs/chains/evm-l2s/robinhood": [
    { label: "What It Is",        href: "#what-it-is" },
    { label: "Key Info",          href: "#key-info" },
    { label: "What's Different",  href: "#what-makes-it-different" },
    { label: "Why It Matters",    href: "#context-why-it-matters" },
  ],
  "/docs/chains/evm-l2s/op-stack": [
    { label: "What It Is",        href: "#what-it-is" },
    { label: "Superchain",        href: "#superchain-members-september-2026" },
    { label: "Architecture",      href: "#architecture" },
    { label: "Deploy Your Own",   href: "#deploy-your-own-op-stack-chain" },
    { label: "vs Arbitrum Orbit", href: "#op-stack-vs-arbitrum-orbit" },
  ],
  "/docs/chains/polkadot": [
    { label: "Architecture",      href: "#core-architecture" },
    { label: "vs Ethereum",       href: "#key-concepts-vs-ethereum" },
    { label: "Parachains",        href: "#notable-parachains" },
    { label: "Kusama",            href: "#kusama" },
  ],
  "/docs/chains/polkadot/substrate": [
    { label: "What It Is",        href: "#what-substrate-is" },
    { label: "FRAME Pallets",     href: "#frame-pallets" },
    { label: "Start a Chain",     href: "#start-a-new-substrate-chain" },
    { label: "Forkless Upgrades", href: "#forkless-upgrades" },
    { label: "vs Cosmos SDK",     href: "#substrate-vs-cosmos-sdk" },
  ],
  "/docs/chains/polkadot/mandala": [
    { label: "What Acala Is",     href: "#what-acala-is" },
    { label: "Networks",          href: "#mandala-vs-acala-vs-karura" },
    { label: "Connect",           href: "#connect-to-mandala" },
    { label: "EVM+ on Mandala",   href: "#use-evm-on-mandala" },
  ],
  "/docs/chains/private": [
    { label: "Public vs Private",  href: "#public-vs-private-comparison" },
    { label: "When to Use",        href: "#when-private-blockchain-makes-sense" },
    { label: "When NOT to Use",    href: "#when-not-to-use-private-blockchain" },
  ],
  "/docs/chains/private/hyperledger": [
    { label: "Architecture",       href: "#architecture" },
    { label: "Chaincode",          href: "#chaincode-smart-contracts" },
    { label: "Transaction Flow",   href: "#transaction-flow" },
    { label: "Real World Usage",   href: "#real-world-usage" },
  ],
  "/docs/chains/private/quorum": [
    { label: "What Quorum Is",     href: "#what-quorum-is" },
    { label: "vs Ethereum",        href: "#quorum-vs-standard-ethereum" },
    { label: "Private Tx",         href: "#private-transactions" },
    { label: "JPM Coin",           href: "#jpm-coin" },
  ],
  "/docs/chains/frameworks": [
    { label: "Overview",           href: "#overview" },
    { label: "Which to Choose",    href: "#which-to-choose" },
  ],
  "/docs/chains/frameworks/orbit": [
    { label: "What You Get",       href: "#what-you-get" },
    { label: "Deploy",             href: "#deploy-an-orbit-chain" },
    { label: "Custom Gas Token",   href: "#custom-gas-token" },
    { label: "AnyTrust vs Rollup", href: "#anytrust-vs-rollup-mode" },
  ],
  "/docs/chains/frameworks/substrate": [
    { label: "Deployment Modes",   href: "#two-deployment-modes" },
    { label: "Runtime Modules",    href: "#runtime-modules-pallets" },
    { label: "Forkless Upgrades",  href: "#forkless-upgrades" },
    { label: "Polkadot Parachain", href: "#polkadot-parachain-slot" },
    { label: "When to Use",        href: "#when-substrate-is-worth-the-complexity" },
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
  "/docs/ai/llm":    ["AI & Automation", "LLM Stack"],
  "/docs/ai/gemini": ["AI & Automation", "Google AI Studio"],
  "/docs/ai/n8n":    ["AI & Automation", "n8n Workflows"],
  "/docs/ai/rag":                    ["AI & Automation", "RAG Pipeline"],
  "/docs/chains":                          ["Chains & Ecosystems", "Overview"],
  "/docs/chains/evm-l2s":                  ["Chains & Ecosystems", "EVM L2s", "Overview"],
  "/docs/chains/evm-l2s/arbitrum":         ["Chains & Ecosystems", "EVM L2s", "Arbitrum"],
  "/docs/chains/evm-l2s/base":             ["Chains & Ecosystems", "EVM L2s", "Base"],
  "/docs/chains/evm-l2s/robinhood":        ["Chains & Ecosystems", "EVM L2s", "Robinhood Chain"],
  "/docs/chains/evm-l2s/op-stack":         ["Chains & Ecosystems", "EVM L2s", "OP Stack"],
  "/docs/chains/polkadot":                 ["Chains & Ecosystems", "Polkadot", "Overview"],
  "/docs/chains/polkadot/substrate":       ["Chains & Ecosystems", "Polkadot", "Substrate"],
  "/docs/chains/polkadot/mandala":         ["Chains & Ecosystems", "Polkadot", "Mandala"],
  "/docs/chains/private":                  ["Chains & Ecosystems", "Private Chains", "Overview"],
  "/docs/chains/private/hyperledger":      ["Chains & Ecosystems", "Private Chains", "Hyperledger Fabric"],
  "/docs/chains/private/quorum":           ["Chains & Ecosystems", "Private Chains", "Quorum"],
  "/docs/chains/frameworks":               ["Chains & Ecosystems", "Frameworks", "Overview"],
  "/docs/chains/frameworks/orbit":         ["Chains & Ecosystems", "Frameworks", "Arbitrum Orbit"],
  "/docs/chains/frameworks/substrate":     ["Chains & Ecosystems", "Frameworks", "Substrate"],
  "/docs/fundamentals":                            ["Fundamentals", "Overview"],
  "/docs/fundamentals/data-structures":            ["Fundamentals", "Data Structures", "Overview"],
  "/docs/fundamentals/data-structures/arrays":     ["Fundamentals", "Data Structures", "Arrays"],
  "/docs/fundamentals/data-structures/linked-lists":["Fundamentals", "Data Structures", "Linked Lists"],
  "/docs/fundamentals/data-structures/trees":      ["Fundamentals", "Data Structures", "Trees & Graphs"],
  "/docs/fundamentals/data-structures/hashmaps":   ["Fundamentals", "Data Structures", "Hash Maps"],
  "/docs/fundamentals/algorithms":                 ["Fundamentals", "Algorithms", "Overview"],
  "/docs/fundamentals/algorithms/sorting":         ["Fundamentals", "Algorithms", "Sorting"],
  "/docs/fundamentals/algorithms/dp":              ["Fundamentals", "Algorithms", "Dynamic Programming"],
  "/docs/fundamentals/algorithms/recursion":       ["Fundamentals", "Algorithms", "Recursion"],
  "/docs/fundamentals/design-system":              ["Fundamentals", "Design System", "Overview"],
  "/docs/fundamentals/design-system/tokens":       ["Fundamentals", "Design System", "Tokens"],
  "/docs/fundamentals/design-system/typography":   ["Fundamentals", "Design System", "Typography"],
  "/docs/fundamentals/design-system/components":   ["Fundamentals", "Design System", "Components"],
  "/docs/fundamentals/leetcode":                   ["Fundamentals", "Leetcode Patterns", "Overview"],
  "/docs/fundamentals/leetcode/sliding-window":    ["Fundamentals", "Leetcode Patterns", "Sliding Window"],
  "/docs/fundamentals/leetcode/two-pointers":      ["Fundamentals", "Leetcode Patterns", "Two Pointers"],
  "/docs/fundamentals/leetcode/bfs-dfs":           ["Fundamentals", "Leetcode Patterns", "BFS & DFS"],
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

// ─── Search index + component ────────────────────────────────────────────────

const SEARCH_INDEX = Object.entries(BREADCRUMB_MAP).map(([href, crumbs]) => ({
  href,
  title: crumbs[crumbs.length - 1],
  section: crumbs[0],
}));

function Search() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 1
    ? SEARCH_INDEX.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.section.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") { setOpen(false); setQuery(""); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false); setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={wrapRef} className="docs-search-wrap">
      {!open ? (
        <button
          className="docs-search-btn"
          onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
          aria-label="Search documentation"
        >
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <span className="docs-search-placeholder">Search...</span>
          <kbd className="docs-search-kbd">⌘K</kbd>
        </button>
      ) : (
        <div className="docs-search-active">
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, color: "#94a3b8" }}>
            <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="docs-search-input"
          />
          {(results.length > 0 || query.length > 0) && (
            <div className="docs-search-dropdown">
              {results.length > 0 ? results.map(r => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="docs-search-result"
                  onClick={() => { setOpen(false); setQuery(""); }}
                >
                  <span className="docs-search-result-title">{r.title}</span>
                  <span className="docs-search-result-section">{r.section}</span>
                </Link>
              )) : (
                <p className="docs-search-empty">No results for &ldquo;{query}&rdquo;</p>
              )}
            </div>
          )}
        </div>
      )}
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
        <Search />
        <a href="https://github.com/wayphantomme" target="_blank" rel="noopener noreferrer" className="docs-topbar-gh" aria-label="GitHub">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
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
