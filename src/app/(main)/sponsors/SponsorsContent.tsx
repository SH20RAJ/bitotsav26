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
        title="Corporate_Alliances" 
        subtitle="Strategic partners powering the interface."
        align="center"
      />

      <div className="max-w-7xl mx-auto text-center mb-20">
        <h3 className="text-sm font-mono text-neutral-500 mb-8 uppercase tracking-widest">[ TITLE_SPONSOR_V1 ]</h3>
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block p-12 rounded-none bg-neutral-900 border border-white/20 hover:border-white/50 transition-all duration-300 max-w-lg w-full group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="text-4xl font-bold font-mono text-white group-hover:scale-105 transition-transform duration-300">
                Jharkhand Tourism
            </div>
            <div className="mt-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                System Status: Active
            </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-20">
        <h3 className="text-sm font-mono text-neutral-500 mb-12 uppercase tracking-widest">[ PAST_PARTNERS ]</h3>
        <LogoCloud logos={pastSponsors.map(name => ({
            src: `https://api.dicebear.com/9.x/initials/svg?seed=${name}`,
            alt: name
        }))} />
      </div>
      
      <div className="mt-32 text-center">
        <div className="max-w-2xl mx-auto p-12 bg-neutral-950 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-colors">
             {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            
            <h3 className="text-2xl font-bold font-mono text-white mb-4 relative z-10 tracking-tight">INITIATE PARTNERSHIP</h3>
            <p className="text-neutral-400 mb-8 font-mono text-sm relative z-10">
                Configure your brand integration with Bitotsav 2026.
            </p>
            <button className="relative z-10 px-8 py-3 bg-white text-black font-bold font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                EXECUTE_CONTACT_PROTOCOL
            </button>
        </div>
      </div>
    </>
  );
}
