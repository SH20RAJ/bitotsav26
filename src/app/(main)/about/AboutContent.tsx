"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
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
            className="text-center p-6 rounded-lg bg-[#0A1025] border border-[#C5A059]/20 hover:bg-[#151b33] transition-all duration-300 hover:border-[#FFD700]/40 group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#050A1F] border border-[#C5A059]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div className="text-3xl md:text-4xl font-bold font-heading text-[#E0D8C0] mb-2 group-hover:text-[#FFD700] transition-colors">
              {stat.value}
            </div>
            <div className="text-sm text-[#C5A059]/60 font-bold tracking-widest uppercase font-serif">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto mb-24 space-y-8 text-lg text-[#C5A059]/80 leading-relaxed font-serif text-justify">
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="first-letter:text-5xl first-letter:font-heading first-letter:text-[#FFD700] first-letter:mr-2 first-letter:float-left"
        >
            Bitotsav, the annual socio-cultural festival of BIT Mesra, began its journey in 1992. What started as a humble initiative by a small group of students has now evolved into one of Eastern India's largest extravaganzas.
        </motion.p>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            Spanning five glorious days, Bitotsav is a melting pot of culture, talent, and creativity. From the soul-stirring melodies of <strong>Heritage Nite</strong> to the pulsating beats of <strong>Band Nite</strong> and <strong>EDM Nite</strong>, and finally the star-studded <strong>Pro Nite</strong>, every moment is a celebration. It is not just a fest; it is a legacy passed down through generations of BITians.
        </motion.p>
      </div>

      {/* Night Events Teaser */}
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden relative border border-[#C5A059]/30">
        <div className="absolute inset-0 bg-[#800020] opacity-90 mixing-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        <div className="relative z-10 p-12 text-center">
             <h3 className="text-3xl font-bold font-heading text-[#FFD700] mb-6">Star Nights</h3>
             <p className="text-xl text-[#E0D8C0] mb-8 max-w-2xl mx-auto font-serif italic">
                Witness the magic of "Abhinandan: Ghazal Night" featuring renowned artists like Neeraj Gandhi. An evening filled with poetic charm and heartfelt lyrics waiting for you.
             </p>
             <div className="inline-block px-8 py-3 rounded-sm border border-[#FFD700] text-[#FFD700] font-bold uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#800020] transition-all duration-300">
                Coming Soon
             </div>
        </div>
      </div>
    </>
  );
}
