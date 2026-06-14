export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-6 py-28 md:py-36 lg:py-44"
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold tracking-tight text-[#111111]
                     leading-[1.1] md:leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), sans-serif" }}
        >
          We build{" "}
          <span className="gradient-text">production-ready software</span>
          <br className="hidden md:block" />
          for startups that can&apos;t afford{" "}
          <span className="relative inline-block">
            delays
            <svg
              aria-hidden="true"
              className="absolute -bottom-2 left-0 w-full overflow-visible"
              viewBox="0 0 320 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7 C 70 2, 160 1, 316 7"
                stroke="#cbd5e1"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>

        {/* ── Sub-headline ─────────────────────────────────────────────── */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
          Fast execution. Clean architecture. No wasted time.
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
            Trusted by teams building
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {[
              { label: "Fintech",       w: 120, h: 36, bg: "F3F4F6", fg: "6B7280" },
              { label: "Web3",          w: 100, h: 36, bg: "F3F4F6", fg: "6B7280" },
              { label: "SaaS Startups", w: 140, h: 36, bg: "F3F4F6", fg: "6B7280" },
              { label: "Enterprise",    w: 130, h: 36, bg: "F3F4F6", fg: "6B7280" },
              { label: "AI Platforms",  w: 130, h: 36, bg: "F3F4F6", fg: "6B7280" },
            ].map((logo) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={logo.label}
                src={`https://placehold.co/${logo.w}x${logo.h}/${logo.bg}/${logo.fg}?text=${encodeURIComponent(logo.label)}`}
                alt={logo.label}
                width={logo.w}
                height={logo.h}
                className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale"
              />
            ))}
          </div>
        </div>

        {/* ── Stat pills ──────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { stat: "50+", label: "Products Shipped" },
            { stat: "6wk",  label: "Avg Delivery" },
            { stat: "100%", label: "NDA Protected" },
            { stat: "12+",  label: "Countries Served" },
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
