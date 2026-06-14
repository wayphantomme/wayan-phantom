export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-6 pt-12 pb-10 md:pt-16 md:pb-14 lg:pt-20 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      {/* ── Decorative floating blobs ────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-180px",
          left: "-160px",
          width: "700px",
          height: "700px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(226,232,240,0.55) 0%, rgba(241,245,249,0.15) 60%, transparent 100%)",
          filter: "blur(72px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "60px",
          right: "-120px",
          width: "480px",
          height: "480px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(203,213,225,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "35%",
          width: "360px",
          height: "360px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          filter: "blur(56px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* ── Eyebrow badge ────────────────────────────────────────────── */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white
                     px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8
                     shadow-sm"
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
            aria-hidden="true"
          />
          Available for Q3 2026 projects
        </div>

        {/* ── H1 ───────────────────────────────────────────────────────── */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-extrabold tracking-tight text-[#111111]
                     leading-[1.15] md:leading-[1.1] mb-6 max-w-5xl mx-auto"
          style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), sans-serif" }}
        >
          We build software that{" "}
          <span className="gradient-text">increases your productivity</span> and reduces your workload.
        </h1>

        {/* ── Sub-headline ─────────────────────────────────────────────── */}
        <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed mb-10">
          You only have 24 hours—stop wasting them replying to chats and comments, let us automate it.
        </p>

        {/* ── CTA Buttons ─────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            id="hero-cta-primary"
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-[#111111] px-8 py-4 text-base font-semibold text-white
                       transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            Start Your Project
          </a>
          <a
            id="hero-cta-secondary"
            href="#portfolio"
            className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-[#111111]
                       transition-all duration-300 hover:border-slate-400 hover:shadow-md hover:scale-[1.02]
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          >
            View Portfolio
          </a>
        </div>

        {/* ── Trust indicators ─────────────────────────────────────────── */}
        <div className="border-t border-slate-100 pt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Integrate with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { label: "GitHub", slug: "github" },
              { label: "Vercel", slug: "vercel" },
              { label: "Claude", slug: "anthropic" },
              { label: "Gemini", slug: "googlegemini" },
              { label: "n8n", slug: "n8n" },
            ].map((logo) => (
              <div
                key={logo.label}
                className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 select-none grayscale hover:grayscale-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${logo.slug}/1e293b`}
                  alt=""
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 object-contain"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-[#1e293b] tracking-tight">
                  {logo.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stat pills ──────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { stat: "20+", label: "Products Shipped" },
            { stat: "4 weeks", label: "Avg Delivery" },
            { stat: "100%", label: "NDA Protected" },
            { stat: "5+", label: "Countries Served" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-5 py-2"
            >
              <span className="text-sm font-bold text-[#111111]">{item.stat}</span>
              <span className="text-xs text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
