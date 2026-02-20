"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years of Legacy", value: "30+", icon: Calendar, color: "text-[#FFD700]", border: "border-[#FFD700]/30", bg: "bg-[#FFD700]/10" },
  { label: "Footfall", value: "10,000+", icon: Users, color: "text-[#C5A059]", border: "border-[#C5A059]/30", bg: "bg-[#C5A059]/10" },
  { label: "Registrations", value: "1600+", icon: Trophy, color: "text-[#8A2BE2]", border: "border-[#8A2BE2]/30", bg: "bg-[#8A2BE2]/10" },
  { label: "Love & Support", value: "Infinite", icon: Heart, color: "text-[#FF00FF]", border: "border-[#FF00FF]/30", bg: "bg-[#FF00FF]/10" },
];

export default function AboutContent() {
  return (
    <PageWrapper>
      <SectionHeader 
        title="About Bitotsav" 
        subtitle="Operational history and user engagement metrics."
      />

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24 cursor-default">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "text-center p-6 backdrop-blur-md border transition-all duration-500 group rounded-xl hover:bg-white/5",
                "bg-[#05020a]/30 border-white/5 hover:border-opacity-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            )}
          >
            <div className={cn(
                "w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12",
                stat.color, stat.border, stat.bg
            )}>
                <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-3xl md:text-5xl font-bold font-heading text-white mb-2 group-hover:text-neutral-200 transition-colors tracking-tighter">
              {stat.value}
            </div>
            <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-[0.2em] group-hover:text-white/70 transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto mb-24 space-y-8 text-sm md:text-base text-neutral-400 leading-relaxed font-serif text-justify font-light">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-[#FFD700]/20 pl-6"
        >
            <p className="mb-4">
              <span className="text-[#FFD700] font-bold font-mono text-xs uppercase tracking-widest">LOG_ENTRY_1992:</span> <span className="text-white">Bitotsav initialization complete. Origin: BIT Mesra.</span>
              <br/>Evolution status: Continuous. Current state: Eastern India&apos;s premier technical-cultural interface.
            </p>
        </motion.div>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <span className="text-[#8A2BE2] font-bold font-mono text-xs uppercase tracking-widest">Highlights:</span> <strong className="text-white">Heritage Nite</strong>, <strong className="text-white">Band Nite</strong>, <strong className="text-white">EDM Nite</strong>, <strong className="text-white">Pro Nite</strong>.
            <br/><br/>
            Bitotsav is not merely a festival; it is a synchronized execution of talent, creativity, and legacy code passed down through generations of BITians.
        </motion.p>
      </div>

      {/* Night Events Teaser */}
      <div className="max-w-5xl mx-auto rounded-3xl border border-[#FFD700]/20 bg-[#05020a] relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        
        <div className="relative z-10 p-12 text-center">
             <div className="inline-block border border-[#FFD700]/30 px-3 py-1 mb-6 rounded-full bg-[#FFD700]/5">
                <span className="text-[10px] font-bold font-mono text-[#FFD700] uppercase tracking-widest">UPCOMING_TRANSMISSION</span>
             </div>
             <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">Star Nights</h3>
             <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto font-serif italic">
                &quot;Abhinandan: Ghazal Night&quot; protocol initiated. Artist: Neeraj Gandhi.
             </p>
             <div className="inline-block px-10 py-3 bg-white text-black font-bold font-heading text-xs uppercase tracking-widest hover:bg-[#FFD700] transition-colors cursor-default rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                AWAITING_SIGNAL
             </div>
        </div>
      </div>
    </PageWrapper>
  );
}
