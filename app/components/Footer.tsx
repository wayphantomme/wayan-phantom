const footerColumns = [
  {
    heading: "About Megatha Tech",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Team", href: "#" },
      { label: "Culture & Values", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Full-Stack Development", href: "#services" },
      { label: "Web3 & Blockchain", href: "#services" },
      { label: "AI & Automation", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    heading: "Our Work",
    links: [
      { label: "Case Studies", href: "#portfolio" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Client Reviews", href: "#" },
      { label: "Open Source", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "NDA Template", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#050505] text-white px-6 pt-24 pb-12 relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* Background Glows */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Contact/CTA Section */}
        <div className="mb-20 pb-20 border-b border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white mb-6 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Get In Touch
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Only 2 slots left this quarter.
              <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Book your call now.
              </span>
            </h2>
            <p className="mt-6 text-base text-slate-400 leading-relaxed max-w-xl">
              We design and engineer high-performance systems that don&apos;t break at scale. Get a comprehensive scope blueprint and fixed-price estimate. Zero obligation.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 w-full lg:pl-8">
            <div className="rounded-[var(--radius-card)] border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col gap-6">
              {/* Email Link */}
              <a
                id="footer-email"
                href="mailto:wayanphantomme@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Direct Email</span>
                  <span className="font-semibold text-sm">wayanphantomme@gmail.com</span>
                </div>
              </a>

              {/* Social links */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Social Channels</span>
                <div className="flex gap-3">
                  {[
                    {
                      label: "GitHub",
                      href: "#",
                      svg: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      )
                    },
                    {
                      label: "LinkedIn",
                      href: "#",
                      svg: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      )
                    },
                    {
                      label: "Twitter/X",
                      href: "#",
                      svg: (
                        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      id={`footer-${social.label.toLowerCase().replace("/", "-")}`}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5
                                 text-slate-400 hover:border-white/30 hover:bg-white/10 hover:text-white
                                 transition-all duration-300 hover:scale-105"
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>

              {/* Call Booking CTA */}
              <a
                id="footer-cta"
                href="#contact"
                className="w-full text-center rounded-2xl bg-white hover:bg-slate-100 text-black px-7 py-4 text-base font-bold
                           transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] block"
              >
                Book a Discovery Call ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mb-6">
                {col.heading}
              </h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label} className="text-sm text-slate-400">
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Megatha-Logo-Black.svg"
            alt="Megatha Tech"
            className="h-7 w-auto object-contain invert brightness-0 invert"
          />
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Megatha Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
