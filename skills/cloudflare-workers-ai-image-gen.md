# Cloudflare Workers AI — Image Generation

Referensi API gratis untuk generate image via Cloudflare Workers AI.

## Ringkasan

Cloudflare Workers AI menyediakan text-to-image generation melalui beberapa model. Billing berbasis **Neurons**, bukan token dan bukan jumlah request.

## Free Tier & Pricing

| Plan | Alokasi gratis/hari | Harga di atas alokasi |
|---|---|---|
| Workers Free | 10.000 Neurons/hari | Tidak bisa lanjut, harus upgrade |
| Workers Paid ($5/bulan) | 10.000 Neurons/hari | $0.011 per 1.000 Neurons |

- Reset kuota harian jam **00:00 UTC**.
- Kalau kuota habis, request gagal sampai reset berikutnya (di Free plan) atau mulai kena charge (di Paid plan).

## Model yang Tersedia

| Model | Provider | Catatan | Biaya Neuron |
|---|---|---|---|
| `@cf/black-forest-labs/flux-1-schnell` | Black Forest Labs | Paling murah/cepat | 4.80/tile 512×512 + 9.60/step |
| `@cf/black-forest-labs/flux-2-klein-4b` | Black Forest Labs | FLUX.2 versi kecil | 5.37/input tile + 26.05/output tile |
| `@cf/black-forest-labs/flux-2-klein-9b` | Black Forest Labs | Support reference image (up to 4) | 1.363,64/MP pertama (1024×1024) + 181,82/MP tambahan |
| `@cf/black-forest-labs/flux-2-dev` | Black Forest Labs | Kualitas lebih tinggi | 18.75/input tile-step + 37.50/output tile-step |
| `@cf/leonardo/phoenix-1.0` | Leonardo | Prompt adherence kuat, teks koheren | 530/tile 512×512 + 10/step |
| `@cf/leonardo/lucid-origin` | Leonardo | Graphic design tajam, full-HD | 636/tile 512×512 + 12/step |
| `@cf/stabilityai/stable-diffusion-xl-base-1.0` | Stability.ai | SDXL standar | — |
| `@cf/stabilityai/stable-diffusion-xl-lightning` | ByteDance | SDXL cepat, 1024px beberapa step | — |
| `openai/gpt-image-1.5` | OpenAI (partner, BYOK) | Bawa API key sendiri | — |

**Estimasi kuota harian (free tier, 10.000 Neurons):**
- `flux-1-schnell` (512×512, 4 steps ≈ 43.2 Neurons): ~230 gambar/hari
- `leonardo/lucid-origin` (512×512, 4 steps ≈ 684 Neurons): ~14 gambar/hari

## Cara Panggil API

### REST API

```bash
curl --request POST \
  --url 'https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/black-forest-labs/flux-2-klein-9b' \
  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  --header "Content-Type: multipart/form-data" \
  --form 'prompt=a sunset at the alps' \
  --form width=1024 \
  --form height=1024
```

### Workers AI Binding (di dalam Worker)

```js
const response = await env.AI.run(
  'openai/gpt-image-1.5',
  { prompt: 'A panoramic view of the northern lights over a snowy mountain range' }
);
```

- Endpoint umum: `/accounts/{account_id}/ai/run/{model}`
- Autentikasi: Cloudflare API token
- Bisa dirouting lewat **AI Gateway** untuk caching, rate limiting, dan analytics.

## Sumber

- Model catalog: https://developers.cloudflare.com/workers-ai/models/ (filter Text-to-Image)
- Pricing: https://developers.cloudflare.com/workers-ai/platform/pricing/
