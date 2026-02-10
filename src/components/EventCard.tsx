"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Sparkles, ArrowRight, Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-sm bg-[#0A1025] border border-[#C5A059]/30 hover:bg-[#151b33] transition-all duration-300 hover:border-[#FFD700]/60 hover:shadow-[0_4px_20px_rgba(197,160,89,0.15)] flex flex-col h-full"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#C5A059]/20 to-transparent" />
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className={cn(
            "px-3 py-1 rounded-sm text-xs font-bold font-serif uppercase tracking-wider border",
            event.category === "Flagship" ? "bg-[#800020]/20 text-[#FFD700] border-[#FFD700]/50" :
            event.category === "Formal" ? "bg-[#0A1F45]/30 text-[#A0C4FF] border-[#A0C4FF]/30" :
            "bg-[#1A3A2A]/30 text-[#90EE90] border-[#90EE90]/30"
          )}>
            {event.category}
          </span>
          <Scroll className="w-5 h-5 text-[#C5A059]/40 group-hover:text-[#FFD700] transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold font-heading text-[#E0D8C0] mb-2 group-hover:text-[#FFD700] transition-colors tracking-wide">
          {event.name}
        </h3>
        
        <div className="mt-auto space-y-3 pt-4 font-serif">
          <div className="flex items-center space-x-2 text-sm text-[#C5A059]/80">
            <Users className="w-4 h-4 text-[#800020]" />
            <span>{event.organizer}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#C5A059]/80">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#C5A059]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-right">
            <span className="text-sm text-[#FFD700] inline-flex items-center space-x-2 font-bold uppercase tracking-widest text-[10px]">
                <span>Open Scroll</span>
                <ArrowRight className="w-3 h-3" />
            </span>
        </div>
      </div>
    </motion.div>
  );
}
