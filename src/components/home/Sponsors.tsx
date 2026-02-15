"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { name: "SBI", logo: "https://api.dicebear.com/9.x/initials/svg?seed=SBI", tier: "Title" },
  { name: "RedBull", logo: "https://api.dicebear.com/9.x/initials/svg?seed=RedBull", tier: "Power" },
  { name: "Nestle", logo: "https://api.dicebear.com/9.x/initials/svg?seed=Nestle", tier: "Partner" },
  { name: "CMPDI", logo: "https://api.dicebear.com/9.x/initials/svg?seed=CMPDI", tier: "Associate" },
  { name: "Jharkhand Tourism", logo: "https://api.dicebear.com/9.x/initials/svg?seed=JHTourism", tier: "Tourism" },
  { name: "Coca Cola", logo: "https://api.dicebear.com/9.x/initials/svg?seed=Coke", tier: "Beverage" },
  { name: "NTPC", logo: "https://api.dicebear.com/9.x/initials/svg?seed=NTPC", tier: "Energy" },
  { name: "Samsung", logo: "https://api.dicebear.com/9.x/initials/svg?seed=Samsung", tier: "Tech" },
  { name: "OnePlus", logo: "https://api.dicebear.com/9.x/initials/svg?seed=OnePlus", tier: "Tech" },
  { name: "Spotify", logo: "https://api.dicebear.com/9.x/initials/svg?seed=Spotify", tier: "Music" },
];

export function Sponsors() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#05020a]">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-violet-900/10 via-black to-black pointer-events-none" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-linear-to-b from-[#FFD700] via-[#FDB931] to-[#C08F09] drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
                OUR ALLIANCES
            </h2>
            <div className="flex items-center justify-center gap-4 opacity-60">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-[#C5A059]" />
                <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
                <div className="h-px w-16 bg-linear-to-l from-transparent to-[#C5A059]" />
            </div>
            <p className="mt-6 text-neutral-400 font-serif italic max-w-2xl mx-auto">
                &quot;Powering the saga through strategic partnerships and visionary support.&quot;
            </p>
          </motion.div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#05020a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#05020a] to-transparent z-10" />

          {/* Marquee Animation */}
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                  <div 
                    key={`${sponsor.name}-${index}`}
                    className="relative w-48 h-32 shrink-0 group"
                  >
                      <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm -skew-x-6 transition-all duration-300 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/30 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]" />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 -skew-x-6">
                            <div className="relative w-16 h-16 mb-2 transition-transform duration-300 group-hover:scale-110">
                                <img 
                                    src={sponsor.logo} 
                                    alt={sponsor.name} 
                                     className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                                />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                                {sponsor.tier}
                            </span>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
}
