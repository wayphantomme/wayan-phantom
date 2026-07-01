
const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep-dive call to understand your business, your biggest time-wasters, and what success looks like. Output: a clear automation blueprint with defined scope, tools, and expected outcomes.",
    duration: "Day 1–3",
  },
  {
    number: "02",
    title: "Blueprint",
    description:
      "I design the full automation architecture — mapping every trigger, action, and integration before a single workflow is built. You review and approve everything upfront.",
    duration: "Day 3–5",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Rapid workflow development with live previews you can test yourself. I connect your tools, build the logic, and stress-test every edge case until it runs flawlessly.",
    duration: "Week 1–3",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Full documentation, a walkthrough video, and a 30-day support window. You own everything — the workflows, the credentials, the knowledge. No black boxes.",
    duration: "Week 3–4",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-white py-[12vw] md:pt-[6vw] md:pb-[4vw] px-[4vw]" aria-labelledby="process-heading">
      <div className="w-full flex flex-col gap-[8vw] md:gap-[4vw]">

        <div className="w-full flex flex-col gap-[3vw] md:gap-[1vw] items-center justify-center text-center select-none">
          <h2 id="process-heading" className="text-black text-[7.1vw] md:text-[2.91vw] font-extrabold tracking-[-0.25vw] md:tracking-[-0.13vw] leading-[1.2]">
            How I Work.
          </h2>
          <p className="text-[#a3a3a3] text-[4.1vw] md:text-[1.25vw] font-medium leading-[1.5]">
            Simple. Transparent. No surprises.
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
                className={`relative flex flex-col items-start md:items-center justify-center gap-[5.1vw] md:gap-0 w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >

                {/* Text content */}
                <div
                  className={`w-full md:w-1/2 pl-[14vw] md:pl-0 flex flex-col ${index % 2 === 0
                      ? "md:pr-[6vw] md:items-end md:text-right"
                      : "md:pl-[6vw] md:items-start md:text-left"
                    }`}
                >
                  <div className={`flex flex-wrap items-center gap-[3vw] md:gap-[0.83vw] mb-[2vw] md:mb-[0.83vw] ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}>
                    <h3 className="text-[4.6vw] md:text-[1.38vw] font-extrabold tracking-wide text-neutral-900">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-[#f5f5f5] border border-neutral-200 px-[4vw] py-[1.5vw] md:px-[1.1vw] md:py-[0.41vw] text-[3.3vw] md:text-[0.83vw] font-bold text-neutral-600">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-neutral-500 text-[3.5vw] md:text-[1.04vw] leading-relaxed w-full md:max-w-[34vw] font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Center circle */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-auto flex-shrink-0 z-10 transform md:-translate-x-1/2">
                  <div
                    className="w-[11.2vw] h-[11.2vw] md:w-[4.16vw] md:h-[4.16vw] rounded-full border border-neutral-200 bg-[#f5f5f5] flex items-center justify-center
                               font-bold text-[3.5vw] md:text-[0.97vw] text-neutral-500 group-hover:border-neutral-900 group-hover:bg-[#141414] group-hover:text-white
                               transition-all duration-300 select-none"
                  >
                    {step.number}
                  </div>
                </div>

                {/* Desktop spacer */}
                <div className="hidden md:block w-1/2" aria-hidden="true" />

              </div>
            ))}
          </div>
        </div>


        <div className="mt-20 rounded-[var(--radius-card)] border border-slate-100 bg-[#F8FAFC] max-w-6xl w-full p-10 text-center mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold text-[#111111] mb-3">
            Ready to automate your first workflow?
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            Book a free 30-minute discovery call. We&apos;ll identify your biggest
            time-wasters and map out exactly what to automate first.
          </p>
          <a
            id="process-cta"
            href="https://calendly.com/wayanphantomme/30min"
            className="inline-flex rounded-full bg-[#111111] px-8 py-4 text-base font-semibold text-white
               transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl"
          >
            Book a Free Call →
          </a>
        </div>

      </div>
    </section>
  );
}