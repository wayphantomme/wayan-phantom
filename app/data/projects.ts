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

Solidity with OpenZeppelin standards because writing from scratch for a reference project would introduce avoidable bugs. ethers.js v6 because it has a cleaner TypeScript API than v5 and aligns with current industry practice. Next.js for the frontend because the rest of the stack in this portfolio uses it and consistency matters for a reference codebase. Sepolia testnet because it is the primary Ethereum testnet with reliable faucets.

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
    category: "Web3 / AI",
    tags: ["Next.js", "AI", "Crypto", "Solana", "Real-time Data"],
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

Next.js for the frontend because the app needed fast page loads and server-side data fetching for initial state. Solana wallet adapter because it is the standard integration for Solana dApps and handles multi-wallet support out of the box. Gemini for the language model because it has a generous free tier for development and handles multi-step reasoning well in the crypto context. The agent architecture is a custom orchestration layer rather than a framework because the routing logic is simple enough that a dependency would add more complexity than it removes.

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
    category: "Web / Hospitality",
    tags: ["Next.js", "Tailwind CSS", "UI/UX", "Bali"],
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

Next.js with static generation because the site content changes infrequently and static pages have the best performance profile for SEO and mobile loading. Tailwind CSS because the design uses a consistent spacing and color system that maps cleanly to utility classes. No JavaScript animation libraries because the target audience is often on mid-range Android devices where frame rates matter. WebP for all images because it consistently reduces file size by 30 to 50 percent over JPEG at equivalent quality.

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
    category: "AI Automation",
    tags: ["Next.js", "AI", "n8n", "Content Automation", "LLM"],
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

n8n for the automation pipeline because it allows visual workflow construction without code, which means a non-developer program manager can understand and modify the pipeline. Airtable as the input layer because most NGO teams already use it for program tracking. Gemini for the writing and editing nodes because it handles long-context writing tasks well and the API is accessible without enterprise pricing. Next.js for the frontend because static generation is the right performance profile for a blog that updates several times per week.

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
    id: "tech-with-phantom",
    name: "Tech with Phantom",
    logo: "https://raw.githubusercontent.com/wayphantomme/tech-with-phantom/main/public/TWP%20Logo.svg",
    category: "EdTech",
    tags: ["Next.js", "TypeScript", "EdTech", "Course Platform"],
    year: "2024",
    role: "Fullstack Developer",
    excerpt: "Indonesian educators are priced out of $50/month LMS tools. This alternative costs nothing to run.",
    desc: "An online learning platform for tech education featuring course management, video lessons, and student progress tracking. Built with Next.js and TypeScript.",
    content: `The Problem

Teachable and Kajabi start at $39 to $149 per month. For Indonesian creators and educators building their first course, that pricing makes the platform itself the barrier. The market for tech education in Indonesia is large and growing, but the tools designed for creators assume dollar-denominated income. Tech with Phantom is a lightweight LMS built to cost nothing to run on Vercel while covering the core features a solo educator actually needs.

How It Works

1. Courses are defined in a TypeScript config file. Each course has a metadata object, an ordered lesson list, and optional module groupings. No database required.
2. The course catalog page reads the config and renders browsable cards with topic, lesson count, and a preview of what the course covers.
3. The lesson view renders a video player alongside structured text content. Navigation shows the current lesson position and the next step.
4. Progress tracking is stored in localStorage so it persists between sessions without requiring user accounts or a backend.
5. The entire site deploys to Vercel as a static export. Hosting cost is zero unless traffic exceeds the free tier significantly.

Tech Stack

Next.js because the static export capability is what makes zero-cost hosting possible. TypeScript for the course config because type safety prevents broken lesson references before deployment. localStorage for progress because it requires no backend and works for the primary use case: a single learner following a course on their own device. No video hosting: courses link to YouTube or Cloudinary-hosted videos so bandwidth costs stay off the platform owner.

What I Would Improve

localStorage progress does not follow a user between devices. A lightweight backend with a simple user table and JWT auth would solve this without significant cost. The course config requires a developer to add new content. A headless CMS integration, even a free tier of Contentful or Sanity, would let instructors manage courses independently. Certificate generation is missing. Even a simple PDF certificate generated client-side from a template would be a meaningful feature for learners who want to share their completion.`,
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

Next.js for the frontend because the POS and floor plan are different route segments that share state through Zustand rather than through a server. Zustand over Redux because the state shape is simple and Zustand has much less boilerplate for a real-time POS use case. WebSockets for the kitchen sync because polling would add perceptible lag in a service context where a 5-second delay matters. Tailwind CSS with large tap targets throughout because the interface runs on 10-inch tablets in a kitchen environment where precision tapping is not reliable.

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
    id: "laby-finance",
    name: "Laby Finance",
    logo: "https://raw.githubusercontent.com/wayphantomme/laby-finance/main/app/public/logo.png",
    category: "Full-stack / Fintech",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Gemini AI", "Auth.js", "Recharts"],
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

Prisma with PostgreSQL because double-entry bookkeeping requires ACID transactions and the relational model maps naturally to journal entries and account hierarchies. Auth.js for authentication because it handles session management and provider integrations without requiring custom auth code. Recharts for the financial visualizations because it is composable and works well with the React data flow. Gemini for the AI entry layer because it handles structured output extraction from images reliably at the volume this app needs.

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
    category: "AI Automation",
    tags: ["n8n", "Gemini", "Monday.com", "Fireflies", "Slack", "Workflow"],
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

n8n for the workflow because it handles webhook ingestion, API calls, and branching logic visually without custom server code. Fireflies.ai because it produces high-quality transcripts and supports webhook-triggered delivery. Gemini for action item extraction because it handles the structured output format reliably and the JSON parsing is predictable with the right prompt. Monday.com as the task destination because it was specified in the job post that inspired this build. The workflow is published as a public n8n template so it can be adapted to other task systems.

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
    category: "Web / Corporate",
    tags: ["WordPress", "UI/UX", "Performance", "SEO", "Corporate"],
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

WordPress because the client's internal team manages content and WordPress is what they know. The goal was to make the existing stack perform well, not to introduce a new platform. WP Rocket for caching because it is the most reliable WordPress caching plugin and handles complex cache invalidation scenarios correctly. Cloudflare as the CDN layer because the client has an international audience and edge caching significantly reduces time-to-first-byte for visitors outside Canada.

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
];
