"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="glass-header sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav
          className="flex h-16 items-center justify-between gap-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
            aria-label="Megatha Tech home"
          >
            <Image
              src="/Megatha-Logo-Black.svg"
              alt="Megatha Tech"
              width={120}
              height={32}
              className="h-7 w-auto object-contain"
              priority
            />
            <span className="text-base font-bold tracking-tight text-[#111111]">
              Megatha Tech
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-[#111111] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              id="header-cta"
              href="#contact"
              className="hidden md:inline-flex flex-shrink-0 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white
                         transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-lg
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            >
              Book a Discovery Call&nbsp;↗
            </a>

            {/* Mobile burger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600
                         hover:border-slate-400 hover:text-[#111111] transition-all duration-200"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                /* X icon */
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#111111]
                         transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-[#111111] px-5 py-3 text-center text-sm font-semibold text-white
                       transition-all duration-200 hover:bg-slate-800"
          >
            Book a Discovery Call ↗
          </a>
        </div>
      </div>
    </header>
  );
}
