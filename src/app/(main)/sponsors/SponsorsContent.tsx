"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

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
        <LogoCloud logos={pastSponsors.map(name => ({
            src: `https://api.dicebear.com/9.x/initials/svg?seed=${name}`,
            alt: name
        }))} />
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
