"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Cultural Extravaganza",
    description: "Experience the vibrancy of dance, music, and drama with flagship events like Dance Saga and Battle of Bands.",
    icon: "/icons/events.png", // Star icon
    color: "from-[#2a0a3d] to-[#000000]", // Deep violet
    image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/66822cd4-62e8-423e-8b97-8cecc2c46dac/anim=false,width=450,optimized=true/120489483.jpeg", 
  },
  {
    title: "Technical Prowess",
    description: "Showcase your coding and engineering skills in Hackathons, Robowars, and Technical Quizzes.",
    icon: "/icons/leaderboard.png", // Trophy icon
    color: "from-[#3d2a0a] to-[#000000]", // Deep gold
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    title: "Star Nights",
    description: "Witness electrifying performances by celebrity artists and bands that will leave you spellbound.",
    icon: "/icons/events.png", // Star icon again (fits best)
    color: "from-[#0a0f29] to-[#000000]", // Deep blue
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop", 
  },
];

import { PremiumCard } from "@/components/ui/premium-card";

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Ambient Glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-violet-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-linear-to-b from-[#FFD700] via-[#FDB931] to-[#C08F09] drop-shadow-lg">
            CHAPTERS OF THE FEST
          </h2>
          <div className="flex items-center justify-center gap-4 opacity-80">
              <div className="h-[2px] w-16 md:w-32 bg-linear-to-r from-transparent via-[#C5A059] to-transparent" />
              <div className="w-3 h-3 rotate-45 bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
              <div className="h-[2px] w-16 md:w-32 bg-linear-to-l from-transparent via-[#C5A059] to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <PremiumCard className="group h-[450px]">
                {/* Background Image (Revealed on Hover) */}
                <div className="absolute inset-0 bg-[#050A1F] transition-all duration-700 group-hover:scale-105">
                    <Image 
                        src={feature.image} 
                        alt={feature.title} 
                        fill
                        className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                    <div className="relative mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="absolute inset-0 bg-[#FFD700]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Image 
                        src={feature.icon} 
                        alt={feature.title} 
                        width={80} 
                        height={80} 
                        className="relative z-10 object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]" 
                      />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#E0D8C0] mb-4 group-hover:text-[#FFD700] transition-colors duration-300">
                        {feature.title}
                    </h3>
                    
                    <p className="text-[#C5A059] leading-relaxed font-serif text-base max-w-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {feature.description}
                    </p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
