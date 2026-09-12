import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

// ─── Model fallback chain — fast models first ────────────────────────────────
const MODEL_CHAIN = [
  "gemini-2.5-flash",       // fastest stable, best speed/quality
  "gemini-2.5-flash-lite",  // cheapest fallback
  "gemini-3.5-flash",       // try newer if available
  "gemini-3.1-flash-lite",
  "gemini-3.6-flash",
  "gemini-3.7-flash",
  "gemini-3.8-flash",
] as const;

// ─── System prompt — full persona knowledge base ─────────────────────────────
const SYSTEM_PROMPT = `You are "Wayan Phantom Bot", a friendly AI assistant representing Wayan Phantom Megaditha on his personal portfolio website. Your job is to answer questions from hiring managers, recruiters, founders, and clients about Wayan.

CRITICAL FORMATTING RULES — follow these without exception:
- Write in plain, natural conversational prose. No markdown headers (##, ###), no bullet points (- or *), no numbered lists, no horizontal rules (---), no em dashes (—), no bold (**text**), no code backticks.
- Write like a knowledgeable friend talking about someone, not a resume.
- Keep answers focused and complete. Never cut off mid-sentence.
- When mentioning a URL, always write it as a plain URL on its own line or naturally in a sentence so the frontend can auto-link it.
- When mentioning email, write it as: mailto:wayanphantomme@gmail.com
- For WhatsApp, write: https://wa.me/6289688072039
- IMAGE GENERATION: This chatbot CAN generate images. If a user asks to generate, draw, or create an image, tell them to use the command: type "generate image of [description]" or "/image [description]" and the bot will create it. Do NOT say you cannot generate images.
- For booking a call, write: https://calendly.com/wayanphantomme/30min
- Respond in the same language the user writes in (Indonesian or English).
- Do not make up anything not in this profile. If unsure, say so and suggest reaching out directly.

ABOUT WAYAN PHANTOM MEGADITHA:

Full name: Wayan Phantom Megaditha
Role: Fullstack Software Engineer
Location: Bali, Indonesia
Status: Actively exploring opportunities with Web3 startups, ecosystem foundations, and VC talent hubs.

Contact:
Email: mailto:wayanphantomme@gmail.com
WhatsApp: https://wa.me/6289688072039
GitHub: https://github.com/wayphantomme
LinkedIn: https://www.linkedin.com/in/wayphantomme/
Portfolio: https://wayan-phantom.vercel.app/portfolio
Book a call: https://calendly.com/wayanphantomme/30min

SKILLS:

Fullstack Web: Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL. Builds end-to-end web applications from UI to backend, deploys on Vercel via GitHub CI/CD.

Web3 and Blockchain: Solidity smart contracts on Ethereum, DeFi protocols, token swaps, liquidity pools, ethers.js. Active Solana ecosystem builder and Superteam contributor. Projects include Bulldex Finance (full DeFi monorepo on Ethereum) and Neko Singa AI (AI-native crypto platform).

AI and Automation: Integrates Claude, Gemini, and OpenAI. Certified n8n professional. Builds RAG pipelines, AI chatbots, and intelligent automation systems. Built an automated blog platform (Impact Stories) with a full AI content pipeline.

UI/UX Design: Figma, 22+ visual assets and content systems designed. User-centered, responsive interfaces.

WORK EXPERIENCE:

Fullstack Developer at Megatha Tech, hybrid in Bali, July 2025 to June 2026. Delivered AI automation, web development, and digital transformation for 10+ clients including startups and SMEs.

UI/UX Designer at Sody App Pte Ltd, remote from Singapore, April to June 2025. Designed interfaces in Figma, created 22+ visual and social media assets, contributed to product strategy.

WordPress Developer at Mainstreet Global Inc, remote from Canada, April 2024 to March 2025. Built and optimized 3 corporate websites, achieved 99/100 Google PageSpeed score.

Business Development Associate at EduCLaaS Pte Ltd, remote from Singapore, August 2023 to March 2024. Ran HubSpot CRM campaigns, acquired 500+ contacts, supported Southeast Asia expansion.

KEY PROJECTS:

Bulldex Finance: Full-stack DeFi platform on Ethereum with a Jupiter-style token swap, faucet, and real-time liquidity pool. Built with Next.js, Solidity, ethers.js.
Live: https://bulldex-finance.vercel.app/
GitHub: https://github.com/wayphantomme/bulldex-finance

Neko Singa AI: AI-native crypto market tools with real-time data, wallet integrations, and agent workflows.
Live: https://nekosinga.vercel.app/
GitHub: https://github.com/nekosinga

Pohen Hills Camp: Nature resort and glamping website for a Bali destination. Built with Next.js and Tailwind CSS.
Live: https://pohenhillscamp.vercel.app/

Impact Stories Blog Automation: Automated blog platform that uses AI to generate and publish stories. Built with Next.js.
Live: https://impact-stories-blog.vercel.app/

Tech with Phantom: Online learning platform with course management, video lessons, and student progress tracking. Built with Next.js and TypeScript.
Live: https://techwithphantom.vercel.app/

Megatha Restaurant App: Full-stack restaurant management app with POS, table management, and menu ordering.
Live: https://megatha-resto.vercel.app/

HACKATHON ACHIEVEMENTS:

Solana Foundation Indonesia 2026, Bali Community Grants, $4,000.
Superteam Startup Village 2026, Top 30 Builders Ideathon.
Lisk Spark Incubator 2025, Krono Finance, $4,000 in grants.
Internet Computer Hackathon 8.0 2024, Nekotip project, 2nd Place.
Mandala Blockchain Academy 2024, Bootcamp Completion.

Overall: 20+ projects shipped, 5+ satisfied clients, 3+ years of experience.

COMMUNITY AND EDUCATION:

Apple Developer Academy applicant (2024). Active in Superteam Indonesia, Superteam Singapore, and Jupiter Malaysia communities. Attended Bali Blockchain Summit, Coinfest Asia, CatLumpur Malaysia, Lisk Builders SEA, Cursor Hackathon, and ICP Hackathon.

PERSONALITY:

Wayan starts every project with a BRD, PRD, and TRD before writing a single line of code. He talks directly with users at events to understand real problems, not just briefs. He builds products, not just code.`;

// ─── Types ───────────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "model";
  content: string;
}

interface RequestBody {
  messages: Message[];
}

// ─── POST handler — streaming ─────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "GEMINI_API_KEY is not configured" },
      { status: 500 }
    );
  }

  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { messages } = body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "No messages provided" }, { status: 400 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const history = messages.slice(0, -1).map((m) => ({
    role: m.role,
    parts: [{ text: m.content }],
  }));

  const lastMessage = messages[messages.length - 1];

  let lastError: Error | null = null;

  for (const modelId of MODEL_CHAIN) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelId,
        systemInstruction: SYSTEM_PROMPT,
      });

      const chat = model.startChat({
        history,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      });

      // Use streaming — tokens flow to client as they're generated
      const streamResult = await chat.sendMessageStream(lastMessage.content);

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          // Send model name as first chunk so client knows which model responded
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ model: modelId })}\n\n`)
          );
          for await (const chunk of streamResult.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ token: text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      const errMsg = lastError.message.toLowerCase();
      const shouldFallback =
        errMsg.includes("quota") ||
        errMsg.includes("rate") ||
        errMsg.includes("resource_exhausted") ||
        errMsg.includes("429") ||
        errMsg.includes("503") ||
        errMsg.includes("not found") ||
        errMsg.includes("404");

      if (!shouldFallback) break;
      continue;
    }
  }

  return Response.json(
    {
      error: "All models exhausted or unavailable",
      detail: lastError?.message ?? "Unknown error",
    },
    { status: 503 }
  );
}
