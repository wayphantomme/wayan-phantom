"use client";

import { Heart } from "lucide-react";

const techBadges = [
  { label: "Next.js",     bg: "#111111", color: "#ffffff", icon: "nextdotjs" },
  { label: "TypeScript",  bg: "#3178C6", color: "#ffffff", icon: "typescript" },
  { label: "Tailwind CSS",bg: "#0EA5E9", color: "#ffffff", icon: "tailwindcss" },
  { label: "Node.js",     bg: "#15803D", color: "#ffffff", icon: "nodedotjs" },
  { label: "Python",      bg: "#3776AB", color: "#ffffff", icon: "python" },
  { label: "Anthropic",   bg: "#D97757", color: "#ffffff", icon: "anthropic" },
  { label: "Make",        bg: "#150428", color: "#ffffff", icon: "make" },
  { label: "PostgreSQL",  bg: "#1D4ED8", color: "#ffffff", icon: "postgresql" },
  { label: "Docker",      bg: "#1E40AF", color: "#ffffff", icon: "docker" },
  { label: "Prisma",      bg: "#0F172A", color: "#ffffff", icon: "prisma" },
  { label: "Supabase",    bg: "#3ECF8E", color: "#000000", icon: "supabase" },
];

const toolBadges = [
  {
    label: "Shopify",
    bgClass: "bg-emerald-50/60",
    textClass: "text-emerald-800",
    borderClass: "border-emerald-200/50",
    icon: "shopify"
  },
  {
    label: "n8n",
    bgClass: "bg-orange-50/60",
    textClass: "text-orange-800",
    borderClass: "border-orange-200/50",
    icon: "n8n"
  },
  {
    label: "Canva",
    bgClass: "bg-violet-50/60",
    textClass: "text-violet-800",
    borderClass: "border-violet-200/50",
    icon: "canva"
  },
  {
    label: "Figma",
    bgClass: "bg-rose-50/60",
    textClass: "text-rose-800",
    borderClass: "border-rose-200/50",
    icon: "figma"
  },
  {
    label: "Spreadsheets",
    bgClass: "bg-green-50/60",
    textClass: "text-green-800",
    borderClass: "border-green-200/50",
    icon: "googlesheets"
  },
  {
    label: "Airtable",
    bgClass: "bg-sky-50/60",
    textClass: "text-sky-800",
    borderClass: "border-sky-200/50",
    icon: "airtable"
  },
  {
    label: "WordPress",
    bgClass: "bg-blue-50/60",
    textClass: "text-blue-800",
    borderClass: "border-blue-200/50",
    icon: "wordpress"
  },
  {
    label: "Lovable",
    bgClass: "bg-pink-50/60",
    textClass: "text-pink-800",
    borderClass: "border-pink-200/50",
    isLucideIcon: true
  },
  {
    label: "Google Calendar",
    bgClass: "bg-blue-50/60",
    textClass: "text-blue-800",
    borderClass: "border-blue-200/50",
    icon: "googlecalendar"
  }
];

interface TechBadge {
  label: string;
  bg: string;
  color: string;
  icon: string;
}

interface ToolBadge {
  label: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  icon?: string;
  isLucideIcon?: boolean;
}

function TechBadgeItem({ badge }: { badge: TechBadge }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 mx-3 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap select-none"
      style={{ backgroundColor: badge.bg, color: badge.color }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${badge.icon}/ffffff`}
        alt=""
        width={16}
        height={16}
        className="w-4 h-4 object-contain flex-shrink-0"
        aria-hidden="true"
      />
      {badge.label}
    </span>
  );
}

function ToolBadgeItem({ badge }: { badge: ToolBadge }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 mx-3 rounded-full border px-5 py-2.5 text-sm font-semibold whitespace-nowrap select-none transition-all duration-300 hover:scale-102 ${badge.bgClass} ${badge.textClass} ${badge.borderClass}`}
    >
      {badge.isLucideIcon ? (
        <Heart
          className="w-4 h-4 fill-pink-500 text-pink-500 flex-shrink-0"
          aria-hidden="true"
        />
      ) : (
        badge.icon && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${badge.icon}`}
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 object-contain flex-shrink-0"
            aria-hidden="true"
          />
        )
      )}
      <span>{badge.label}</span>
    </span>
  );
}

export default function TechMarquee() {
  return (
    <section
      id="tech-stack"
      className="marquee-outer relative w-full overflow-hidden py-10 border-y border-slate-100 bg-white"
      aria-label="Technology stack and client tools"
    >
      {/* Fade edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(to left, white, transparent)" }}
      />

      {/* Row 1 — Tech stack (left → right) */}
      <div className="mb-3 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[...techBadges, ...techBadges].map((badge, i) => (
            <TechBadgeItem key={`tech-${i}`} badge={badge} />
          ))}
        </div>
      </div>

      {/* Row 2 — Tools (right → left) */}
      <div className="overflow-hidden" aria-hidden="true">
        <div className="marquee-track-reverse">
          {[...toolBadges, ...toolBadges].map((badge, i) => (
            <ToolBadgeItem key={`tool-${i}`} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
