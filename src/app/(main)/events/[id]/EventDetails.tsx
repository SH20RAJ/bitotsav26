"use client";

import React from "react";
import { Event } from "@/types";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Ticket } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <SectionHeader title={event.name} subtitle={event.category} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-violet-400">
                <span className="h-px w-8 bg-violet-400/50"></span>
                <span className="text-xs font-medium tracking-[0.2em] uppercase">About the event</span>
              </div>
              <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
                Join us for {event.name}, a flagship {event.category.toLowerCase()} event at Bitotsav &apos;26. 
                Witness the talent, creativity, and energy as participants compete for glory in this spectacular showcase.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/5">
              <div className="space-y-2 group">
                <div className="flex items-center space-x-3 text-neutral-500 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Organizer</span>
                </div>
                <p className="text-lg text-white font-medium group-hover:text-violet-300 transition-colors">{event.organizer}</p>
              </div>
              
              <div className="space-y-2 group">
                <div className="flex items-center space-x-3 text-neutral-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Venue</span>
                </div>
                <p className="text-lg text-white font-medium group-hover:text-violet-300 transition-colors">{event.venue}</p>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center space-x-3 text-neutral-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Date & Time</span>
                </div>
                <p className="text-lg text-white font-medium group-hover:text-violet-300 transition-colors">To Be Announced</p>
              </div>
            </div>

            <div className="pt-8">
               <Link href="/tickets">
                  <Button className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 px-10 py-7 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Ticket className="mr-3 h-4 w-4" />
                    Secure Your Spot
                  </Button>
               </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-50" />
                
                {/* Abstract decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32" />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3 className="text-4xl md:text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-700 uppercase tracking-widest text-center leading-tight">
                      {event.name}
                  </h3>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
