import { NextRequest } from "next/server";

const CF_MODEL = "@cf/black-forest-labs/flux-1-schnell";

export async function POST(request: NextRequest) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !apiToken) {
    return Response.json(
      { error: "Cloudflare credentials not configured" },
      { status: 500 }
    );
  }

  let prompt: string;
  try {
    const body = await request.json();
    prompt = body.prompt?.trim();
    if (!prompt) throw new Error("empty prompt");
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${CF_MODEL}`;

  const cfRes = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      seed: Math.floor(Math.random() * 1_000_000),
    }),
  });

  if (!cfRes.ok) {
    const text = await cfRes.text();
    console.error("CF Workers AI error:", cfRes.status, text);
    return Response.json(
      { error: `Image generation failed (${cfRes.status})` },
      { status: 502 }
    );
  }

  // CF REST API returns JSON: { result: { image: "<base64>" }, success: true }
  const json = await cfRes.json() as { success: boolean; result?: { image: string }; errors?: unknown[] };

  if (!json.success || !json.result?.image) {
    console.error("CF unexpected response:", JSON.stringify(json));
    return Response.json({ error: "No image in response" }, { status: 502 });
  }

  return Response.json({ image: json.result.image, model: CF_MODEL });
}
