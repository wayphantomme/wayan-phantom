"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "project-6",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440980/lisk-winner_gtpvlt.jpg",
    title: "Lisk Builders SEA",
    category: "Hackathon",
  },
  {
    id: "project-3",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441579/cursor-hackathon_gblcd7.jpg",
    title: "Cursor Hackathon",
    category: "Hackathon",
  },
  {
    id: "project-1",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441589/apple-developer-academy_ms2iiz.jpg",
    title: "Apple Developer Academy",
    category: "Education",
  },
  {
    id: "project-2",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441581/startup-village_qaxvkp.jpg",
    title: "Startup Village",
    category: "Event",
  },
  {
    id: "project-4",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441353/Superteam-Singapore_d4cadr.jpg",
    title: "Superteam Singapore",
    category: "Community",
  },
  {
    id: "project-5",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781441351/Superteam-ID_sixibw.jpg",
    title: "Superteam ID",
    category: "Community",
  },
  {
    id: "project-7",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440979/bali-blockchain-summit_eqgftm.jpg",
    title: "Bali Blockchain Summit",
    category: "Conference",
  },
  {
    id: "project-8",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440976/lisk-villa_ci2j7a.jpg",
    title: "Builders Retreat",
    category: "Event",
  },
  {
    id: "project-9",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440975/minutes-of-manager_v3i0vg.jpg",
    title: "Minutes of Manager",
    category: "Community",
  },
  {
    id: "project-10",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440974/lisk-builders-sea_jzhxjc.jpg",
    title: "Lisk Builders SEA",
    category: "Community",
  },
  {
    id: "project-11",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440637/Lisk_Spark_Incubator_enazn5.png",
    title: "Lisk Spark Incubator",
    category: "Incubator",
  },
  {
    id: "project-12",
    image: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781440632/Bali_Capital_Circle_kauwtc.png",
    title: "Bali Capital Circle",
    category: "Event",
  },
];

export default function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScrollStatus = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollStatus);
      checkScrollStatus();
    }
    return () => {
      if (carousel) carousel.removeEventListener("scroll", checkScrollStatus);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const offset = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-white px-6 py-10 md:py-36 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-3 md:mb-4">
              Featured Work
            </p>
            <h2
              id="portfolio-heading"
              className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Our Gallery of Activities
            </h2>
            <p className="mt-4 text-neutral-500 max-w-xl text-sm md:text-base font-medium">
              A visual journey through the dynamic hackathons, immersive summits, and builder communities that define our global impact.
            </p>
          </div>

          {/* Tombol Navigasi: hidden di mobile, flex mulai dari ukuran layar md */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border border-neutral-200 bg-white text-black transition-all duration-300 ${!canScrollLeft
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-black hover:text-white hover:scale-105 active:scale-95"
                }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border border-neutral-200 bg-white text-black transition-all duration-300 ${!canScrollRight
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-black hover:text-white hover:scale-105 active:scale-95"
                }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8 touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-[78vw] sm:w-[45vw] lg:w-[28vw] snap-start group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-15/11 relative overflow-hidden rounded-[var(--radius-card)] border border-neutral-200 bg-neutral-50 mb-4 md:mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 28vw"
                />
              </div>

              <div className="px-1 flex flex-col gap-1">
                <span className="text-[10px] md:text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 className="text-base md:text-xl font-bold text-black tracking-tight group-hover:text-neutral-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="w-0 h-[1.5px] bg-black/60 mt-2 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}