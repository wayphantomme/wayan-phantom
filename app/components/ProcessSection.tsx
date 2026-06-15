

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your product vision, technical architecture, and business goals. Output: a detailed technical specification, feature map, and fixed project scope.",
    duration: "Week 1–2",
  },
  {
    number: "02",
    title: "Design",
    description:
      "High-fidelity wireframes and interactive prototypes. We align on every screen, interaction, and edge case before a single line of code is written.",
    duration: "Week 2–3",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Sprint-based development with daily async updates. Full test coverage, CI/CD pipelines active from day one, and weekly preview deployments you can interact with.",
    duration: "Week 3–10",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Zero-downtime deployment, performance audit, load testing, and a 30-day hypercare support window post-launch. We ship, then we make sure it stays shipped.",
    duration: "Week 10–12",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-white py-[12vw] md:pt-[6vw] md:pb-[4vw] px-[4vw]" aria-labelledby="process-heading">
      <div className="w-full flex flex-col gap-[8vw] md:gap-[4vw]">

        <div className="w-full flex flex-col gap-[3vw] md:gap-[1vw] items-center justify-center text-center select-none">
          <h2 id="process-heading" className="text-black text-[7.1vw] md:text-[2.91vw] font-extrabold tracking-[-0.25vw] md:tracking-[-0.13vw] leading-[1.2]">
            The Megatha Process.
          </h2>
          <p className="text-[#a3a3a3] text-[4.1vw] md:text-[1.25vw] font-medium leading-[1.5]">
            Predictable. Transparent. Fast.
          </p>
        </div>

        <div className="relative w-full">

          <div
            aria-hidden="true"
            className="absolute left-[5.6vw] md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200 transform md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-[10.2vw] md:gap-[4vw]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                /* Menggunakan md:flex-row untuk langkah ganjil (01, 03) 
                  dan md:flex-row-reverse untuk langkah genap (02, 04)
                */
                className={`relative flex flex-col items-start md:items-center justify-center gap-[5.1vw] md:gap-0 w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >

                {/* 1. KONTEN TEKS (Menggunakan padding khusus agar tidak menabrak angka tengah) */}
                <div
                  className={`w-full md:w-1/2 pl-[14vw] md:pl-0 flex flex-col ${index % 2 === 0
                      ? "md:pr-[6vw] md:items-end md:text-right"   /* Kolom Kiri: Kasih jarak aman kanan, teks rata kanan */
                      : "md:pl-[6vw] md:items-start md:text-left"  /* Kolom Kanan: Kasih jarak aman kiri, teks rata kiri */
                    }`}
                >
                  {/* Container Judul & Badge Durasi */}
                  <div className={`flex flex-wrap items-center gap-[3vw] md:gap-[0.83vw] mb-[2vw] md:mb-[0.83vw] ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}>
                    <h3 className="text-[4.6vw] md:text-[1.38vw] font-extrabold tracking-wide text-neutral-900">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-[#f5f5f5] border border-neutral-200 px-[4vw] py-[1.5vw] md:px-[1.1vw] md:py-[0.41vw] text-[3.3vw] md:text-[0.83vw] font-bold text-neutral-600">
                      {step.duration}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-neutral-500 text-[3.5vw] md:text-[1.04vw] leading-relaxed w-full md:max-w-[34vw] font-medium">
                    {step.description}
                  </p>
                </div>

                {/* 2. LINGKARAN ANGKA DI TENGAH */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-auto flex-shrink-0 z-10 transform md:-translate-x-1/2">
                  <div
                    className="w-[11.2vw] h-[11.2vw] md:w-[4.16vw] md:h-[4.16vw] rounded-full border border-neutral-200 bg-[#f5f5f5] flex items-center justify-center
                               font-bold text-[3.5vw] md:text-[0.97vw] text-neutral-500 group-hover:border-neutral-900 group-hover:bg-[#141414] group-hover:text-white
                               transition-all duration-300 select-none"
                  >
                    {step.number}
                  </div>
                </div>

                {/* 3. RUANG KOSONG PENYEIMBANG DI DESKTOP */}
                <div className="hidden md:block w-1/2" aria-hidden="true" />

              </div>
            ))}
          </div>
        </div>


        <div className="mt-20 rounded-[var(--radius-card)] border border-slate-100 bg-[#F8FAFC] max-w-6xl w-full p-10 text-center mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold text-[#111111] mb-3">
            Ready to Start?
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            Book a free 30-minute discovery call. We&apos;ll scope your project
            and tell you exactly what it will take to ship it.
          </p>
          <a
            id="process-cta"
            href="#contact"
            className="inline-flex rounded-full bg-[#111111] px-8 py-4 text-base font-semibold text-white
               transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl"
          >
            Book a Discovery Call →
          </a>
        </div>
        {/* -------------------------------------------------- */}

      </div>
    </section>
  );
}