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
        {/* Bold question — scroll-animated word by word + inline tagline */}
        <h2
          id="pain-point-heading"
          ref={h2Ref}
          className="fade-in-up delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.1] tracking-tight"
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
      </div>
    </section>
  );
}