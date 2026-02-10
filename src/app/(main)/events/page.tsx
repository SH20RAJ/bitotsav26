```
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { Event } from "@/types";
import { cn } from "@/lib/utils";

// Static data based on fetched content
const events: Event[] = [
  { id: "1", name: "DANCE SAGA", category: "Flagship", venue: "GP BIRLA", organizer: "Dance club" },
  { id: "2", name: "BATTLE OF BANDS", category: "Flagship", venue: "MAIN STAGE", organizer: "Music Club" },
  { id: "3", name: "SQUID GAMES", category: "Flagship", venue: "OAT", organizer: "Rotaract" },
  { id: "4", name: "Race Rumble", category: "Informal", venue: "SAC", organizer: "NCC" },
  { id: "5", name: "ELECTRONICS BINGO", category: "Informal", venue: "Bio Lab", organizer: "ECESoc" },
  { id: "6", name: "HERA PHERI PHIR SE", category: "Formal", venue: "Outdoor", organizer: "BIOTS" },
  { id: "7", name: "BYTEHUNT", category: "Informal", venue: "233A & 235", organizer: "EEESoc" },
  { id: "8", name: "WHERE IN BIT?", category: "Informal", venue: "216 & 217", organizer: "IEEE" },
  { id: "9", name: "TAKESHI'S CASTLE", category: "Formal", venue: "SHORBAGH", organizer: "Leo" },
  { id: "10", name: "Hand 'N' Brain", category: "Formal", venue: "219 & 220", organizer: "IETE" },
];

const categories = ["All", "Flagship", "Formal", "Informal"];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#050A1F] relative">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader 
        title="The Chronicles" 
        subtitle="Tales of valor, creativity, and intellect unfolded across the realm."
      />

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12 space-x-2 md:space-x-4 flex-wrap gap-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 border font-serif",
              filter === category
                ? "bg-[#800020] text-[#FFD700] border-[#FFD700] shadow-[0_0_15px_rgba(128,0,32,0.5)]"
                : "bg-transparent text-[#C5A059] border-[#C5A059]/30 hover:bg-[#C5A059]/10 hover:text-[#FFD700]"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
```
