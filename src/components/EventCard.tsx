"use client";

import { motion } from "framer-motion";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Event } from "@/types";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="block h-full">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="group relative overflow-hidden rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-violet-900/20"
      >
        <div className="p-8 relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className={cn(
              "px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase rounded-full border transition-colors duration-300",
              event.category === "Flagship" ? "bg-violet-500/10 text-violet-200 border-violet-500/20 group-hover:border-violet-500/50" :
              event.category === "Formal" ? "bg-blue-500/10 text-blue-200 border-blue-500/20 group-hover:border-blue-500/50" :
              "bg-emerald-500/10 text-emerald-200 border-emerald-500/20 group-hover:border-emerald-500/50"
            )}>
              {event.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-500">
               <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300 -rotate-45 group-hover:rotate-0" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-violet-200 transition-colors tracking-tight leading-tight">
            {event.name}
          </h3>
          
          <div className="mt-auto space-y-4 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
            <div className="flex items-center space-x-3 text-neutral-400 group-hover:text-neutral-300 transition-colors">
              <Users className="w-4 h-4 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-sm font-light tracking-wide">{event.organizer}</span>
            </div>
            <div className="flex items-center space-x-3 text-neutral-400 group-hover:text-neutral-300 transition-colors">
              <MapPin className="w-4 h-4 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-sm font-light tracking-wide">{event.venue}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
