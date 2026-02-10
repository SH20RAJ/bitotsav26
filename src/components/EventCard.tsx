"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Sparkles, ArrowRight } from "lucide-react";
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
      className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-violet-500/50 flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
            event.category === "Flagship" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
            event.category === "Formal" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
            "bg-green-500/20 text-green-400 border border-green-500/30"
          )}>
            {event.category}
          </span>
          <Sparkles className="w-5 h-5 text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-violet-400 transition-colors">
          {event.name}
        </h3>
        
        <div className="mt-auto space-y-3 pt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Users className="w-4 h-4 text-violet-500" />
            <span>{event.organizer}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4 text-cyan-500" />
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button className="text-sm text-white flex items-center space-x-2 font-medium">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </motion.div>
  );
}
