"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import ReactorKnob from "@/components/ui/control-knob";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years of Legacy", value: "30+", icon: Calendar, color: "text-[#FFD700]" },
  { label: "Footfall", value: "10,000+", icon: Users, color: "text-[#C5A059]" },
  { label: "Registrations", value: "1600+", icon: Trophy, color: "text-[#A0C4FF]" },
  { label: "Love & Support", value: "Infinite", icon: Heart, color: "text-[#800020]" },
];

export default function AboutContent() {
  return (
    <>
      <SectionHeader 
        title="System_Legacy" 
        subtitle="Operational history and user engagement metrics."
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
            className="text-center p-6 bg-neutral-900/50 border border-white/10 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-black border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold font-mono text-white mb-2 group-hover:text-neutral-300 transition-colors tracking-tighter">
              {stat.value}
            </div>
            <div className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto mb-24 space-y-8 text-sm md:text-base text-neutral-400 leading-relaxed font-mono text-justify">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-white/20 pl-6"
        >
            <p className="mb-4">
              <span className="text-white font-bold">LOG_ENTRY_1992:</span> Bitotsav initialization complete. Origin: BIT Mesra.
              Evolution status: Continuous. Current state: Eastern India&apos;s premier technical-cultural interface.
            </p>
        </motion.div>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <span className="text-white">MODULES_LOADED:</span> <strong>Heritage_Nite</strong>, <strong>Band_Nite</strong>, <strong>EDM_Nite</strong>, <strong>Pro_Nite</strong>.
            <br/><br/>
            Bitotsav is not merely a festival; it is a synchronized execution of talent, creativity, and legacy code passed down through generations of BITians.
        </motion.p>
      </div>

      {/* Night Events Teaser */}
      <div className="max-w-5xl mx-auto border border-white/10 bg-neutral-950 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="relative z-10 p-12 text-center">
             <div className="inline-block border border-white/20 px-3 py-1 mb-6">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">UPCOMING_TRANSMISSION</span>
             </div>
             <h3 className="text-3xl font-bold font-heading text-white mb-6">Star Nights</h3>
             <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto font-mono">
                &quot;Abhinandan: Ghazal Night&quot; protocol initiated. Artist: Neeraj Gandhi.
             </p>
             <div className="inline-block px-8 py-3 bg-white text-black font-bold font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                AWAITING_SIGNAL
             </div>
        </div>
      </div>
    </>
  );
}
