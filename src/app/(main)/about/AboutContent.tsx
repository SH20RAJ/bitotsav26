"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years of Legacy", value: "30+", icon: Calendar, color: "text-violet-400" },
  { label: "Footfall", value: "10,000+", icon: Users, color: "text-cyan-400" },
  { label: "Registrations", value: "1600+", icon: Trophy, color: "text-amber-400" },
  { label: "Love & Support", value: "Infinite", icon: Heart, color: "text-rose-400" },
];

export default function AboutContent() {
  return (
    <>
      <SectionHeader 
        title="Our Legacy" 
        subtitle="A journey of culture, technology, and endless memories spanning over three decades."
      />

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 glass hover:bg-white/10 transition-all duration-300"
          >
            <stat.icon className={cn("w-8 h-8 mx-auto mb-4", stat.color)} />
            <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto mb-24 space-y-8 text-lg text-gray-300 leading-relaxed">
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            Bitotsav is a grand celebration of India's rich cultural heritage, bringing together students from all walks of life to revel in the vibrant essence of tradition and creativity.
        </motion.p>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            BITOTSAV offers a plethora of events that not only entertain but also promote meaningful societal causes. As the festival continues to grow in scale and impact, BITOTSAV 2026 is set to be bigger and more spectacular than ever! It features electrifying performances, thrilling competitions, mesmerizing celebrity nights, and an unforgettable fusion of music, dance, and entertainment.
        </motion.p>
      </div>

      {/* Night Events Teaser */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-purple-900/50 mix-blend-multiply" />
        <div className="relative z-10 p-12 text-center">
             <h3 className="text-3xl font-bold font-heading text-white mb-6">Star Nights</h3>
             <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Witness the magic of "Abhinandan: Ghazal Night" featuring renowned artists like Neeraj Gandhi. An evening filled with poetic charm and heartfelt lyrics waiting for you.
             </p>
             <div className="inline-block px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white">
                Coming Soon
             </div>
        </div>
      </div>
    </>
  );
}
