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
        title="Our Partners" 
        subtitle="Collaborating with industry leaders to create unforgettable experiences."
      />

      <div className="max-w-7xl mx-auto text-center mb-20">
        <h3 className="text-2xl font-bold font-heading text-white mb-12">Title Sponsor (Past)</h3>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block p-10 rounded-2xl bg-white/5 border border-white/10 glass max-w-lg w-full"
        >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Jharkhand Tourism
            </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold font-heading text-white mb-12">Past Sponsors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {pastSponsors.map((sponsor, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-300 group"
                >
                    <span className="text-xl font-bold text-gray-500 group-hover:text-white transition-colors">{sponsor}</span>
                </motion.div>
            ))}
        </div>
      </div>
      
      <div className="mt-32 text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-violet-900/20 to-cyan-900/20 border border-white/10">
            <h3 className="text-2xl font-bold font-heading text-white mb-4">Want to Sponsor Us?</h3>
            <p className="text-gray-400 mb-6">
                Join us in making Bitotsav 2026 the biggest cultural fest in Eastern India. Reach out to our sponsorship team today.
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                Contact Us
            </button>
        </div>
      </div>
    </>
  );
}
