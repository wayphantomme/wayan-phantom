import Image from 'next/image';

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

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white w-full border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h4 className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-12">
          OUR CLIENTS & PARTNERS
        </h4>
        
        {/* Grid System Responsif */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <div 
              key={logo.id} 
              className="relative w-full h-16 flex items-center justify-center p-2 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-105"
              title={logo.name}
            >
              <Image
                src={logo.srcUrl}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-w-768px) 50vw, (max-w-1200px) 25vw, 15vw"
                unoptimized // Memastikan Next.js langsung menembak URL Cloudinary tanpa terhambat proses internal cache localhost
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
