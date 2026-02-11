"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnergyBeam from "@/components/ui/energy-beam";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-black font-sans">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
           <EnergyBeam className="opacity-50" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 w-full mx-auto w-full text-center flex flex-col items-center">
        
        {/* Bouncy Reveal Title - REPLACED with ParticleTextEffect */}
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center mb-6 overflow-hidden w-full">
             <div className="absolute inset-0 w-full h-full"> 
                 <ParticleTextEffect
                    text="BITOTSAV"
                    colors={['C5A059', 'EBAF3F', 'FFD700', 'DAA520', 'FFA500']}
                    animationForce={80}
                    particleDensity={5}
                    className="w-full h-full"
                 />
             </div>
        </div>

        {/* Cinematic Subtitle */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="mb-12"
        >
           <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-neutral-300 uppercase">
              GATHA - THE ENDLESS SAGA
           </h2>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link href="/tickets">
            <MagnetizeButton
              className="bg-white text-black hover:bg-neutral-200 border-white/20 min-w-[200px] font-bold tracking-widest"
              particleCount={15}
            >
              <span className="flex items-center gap-3">
                ENTER THE LEGEND
                <ArrowRight className="w-5 h-5" />
              </span>
            </MagnetizeButton>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
