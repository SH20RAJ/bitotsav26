"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollText, ArrowRight, Terminal } from "lucide-react";
import EnergyBeam from "@/components/ui/energy-beam";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-black font-mono">
      {/* Energy Beam Background */}
      <div className="absolute inset-0 z-0">
           <EnergyBeam className="opacity-60" />
           {/* Overlay to blend with theme */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500 font-bold tracking-widest uppercase">System Online</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter relative z-10 mb-2">
            BITOTSAV<span className="text-neutral-600">_26</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-500 tracking-[0.5em] uppercase mb-8">
            v35.0.0 // GAATHA
          </p>
          
          {/* Glitch Effect Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[100px] rounded-full -z-10 opacity-20 animate-pulse" />
        </motion.div>

        {/* Thematic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
            INITIATE PROTOCOL: <span className="text-white">ENDLESS_SAGA</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto border-l-2 border-white/20 pl-6 text-left font-sans">
            <span className="text-green-500 font-mono text-sm block mb-2">{`> executing narrative_convergence.exe`}</span>
            Where distinct data streams merge into one legendary output. 
            Witness the synchronization of Culture, Sports, and Technology modules.
          </p>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/events"
              className="group px-8 py-4 bg-white text-black rounded-sm font-bold text-lg flex items-center space-x-3 transition-all duration-300 hover:bg-neutral-200"
            >
              <Terminal className="w-5 h-5" />
              <span>EXECUTE EXPLORE</span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-black text-white border border-white/20 rounded-sm font-medium text-lg flex items-center space-x-2 transition-all duration-300 hover:bg-white/10"
            >
              <span>READ_LOGS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
      </div>
    </section>
  );
}
