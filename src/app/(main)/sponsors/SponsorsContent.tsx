"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const pastSponsors = [
  "Jharkhand Tourism",
  "CMPDI",
  "SBI",
  "RedBull",
  "Nestle",
  "Frostive",
  "Coca Cola",
  "NTPC",
  "SAIL",
  "Jio",
];

export default function SponsorsContent() {
  return (
    <>
      <SectionHeader 
        title="Royal Alliances" 
        subtitle="The noble houses and kingdoms that power our grand celebration."
      />

      <div className="max-w-7xl mx-auto text-center mb-20">
        <h3 className="text-2xl font-bold font-serif text-[#E0D8C0] mb-12 uppercase tracking-widest">Title Sponsor (Past)</h3>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block p-10 rounded-lg bg-[#0A1025] border border-[#FFD700] hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition-all duration-500 max-w-lg w-full"
        >
            <div className="text-4xl font-bold font-heading text-gradient-gold">
                Jharkhand Tourism
            </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold font-serif text-[#E0D8C0] mb-12 uppercase tracking-widest">Past Sponsors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {pastSponsors.map((sponsor, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-sm bg-[#0A1025] border border-[#C5A059]/30 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-[#151b33] hover:border-[#FFD700]/60 transition-all duration-300 group"
                >
                    <span className="text-xl font-bold font-heading text-[#C5A059] group-hover:text-[#FFD700] transition-colors">{sponsor}</span>
                </motion.div>
            ))}
        </div>
      </div>
      
      <div className="mt-32 text-center">
        <div className="max-w-2xl mx-auto p-12 rounded-lg bg-[#0A1025] border border-[#800020]/50 relative overflow-hidden">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-3xl" />
            
            <h3 className="text-3xl font-bold font-heading text-[#FFD700] mb-4 relative z-10">Forge an Alliance</h3>
            <p className="text-[#C5A059] mb-8 font-serif italic relative z-10">
                Join us in making Bitotsav 2026 the biggest saga in Eastern India.
            </p>
            <button className="relative z-10 px-10 py-3 bg-[#800020] text-[#FFD700] font-bold uppercase tracking-widest rounded-sm border border-[#FFD700] hover:bg-[#A00028] transition-colors">
                Send Raven
            </button>
        </div>
      </div>
    </>
  );
}
