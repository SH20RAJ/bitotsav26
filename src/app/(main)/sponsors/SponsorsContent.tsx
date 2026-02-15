"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

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
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function SponsorsContent() {
  return (
    <PageWrapper>
      <div className="space-y-32">
        <SectionHeader 
          title="Corporate_Alliances" 
          subtitle="Strategic partners powering the interface."
          align="center"
        />

        {/* Title Sponsor */}
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-xs font-bold font-heading text-[#FFD700] mb-10 uppercase tracking-[0.3em] opacity-80">[ 01. TITLE_SPONSOR ]</h3>
          <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative inline-block p-1 bg-linear-to-b from-[#FFD700]/30 to-transparent hover:from-[#FFD700]/60 transition-all duration-500 max-w-2xl w-full rounded-2xl"
          >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#FFD700]/5 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />

              <div className="bg-[#05020a]/80 backdrop-blur-xl p-16 md:p-24 relative overflow-hidden rounded-xl border border-[#FFD700]/20 group-hover:border-[#FFD700]/40 transition-colors">
                  <Image 
                    src={`https://api.dicebear.com/9.x/initials/svg?seed=Jharkhand Tourism`}
                    alt="Jharkhand Tourism"
                    width={48}
                    height={48}
                    className="w-12 h-12 grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 relative z-10"
                  />
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#FFD700]/60 border-l border-b border-[#FFD700]/20 rounded-bl-xl bg-[#FFD700]/5">
                      ID_TOKEN: #000001
                  </div>
                  <div className="text-4xl md:text-6xl font-bold font-heading text-white tracking-widest group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                      Jharkhand Tourism
                  </div>
                  <div className="mt-8 flex items-center justify-center gap-4">
                      <div className="h-px w-8 bg-[#FFD700]/40" />
                      <span className="text-[10px] font-bold font-mono text-[#FFD700] uppercase tracking-widest">Core Infrastructure Partner</span>
                      <div className="h-px w-8 bg-[#FFD700]/40" />
                  </div>
              </div>
          </motion.div>
        </div>

        {/* Strategic Partners */}
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xs font-bold font-heading text-[#8A2BE2] mb-12 text-center uppercase tracking-[0.3em] opacity-80">[ 02. STRATEGIC_NODES ]</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {strategicPartners.map((partner) => (
              <motion.div 
                key={partner.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#8A2BE2]/50 hover:bg-[#8A2BE2]/5 transition-all duration-300 relative overflow-hidden rounded-xl"
              >
                <div className="absolute top-0 left-0 w-8 h-1 bg-linear-to-r from-white/10 to-transparent group-hover:from-[#8A2BE2]" />
                <div className="absolute top-0 left-0 w-1 h-8 bg-linear-to-b from-white/10 to-transparent group-hover:from-[#8A2BE2]" />
                
                <div className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#F0F0F0] transition-colors">{partner.name}</div>
                <div className="text-[10px] font-bold font-mono text-white/50 uppercase tracking-widest group-hover:text-[#8A2BE2] transition-colors">{partner.tier}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Past Partners */}
        <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-32">
          <h3 className="text-xs font-bold font-heading text-neutral-500 mb-16 text-center uppercase tracking-[0.3em] opacity-80">[ 03. LEGACY_ARCHIVE ]</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {pastSponsors.map((name) => (
              <div 
                key={name}
                className="bg-[#05020a] p-10 flex flex-col items-center justify-center group hover:bg-[#1a0b2e] transition-colors border border-white/0 hover:border-white/5 relative"
              >
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="mt-4 text-[10px] font-mono text-neutral-600 group-hover:text-[#C5A059] uppercase tracking-widest transition-colors relative z-10">{name}</span>
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
          <div className="p-16 bg-white text-black relative group cursor-pointer overflow-hidden text-center rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-linear-to-r from-[#FFD700] to-[#EBAF3F] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              
              <h3 className="text-3xl font-bold font-heading mb-4 relative z-10 tracking-tight text-neutral-900 group-hover:text-[#05020a] transition-colors">INITIATE PARTNERSHIP</h3>
              <p className="text-neutral-600 mb-10 font-mono text-sm relative z-10 font-bold group-hover:text-[#05020a]/70 transition-colors">
                  Configure your brand integration with the premier cultural interface.
              </p>
              <button className="relative z-10 px-10 py-4 border-2 border-black font-bold font-heading text-xs uppercase tracking-widest hover:bg-black hover:text-[#FFD700] transition-all duration-300 group-hover:border-[#05020a]">
                  EXECUTE_CONTACT_PROTOCOL
              </button>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
