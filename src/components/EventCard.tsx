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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col h-full"
    >
      {/* Tech Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 p-2 opacity-50">
        <div className="w-2 h-2 bg-white/20 rounded-full" />
      </div>
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className={cn(
            "px-2 py-1 text-[10px] font-mono uppercase tracking-widest border",
            event.category === "Flagship" ? "bg-white/10 text-white border-white/20" :
            event.category === "Formal" ? "bg-transparent text-neutral-400 border-neutral-700" :
            "bg-neutral-800 text-neutral-500 border-neutral-800"
          )}>
            {event.category}
          </span>
          <div className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors duration-300">
            <Sparkles className="w-full h-full" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-neutral-200 transition-colors tracking-tight">
          {event.name}
        </h3>
        
        <div className="mt-auto space-y-3 pt-4 font-mono text-xs">
          <div className="flex items-center space-x-2 text-neutral-400">
            <Users className="w-3 h-3" />
            <span>{event.organizer}</span>
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <MapPin className="w-3 h-3" />
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-right">
            <span className="text-[10px] text-white inline-flex items-center space-x-2 font-mono uppercase tracking-widest">
                <span>EXECUTE_PROTOCOL</span>
                <ArrowRight className="w-3 h-3" />
            </span>
        </div>
      </div>
    </motion.div>
  );
}
