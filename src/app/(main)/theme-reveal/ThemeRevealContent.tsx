"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PremiumButton } from "@/components/ui/premium-button";
import Link from "next/link";

export default function ThemeRevealContent() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Background Ambient Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-[#8A2BE2] font-mono text-sm uppercase tracking-[0.4em] font-bold border border-[#8A2BE2]/30 px-4 py-2 rounded-full bg-[#8A2BE2]/5 backdrop-blur-sm">
              Bitotsav 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-6xl md:text-9xl font-bold font-heading text-white tracking-tighter mb-4 drop-shadow-[0_0_50px_rgba(255,215,0,0.3)]"
          >
            BITOTSAV
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl font-serif text-[#FFD700] italic mb-16 opacity-90 tracking-widest"
          >
            - The 35th Edition -
          </motion.p>

          {/* Details Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
          >
             {/* Dates */}
             <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center hover:bg-white/10 transition-colors group">
                <Calendar className="w-8 h-8 text-[#FFD700] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-2">Dates</h3>
                <p className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">Feb 13 - 16, 2026</p>
             </div>

             {/* Venue */}
             <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center hover:bg-white/10 transition-colors group">
                <MapPin className="w-8 h-8 text-[#8A2BE2] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-2">Venue</h3>
                <p className="text-xl font-bold text-white group-hover:text-[#8A2BE2] transition-colors">BIT Mesra, Ranchi</p>
             </div>

             {/* Time */}
             <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center hover:bg-white/10 transition-colors group">
                <Clock className="w-8 h-8 text-white/70 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-2">Starts At</h3>
                <p className="text-xl font-bold text-white">10:00 AM IST</p>
             </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-2xl mx-auto text-neutral-400 leading-relaxed text-sm mb-4"
          >
            <p>
              Join us for the 35th Edition of BIT Mesra&apos;s Premier Cultural, Sports & Technical Festival.
              Witness the convergence of heritage and future in a spectacle that transcends time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12"
          >
            <p className="text-neutral-500 text-xs">
              Only BIT Mesra students with a valid webmail (<span className="text-[#FFD700]">@bitmesra.ac.in</span>) are allowed to register.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link href="/login">
                <PremiumButton variant="gold" className="px-12 py-6 text-lg">
                    Register Now
                </PremiumButton>
            </Link>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
