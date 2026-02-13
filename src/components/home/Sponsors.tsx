"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=SBI", alt: "SBI" },
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=RedBull", alt: "RedBull" },
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=Nestle", alt: "Nestle" },
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=CMPDI", alt: "CMPDI" },
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=JHTourism", alt: "Jharkhand Tourism" },
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=Coke", alt: "Coca Cola" },
  { src: "https://api.dicebear.com/9.x/initials/svg?seed=NTPC", alt: "NTPC" },
];

export function Sponsors() {
  return (
    <section className="py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h3 className="text-sm font-mono tracking-[0.4em] uppercase text-neutral-500">[ Strategic_Connectivity ]</h3>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/5 border border-white/5">
        {logos.map((logo) => (
          <motion.div 
            key={logo.alt}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            className="group flex flex-col items-center justify-center p-8 bg-black transition-all duration-300 h-32"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-16 h-16 object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
            />
            <span className="mt-3 text-[8px] font-mono text-neutral-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {logo.alt}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
