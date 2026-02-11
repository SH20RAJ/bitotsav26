"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnergyBeam from "@/components/ui/energy-beam";

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
};

const letterHover = {
  hover: {
    scale: 1.2,
    color: "#DAA520", // Golden hover color
    textShadow: "0px 0px 8px rgb(255,215,0)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export function Hero() {
  const title = "BITOTSAV '26";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-black font-sans">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
           <EnergyBeam className="opacity-50" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Bouncy Reveal Title */}
        <div className="flex flex-wrap justify-center mb-6 overflow-visible cursor-default">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={titleVariants}
              className="text-6xl md:text-9xl font-black text-white relative inline-block mx-[2px] md:mx-1"
            >
              <motion.span variants={letterHover} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </motion.span>
          ))}
        </div>

        {/* Cinematic Subtitle */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="mb-12"
        >
           <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-neutral-300 uppercase">
              The Endless Saga
           </h2>
        </motion.div>

        {/* Single Premium Button */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link
            href="/tickets"
             className="relative inline-flex group items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border border-white/30 rounded-full hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
             <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
             <span className="relative flex items-center gap-3">
                ENTER THE LEGEND
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
             </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
