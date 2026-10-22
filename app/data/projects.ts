export interface Project {
  id: string;
  name: string;
  logo: string;
  category: string;
  mainCategory: "Blockchain" | "AI" | "Apps";
  subCategory: string;
  tags: string[];
  businessTags?: string[];  // use case / industry / problem tags for business audience
  techTags?: string[];      // stack / feature / capability tags for developer audience
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
    category: "Blockchain",
    mainCategory: "Blockchain",
    subCategory: "DeFi",
    tags: ["Next.js", "Solidity", "ethers.js", "Ethereum", "DeFi"],
    businessTags: ["Finance", "DeFi"],
    techTags: ["Smart Contract", "DeFi", "Wallet Connect", "Token", "GraphQL", "TypeScript"],
    year: "2025",
    role: "Fullstack Engineer & Smart Contract Developer",
    excerpt: "No open-source reference existed for the full DeFi stack, from Solidity to UI to wallet UX.",
    desc: "A full-stack DeFi platform on Ethereum featuring a Jupiter-style token swap, faucet, and real-time liquidity pool interface. Built with Next.js, Solidity smart contracts, and ethers.js.",
    content: `The Problem

Most Web3 tutorials stop at smart contracts. Deploy a token, call a function, done. There was no clean open-source reference showing the full DeFi stack from Solidity to UI to wallet UX in a single coherent codebase. Builders who wanted to understand how a real DeFi product works had nowhere to start. Bulldex is that reference.

How It Works

1. A set of Solidity smart contracts handles the core logic: token swap using a constant-product AMM formula, a faucet contract for Sepolia testnet token distribution, and an LP pool contract that tracks reserves and issues LP tokens.
2. The Next.js frontend reads on-chain state via ethers.js v6 using read-only provider calls for data and signer-based calls for transactions.
3. Wallet connection is handled by MetaMask and WalletConnect adapters. The UI shows price impact, slippage tolerance input, and expected output before any transaction is sent.
4. Optimistic UI updates show expected outcomes immediately. The actual on-chain confirmation is reconciled in the background without blocking the interface.
5. The LP dashboard polls reserve data at an interval and calculates impermanent loss in real time from current versus entry reserves.

Tech Stack

Next.js | App Router with RSC and static export, consistent across the portfolio stack
Solidity | OpenZeppelin standards reduce attack surface for a reference codebase
ethers.js v6 | Cleaner TypeScript API than v5, aligns with current industry practice
OpenZeppelin | Audited contract library prevents common token and AMM vulnerabilities
Sepolia testnet | Primary Ethereum testnet with reliable public faucets for development

What I Would Improve

The price oracle is naive. A real AMM uses TWAPs to prevent flash loan manipulation. Adding a TWAP oracle would make this a more accurate reference for production patterns. The frontend polling is also inefficient. Replacing it with WebSocket event listeners from ethers.js would reduce RPC calls and improve responsiveness on slow connections. Finally, the test suite only covers the happy path. Property-based tests for the AMM invariant (k = x * y) would catch edge cases that deterministic unit tests miss.`,
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
    category: "Blockchain",
    mainCategory: "Blockchain",
    subCategory: "Solana & AI",
    tags: ["Next.js", "AI", "Crypto", "Solana", "Real-time Data"],
    businessTags: ["Finance", "AI Chatbot", "Dashboard"],
    techTags: ["LLM Integration", "Wallet Connect", "Realtime", "API Integration", "TypeScript"],
    year: "2025",
    role: "Lead Engineer",
    excerpt: "Crypto tools surface raw data but none help you reason about it. Neko Singa fills that gap.",
    desc: "Building AI-native crypto market tools exploring real-time data, wallet integrations, and agent workflows.",
    content: `The Problem

Most crypto tools surface raw data and leave interpretation entirely to the user. Price feeds, order books, and wallet trackers show numbers but provide no intelligence on top of them. The Elfa AI full-stack engineer job post described the exact gap: crypto products that help users reason about on-chain data, not just display it. Neko Singa is a direct response to that framing. The question was simple: what if you could just ask?

How It Works

1. Users connect their Solana wallet via the Solana wallet adapter. The platform reads holdings without touching private keys.
2. A natural language query is sent to a routing layer that decides which agent domain handles it: price monitoring, wallet behavior, or social sentiment.
3. Each domain agent fetches the relevant on-chain or off-chain data, then formats it as structured context.
4. The structured context is passed to Gemini with a prompt that instructs it to answer the user's question directly, not restate the data.
5. If one agent's data source is rate-limited, the fallback chain moves to the next available provider without surfacing the error to the user.
6. Responses arrive as clean natural language answers, not tables.

Tech Stack

Next.js | Fast page loads and server-side data fetching for initial on-chain state
Solana wallet adapter | Standard Solana dApp integration, handles multi-wallet support out of the box
Gemini API | Generous free tier for development, handles multi-step reasoning in the crypto context
TypeScript | Type safety across agent routing and wallet interaction layers

What I Would Improve

The agent context windows are not shared. When a query spans multiple domains, each agent starts fresh without knowing what another found. A shared context store would make cross-domain queries more coherent. Response latency is also unpredictable when underlying data sources are slow. Adding a streaming response pattern would let partial answers appear while the rest loads, which is a much better UX for complex queries. The sentiment scoring is currently keyword-based. A fine-tuned classifier on crypto-specific language would improve accuracy significantly.`,
    mockups: [
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792072392/113c7baf-6cc6-4d28-986a-0544b18d58d0.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792072398/6debd458-6b97-4535-b796-5f0ff30cafa4.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792072411/272eecad-6ebd-4d0b-b172-76e0aac62e08.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792072414/b4f8e053-9219-4c74-840d-8ce42cf558c2.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792072418/1bfffa3d-bf8c-47c8-9a95-db99a7807db8.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792072421/30251d09-7a45-435f-a2ed-2ac24e2b0396.png",
    ],
    web: "https://nekosinga.vercel.app/",
    github: "https://github.com/nekosinga",
    client: {
      name: "Inspired by: Elfa AI",
      web: "https://www.elfa.ai/careers/full-stack-engineer",
    },
  },
  {
    id: "pohenhillscamp",
    name: "Pohen Hills Camp",
    logo: "https://raw.githubusercontent.com/wayphantomme/pohenhillscamp/main/public/logo-rounded.png",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "Hospitality",
    tags: ["Next.js", "Tailwind CSS", "UI/UX", "Bali"],
    businessTags: ["Travel", "Booking", "Food & Drink"],
    techTags: ["Next.js", "Image Processing", "TypeScript"],
    year: "2024",
    role: "Fullstack Developer & Designer",
    excerpt: "A Bali glamping resort was losing potential guests because the online presence did not match the place.",
    desc: "A nature resort and glamping destination in Bali featuring cozy rooms, camping tents, and outdoor activities. Built with Next.js and Tailwind CSS.",
    content: `The Problem

Pohen Hills Camp is a glamping and nature resort in the hills of Bali. The experience was already good. Guests who visited came back and referred others. The problem was that people could not find the place through search, and when they did find it, the online presence did not match the quality of what was on the ground. Potential guests were landing on a weak digital experience and leaving without booking. This was a real client project delivered through Megatha Tech.

How It Works

1. The homepage leads with full-bleed photography and natural color tokens. The design brief was: let the location sell itself, nothing competes with the images.
2. Room and activity pages are generated from a structured data layer. The client updates content by editing a config object, not by touching JSX.
3. Images are served as WebP with lazy loading and explicit width/height attributes to prevent layout shift. Fonts are subset and preloaded.
4. Client-side JavaScript is kept minimal. The site is mostly static HTML so it loads fast on mobile connections in areas of Bali with inconsistent signal.
5. The booking flow connects to the client's existing reservation system via a lightweight API wrapper, so they can swap systems later without a frontend rebuild.

Tech Stack

Next.js | Static generation gives the best performance profile for SEO and mobile loading
Tailwind CSS | Consistent spacing and color system maps cleanly to utility classes
WebP images | Consistently reduces file size by 30 to 50 percent over JPEG at equivalent quality
Static generation | Infrequently updated content does not need a server on every request

What I Would Improve

The booking integration is a wrapper around an external system that the client controls. A proper availability calendar built into the site would reduce the drop-off between interest and booking. The photo gallery is a simple grid. A full-screen immersive gallery experience with swipe gestures would better match how guests browse travel content on mobile. The SEO metadata is set statically. Generating it dynamically from the data layer would let the client update page titles and descriptions without developer involvement.`,
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
    category: "AI",
    mainCategory: "AI",
    subCategory: "Content Automation",
    tags: ["Next.js", "AI", "n8n", "Content Automation", "LLM"],
    businessTags: ["AI Automation", "Reporting", "Education"],
    techTags: ["LLM Integration", "Webhook", "API Integration", "Next.js"],
    year: "2025",
    role: "Developer & Automation Architect",
    excerpt: "Impact organizations have data and results but no bandwidth to write about them. This pipeline does it.",
    desc: "An automated blog platform that generates and publishes impact stories using AI. Built with Next.js, with a content pipeline automation for streamlined story creation and publishing.",
    content: `The Problem

Organizations doing impact work, NGOs, social enterprises, grant-funded programs, produce outcomes worth writing about. The data exists. The results are real. But turning them into published articles takes time and people that most teams do not have spare. Content operations are bottlenecked by writing, and the backlog of untold stories keeps growing. This pipeline removes that bottleneck.

How It Works

1. A program manager enters structured inputs into a connected Airtable base: project summary, key metrics, stakeholder quotes, and outcome context.
2. An n8n workflow triggers on new Airtable records. A planning node outlines the story structure based on the input type: case study, impact report, or field update.
3. A writing node drafts the full article using the plan as its prompt context.
4. An editing node reads the draft as a critical reader rather than a writer. It flags verbose sections, repetition, and tone inconsistencies before anything goes live.
5. The approved post is pushed to the Next.js frontend via a content API. Pages are statically generated at publish time so they load fast and index well in search.

Tech Stack

n8n | Visual workflow construction without code, accessible to non-developer program managers
Airtable | Most NGO teams already use it for program tracking, zero onboarding friction
Gemini API | Handles long-context writing tasks well, accessible without enterprise pricing
Next.js | Static generation is the right performance profile for a blog updating several times per week
MDX | Allows rich content components inside markdown without a full CMS

What I Would Improve

The editing node catches surface-level issues but does not check factual accuracy against the source data. Adding a grounding step that cross-references the draft against the original Airtable record would reduce the chance of AI-introduced errors. The current pipeline treats all story types the same. A routing step that branches into different prompt templates by story type would improve output quality for each format. There is also no human-in-the-loop review before publish. Adding an optional approval step that sends a preview to the program manager via Slack would give teams more control without adding significant friction.`,
    mockups: [
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070890/b4b796a4-d0e7-4c16-8ce0-9ca4f704ca70.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070907/4237ddcc-b839-415f-91f1-8209a3dfc439.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070924/d88f1836-047f-4f95-8169-8bb559ab19e6.png",
    ],
    web: "https://impact-stories-blog.vercel.app/",
    github: "https://github.com/wayphantomme/impact-stories-blog-automation",
  },
  {
    id: "megatha-restaurant",
    name: "Megatha Restaurant App",
    logo: "https://raw.githubusercontent.com/wayphantomme/megatha-restaurant-app/main/public/Megatha%20Logo%20BW.png",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "POS",
    tags: ["Next.js", "Tailwind CSS", "POS", "Restaurant", "Full-stack"],
    businessTags: ["Food & Drink", "Dashboard", "Reporting"],
    techTags: ["Realtime", "PostgreSQL", "TypeScript", "Next.js", "Analytics"],
    year: "2024",
    role: "Fullstack Developer",
    excerpt: "Paper tickets and a whiteboard meant every floor role was working from different information at once.",
    desc: "A full-stack restaurant management app with POS system, table management, and menu ordering. Built with Next.js and Tailwind CSS.",
    content: `The Problem

The restaurant was running on paper tickets and a whiteboard for table status. Staff were making decisions without shared context. During busy service, orders got lost, tables sat empty while guests waited at the door, and the kitchen had no reliable view of what was coming. The problem was not that they lacked technology. It was that everyone on the floor was working from different information at the same time, and no one had a single shared view of the current state of service.

How It Works

1. Staff take orders on a tablet via the POS screen. They browse the menu by category, select items, add modifier notes, and send to the kitchen in a single flow.
2. The floor plan screen shows live table status with color coding: available, occupied, bill requested. Any staff member with a tablet can see the current state.
3. The kitchen display receives incoming orders in sequence. New orders appear at the top. The kitchen team marks items as in progress and completed.
4. State is managed with Zustand. Every update from any device is broadcast via WebSocket so all connected tablets stay in sync without polling.
5. Order state is cached locally so a network drop during service does not lose an in-progress order.

Tech Stack

Next.js | POS and floor plan are route segments sharing state through Zustand
Zustand | Much less boilerplate than Redux for a real-time POS state shape
PostgreSQL | Relational model with ACID transactions for order and menu data
WebSocket | Real-time kitchen sync, polling would add perceptible lag during service
Tailwind CSS | Large tap targets throughout for 10-inch tablet use in kitchen environments

What I Would Improve

The WebSocket server is a simple Node process. Under a real production load with multiple concurrent connections it would need a proper message broker like Redis pub/sub to stay reliable. The menu management is hardcoded in a config file. A backend with a simple menu editor would let the restaurant manager update prices and 86 items without a developer. Reporting is missing. A simple end-of-day summary showing covers, average ticket size, and top items would add significant operational value for a restaurant manager.`,
    mockups: [
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071326/3e2347fd-ed98-4bc8-b7c5-38bc5ff3951a.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071440/c578dfd4-14e1-4564-8544-b122225b7d88.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071380/2e352cb0-de61-4c11-80bc-2577f0a6a17b.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071320/35405e74-4d65-4f79-a921-ca6d1a71cba6.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071317/55e372d4-6b2e-4f75-a50f-2897749cc5f5.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071312/209f8897-1cb7-42a5-90da-c9fda61a9792.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071208/c9ce7183-4b7a-42c2-9789-476471eba615.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792071145/81e78d3a-c8ae-49fd-84b3-a563e54f534f.png",
    ],
    web: "https://megatha-resto.vercel.app/",
    github: "https://github.com/wayphantomme/megatha-restaurant-app",
  },
  {
    id: "stripe-payment",
    name: "Stripe Payment Gateway",
    logo: "https://cdn.simpleicons.org/stripe/635BFF",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "Payments",
    tags: ["Next.js", "Stripe", "Drizzle ORM", "PostgreSQL", "Webhooks"],
    businessTags: ["Finance", "SaaS", "Subscription"],
    techTags: ["Stripe", "Webhook", "PostgreSQL", "TypeScript", "Next.js", "Auth"],
    year: "2026",
    role: "Fullstack Developer",
    excerpt: "Most payment tutorials skip the hard parts. This sandbox covers webhooks, idempotency, server-side pricing, and refund flows.",
    desc: "A full-stack Stripe payment gateway sandbox built with Next.js, Drizzle ORM, and Neon PostgreSQL. Covers checkout, webhooks, order tracking, and refunds.",
    content: `The Problem

Most Stripe tutorials show you how to add a checkout button. They stop there. The parts that actually matter in production — webhook verification, idempotency, server-side pricing, and refund flows — are left out. This project covers all of them in a single working sandbox.

How It Works

1. A product listing page displays items with buy buttons. Prices live in a server-side file. The browser only sends a productId, never a price.
2. A POST request to /api/checkout creates a Stripe Checkout session server-side and redirects the user to Stripe's hosted payment page.
3. After payment, Stripe redirects to /success?order=id. The page starts as "pending" and polls for status. It only flips to "paid" after the webhook arrives, not after the redirect.
4. The webhook handler at /api/webhook verifies the Stripe signature, checks a processed_events table for duplicates, and updates the order status in PostgreSQL.
5. A refund button calls /api/refund which creates a refund in Stripe. The order status only updates to "refunded" after the charge.refunded webhook arrives.
6. The entire order lifecycle (pending, paid, refunded) is tracked in a Neon PostgreSQL database via Drizzle ORM.

Tech Stack

Next.js 16 | App Router with TypeScript, Route Handlers for all API endpoints
Stripe | Checkout sessions, webhook events, refunds API in sandbox mode
Drizzle ORM | Schema-first, type-safe migrations and queries
Neon PostgreSQL | Serverless Postgres, separate pooled and direct connection URLs
Tailwind CSS v4 | Utility-first styling, no component library needed for a sandbox

What I Would Improve

The success page polling is a simple auto-refresh interval. Replacing it with a WebSocket or Server-Sent Events connection would give instant status updates without repeated HTTP round trips. The product catalog is hardcoded in a server file. A real implementation would pull prices from a database or Stripe's product catalog API, which also enables promotional pricing and inventory management. Adding email confirmation via Resend or similar after the paid webhook would complete the typical checkout experience.`,
    mockups: [
      "https://raw.githubusercontent.com/wayphantomme/stripe-payment/main/public/screenshots/screencapture-stripe-wayphantomme-vercel-app-2026-10-22-15_06_39.png",
      "https://raw.githubusercontent.com/wayphantomme/stripe-payment/main/public/screenshots/screencapture-checkout-stripe-c-pay-cs-test-a1Wb2C9M3Jvz9IRqS5z0CPT2fvgv00xcHxhTL7dptOyotm3qwaBiTYA7aZ-2026-10-22-15_07_21.png",
      "https://raw.githubusercontent.com/wayphantomme/stripe-payment/main/public/screenshots/screencapture-stripe-wayphantomme-vercel-app-success-2026-10-22-15_07_32.png",
      "https://raw.githubusercontent.com/wayphantomme/stripe-payment/main/public/screenshots/screencapture-stripe-wayphantomme-vercel-app-success-2026-10-22-15_07_37.png",
      "https://raw.githubusercontent.com/wayphantomme/stripe-payment/main/public/screenshots/screencapture-stripe-wayphantomme-vercel-app-success-2026-10-22-15_07_41.png",
      "https://raw.githubusercontent.com/wayphantomme/stripe-payment/main/public/screenshots/screencapture-stripe-wayphantomme-vercel-app-cancel-2026-10-22-15_08_26.png",
    ],
    web: "https://stripe-wayphantomme.vercel.app/",
    github: "https://github.com/wayphantomme/stripe-payment",
  },
  {
    id: "laby-finance",
    name: "Laby Finance",
    logo: "https://raw.githubusercontent.com/wayphantomme/laby-finance/main/app/public/logo.png",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "Fintech",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Gemini AI", "Auth.js", "Recharts"],
    businessTags: ["Finance", "Dashboard", "Reporting"],
    techTags: ["LLM Integration", "Text to Image", "Auth", "PostgreSQL", "TypeScript", "Analytics"],
    year: "2025",
    role: "Fullstack Developer",
    excerpt: "Indonesian finance apps track spending. None give a real financial position like double-entry books.",
    desc: "Personal finance app with double-entry accounting, Income Statement, Balance Sheet, Cash Flow reports, and Gemini AI for screenshot parsing.",
    content: `The Problem

Personal finance apps in Indonesia track spending. They show bar charts of categories and send notifications when you overspend. None of them give you a real financial position: net worth, cash flow trends, or an income statement over twelve months. Understanding where your money actually stands requires the same tools companies use, double-entry bookkeeping and three standard financial reports. Those tools have never been packaged cleanly for individuals. Laby is that product.

How It Works

1. Every transaction creates balanced journal entries automatically. The user selects a category (mapped to a chart of accounts entry) and enters an amount. The debit and credit sides are calculated by the system.
2. The chart of accounts follows Indonesian accounting conventions with 62 default accounts across Assets, Liabilities, Equity, Revenue, and Expenses. Amounts are stored as integer cents to avoid floating-point rounding errors.
3. The Income Statement, Balance Sheet, and Cash Flow Statement are calculated in real time from raw journal lines. They are always consistent with the underlying data because there is no separate aggregation layer.
4. The AI entry layer accepts a bank screenshot or a natural language description. Gemini parses it into a structured draft entry with account, amount, and date.
5. No AI result auto-commits. Every draft requires explicit user confirmation before hitting the database. The confirmation step is non-negotiable for financial data.
6. The audit log records every create, update, and delete with a timestamp and source: manual, screenshot AI, or chat AI. Soft deletes only. Nothing is permanently removed.

Tech Stack

Next.js 15 | App Router with React Server Components for fast dashboard loading
Prisma | ORM with ACID transaction support, maps naturally to journal entries and account hierarchies
Neon PostgreSQL | Serverless Postgres with branching, zero infrastructure management
Auth.js | Handles session management and provider integrations without custom auth code
Gemini API | Reliable structured output extraction from bank screenshots at the volume this app needs
Zod | Schema validation on AI-parsed entries before any data hits the database

What I Would Improve

The chart of accounts is fixed at 62 entries. A real accounting system lets users add custom accounts within each category. Adding account creation and the ability to reclassify existing entries would make Laby usable for more complex financial situations. The AI parsing for bank screenshots works well on major Indonesian bank formats but fails on unusual layouts. Training on a wider range of screenshot formats or adding a manual fallback edit step after parsing would improve reliability. Budget tracking is missing. Adding a budget layer that compares actual versus planned spending per account category would complete the personal finance use case.`,
    mockups: [
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070723/8c257e7e-7bde-48f4-9ade-b4735347c3b4.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070720/8c0198a0-a1fb-4615-82b5-c0428c7b8296.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070714/8688f4bd-27db-4fa2-8809-4a4170a5cd6c.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070705/014456e3-8811-4da1-93c2-0b1ab920d98a.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070689/6c91773a-c732-4cef-8bcb-001c60085f43.png",
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792070725/b54759f7-8d9c-4b09-9535-966dd2824624.png",
    ],
    github: "https://github.com/wayphantomme/laby-finance",
  },
  {
    id: "meeting-to-task",
    name: "Meeting to Task Automation",
    logo: "https://cdn.simpleicons.org/n8n/EA4B22",
    category: "AI",
    mainCategory: "AI",
    subCategory: "Workflow Automation",
    tags: ["n8n", "Gemini", "Monday.com", "Fireflies", "Slack", "Workflow"],
    businessTags: ["AI Automation", "CRM Integration", "Reporting"],
    techTags: ["LLM Integration", "Webhook", "GraphQL", "API Integration"],
    year: "2025",
    role: "Automation Architect",
    excerpt: "Meetings produce good conversation but no clear record of who does what by when. This workflow does.",
    desc: "Automated pipeline: Fireflies transcript ready => Gemini extracts action items => Monday.com tasks created => Slack recap posted.",
    content: `The Problem

Most teams walk out of meetings with a good conversation and no structured record of who does what by when. Notes sit in someone's inbox. Tasks never make it into the project board. Follow-ups happen manually, or not at all. Fast-growing companies lose significant execution speed because meeting outcomes do not make it into the systems where work actually happens. This workflow was built in direct response to a real operational challenge described in the Bali Estate Group IT Automation Engineer job post: automating the gap between meeting and execution.

How It Works

1. When a meeting ends, Fireflies.ai processes the transcript and fires a webhook to the n8n workflow URL. The workflow returns an immediate 200 OK response.
2. The workflow queries the Fireflies GraphQL API to fetch the transcript title, date, summary, and detected action items.
3. The full transcript content is sent to Gemini with a prompt that extracts a structured JSON array of action items. Each item includes task title, assignee, deadline, priority, and notes.
4. The JSON output is parsed and split into individual task items. Each task is created in Monday.com via its GraphQL API with deadlines and notes mapped to board columns.
5. A formatted recap message is built listing all created tasks with their assignees and deadlines. This is posted to the designated Slack channel so the whole team sees the output before they leave their desks.

Tech Stack

n8n | Handles webhook ingestion, API calls, and branching logic without custom server code
Fireflies.ai GraphQL API | High-quality transcripts with webhook-triggered delivery
Gemini API | Reliable structured JSON output from transcript content with predictable parsing
Monday.com GraphQL API | Specified in the job post that inspired this build
Slack OAuth2 | Team recap delivery to the channel where work decisions happen

What I Would Improve

The current workflow creates tasks from all detected action items without filtering by confidence level. Adding a Gemini scoring step that rates each action item by how clearly it was stated in the transcript would reduce noise in the Monday board. The workflow does not handle recurring meetings. A deduplication step that checks for existing tasks by meeting title and date before creating new ones would prevent duplicates when the same standing meeting runs weekly. The Slack recap is a flat list. Formatting it as a structured message with assignee grouping and priority indicators would make it more scannable for larger teams.`,
    mockups: [
      "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792078345/8c0f7a3f-b1c6-45f4-a973-6e884a045717.png",
    ],
    web: "https://n8n.io/workflows/20797-create-mondaycom-tasks-from-fireflies-transcripts-with-gemini-and-slack/",
    github: undefined,
    client: {
      name: "Inspired by: Bali Estate Group, IT Automation Engineer",
      web: "https://bali-estate-group.homerun.co/it-automation-engineer/en",
    },
  },
  {
    id: "mainstreet-global",
    name: "Mainstreet Global Inc",
    logo: "https://raw.githubusercontent.com/megathatech/mainstreetglobal/main/public/mainstreet-logo.png",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "Corporate",
    tags: ["WordPress", "UI/UX", "Performance", "SEO", "Corporate"],
    businessTags: ["Logistics"],
    techTags: ["Next.js", "Image Processing"],
    year: "2024",
    role: "WordPress Developer",
    excerpt: "Three slow corporate sites were losing credibility before the first scroll. Rebuilt to 99/100 PageSpeed.",
    desc: "Developed and optimized 3 corporate websites for Mainstreet Global Inc, an international business consulting company based in Canada.",
    content: `The Problem

Mainstreet Global Inc is an international business consulting firm based in Canada. Their web presence covered three separate corporate websites that were slow, inconsistent in design, and not converting visitors into leads. Slow corporate websites lose credibility before the first scroll. An international consulting firm cannot afford a web presence that underperforms the quality of their work. This was a client engagement delivered through Megatha Tech.

How It Works

1. Each site was audited for performance bottlenecks using Chrome DevTools and Lighthouse. The primary issues were uncompressed images, render-blocking scripts, and misconfigured caching.
2. Images were replaced with next-gen WebP format and compressed to appropriate quality levels without visible degradation.
3. Render-blocking resources were eliminated by deferring non-critical scripts and inlining critical CSS.
4. WordPress caching was configured correctly with server-side page caching and browser cache headers set to appropriate TTLs.
5. Unnecessary plugins were removed. Each plugin that remained was audited for weight and replaced with a lighter alternative where one existed.
6. The content structure was cleaned up so the internal team could maintain pages without breaking layouts.

Tech Stack

WordPress | Client team manages content and WordPress is what they know
Custom theme | Built to the client's brand rather than adapting a generic theme
Google PageSpeed optimization | Audit-driven image compression, deferred scripts, and inlined critical CSS
Caching layer | WP Rocket with Cloudflare CDN edge caching for international visitors

What I Would Improve

The three sites share design patterns but are maintained separately. Consolidating them into a WordPress multisite installation would reduce maintenance overhead and make cross-site design updates faster. The current analytics setup is basic. Adding event tracking for lead form submissions, CTA clicks, and scroll depth would give the client actionable data about what is and is not converting. The contact forms are functional but generic. Replacing them with a Calendly or HubSpot integration would reduce the time between a visitor showing interest and a sales conversation happening.`,
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
  {
    id: "lead-scoring-ghl",
    name: "Lead Scoring & Routing",
    logo: "https://cdn.simpleicons.org/n8n/EA4B22",
    category: "AI",
    mainCategory: "AI",
    subCategory: "Workflow Automation",
    tags: ["n8n", "GoHighLevel", "Gemini", "Slack", "Monday.com"],
    businessTags: ["AI Automation", "CRM Integration", "Lead Generation", "Reporting"],
    techTags: ["LLM Integration", "Webhook", "API Integration"],
    year: "2026",
    role: "Automation Architect",
    excerpt: "Sales teams waste time on cold leads. This workflow scores every incoming lead with Gemini and routes hot ones instantly.",
    desc: "n8n workflow that scores GoHighLevel leads with Gemini AI and routes them to Slack and Monday.com based on tier.",
    content: `The Problem

Sales teams spend the same amount of time on every lead regardless of quality. A cold lead from a casual enquiry gets the same follow-up effort as a hot prospect ready to buy. Without a scoring system, high-value leads get lost in the queue and response times on the best opportunities are too slow.

How It Works

1. Receives a POST webhook from GoHighLevel when a contact is created or a pipeline stage changes, and immediately returns OK.
2. Loads workflow configuration and normalizes the incoming lead fields including name, source, budget, timeline, interest, and message.
3. Sends the normalized lead profile to Gemini and requests a strict JSON response containing a score from 1 to 10, reasoning, and a recommended next step.
4. Parses the Gemini output, clamps the score to the 1 to 10 range, and assigns the lead tier as Hot, Warm, or Cold.
5. For Hot leads, posts an urgent alert to Slack, applies hot and priority tags in GoHighLevel, and creates a follow-up item in Monday.com.
6. For Warm leads, posts a nurture notification to Slack and applies warm and nurture tags.
7. For Cold leads, applies low-priority tags only.

Tech Stack

n8n | Webhook ingestion, branching logic, and all API calls without custom server infrastructure
GoHighLevel | Source CRM for lead data and destination for tag updates
Gemini API | Scores and reasons about lead quality with structured JSON output
Slack | Instant notification channel for the sales team
Monday.com | Task board for hot lead follow-up tracking

What I Would Improve

Adding a feedback loop where sales reps can mark outcomes in Monday.com and feed that data back into a fine-tuned scoring prompt would improve accuracy over time. The current scoring criteria are prompt-based and could be augmented with historical deal data for better calibration.`,
    mockups: ["https://res.cloudinary.com/dwsapeq3m/image/upload/v1792672238/Screenshot_2026-10-22_at_20.30.31_tgdr5w.png"],
    web: "https://n8n.io/workflows/20866-score-and-route-gohighlevel-leads-with-gemini-slack-and-mondaycom/",
  },
  {
    id: "executive-briefing",
    name: "Daily Executive Briefing",
    logo: "https://cdn.simpleicons.org/n8n/EA4B22",
    category: "AI",
    mainCategory: "AI",
    subCategory: "Workflow Automation",
    tags: ["n8n", "Gemini", "Monday.com", "GoHighLevel", "Slack", "Outlook"],
    businessTags: ["AI Automation", "Reporting", "Dashboard", "CRM Integration"],
    techTags: ["LLM Integration", "Email Notification", "API Integration", "Webhook", "Analytics"],
    year: "2026",
    role: "Automation Architect",
    excerpt: "Executives spend 30 minutes every morning collecting status from different tools. This delivers a single AI briefing at 8am.",
    desc: "n8n workflow that pulls data from Monday.com, GoHighLevel, and PandaDoc daily, generates an executive briefing with Gemini, and delivers it via Slack and email.",
    content: `The Problem

Executives at fast-growing companies start every day by manually pulling reports from three or four different tools. Tasks in Monday.com, leads in GoHighLevel, proposals in PandaDoc. By the time they have assembled a complete picture it is 9am and the team is already asking questions. The information exists but no one has time to aggregate it.

How It Works

1. Runs every day at 8:00 AM on a schedule trigger.
2. Loads configuration values including board IDs, thresholds, company name, Slack channel, and email recipient.
3. Fetches the latest 100 tasks from Monday.com, 100 contacts from GoHighLevel, and 100 documents from PandaDoc via their APIs in parallel.
4. Aggregates the three datasets to calculate task completion and overdue counts, lead totals and tier breakdowns, estimated pipeline value, and proposal status totals.
5. Sends the computed metrics to Gemini to generate a three-paragraph executive summary with red, yellow, or green status indicators and one priority action.
6. Formats the briefing as a Slack message, an HTML email, and a Monday.com board item.
7. Posts to Slack, sends via Microsoft Outlook, and creates the item on the Monday.com dashboard board.

Tech Stack

n8n | Orchestrates all data fetching, aggregation, and delivery without custom server code
Gemini API | Writes the executive summary and assigns status colors from raw metrics
Monday.com GraphQL API | Source for task data and destination for the briefing item
GoHighLevel API | Source for lead and pipeline data
PandaDoc API | Source for proposal status and document metrics
Slack and Outlook | Delivery channels for the final briefing

What I Would Improve

The current run is limited to 100 records per source, which works for most teams but would miss data at scale. Adding a pagination loop would make this production-safe for larger operations. Allowing executives to reply to the Slack message with questions that get answered by Gemini in context would turn this from a one-way report into an interactive briefing.`,
    mockups: ["https://res.cloudinary.com/dwsapeq3m/image/upload/v1792672266/Screenshot_2026-10-22_at_20.31.00_d5o5dh.png"],
    web: "https://n8n.io/workflows/21040-send-daily-executive-briefings-from-mondaycom-gohighlevel-pandadoc-with-gemini/",
  },
  {
    id: "naries-eatery",
    name: "Narie's Eatery & Coffee",
    logo: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792671667/3614308a-2f3f-4e41-9921-9e13969df6fa.png",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "Hospitality",
    tags: ["WordPress", "UI/UX", "Restaurant", "Branding"],
    businessTags: ["Food & Drink", "Booking"],
    techTags: ["Next.js", "Image Processing"],
    year: "2025",
    role: "Web Developer",
    excerpt: "A restaurant with a strong offline reputation had no website that matched the quality of its food or its story.",
    desc: "Website for Narie's Eatery & Coffee, a premium restaurant in Gading Serpong founded by the family behind the iconic OOM Resto in Bandung.",
    content: `The Problem

Narie's Eatery & Coffee had a strong offline reputation. The restaurant was featured in Detik, known for serving the Indonesian president's palace, and had consistent five-star reviews. But the website did not reflect any of that. Potential customers searching online were not getting the right first impression.

How It Works

1. The site presents the brand story: from OOM Resto in Bandung, founded in 1997, to Narie's expansion in Gading Serpong.
2. A menu section highlights house specials with a focus on the premium ingredients and no-MSG positioning.
3. Testimonials and press features are displayed to build credibility for first-time visitors.
4. The site links directly to their Instagram and Google Maps presence for discovery.

Tech Stack

WordPress | Flexible CMS that lets the client update menu and content without developer involvement
Custom theme | Designed to match the warm, homey brand identity of the restaurant
Responsive layout | Optimized for mobile since most restaurant searches happen on phone

What I Would Improve

Adding online reservation or pre-order functionality would turn the site from a brochure into a conversion tool. A structured data markup for the restaurant schema would also improve how the listing appears in Google search results, including star ratings and opening hours.`,
    mockups: ["https://res.cloudinary.com/dwsapeq3m/image/upload/v1792671733/Screenshot_2026-10-22_at_20.22.05_tqvvoy.png"],
    web: "https://naries.id/",
    client: {
      name: "Narie's Eatery & Coffee",
      web: "https://naries.id/",
      instagram: "https://www.instagram.com/naries.eat/",
    },
  },
  {
    id: "devisa-global",
    name: "Devisa Global Services",
    logo: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1792671668/770d331c-07d9-40b2-8c02-2669289cefb8.png",
    category: "Apps",
    mainCategory: "Apps",
    subCategory: "Corporate",
    tags: ["WordPress", "UI/UX", "Corporate", "Immigration"],
    businessTags: ["Logistics"],
    techTags: ["Next.js", "TypeScript"],
    year: "2025",
    role: "Web Developer",
    excerpt: "An immigration consulting firm trusted by major companies had a website that did not reflect their professional standing.",
    desc: "Website for Devisa Global Services, an independent immigration consulting company providing visa, work permit, and stay permit assistance.",
    content: `The Problem

Devisa Global Services works with major corporations on immigration and visa matters. Their client list included large companies, but their online presence did not communicate that level of trust and professionalism. For a service business where credibility is everything, the website was not doing its job.

How It Works

1. The homepage establishes immediate credibility with a "Trusted by Big Company" section displaying recognizable client logos.
2. Service pages explain the three core offerings: visa assistance, work permit processing, and stay permit extension.
3. A consultation entry point makes it easy for potential clients to start the process.
4. The site is built to load quickly and display correctly on all devices, including mobile where many initial searches happen.

Tech Stack

WordPress | Standard for corporate sites where the client needs to manage content and add blog posts independently
Custom design | Professional blue tone aligned with immigration and legal services branding
Performance optimization | Image compression and caching to maintain fast load times

What I Would Improve

Adding a case study or testimonials section from corporate clients would significantly increase conversion. An FAQ section addressing common visa questions would also reduce pre-consultation inquiries and position the firm as a knowledge authority in the immigration space.`,
    mockups: ["https://res.cloudinary.com/dwsapeq3m/image/upload/v1792671846/Screenshot_2026-10-22_at_20.22.51_kftew7.png"],
    web: "https://devisaglobalservices.com/",
    client: {
      name: "Devisa Global Services",
      web: "https://devisaglobalservices.com/",
      instagram: "https://www.instagram.com/devisaglobalservices/",
    },
  },
];
