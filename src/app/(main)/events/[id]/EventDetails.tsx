"use client";

import React from "react";
import { Event } from "@/types";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/premium-button";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { cn } from "@/lib/utils";

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  const isFlagship = event.category === "Flagship";

  return (
    <PageWrapper>
      <SectionHeader title={event.name} subtitle={event.category} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto mt-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="space-y-8">
              <div className={cn(
                  "flex items-center space-x-2",
                  isFlagship ? "text-[#FFD700]" : "text-[#8A2BE2]"
              )}>
                <span className="h-px w-12 bg-current opacity-50"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase font-heading">About</span>
              </div>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed font-serif">
                Join us for <strong className={isFlagship ? "text-[#FFD700]" : "text-[#8A2BE2]"}>{event.name}</strong>, a premier operation within the {event.category.toLowerCase()} sector at Bitotsav &apos;26. 
                Witness the convergence of skill and strategy in this high-stakes engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-2 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center space-x-3 text-white/50 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Organizer</span>
                </div>
                <p className={cn(
                    "text-lg font-medium transition-colors",
                    isFlagship ? "text-white group-hover:text-[#FFD700]" : "text-white group-hover:text-[#8A2BE2]"
                )}>{event.organizer}</p>
              </div>
              
              <div className="space-y-2 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center space-x-3 text-white/50 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Venue</span>
                </div>
                <p className={cn(
                    "text-lg font-medium transition-colors",
                    isFlagship ? "text-white group-hover:text-[#FFD700]" : "text-white group-hover:text-[#8A2BE2]"
                )}>{event.venue}</p>
              </div>

              <div className="space-y-2 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center space-x-3 text-white/50 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Timeline</span>
                </div>
                <p className={cn(
                    "text-lg font-medium transition-colors",
                    isFlagship ? "text-white group-hover:text-[#FFD700]" : "text-white group-hover:text-[#8A2BE2]"
                )}>To Be Announced</p>
              </div>
            </div>

            <div className="pt-8">
               <Link href="/tickets">
                  <PremiumButton 
                    variant={isFlagship ? "gold" : "violet"}
                    className="w-full sm:w-auto"
                  >
                    Secure Your Spot
                  </PremiumButton>
               </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <div className={cn(
                "relative aspect-4/5 rounded-2xl overflow-hidden bg-[#05020a] border group",
                isFlagship ? "border-[#FFD700]/20" : "border-[#8A2BE2]/20"
            )}>
                <div className={cn(
                    "absolute inset-0 bg-linear-to-br opacity-50",
                    isFlagship ? "from-[#FFD700]/10 via-transparent to-[#C5A059]/10" : "from-[#8A2BE2]/10 via-transparent to-[#4B0082]/10"
                )} />
                
                {/* Abstract decorative elements */}
                <div className={cn(
                    "absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32 opacity-30",
                    isFlagship ? "bg-[#FFD700]" : "bg-[#8A2BE2]"
                )} />
                <div className={cn(
                    "absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32 opacity-30",
                    isFlagship ? "bg-[#C5A059]" : "bg-[#4B0082]"
                )} />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3 className={cn(
                      "text-4xl md:text-5xl font-bold transition-colors duration-700 uppercase tracking-widest text-center leading-tight font-heading",
                      isFlagship ? "text-[#FFD700]/20 group-hover:text-[#FFD700]/40" : "text-[#8A2BE2]/20 group-hover:text-[#8A2BE2]/40"
                  )}>
                      {event.name}
                  </h3>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
