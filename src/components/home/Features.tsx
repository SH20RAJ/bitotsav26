"use client";

import { motion } from "framer-motion";
import { Music, Zap, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Cultural Extravaganza",
    description: "Experience the vibrancy of dance, music, and drama with flagship events like Dance Saga and Battle of Bands.",
    icon: Music,
    color: "from-[#800020] to-[#500014]", // Maroon gradient
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop", // Live music/Club
  },
  {
    title: "Technical Prowess",
    description: "Showcase your coding and engineering skills in Hackathons, Robowars, and Technical Quizzes.",
    icon: Zap,
    color: "from-[#B8860B] to-[#DAA520]", // Gold gradient
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Tech/Circuitry
  },
  {
    title: "Star Nights",
    description: "Witness electrifying performances by celebrity artists and bands that will leave you spellbound.",
    icon: Mic,
    color: "from-[#050A1F] to-[#0A1F45]", // Deep Blue gradient
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop", // Concert crowd
  },
];

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050A1F]">
      {/* Background Ambient Glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#800020]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#FFD700]">Chapters of the Fest</h2>
          <div className="flex items-center justify-center gap-2 opacity-60">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C5A059]" />
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
              className="group relative h-[400px] rounded-lg overflow-hidden border border-[#C5A059]/20 transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]"
            >
              {/* Background Image (Revealed on Hover) */}
              <div className="absolute inset-0 bg-[#0A1025] transition-all duration-500 group-hover:scale-110">
                  <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A1F] via-[#050A1F]/80 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br border border-[#FFFFFF]/10 shadow-lg backdrop-blur-md",
                  feature.color
                  )}>
                  <feature.icon className="w-5 h-5 text-[#E0D8C0]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-serif text-[#E0D8C0] mb-3 group-hover:text-[#FFD700] transition-colors translate-y-2 group-hover:translate-y-0 duration-300">
                      {feature.title}
                  </h3>
                  
                  <p className="text-[#C5A059]/70 leading-relaxed font-sans text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {feature.description}
                  </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
