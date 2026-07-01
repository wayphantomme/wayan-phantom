const footerColumns = [
  {
    heading: "About Wayan",
    links: [
      { label: "My Story", href: "#" },
      { label: "GitHub", href: "https://github.com/wayphantomme" },
      { label: "LinkedIn", href: "#" },
      { label: "Hire Me", href: "https://calendly.com/wayanphantomme/30min" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "AI Automation with n8n", href: "#services" },
      { label: "AI Chatbots & Agents", href: "#services" },
      { label: "Full-Stack Web Apps", href: "#services" },
      { label: "Workflow Consulting", href: "#services" },
    ],
  },
  {
    heading: "My Work",
    links: [
      { label: "Gallery", href: "#portfolio" },
      { label: "Case Studies", href: "#portfolio" },
      { label: "Open Source", href: "https://github.com/wayphantomme" },
      { label: "Book a Call", href: "https://calendly.com/wayanphantomme/30min" },
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
          background: "radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)",
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
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Let&apos;s automate your business.
              </span>
            </h2>
            <p className="mt-6 text-base text-slate-400 leading-relaxed max-w-xl">
              Book a free 30-minute call and I&apos;ll identify exactly what to automate first — and what it will take to build it. Zero obligation.
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
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect</span>
                <div className="flex gap-3">
                  {[
                    {
                      label: "WhatsApp",
                      href: "https://wa.me/+6289688072039",
                      svg: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.031 0C5.385 0 0 5.385 0 12.03c0 2.12.553 4.184 1.603 6.008L.24 24l6.104-1.602A11.967 11.967 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.03S18.677 0 12.031 0zm6.541 17.202c-.276.776-1.583 1.488-2.188 1.558-.553.064-1.258.114-3.64-1.077-2.853-1.428-4.685-4.325-4.823-4.51-.138-.184-1.15-1.533-1.15-2.924 0-1.391.724-2.072.983-2.348.258-.276.564-.346.748-.346.184 0 .368.005.529.01.173.006.402-.064.629.483.287.69.979 2.392 1.066 2.564.086.172.144.373.028.603-.115.23-.173.373-.346.58-.172.207-.36.438-.506.586-.16.16-.328.334-.143.656.184.321.821 1.36 1.761 2.198 1.215 1.082 2.228 1.417 2.55 1.566.321.15.511.127.706-.098.195-.224.84-1.011 1.065-1.362.224-.35.448-.293.754-.184.305.109 1.933.914 2.266 1.08.334.167.558.253.639.391.081.138.081.798-.195 1.574z" />
                        </svg>
                      )
                    },
                    {
                      label: "GitHub",
                      href: "https://github.com/wayphantomme",
                      svg: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      )
                    },
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/wayphantomme",
                      svg: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      )
                    },
                    {
                      label: "Twitter/X",
                      href: "https://x.com/wayphantomme",
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
                href="https://calendly.com/wayanphantomme/30min"
                className="w-full text-center rounded-2xl bg-white hover:bg-slate-100 text-black px-7 py-4 text-base font-bold
                           transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] block"
              >
                Book a Free Discovery Call ↗
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
                  <li key={link.label} className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo / name */}
          <div className="flex items-center gap-3">
            <span className="text-white font-bold tracking-tight text-lg">
              Wayan Phantom
            </span>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Wayan Phantom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
