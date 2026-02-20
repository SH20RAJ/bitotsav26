"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";

export function MobileHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4 bg-[#05020a] font-sans md:hidden">
      
      {/* Lightweight Background - Simple Gradient & Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-linear-to-br from-[#05020a] via-[#1a0b2e] to-[#05020a]" />
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(138,43,226,0.15),transparent_70%)]" />
           {/* Static Stars (CSS) instead of particles */}
           <div className="absolute inset-0 opacity-30" style={{ 
               backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
           }}></div>
      </div>

      <div className="relative z-10 w-full mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Simplified Title - Standard Text instead of Particles */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
             <h1 className="text-5xl font-bold font-heading text-transparent bg-clip-text bg-linear-to-b from-[#FFD700] via-[#FDB931] to-[#C08F09] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                BITOTSAV
             </h1>
             <span className="absolute -top-4 -right-2 text-xs font-mono text-[#C5A059] opacity-80 border border-[#C5A059] px-1 rounded">
                 &apos;26
             </span>
        </motion.div>

        {/* Cinematic Subtitle */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="space-y-3"
        >
           <h2 className="text-lg font-light tracking-[0.3em] text-white/90 uppercase">
              BIT MESRA
           </h2>
           <div className="h-px w-16 mx-auto bg-linear-to-r from-transparent via-[#FFD700] to-transparent opacity-50" />
           <p className="text-xs font-serif italic text-[#C5A059] tracking-widest opacity-80">
              The 35th Edition
           </p>        </motion.div>

        {/* Action Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="mt-4"
        >
          <Link href="/login">
            <PremiumButton variant="gold" className="min-w-[180px] py-3 text-sm">
                REGISTER NOW
                <ArrowRight className="w-4 h-4 ml-2" />
            </PremiumButton>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
