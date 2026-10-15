export interface Project {
  id: string;
  name: string;
  logo: string;
  category: string;
  tags: string[];
  excerpt: string;
  desc: string;
  content: string;
  mockups: string[];
  web?: string;
  github?: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "bulldex",
    name: "Bulldex Finance",
    logo: "https://raw.githubusercontent.com/wayphantomme/bulldex-finance/main/frontend/public/bulldex-logo.png",
    category: "Web3 / DeFi",
    tags: ["Next.js", "Solidity", "ethers.js", "Ethereum", "DeFi"],
    year: "2025",
    role: "Fullstack Engineer & Smart Contract Developer",
    excerpt: "A full-stack DeFi platform on Ethereum with a Jupiter-style token swap, faucet, and real-time liquidity pool interface.",
    desc: "A full-stack DeFi platform on Ethereum — featuring a Jupiter-style token swap, faucet, and real-time liquidity pool interface. Built with Next.js, Solidity smart contracts, and ethers.js.",
    content: `Bulldex Finance started as a personal challenge: build a real DeFi product end-to-end, from smart contracts to UI, without cutting corners.

The platform runs entirely on Ethereum and includes three core features. First, a token swap interface modeled after Jupiter on Solana — users can swap ERC-20 tokens directly from their wallet with slippage control and price impact warnings. Second, a faucet that lets developers claim test tokens on Sepolia to interact with the protocol. Third, a real-time liquidity pool dashboard showing reserves, your LP position, and impermanent loss calculations.

The smart contracts are written in Solidity using OpenZeppelin standards. The frontend communicates with them through ethers.js v6, with full wallet integration via MetaMask and WalletConnect. Every state change goes through a proper transaction flow — approval, execution, confirmation.

One of the harder parts was making the UI feel responsive even though blockchain reads can be slow. The solution was aggressive optimistic UI — show the expected state immediately, then reconcile when the transaction confirms.

This project was built for the Lisk Spark Incubator 2025 and received $4,000 in grants.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/bulldex-finance/main/frontend/public/bulldex-portrait.png",
      "https://raw.githubusercontent.com/wayphantomme/bulldex-finance/main/frontend/public/bulldex-swap.png",
    ],
    web: "https://bulldex-finance.vercel.app/",
    github: "https://github.com/wayphantomme/bulldex-finance",
  },
  {
    id: "nekosinga",
    name: "Neko Singa AI",
    logo: "https://raw.githubusercontent.com/nekosinga/web/main/public/nekosinga-logo.png",
    category: "Web3 / AI",
    tags: ["Next.js", "AI", "Crypto", "Solana", "Real-time Data"],
    year: "2025",
    role: "Lead Engineer",
    excerpt: "AI-native crypto market tools with real-time data, wallet integrations, and agent workflows for on-chain analysis.",
    desc: "Building AI-native crypto market tools exploring real-time data, wallet integrations, and agent workflows.",
    content: `Neko Singa AI is built on a simple observation: most crypto tools give you raw data, but not intelligence. Price feeds, order books, wallet trackers — they surface numbers but don't tell you what to do with them.

The platform combines real-time on-chain data with LLM-powered analysis. You can ask questions in natural language — "which wallets bought more than 10 SOL of this token in the last hour?" — and get actionable answers, not just a spreadsheet.

The architecture is a Next.js frontend talking to a series of AI agent workflows. Each workflow handles a specific task: price monitoring, wallet behavior analysis, sentiment scoring from social data. The agents communicate through a shared context so they can collaborate on complex queries.

Wallet integration uses the Solana wallet adapter, so users connect their existing wallet and the agent can see their holdings and suggest relevant signals without ever touching their private keys.

This project started as a hackathon build and grew into something we continue developing. The AI backbone runs on Gemini with a fallback chain to handle rate limits gracefully.`,
    mockups: [
      "https://raw.githubusercontent.com/nekosinga/app/main/public/nekosinga-screen.png",
      "https://raw.githubusercontent.com/nekosinga/app/main/public/nekosinga-cta.png",
    ],
    web: "https://nekosinga.vercel.app/",
    github: "https://github.com/nekosinga",
  },
  {
    id: "pohenhillscamp",
    name: "Pohen Hills Camp",
    logo: "https://raw.githubusercontent.com/wayphantomme/pohenhillscamp/main/public/logo-rounded.png",
    category: "Web / Hospitality",
    tags: ["Next.js", "Tailwind CSS", "UI/UX", "Bali"],
    year: "2024",
    role: "Fullstack Developer & Designer",
    excerpt: "A nature resort and glamping website for a Bali destination — built for bookings, discovery, and a strong first impression.",
    desc: "A nature resort and glamping destination in Bali — featuring cozy rooms, camping tents, and outdoor activities. Built with Next.js and Tailwind CSS.",
    content: `Pohen Hills Camp is a glamping and nature resort tucked in the hills of Bali. The client needed a website that could do two things well: make people want to visit, and make it easy to book.

The design direction was intentional — natural colors, generous white space, full-bleed photography. The goal was to let the location sell itself rather than compete with a busy layout.

On the technical side, the site is a Next.js app with static generation for fast load times. Room pages are dynamically generated from a data layer so the client can update availability and descriptions without touching code. The booking flow integrates with their existing reservation system via a lightweight API wrapper.

Performance was a priority because a lot of the target audience is on mobile in areas with variable connectivity. The site scores 99/100 on Google PageSpeed — images are WebP with lazy loading, fonts are subset and preloaded, and there are no unnecessary client-side JavaScript bundles.

This was a client project delivered through Megatha Tech.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/pohenhillscamp/main/public/screenshots/02-about.png",
      "https://raw.githubusercontent.com/wayphantomme/pohenhillscamp/main/public/screenshots/room-family-room.png",
    ],
    web: "https://pohenhillscamp.vercel.app/",
    github: "https://github.com/wayphantomme/pohenhillscamp",
  },
  {
    id: "impact-stories-blog",
    name: "Impact Stories Blog Automation",
    logo: "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/logos/logo-is-blue-nobg.png",
    category: "AI Automation",
    tags: ["Next.js", "AI", "n8n", "Content Automation", "LLM"],
    year: "2025",
    role: "Developer & Automation Architect",
    excerpt: "An automated blog platform that uses AI to generate and publish impact stories — zero manual writing required.",
    desc: "An automated blog platform that generates and publishes impact stories using AI. Built with Next.js, with content pipeline automation for streamlined story creation and publishing.",
    content: `Most content operations are bottlenecked by writing. You have the data, the insights, the stories worth telling — but turning them into published articles takes time and people.

Impact Stories is a proof of concept for what happens when you remove that bottleneck entirely. The system takes structured inputs — a project summary, key metrics, stakeholder quotes — and outputs a fully written, formatted, and published blog post.

The content pipeline runs on n8n. A trigger fires when new data lands in a connected Airtable base. n8n passes the data through a series of AI nodes: first a planning step that outlines the story structure, then a writing step that generates the full article, then an editing pass that checks tone and consistency. The final output gets published directly to the Next.js blog via a webhook.

The frontend is a clean reading experience — no visual noise, just the story. Posts are statically generated at publish time so they load instantly and index well.

The most interesting engineering problem was the editing pass. Raw LLM output tends to be verbose and formulaic. The editor node uses a different prompt strategy — it reads the draft as a critical reader, not a writer — which catches most of the common issues before anything goes live.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/images/home-2.png",
      "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/images/blog-2.png",
    ],
    web: "https://impact-stories-blog.vercel.app/",
    github: "https://github.com/wayphantomme/impact-stories-blog-automation",
  },
  {
    id: "tech-with-phantom",
    name: "Tech with Phantom",
    logo: "https://raw.githubusercontent.com/wayphantomme/tech-with-phantom/main/public/TWP%20Logo.svg",
    category: "EdTech",
    tags: ["Next.js", "TypeScript", "EdTech", "Course Platform"],
    year: "2024",
    role: "Fullstack Developer",
    excerpt: "An online learning platform with course management, video lessons, and student progress tracking.",
    desc: "An online learning platform for tech education — featuring course management, video lessons, and student progress tracking. Built with Next.js, TypeScript, and modern web technologies.",
    content: `Tech with Phantom is a learning platform built to teach practical tech skills to beginners in Southeast Asia. The goal was to make it feel approachable — not like a corporate LMS, but like learning from a friend who knows their stuff.

The platform has three main surfaces. The course catalog lets students browse by topic and see what they'll learn before committing. The lesson view is clean and distraction-free, with video and text content side by side. The progress dashboard shows where students are in each course and what's next.

Under the hood, courses and lessons are managed through a structured data layer. Adding a new course means updating a config file — no database required for the initial version, which kept the deployment simple and the load times fast.

Authentication uses NextAuth.js with email magic links — no passwords to manage. Progress is tracked per-user in a lightweight Postgres instance.

The hardest design decision was pacing. Putting too much on one page overwhelms beginners. The lesson UI went through several iterations before landing on the current layout — one concept per screen, with clear next steps always visible.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/tech-with-phantom/main/public/screenshots/twp-landing-page.png",
      "https://raw.githubusercontent.com/wayphantomme/tech-with-phantom/main/public/screenshots/twp-courses.png",
    ],
    web: "https://techwithphantom.vercel.app/",
    github: "https://github.com/wayphantomme/tech-with-phantom",
  },
  {
    id: "megatha-restaurant",
    name: "Megatha Restaurant App",
    logo: "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/Megatha%20Logo%20BW.png",
    category: "Full-stack / POS",
    tags: ["Next.js", "Tailwind CSS", "POS", "Restaurant", "Full-stack"],
    year: "2024",
    role: "Fullstack Developer",
    excerpt: "A full-stack restaurant management app with POS system, table management, and digital menu ordering.",
    desc: "A full-stack restaurant management app with POS system, table management, and menu ordering. Built with Next.js and Tailwind CSS.",
    content: `Megatha Restaurant App came from a real problem: the restaurant was running on paper tickets and a whiteboard for table status. Staff were walking back and forth to check what was available, and orders were getting lost during busy service.

The app replaces all of that. The POS screen lets staff take orders directly from a tablet — browse the menu, add items, apply modifiers, and send to the kitchen in one flow. Table management shows a live floor plan with color-coded status: available, occupied, bill requested. The kitchen display shows incoming orders in real time.

The frontend is a Next.js app optimized for touch — large tap targets, no tiny controls, designed to work on a 10-inch tablet in a bright kitchen. State management is done with Zustand for fast, predictable updates without unnecessary re-renders.

The backend is a set of Next.js API routes backed by a simple Postgres schema. WebSocket connections keep the kitchen display and POS in sync without polling.

One thing that mattered a lot here was offline resilience. Restaurant WiFi can be unreliable. The app caches the current order state locally so a network blip doesn't lose an order mid-service.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/megatha-home.png",
      "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/megatha-pos.png",
    ],
    web: "https://megatha-resto.vercel.app/",
    github: "https://github.com/wayphantomme/megatha-restaurant-app",
  },
];
