"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { Event } from "@/types";
import { cn } from "@/lib/utils";

// Static data based on researched content
const events: Event[] = [
  { id: "1", name: "DANCE SAGA", category: "Flagship", venue: "GP BIRLA", organizer: "Dance Club" },
  { id: "2", name: "BATTLE OF BANDS", category: "Flagship", venue: "MAIN STAGE", organizer: "Music Club" },
  { id: "3", name: "NATSAMRAT", category: "Flagship", venue: "OAT", organizer: "Dramatics Society" },
  { id: "4", name: "SQUID GAMES", category: "Informal", venue: "OAT", organizer: "Rotaract" },
  { id: "5", name: "Race Rumble", category: "Informal", venue: "SAC", organizer: "NCC" },
  { id: "6", name: "ELECTRONICS BINGO", category: "Informal", venue: "Bio Lab", organizer: "ECESoc" },
  { id: "7", name: "HERA PHERI PHIR SE", category: "Formal", venue: "Outdoor", organizer: "BIOTS" },
  { id: "8", name: "robolution", category: "Formal", venue: "233A & 235", organizer: "Robolution" },
  { id: "9", name: "TAKESHI'S CASTLE", category: "Informal", venue: "SHORBAGH", organizer: "Leo" },
  { id: "10", name: "Hand 'N' Brain", category: "Formal", venue: "219 & 220", organizer: "IETE" },
  { id: "11", name: "Heritage Nite", category: "Flagship", venue: "MAIN STAGE", organizer: "Core Team" },
  { id: "12", name: "Pro Nite", category: "Flagship", venue: "MAIN STAGE", organizer: "Core Team" },
];

const categories = ["All", "Flagship", "Formal", "Informal"];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative font-mono text-white">
       {/* Tech Background */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
       <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <SectionHeader 
        title="Event_Logs" 
        subtitle="System activities and competitive modules."
      />

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12 space-x-2 md:space-x-4 flex-wrap gap-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 border font-mono relative overflow-hidden group",
              filter === category
                ? "bg-white text-black border-white"
                : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-white"
            )}
          >
            <span className="relative z-10">{category}</span>
            {filter === category && (
                 <div className="absolute inset-0 bg-white z-0" />
            )}
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
