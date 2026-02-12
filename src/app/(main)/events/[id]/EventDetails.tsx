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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-300">
              <Users className="w-5 h-5 text-violet-400" />
              <span className="text-lg">Organized by <span className="font-semibold text-white">{event.organizer}</span></span>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-5 h-5 text-violet-400" />
              <span className="text-lg">{event.venue}</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
               <Calendar className="w-5 h-5 text-violet-400" />
               <span className="text-lg">Date & Time TBA</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Join us for {event.name}, a flagship {event.category.toLowerCase()} event at Bitotsav '26. 
              Witness the talent, creativity, and energy as participants compete for glory.
            </p>

            <div className="pt-6">
               <Link href="/tickets">
                  <Button className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-full">
                    <Ticket className="mr-2 h-5 w-5" />
                    Get Tickets
                  </Button>
               </Link>
            </div>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center group">
              {/* Placeholder for Event Image/Banner */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-blue-600/20 group-hover:from-violet-600/30 group-hover:to-blue-600/30 transition-all duration-500" />
              <h3 className="text-3xl font-bold text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-widest text-center px-4">
                  {event.name}
              </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
