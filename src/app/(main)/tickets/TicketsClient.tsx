"use client";

import { motion } from "framer-motion";
import { Check, Ticket, Star, Crown, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const ticketTiers = [
  {
    name: "Day_Pass_v1",
    price: "₹499",
    description: "Single cycle access.",
    icon: Ticket,
    features: ["Access: 1 Day", "Pro_Nite: Standing", "Food_Court: Authorized"],
    color: "border-white/10 bg-neutral-900",
    btnColor: "bg-transparent border-white/20 text-white hover:bg-white hover:text-black",
    recommended: false,
  },
  {
    name: "Fest_Pass_Pro",
    price: "₹1499",
    description: "Full system access.",
    icon: Star,
    features: ["Access: All Days", "Pro_Nite: All", "Priority_Queue: High", "Merch_Kit: Standard"],
    color: "border-white/40 bg-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.05)]",
    btnColor: "bg-white text-black hover:bg-neutral-200",
    recommended: true,
  },
  {
    name: "VIP_Override",
    price: "₹2999",
    description: "Admin level privileges.",
    icon: Crown,
    features: ["Access: Front Row", "Meet_n_Greet: Artists", "Lounge: Exclusive", "Merch: Premium", "Backstage_Tour: Enabled"],
    color: "border-white bg-black",
    btnColor: "bg-transparent border-white text-white hover:bg-white hover:text-black",
    recommended: false,
  },
];

export default function TicketsClient() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative font-mono text-white">
       {/* Tech Background */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

      <SectionHeader 
        title="Access_Control" 
        subtitle="Select your authorization level."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {ticketTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "relative p-8 border flex flex-col transition-all duration-300 hover:-translate-y-1 group",
              tier.color
            )}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest border border-black">
                Most Popular
              </div>
            )}

            <div className="mb-6">
                <div className="w-10 h-10 flex items-center justify-center mb-4 border border-white/20 bg-black">
                     <tier.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold font-mono text-white tracking-tight">{tier.name}</h3>
                <p className="text-neutral-500 text-xs mt-2 uppercase tracking-wider">{tier.description}</p>
            </div>

            <div className="mb-8 border-b border-white/10 pb-8">
                <span className="text-4xl font-bold text-white tracking-tighter">{tier.price}</span>
                <span className="text-neutral-500 text-xs"> / user</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-white mr-3 shrink-0" />
                        <span className="text-neutral-300 text-xs uppercase tracking-wide">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={cn(
                "w-full py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300",
                tier.btnColor
            )}>
                Execute_Order
            </button>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-24 text-center p-8 border border-dashed border-neutral-800 bg-neutral-900/30">
            <Zap className="w-6 h-6 text-white mx-auto mb-4" />
            <h3 className="text-lg font-bold font-mono text-white mb-2 uppercase tracking-widest">Student_Verification</h3>
            <p className="text-neutral-400 mb-6 text-sm max-w-lg mx-auto">
                BIT Mesra students: Enter Roll Number to decrypt 50% discount code.
            </p>
            <button className="text-white underline decoration-neutral-600 underline-offset-4 hover:decoration-white transition-all font-mono text-sm">
                VERIFY_STATUS &rarr;
            </button>
      </div>
    </div>
  );
}
