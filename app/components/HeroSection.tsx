export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-6 pt-12 pb-10 md:pt-16 md:pb-14 lg:pt-20 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      {/* ── Decorative blobs ──────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-180px",
          left: "-160px",
          width: "700px",
          height: "700px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(203,213,225,0.25) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
          filter: "blur(56px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Two-column layout ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left column: Text ───────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white
                         px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8
                         shadow-sm"
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500"
                style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
                aria-hidden="true"
              />
              AI Automation · n8n Specialist
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold tracking-tight text-[#111111]
                         leading-[1.15] md:leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), sans-serif" }}
            >
              I automate the work you hate,{" "}
              <span className="gradient-text">so you can focus on what matters.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              I build AI automation systems, n8n workflows, and intelligent bots that eliminate
              manual work and scale your operations — without hiring a full team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                id="hero-cta-primary"
                href="https://calendly.com/wayanphantomme/30min"
                className="w-full sm:w-auto rounded-full bg-[#111111] px-8 py-4 text-base font-semibold text-white
                           transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Book a Free Call
              </a>
              <a
                id="hero-cta-secondary"
                href="#portfolio"
                className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-[#111111]
                           transition-all duration-300 hover:border-slate-400 hover:shadow-md hover:scale-[1.02]
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                View My Work
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-2 text-center lg:text-left">
              {[
                { stat: "24/7", label: "Automation" },
                { stat: "100%", label: "Client Owned" },
                { stat: "No-code", label: "& AI" },
                { stat: "Fast", label: "Delivery" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-2xl font-black text-[#111111] tracking-tight">{item.stat}</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Photo ─────────────────────────────────── */}
          <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-[400px] xl:max-w-[460px] mx-auto mt-10 lg:mt-0">
            
            {/* Background elements for depth */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] border border-slate-200 bg-slate-50" />
            <div className="absolute inset-0 -z-20 translate-x-8 translate-y-8 rounded-[2rem] border border-slate-100 bg-slate-50/50" />
            
            {/* Glow behind photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] z-[-1]"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.15) 0%, rgba(203,213,225,0.1) 60%, transparent 80%)",
                filter: "blur(40px)",
                transform: "scale(1.2)",
              }}
            />

            {/* Photo card */}
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white aspect-[4/5] flex items-end justify-center hover:shadow-3xl transition-shadow duration-500 group">
              {/* Subtle background pattern inside the card */}
              <div 
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500" 
                style={{ 
                  backgroundImage: `radial-gradient(#111 1px, transparent 1px)`, 
                  backgroundSize: `24px 24px` 
                }} 
              />
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png"
                alt="Wayan Phantom — AI Automation Specialist"
                className="relative z-10 w-[95%] h-[95%] object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
              />

              {/* Floating badge — top right */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/50 px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide text-slate-800">Available to hire</span>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/50 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.simpleicons.org/n8n/EA4B22"
                    alt=""
                    width={22}
                    height={22}
                    className="w-5.5 h-5.5"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Specialist in</p>
                  <p className="text-sm font-black text-[#111111] leading-none">n8n Automation</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Tools I work with ────────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6 text-center">
            Tools I work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { label: "n8n", slug: "n8n" },
              { label: "Claude", slug: "anthropic" },
              { label: "Gemini", slug: "googlegemini" },
              { label: "Make", slug: "make" },
              { label: "GitHub", slug: "github" },
            ].map((logo) => (
              <div
                key={logo.label}
                className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 select-none grayscale hover:grayscale-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${logo.slug}/1e293b`}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  aria-hidden="true"
                />
                <span className="text-base font-bold text-[#1e293b] tracking-tight">
                  {logo.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
