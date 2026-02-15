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
  const isFlagship = event.category === "Flagship";
  const accentColor = isFlagship ? "gold" : "violet";

  return (
    <Link href={`/events/${event.id}`} className="block h-full">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative overflow-hidden rounded-xl backdrop-blur-md border transition-all duration-500 flex flex-col h-full",
          isFlagship 
            ? "bg-[#FFD700]/5 border-[#FFD700]/20 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]" 
            : "bg-[#8A2BE2]/5 border-[#8A2BE2]/20 hover:border-[#8A2BE2]/50 hover:bg-[#8A2BE2]/10 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)]"
        )}
      >
        <div className="p-8 relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className={cn(
              "px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full border transition-colors duration-300",
              isFlagship 
                ? "bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30 group-hover:bg-[#FFD700]/20" 
                : "bg-[#8A2BE2]/10 text-[#8A2BE2] border-[#8A2BE2]/30 group-hover:bg-[#8A2BE2]/20"
            )}>
              {event.category}
            </span>
            <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border",
                isFlagship
                    ? "border-[#FFD700]/30 bg-[#FFD700]/10 group-hover:bg-[#FFD700] group-hover:border-[#FFD700]" 
                    : "border-[#8A2BE2]/30 bg-[#8A2BE2]/10 group-hover:bg-[#8A2BE2] group-hover:border-[#8A2BE2]"
            )}>
               <ArrowRight className={cn(
                   "w-4 h-4 transition-colors duration-300 -rotate-45 group-hover:rotate-0",
                   isFlagship 
                    ? "text-[#FFD700] group-hover:text-black" 
                    : "text-[#8A2BE2] group-hover:text-white"
               )} />
            </div>
          </div>
          
          <h3 className={cn(
              "text-2xl font-bold font-heading mb-3 transition-colors tracking-tight leading-tight uppercase",
              isFlagship ? "text-white group-hover:text-[#FFD700]" : "text-white group-hover:text-[#8A2BE2]"
          )}>
            {event.name}
          </h3>
          
          <div className={cn(
              "mt-auto space-y-4 pt-6 border-t transition-colors duration-500",
              isFlagship ? "border-[#FFD700]/10 group-hover:border-[#FFD700]/30" : "border-[#8A2BE2]/10 group-hover:border-[#8A2BE2]/30"
          )}>
            <div className="flex items-center space-x-3 transition-colors">
              <Users className={cn("w-4 h-4", isFlagship ? "text-[#FFD700]/70" : "text-[#8A2BE2]/70")} />
              <span className="text-sm font-light tracking-wide text-neutral-300">{event.organizer}</span>
            </div>
            <div className="flex items-center space-x-3 transition-colors">
              <MapPin className={cn("w-4 h-4", isFlagship ? "text-[#FFD700]/70" : "text-[#8A2BE2]/70")} />
              <span className="text-sm font-light tracking-wide text-neutral-300">{event.venue}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
