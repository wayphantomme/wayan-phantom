"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    function onScroll() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 5);
      }, 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);



  return (

    <header className="sticky top-0 w-full flex flex-col items-center z-100">

      <motion.div
        className="w-full overflow-hidden bg-white"
        animate={{ maxHeight: scrolled ? 0 : 80, opacity: scrolled ? 0 : 1 }}
        initial={{ maxHeight: 80, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <a
          className="block w-full no-underline"
        >
          <div className="flex justify-center items-center w-full py-[3.5vw] sm:py-[1vw] px-[4vw] border-b border-[#e5e5e5] bg-white/80 backdrop-blur-[12px]">
            <p className="flex flex-col sm:flex-row items-center text-center gap-[1vw] sm:gap-[0.5vw] text-[3.5vw] sm:text-[0.97vw] text-[#a3a3a3] font-medium leading-tight sm:leading-none">
              <span>Q3 2026 Development Slots Now Open.</span>

              <strong className="font-extrabold text-black tracking-tight text-[3.5vw] sm:text-[0.97vw]">
                Only 2 slots remaining for this quarter.
              </strong>
            </p>
          </div>
        </a>
      </motion.div>

      <motion.nav
        animate={{ y: scrolled ? -8 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex justify-between items-center w-[92vw] sm:max-w-[45vw] px-[4vw] py-[2vw] sm:px-[1.5vw] sm:py-[0.8vw] bg-[#e5e5e580] rounded-[99px] backdrop-blur-[12px] relative border border-[#e5e5e5] mt-[6vw] sm:mt-[1.5vw]"
      >
        <a href="/" className="flex items-center gap-[2vw] sm:gap-[0.2vw]">
          <img
            src="Megatha-Logo-Black.svg"
            alt="Megatha logo"
            width={394}
            height={117}
            className="w-auto h-[5.5vw] sm:h-[1.5vw] min-h-[20px] "
          />
          <div className="flex flex-col justify-center text-left leading-[0.9]">
            <span className="text-black font-bold uppercase tracking-[0.18em] text-[2.8vw] sm:text-[0.75vw] min-text-[10px]">
              Megatha
            </span>
            <span className="text-black font-bold uppercase tracking-[0.18em] text-[2.8vw] sm:text-[0.75vw] min-text-[10px]">
              Tech
            </span>
          </div>
        </a>

        <div className="flex items-center gap-[2vw] sm:gap-[0.8vw]">
          <a
            href="https://wa.me/+6289688072039"
            className="hidden sm:flex items-center gap-[0.5vw] px-[1.2vw] py-[0.6vw] bg-black text-white text-[1vw] font-semibold rounded-[99px] transition-colors duration-300 hover:bg-white hover:text-black no-underline"
          >
            Book a Call
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10m0 0v10m0-10L7 17" />
            </svg>
          </a>

          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex sm:hidden border border-[#e5e5e5] rounded-[8px] cursor-pointer p-[1.5vw] bg-[#f5f5f5]"
          >
            <img
              src="https://sody.app/_image?href=%2F_astro%2Fhamburger.Cx9jG_OA.svg&w=24&h=24&f=svg"
              alt="hamburger"
              width={24}
              height={24}
              className="w-[5vw] h-[5vw]"
            />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute top-[calc(100%+5px)] right-0 bg-[#e5e5e5e6] backdrop-blur-[12px] border border-[#e5e5e5] rounded-[10px] z-[1] w-full p-[3vw] box-border flex flex-col gap-[2vw]"
              >
                <div className="flex flex-row items-center justify-center gap-[2vw]">
                  <a
                    href="https://www.instagram.com/megatha.tech/"
                    className="flex flex-1 px-[4vw] py-[3vw] no-underline bg-white justify-center items-center text-center rounded-[10px] text-[3.8vw] font-semibold text-black border border-[#e5e5e5]"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center gap-[2vw]">
                  <a
                    href="https://x.com/megathatech"
                    className="flex flex-1 px-[4vw] py-[3vw] no-underline bg-white justify-center items-center text-center rounded-[10px] text-[3.8vw] font-semibold text-black border border-[#e5e5e5]"
                  >
                    Twitter / X
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center gap-[2vw]">
                  <a
                    href="http://linkedin.com/company/megathatech/"
                    className="flex flex-1 px-[4vw] py-[3vw] no-underline bg-white justify-center items-center text-center rounded-[10px] text-[3.8vw] font-semibold text-black border border-[#e5e5e5]"
                  >
                    LinkedIn
                  </a>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}