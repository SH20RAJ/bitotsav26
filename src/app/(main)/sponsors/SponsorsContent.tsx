"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const pastSponsors = [
  "Jharkhand Tourism", "CMPDI", "SBI", "RedBull", "Nestle", "Frostive", "Coca Cola", "NTPC", "SAIL", "Jio",
];

const strategicPartners = [
  { name: "CMPDI", tier: "Gold Partner" },
  { name: "SBI", tier: "Banking Partner" },
  { name: "RedBull", tier: "Energy Partner" },
  { name: "Nestle", tier: "Food Partner" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
};

export default function SponsorsContent() {
  return (
    <div className="space-y-32">
      <SectionHeader 
        title="Corporate_Alliances" 
        subtitle="Strategic partners powering the interface."
        align="center"
      />

      {/* Title Sponsor */}
      <div className="max-w-7xl mx-auto text-center px-4">
        <h3 className="text-sm font-mono text-neutral-500 mb-10 uppercase tracking-[0.3em]">[ 01. TITLE_SPONSOR ]</h3>
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative inline-block p-px bg-linear-to-b from-white/20 to-transparent hover:from-white/40 transition-all duration-500 max-w-2xl w-full"
        >
            <div className="bg-neutral-950 p-16 md:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-neutral-600">
                    ID_TOKEN: #000001
                </div>
                <div className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter group-hover:scale-[1.02] transition-transform duration-500">
                    Jharkhand Tourism
                </div>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-px w-8 bg-white/20" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Core Infrastructure Partner</span>
                    <div className="h-px w-8 bg-white/20" />
                </div>
            </div>
        </motion.div>
      </div>

      {/* Strategic Partners */}
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-sm font-mono text-neutral-500 mb-12 text-center uppercase tracking-[0.3em]">[ 02. STRATEGIC_NODES ]</h3>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {strategicPartners.map((partner) => (
            <motion.div 
              key={partner.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-8 h-px bg-neutral-800" />
              <div className="absolute top-0 left-0 w-px h-8 bg-neutral-800" />
              
              <div className="text-xl font-bold font-mono text-white mb-2">{partner.name}</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{partner.tier}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Past Partners - Grid instead of Marquee for Perf */}
      <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-32">
        <h3 className="text-sm font-mono text-neutral-500 mb-16 text-center uppercase tracking-[0.3em]">[ 03. LEGACY_ARCHIVE ]</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {pastSponsors.map((name) => (
            <div 
              key={name}
              className="bg-neutral-950 p-10 flex flex-col items-center justify-center group hover:bg-neutral-900 transition-colors"
            >
              <img 
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`}
                alt={name}
                className="w-12 h-12 grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
              <span className="mt-4 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Partnership CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="p-16 bg-white text-black relative group cursor-pointer overflow-hidden text-center">
            <div className="absolute inset-0 bg-neutral-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <h3 className="text-3xl font-bold font-mono mb-4 relative z-10 tracking-tight text-neutral-900">INITIATE PARTNERSHIP</h3>
            <p className="text-neutral-600 mb-10 font-mono text-sm relative z-10 font-medium">
                Configure your brand integration with the premier cultural interface.
            </p>
            <button className="relative z-10 px-10 py-4 border-2 border-black font-bold font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                EXECUTE_CONTACT_PROTOCOL
            </button>
        </div>
      </motion.div>
    </div>
  );
}
