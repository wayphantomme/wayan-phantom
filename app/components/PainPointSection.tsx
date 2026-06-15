"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// ─── Token types & data ───────────────────────────────────────────────────────

type Token = { type: "word"; text: string; dim?: boolean } | { type: "br" };

const h2Tokens: Token[] = [
  { type: "word", text: "Tired" },
  { type: "word", text: "of" },
  { type: "word", text: "chasing" },
  { type: "word", text: "developers" },
  { type: "word", text: "and" },
  { type: "word", text: "still", dim: true },
  { type: "word", text: "missing", dim: true },
  { type: "word", text: "deadlines?", dim: true },
];

const h2WordCount = h2Tokens.filter((t) => t.type === "word").length;

// ─── Animated word component ──────────────────────────────────────────────────

function AnimatedH2Word({
  text,
  index,
  dim,
  scrollYProgress,
}: {
  text: string;
  index: number;
  dim?: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  const windowSize = 2 / h2WordCount;
  const start = (index / h2WordCount) * 0.75;
  const end = Math.min(1, start + windowSize);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const blur = useTransform(scrollYProgress, [start, end], [8, 0]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, filter: blurFilter }}
      className={`inline-block ${dim ? "text-slate-400" : ""}`}
    >
      {text}&nbsp;
    </motion.span>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function PainPointSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  // Scroll progress khusus untuk h2
  const { scrollYProgress: h2Progress } = useScroll({
    target: h2Ref,
    offset: ["start 0.85", "center 0.4"],
  });

  // IntersectionObserver untuk elemen .fade-in-up lainnya
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = containerRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pain-point"
      className="relative bg-white px-6 py-28 md:py-36"
      aria-labelledby="pain-point-heading"
      ref={containerRef}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(241,245,249,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Section label */}
        <p className="fade-in-up text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          The Problem We Solve
        </p>

        {/* Bold question — scroll-animated word by word */}
        <h2
          id="pain-point-heading"
          ref={h2Ref}
          className="fade-in-up delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.1] tracking-tight mb-12"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          {(() => {
            let wordIdx = 0;
            return h2Tokens.map((token, i) => {
              if (token.type === "br") return <br key={i} />;
              const idx = wordIdx++;
              return (
                <AnimatedH2Word
                  key={i}
                  text={token.text}
                  index={idx}
                  dim={token.dim}
                  scrollYProgress={h2Progress}
                />
              );
            });
          })()}
        </h2>

        {/* Divider */}
        <div className="fade-in-up delay-2 w-16 h-px bg-slate-200 mb-12" />

        {/* Pain points block */}
        <div className="fade-in-up delay-3 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "⏳",
              title: "Slow Developers",
              body: "Communication black holes, delayed milestones, and endless excuses that stall your go-to-market plan.",
            },
            {
              icon: "🐛",
              title: "Messy Code & Tech Debt",
              body: "Quick-and-dirty builds that crash under traffic, forcing you to pay twice to rewrite the same codebase.",
            },
            {
              icon: "💸",
              title: "Wasted Product Budget",
              body: "Paying for features your users don't need because your engineering team builds without scoping business outcomes.",
            },
          ].map((point) => (
            <div key={point.title} className="flex flex-col gap-3">
              <span className="text-3xl" aria-hidden="true">
                {point.icon}
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                {point.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}