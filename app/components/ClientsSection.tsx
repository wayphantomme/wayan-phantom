"use client";

import React from "react";
import { motion } from "framer-motion";

const clientLogos = [
  { 
    id: 1, 
    name: 'EduCLaaS Pte Ltd', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/educlaas_ofjonj.jpg' 
  },
  { 
    id: 2, 
    name: 'Mainstreet Global', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431583/mainstreet-global_pbdxab.jpg' 
  },
  { 
    id: 3, 
    name: 'Mainstreet Hospitality', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431583/mainstreet-hospitality_weixub.jpg' 
  },
  { 
    id: 4, 
    name: 'Brittco Consulting', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/brittco-consulting_nxnixx.jpg' 
  },
  { 
    id: 5, 
    name: 'Ken Gooz', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/ken-gooz_ie4ln3.jpg' 
  },
  { 
    id: 6, 
    name: 'Nara Land Property', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431585/nara-land_ls9euu.jpg' 
  },
  { 
    id: 7, 
    name: 'Nine Planets Coffee', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431584/nine-planets_bokcj5.jpg' 
  },
  { 
    id: 8, 
    name: 'Narie\'s Eatery & Coffee', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431584/naries_utcn8t.jpg' 
  },
  { 
    id: 9, 
    name: 'Global Property Innovation', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/global-property_mqurxv.jpg' 
  },
  { 
    id: 10, 
    name: 'DM Agency', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/dm-agency_c9ubjs.jpg' 
  },
  { 
    id: 11, 
    name: 'Devisa', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/devisa_ptmq4g.jpg' 
  },
];

interface ClientLogoItem {
  id: number;
  name: string;
  srcUrl: string;
}

function ClientCard({ logo }: { logo: ClientLogoItem }) {
  return (
    <div
      className="relative flex-shrink-0 w-[55vw] md:w-[24.3vw] aspect-square rounded-[4vw] md:rounded-[1.38vw] p-[4vw] md:p-[1.38vw] flex flex-col items-start justify-between overflow-hidden box-border group"
    >
      <img
        src={logo.srcUrl}
        alt={logo.name}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
}

function MarqueeTrack() {
  return (
    <motion.div
      className="flex gap-[4vw] md:gap-[2.77vw] shrink-0"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ duration: 35, ease: "linear", repeat: Infinity }}
    >
      {clientLogos.map((logo, i) => (
        <ClientCard key={`${logo.id}-${i}`} logo={logo} />
      ))}
    </motion.div>
  );
}

export default function ClientsMarquee() {
  return (
    <div className="w-full pt-[6vw] md:pt-0 pb-[8vw] md:pb-[4vw] overflow-hidden relative bg-white">

         <h4 className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-12">
          PREVIOUS CLIENTS AND PROJECTS
        </h4>

      <div className="flex gap-[4vw] md:gap-[2.77vw] overflow-x-hidden w-full relative">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}