import CloudinaryImage from "./CloudinaryImage";

const services = [
  {
    id: "ai-automation",
    category: "AI Automation with n8n",
    description:
      "I design and deploy automation systems that eliminate repetitive work and connect all your tools into one intelligent engine. From lead capture to operations — running 24/7 without you lifting a finger.",
    tags: ["n8n", "OpenAI", "Claude", "Gemini", "WhatsApp", "Airtable", "Make", "Zapier"],
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782875749/ChatGPT_Image_Jul_1_2026_11_14_56_AM_rrgs3y.png",
  },
  {
    id: "web-dev",
    category: "Full-Stack Web Apps",
    description:
      "I build fast, scalable web applications designed for real business growth — not just MVPs. Clean code, great UX, and built to handle real-world usage without breaking.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Cloud Infrastructure", "API"],
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782875749/ChatGPT_Image_Jul_1_2026_11_14_58_AM_pkn2lq.png",
  },
  {
    id: "ai-chatbots",
    category: "AI Chatbots & Agents (Future)",
    description:
      "Custom LLM-powered assistants trained on your business data. WhatsApp bots, customer support agents, internal knowledge bases — AI that actually understands your context and responds like a human.",
    tags: ["LLM", "RAG", "WhatsApp Bot", "OpenAI", "Claude", "Vector DB", "Custom Agents"],
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1782875750/ChatGPT_Image_Jul_1_2026_11_15_36_AM_oirt8m.png",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] px-6 py-28 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            what i build
          </p>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Automate. Build. Scale.
          </h2>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            I build systems that take the manual work off your plate — powered by AI automation, intelligent bots, and modern web engineering.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="card-hover group flex flex-col rounded-[var(--radius-card)] bg-white border border-slate-100 overflow-hidden"
            >
              {/* Image Container */}
              <div className="h-52 bg-slate-100 overflow-hidden mt-4 mx-auto w-[calc(100%-2rem)] rounded-xl">
                <CloudinaryImage
                  src={service.image}
                  alt={service.category}
                  width={600}
                  height={208}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-8">

              {/* Title */}
              <h3 className="text-xl font-bold text-[#111111] mb-3 leading-snug capitalize">
                {service.category}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover CTA */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="https://calendly.com/wayanphantomme/30min"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]"
                >
                  Let&apos;s Talk
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
