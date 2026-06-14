import Image from "next/image";

const clientImages = [
  "https://placehold.co/1350x1080/111111/FFFFFF?text=Client+Case+1",
  "https://placehold.co/1350x1080/0F172A/94A3B8?text=Client+Case+2",
  "https://placehold.co/1350x1080/022C22/34D399?text=Client+Case+3",
  "https://placehold.co/1350x1080/311042/E879F9?text=Client+Case+4",
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="bg-slate-50 py-16 overflow-hidden border-y border-slate-100"
      aria-label="Our Clients"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Our Clients & Partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients on edges for fade effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32"
          style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32"
          style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }}
        />

        {/* Scrolling track */}
        <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First set of images */}
          {clientImages.map((src, idx) => (
            <div
              key={`client-1-${idx}`}
              className="relative w-[337.5px] h-[270px] sm:w-[450px] sm:h-[360px] md:w-[506.25px] md:h-[405px] rounded-2xl overflow-hidden shadow-md border border-slate-200/60 bg-neutral-900 flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Client Case Study ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 337.5px, (max-width: 768px) 450px, 506px"
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {clientImages.map((src, idx) => (
            <div
              key={`client-2-${idx}`}
              className="relative w-[337.5px] h-[270px] sm:w-[450px] sm:h-[360px] md:w-[506.25px] md:h-[405px] rounded-2xl overflow-hidden shadow-md border border-slate-200/60 bg-neutral-900 flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Client Case Study ${idx + 1} Loop`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 337.5px, (max-width: 768px) 450px, 506px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
