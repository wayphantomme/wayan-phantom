import Image from "next/image";

const galleryItems = [
  {
    id: "project-1",
    image: "https://placehold.co/600x600/18181b/a1a1aa?text=Enterprise+SaaS",
    title: "Quantum Platform",
    category: "Cloud Operations",
  },
  {
    id: "project-2",
    image: "https://placehold.co/600x600/0f172a/94a3b8?text=DeFi+Dashboard",
    title: "Apex Protocol",
    category: "Decentralized Finance",
  },
  {
    id: "project-3",
    image: "https://placehold.co/600x600/022c22/34d399?text=AI+Orchestrator",
    title: "NeuralFlow Engine",
    category: "Artificial Intelligence",
  },
  {
    id: "project-4",
    image: "https://placehold.co/600x600/311042/e879f9?text=E-Commerce+API",
    title: "Nova Cart",
    category: "Headless Commerce",
  },
  {
    id: "project-5",
    image: "https://placehold.co/600x600/172554/60a5fa?text=Analytics+Suite",
    title: "Pulse Analytics",
    category: "Real-time Metrics",
  },
  {
    id: "project-6",
    image: "https://placehold.co/600x600/450a0a/f87171?text=Mobile+App",
    title: "SwiftPay",
    category: "Fintech Mobile",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-[#0A0A0A] px-6 py-28 md:py-36 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Decorative gradient light */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
            Featured Work
          </p>
          <h2
            id="portfolio-heading"
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Our Gallery of Excellence
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
            Hover over the projects to explore their details and see the interactive animations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/[0.08] bg-neutral-900 aspect-square cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-full relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Dynamic Overlay and Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                
                {/* Border accent line that expands on hover */}
                <div className="w-0 h-[2px] bg-white mt-4 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
