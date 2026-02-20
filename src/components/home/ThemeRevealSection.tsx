"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/premium-button";

export function ThemeRevealSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#05020a]">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-[#05020a] via-[#8A2BE2]/5 to-[#05020a] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 tracking-tighter">
                    BITOTSAV 2026
                </h2>
                <p className="text-[#FFD700] font-serif italic text-xl md:text-2xl mb-4 opacity-80">
                    Feb 13 - 16, 2026 &bull; BIT Mesra
                </p>
                <p className="text-neutral-500 text-sm mb-12">
                    Register with your BIT Mesra webmail (<span className="text-[#FFD700]">@bitmesra.ac.in</span>)
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href="/login">
                        <PremiumButton variant="gold">
                            Register Now
                        </PremiumButton>
                    </Link>
                    <Link href="/theme-reveal">
                        <PremiumButton variant="violet">
                            View Details
                        </PremiumButton>
                    </Link>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
