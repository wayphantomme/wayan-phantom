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
  client?: {
    name: string;
    web?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
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
    desc: "A full-stack DeFi platform on Ethereum featuring a Jupiter-style token swap, faucet, and real-time liquidity pool interface. Built with Next.js, Solidity smart contracts, and ethers.js.",
    content: `Most DeFi tools are either too complex for new users or too minimal to be useful for builders who want to understand how things work. I wanted to build something that sat in between: a complete, well-structured DeFi platform that showed the full stack from contract to UI.

The platform has three core features. The swap interface is modeled after Jupiter on Solana: users pick input and output tokens, see price impact, set slippage tolerance, and execute. The faucet lets developers claim test tokens on Sepolia directly from the UI. The pool dashboard shows live reserves, LP positions, and impermanent loss in real time.

Each contract was written in Solidity using OpenZeppelin standards. The frontend communicates with them through ethers.js v6, with full wallet integration via MetaMask and WalletConnect.

The hardest problem was latency. Blockchain reads are slow, and a UI that blocks on every call feels broken. The solution was optimistic UI: show the expected outcome immediately, then reconcile with the confirmed on-chain state once the transaction settles.

This project was built as part of the Web3 ecosystem exploration that led to the Lisk Spark Incubator entry with Krono Finance.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/bulldex-finance/main/frontend/public/bulldex-landing.png",
      "https://raw.githubusercontent.com/wayphantomme/bulldex-finance/main/frontend/public/bulldex-swap.png",
      "https://raw.githubusercontent.com/wayphantomme/bulldex-finance/main/frontend/public/bulldex-faucet.png",
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
    content: `Most crypto tools surface raw data but provide no intelligence on top of it. Price feeds, order books, and wallet trackers show numbers but leave interpretation entirely to the user. Neko Singa started from a simple question: what if you could just ask?

The platform combines real-time on-chain data with LLM-powered analysis. Users can ask questions in natural language and get actionable answers, not just tables. Something like "which wallets have been accumulating this token in the last 24 hours" routes through a set of AI agents, gets aggregated, and comes back as a clean answer.

The architecture is a Next.js frontend backed by specialized agent workflows. Each agent handles a domain: price monitoring, wallet behavior, sentiment scoring from social data. They share context so they can collaborate on queries that cross multiple data sources.

Wallet integration uses the Solana wallet adapter. Users connect their existing wallet and the agents can reference their holdings without ever touching private keys. The AI backbone runs on Gemini with a fallback chain to handle rate limits gracefully.

The project started as a hackathon build and grew from there. The main engineering challenge was keeping response times fast when the underlying data sources have inconsistent latency.`,
    mockups: [
      "https://raw.githubusercontent.com/nekosinga/app/main/public/nekosinga-screen.png",
      "https://raw.githubusercontent.com/nekosinga/app/main/public/nekosinga-cta.png",
    ],
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
    excerpt: "A nature resort and glamping website for a Bali destination, built for bookings, discovery, and a strong first impression.",
    desc: "A nature resort and glamping destination in Bali featuring cozy rooms, camping tents, and outdoor activities. Built with Next.js and Tailwind CSS.",
    content: `Pohen Hills Camp is a glamping and nature resort in the hills of Bali. The experience was already good. The problem was that people could not find it, and when they did, the online presence did not match the quality of the place itself.

The design direction was simple: let the location sell itself. Natural colors, generous white space, and full-bleed photography. No clutter competing with the images. Room pages are generated from a structured data layer so the client can update availability and descriptions without touching code.

A lot of the target audience browses on mobile with inconsistent connectivity, so performance was a hard requirement from the start. Images are served as WebP with lazy loading, fonts are subset and preloaded, and client-side JavaScript is kept minimal. The site hit 99/100 on Google PageSpeed.

The booking flow connects to their existing reservation system via a lightweight API wrapper, keeping the implementation simple while giving the client flexibility to swap systems later.

This was a client project delivered through Megatha Tech.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/pohenhillscamp/main/public/screenshots/02-about.png",
      "https://raw.githubusercontent.com/wayphantomme/pohenhillscamp/main/public/screenshots/room-family-room.png",
    ],
    web: "https://pohenhillscamp.vercel.app/",
    github: "https://github.com/wayphantomme/pohenhillscamp",
    client: {
      name: "Pohen Hills Camp",
      web: "https://pohenhillscamp.vercel.app/",
      instagram: "https://www.instagram.com/pohenhillscamp/",
    },
  },
  {
    id: "impact-stories-blog",
    name: "Impact Stories Blog Automation",
    logo: "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/logos/logo-is-blue-nobg.png",
    category: "AI Automation",
    tags: ["Next.js", "AI", "n8n", "Content Automation", "LLM"],
    year: "2025",
    role: "Developer & Automation Architect",
    excerpt: "An automated blog platform that uses AI to generate and publish impact stories with zero manual writing required.",
    desc: "An automated blog platform that generates and publishes impact stories using AI. Built with Next.js, with a content pipeline automation for streamlined story creation and publishing.",
    content: `Most content operations are bottlenecked by writing. The data exists, the outcomes are real, but turning them into published articles takes time and people that most teams do not have spare.

Impact Stories is a pipeline that removes that bottleneck. The system takes structured inputs like a project summary, key metrics, and stakeholder context, and produces a fully written, formatted, and published blog post.

The pipeline runs on n8n. A trigger fires when new data lands in a connected Airtable base. The workflow passes the data through three AI nodes in sequence: a planning step that outlines the story structure, a writing step that drafts the full article, and an editing pass that reviews tone and consistency before anything goes live.

The editing pass was the most important piece to get right. Raw LLM output tends to be verbose and repetitive. The editor node reads the draft as a critical reader rather than a writer, which catches most of the common problems automatically.

The frontend is a clean Next.js reading experience. Posts are statically generated at publish time so they load fast and index well in search.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/images/home-page.png",
      "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/images/blog-page.png",
      "https://raw.githubusercontent.com/wayphantomme/impact-stories-blog-automation/main/public/images/post.png",
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
    desc: "An online learning platform for tech education featuring course management, video lessons, and student progress tracking. Built with Next.js and TypeScript.",
    content: `Teaching tech skills to beginners in Southeast Asia is harder when the platform itself gets in the way. Most LMS tools feel like enterprise software: heavy, complex, and designed for administrators rather than learners.

The goal with Tech with Phantom was a platform that felt like learning from a friend. Simple to navigate, focused on one concept at a time, with the next step always visible.

The course catalog lets students browse by topic and see exactly what they will cover before committing. The lesson view keeps video and text side by side without distraction. The progress dashboard surfaces where a student is in each course and what comes next.

Courses are managed through a structured data layer. Adding new content means updating a config file, which kept the deployment simple and gave instructors a way to manage content without developer involvement.

The hardest design decision was pacing. The lesson UI went through several iterations before landing on the current layout: one concept per screen, clear progression, no cognitive overload.`,
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
    content: `The restaurant was running on paper tickets and a whiteboard for table status. Staff were making decisions without shared context. During busy service, orders got lost, tables sat empty while guests waited, and the kitchen had no reliable view of what was coming.

The problem was not that they lacked a system. It was that everyone on the floor was working from different information at the same time.

The app gives every role a single shared view. The POS lets staff take orders from a tablet, browse the menu, add modifiers, and send to the kitchen in one flow. The floor plan shows live table status with color coding: available, occupied, bill requested. The kitchen display shows incoming orders in sequence.

The frontend is designed for touch on a 10-inch tablet with large tap targets and no small controls. State is managed with Zustand for fast, predictable updates. WebSocket connections keep the kitchen display and POS in sync without polling.

Offline resilience was a requirement from the start. Restaurant WiFi is not always reliable. The app caches current order state locally so a network drop does not lose an order mid-service.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/megatha-home.png",
      "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/megatha-pos.png",
      "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/megatha-tables.png",
    ],
    web: "https://megatha-resto.vercel.app/",
    github: "https://github.com/wayphantomme/megatha-restaurant-app",
  },
  {
    id: "laby-finance",
    name: "Laby Finance",
    logo: "https://raw.githubusercontent.com/wayphantomme/laby-finance/main/app/public/logo.png",
    category: "Full-stack / Fintech",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Gemini AI", "Auth.js", "Recharts"],
    year: "2025",
    role: "Fullstack Developer",
    excerpt: "A personal finance app with double-entry bookkeeping, three standard financial reports, and Gemini AI for screenshot parsing and chat assistance.",
    desc: "Personal finance app with double-entry accounting, Income Statement, Balance Sheet, Cash Flow reports, and Gemini AI for screenshot parsing.",
    content: `Most personal finance apps treat money like a list of expenses. Laby treats it like a company's books: proper double-entry bookkeeping, a structured chart of accounts, and three standard financial reports built for one person.

The problem it solves is simple. Tracking where your money goes is easy. Understanding your actual financial position — net worth, cash flow trends, income versus expenses over twelve months — requires the same tools companies use. Those tools have never been packaged cleanly for individuals.

Laby gives you an Income Statement, Balance Sheet, and Cash Flow Statement. Every transaction creates balanced journal entries automatically. You pick a category and enter an amount; the system handles the accounting logic. The reports are calculated in real time from raw journal lines, so they are always consistent with the underlying data.

The AI layer is what makes data entry practical. Upload a bank screenshot or type in natural language and Gemini parses it into a structured entry. No AI result ever auto-commits — every draft requires explicit user confirmation before hitting the database. For financial data, silent automation is not acceptable.

The chart of accounts follows Indonesian accounting conventions with 62 default accounts structured across Assets, Liabilities, Equity, Revenue, and Expenses. Amounts are stored as integer cents to avoid floating-point rounding errors.

The audit log records every create, update, and delete with a timestamp and source — manual, screenshot AI, or chat AI. Soft deletes only. Nothing is ever permanently removed.`,
    mockups: [],
    web: "https://laby-wayphantomme.vercel.app/login",
    github: "https://github.com/wayphantomme/laby-finance",
  },
  {
    id: "meeting-to-task",
    name: "Meeting to Task Automation",
    logo: "https://cdn.simpleicons.org/n8n/EA4B22",
    category: "AI Automation",
    tags: ["n8n", "Gemini", "Monday.com", "Fireflies", "Slack", "Workflow"],
    year: "2025",
    role: "Automation Architect",
    excerpt: "An n8n workflow that turns meeting transcripts into structured Monday.com tasks automatically, with a Slack recap after every meeting.",
    desc: "Automated pipeline: Fireflies transcript ready → Gemini extracts action items → Monday.com tasks created → Slack recap posted.",
    content: `Most teams walk out of meetings with a good conversation and no clear record of who does what by when. Notes sit in someone's inbox. Tasks never make it into the project board. Follow-ups happen manually, or not at all.

This workflow removes that gap entirely. When a meeting ends, Fireflies processes the transcript and fires a webhook. The workflow picks it up, pulls the full transcript via the Fireflies GraphQL API, and sends it to Gemini with a prompt that extracts structured action items: task title, assignee, deadline, priority, and notes.

Each action item gets created as a task in Monday.com via its GraphQL API. Then the workflow builds a formatted recap listing every task that was created and posts it to the designated Slack channel, so the whole team sees what came out of the meeting before anyone has left their desk.

The whole flow runs without human intervention. A meeting happens, a transcript is ready, and within a minute the board is updated and Slack has the summary.

This was built in response to a real operational challenge: fast-growing companies lose a significant amount of execution speed because meeting outcomes don't make it into the systems where work actually happens. The workflow solves exactly that.

It is published as a public n8n workflow template and can be adapted to route tasks to different Monday boards, replace Slack with Telegram or email, or add approval steps before tasks are created.`,
    mockups: [],
    web: "https://n8n.io/workflows/20797-create-mondaycom-tasks-from-fireflies-transcripts-with-gemini-and-slack/",
    github: undefined,
    client: undefined,
  },
  {
    id: "mainstreet-global",
    name: "Mainstreet Global Inc",
    logo: "https://raw.githubusercontent.com/megathatech/mainstreetglobal/main/public/mainstreet-logo.png",
    category: "Web / Corporate",
    tags: ["WordPress", "UI/UX", "Performance", "SEO", "Corporate"],
    year: "2024",
    role: "WordPress Developer",
    excerpt: "Three corporate websites for an international business consulting firm, optimized to 99/100 Google PageSpeed.",
    desc: "Developed and optimized 3 corporate websites for Mainstreet Global Inc, an international business consulting company based in Canada.",
    content: `Mainstreet Global needed a web presence that matched the quality of their consulting work. The existing sites were slow, inconsistent in design, and not converting visitors into leads.

The engagement covered three separate corporate websites. Each one needed to perform well on mobile, load fast, and communicate clearly to an international audience.

Performance was the core metric. Slow corporate websites lose credibility before the first scroll. Every site was optimized for speed: images compressed and served in next-gen formats, unnecessary plugins removed, caching configured correctly, and render-blocking resources eliminated.

The result was a 99/100 Google PageSpeed score across all three properties. The sites also became easier for the internal team to maintain, with a clear content structure and no fragile custom code.`,
    mockups: [
      "https://raw.githubusercontent.com/megathatech/mainstreetglobal/main/public/mainstreet-logo.png",
    ],
    web: "http://mainstreetglobal.ca/",
    github: "https://github.com/megathatech/mainstreetglobal",
    client: {
      name: "Mainstreet Global Inc",
      web: "http://mainstreetglobal.ca/",
      github: "https://github.com/megathatech/mainstreetglobal",
      linkedin: "https://www.linkedin.com/company/mainstreetglobalca/",
    },
  },
];
