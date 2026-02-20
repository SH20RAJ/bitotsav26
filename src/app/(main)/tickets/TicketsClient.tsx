"use client";

import { motion } from "framer-motion";
import { Check, Ticket, Star, Crown, Zap, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PremiumButton } from "@/components/ui/premium-button";

const ticketTiers = [
  {
    name: "Day Pass",
    price: "₹499",
    description: "Single cycle access.",
    icon: Ticket,
    features: ["Access: 1 Day", "Pro Nite: Standing", "Food Court: Included"],
    variant: "violet" as const,
    recommended: false,
  },
  {
    name: "Fest Pass Pro",
    price: "₹1499",
    description: "Full system access.",
    icon: Star,
    features: ["Access: All Days", "Pro Nite: All", "Priority Queue", "Merch Kit: Standard"],
    variant: "gold" as const,
    recommended: true,
  },
  {
    name: "VIP_Override",
    price: "₹2999",
    description: "Admin level privileges.",
    icon: Crown,
    features: ["Access: Front Row", "Meet & Greet: Artists", "Lounge: Exclusive", "Merch: Premium", "Backstage Tour"],
    variant: "violet" as const,
    recommended: false,
  },
];

export default function TicketsClient() {
  return (
    <PageWrapper>
      <SectionHeader 
        title="Tickets" 
        subtitle="Select your authorization level."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-8">
        {ticketTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative p-8 flex flex-col transition-all duration-300 group rounded-2xl border backdrop-blur-md",
              tier.variant === "gold" 
                ? "bg-[#FFD700]/5 border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] hover:border-[#FFD700]/60" 
                : "bg-[#8A2BE2]/5 border-[#8A2BE2]/30 shadow-[0_0_20px_rgba(138,43,226,0.1)] hover:shadow-[0_0_40px_rgba(138,43,226,0.2)] hover:border-[#8A2BE2]/60"
            )}
          >
            {tier.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-linear-to-r from-[#FFD700] to-[#EBAF3F] text-[#05020a] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                Most Popular
              </div>
            )}

            <div className="mb-6">
                <div className={cn(
                    "w-12 h-12 flex items-center justify-center mb-6 rounded-xl border bg-black/50 backdrop-blur-sm",
                    tier.variant === "gold" ? "border-[#FFD700]/50 text-[#FFD700]" : "border-[#8A2BE2]/50 text-[#8A2BE2]"
                )}>
                     <tier.icon className="w-6 h-6" />
                </div>
                <h3 className={cn(
                    "text-2xl font-bold font-heading tracking-wide uppercase",
                    tier.variant === "gold" ? "text-[#FFD700]" : "text-white"
                )}>{tier.name}</h3>
                <p className="text-white/60 text-xs mt-2 font-serif italic tracking-wider">{tier.description}</p>
            </div>

            <div className="mb-8 border-b border-white/10 pb-8">
                <span className={cn(
                    "text-5xl font-bold tracking-tighter",
                    tier.variant === "gold" ? "text-white drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]" : "text-white"
                )}>{tier.price}</span>
                <span className="text-white/40 text-xs ml-2">/ user</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                        <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 border",
                            tier.variant === "gold" ? "bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700]" : "bg-[#8A2BE2]/10 border-[#8A2BE2]/30 text-[#8A2BE2]"
                        )}>
                            <Check className="w-3 h-3" />
                        </div>
                        <span className="text-neutral-300 text-xs uppercase tracking-wide font-mono">{feature}</span>
                    </li>
                ))}
            </ul>

            <PremiumButton 
                variant={tier.variant} 
                className="w-full"
            >
                Buy Now
            </PremiumButton>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-24 text-center p-8 rounded-2xl border border-dashed border-[#C5A059]/30 bg-[#05020a]/50 backdrop-blur-sm"
      >
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/30">
                <Zap className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2 uppercase tracking-widest">Student Verification</h3>
            <p className="text-white/60 mb-8 text-sm max-w-lg mx-auto font-serif italic">
                BIT Mesra students: Enter Roll Number to decrypt 50% discount code.
            </p>
            <button className="group inline-flex items-center gap-2 text-[#C5A059] font-mono text-sm tracking-wider hover:text-[#FFD700] transition-colors">
                VERIFY_STATUS 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
      </motion.div>
    </PageWrapper>
  );
}
