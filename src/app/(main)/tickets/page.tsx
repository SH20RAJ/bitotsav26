"use client";

import { motion } from "framer-motion";
import { Check, Ticket, Star, Crown, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const ticketTiers = [
  {
    name: "Day Pass",
    price: "₹499",
    description: "Entry for a single day of your choice.",
    icon: Ticket,
    features: ["Access to all events for 1 day", "Pro Nite Access (Standing)", "Food Court Access"],
    color: "border-[#C5A059]/30 bg-[#0A1025]",
    btnColor: "bg-[#0A1025] border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#050A1F]",
    recommended: false,
  },
  {
    name: "Fest Pass",
    price: "₹1499",
    description: "The complete experience for all 5 days.",
    icon: Star,
    features: ["Access to all days", "All Pro Nites Access", "Priority Entry", "Official Merchandise Kit"],
    color: "border-[#FFD700] bg-[#151b33] shadow-[0_0_30px_rgba(255,215,0,0.1)]",
    btnColor: "bg-[#FFD700] text-[#800020] hover:bg-[#E5C079]",
    recommended: true,
  },
  {
    name: "Royal Pass",
    price: "₹2999",
    description: "VIP treatment for the true connoisseur.",
    icon: Crown,
    features: ["VIP Front Row Access", "Meet & Greet with Artists", "Exclusive Lounge Access", "Premium Merchandise", "Backstage Tour"],
    color: "border-[#800020] bg-gradient-to-b from-[#1a0505] to-[#0A1025]",
    btnColor: "bg-[#800020] text-[#FFD700] border border-[#FFD700] hover:bg-[#A00028]",
    recommended: false,
  },
];

export default function TicketsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#050A1F] relative">
       {/* Background Decoration */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#800020]/10 rounded-full blur-[100px] pointer-events-none" />

      <SectionHeader 
        title="Secure Your Passage" 
        subtitle="Choose your path to enter the realm of Gaatha."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {ticketTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={cn(
              "relative p-8 rounded-lg border flex flex-col transition-all duration-300 hover:-translate-y-2",
              tier.color
            )}
          >
            {tier.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFD700] text-[#800020] text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                Most Popular
              </div>
            )}

            <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E0D8C0]/10 flex items-center justify-center mb-4">
                     <tier.icon className="w-6 h-6 text-[#E0D8C0]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#E0D8C0]">{tier.name}</h3>
                <p className="text-[#C5A059]/70 text-sm mt-2">{tier.description}</p>
            </div>

            <div className="mb-8">
                <span className="text-4xl font-bold text-[#FFD700]">{tier.price}</span>
                <span className="text-[#C5A059]/60 text-sm"> / person</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-[#90EE90] mr-3 shrink-0" />
                        <span className="text-[#E0D8C0] text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={cn(
                "w-full py-4 rounded-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg",
                tier.btnColor
            )}>
                Get Access
            </button>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-24 text-center p-8 border border-[#C5A059]/20 rounded-lg bg-[#0A1025]/50 backdrop-blur-sm">
            <Zap className="w-8 h-8 text-[#FFD700] mx-auto mb-4" />
            <h3 className="text-xl font-bold font-heading text-[#E0D8C0] mb-2">Student Discount</h3>
            <p className="text-[#C5A059]/80 mb-6">
                Are you a BIT Mesra student? Use your roll number to claim an exclusive 50% discount on the Fest Pass.
            </p>
            <button className="text-[#FFD700] underline hover:text-[#E5C079] transition-colors font-serif italic">
                Verify Student Status &rarr;
            </button>
      </div>
    </div>
  );
}
