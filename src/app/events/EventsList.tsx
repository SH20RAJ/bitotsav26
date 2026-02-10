"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Event, EventCategory } from "@/types";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";

const events: Event[] = [
  // Flagship Events
  { id: "1", name: "DANCE SAGA", organizer: "Dance club", venue: "GP BIRLA", category: "Flagship" },
  { id: "2", name: "BATTLE OF BANDS", organizer: "Dhwani", venue: "SHORBAGH", category: "Flagship" },
  { id: "3", name: "SQUID GAMES", organizer: "Events Team", venue: "NCC", category: "Flagship" },

  // Formal Events
  { id: "4", name: "HERA PHERI PHIR SE", organizer: "BIOTS", venue: "Outdoor", category: "Formal" },
  { id: "5", name: "TAKESHI'S CASTLE", organizer: "Leo", venue: "SHORBAGH", category: "Formal" },
  { id: "6", name: "Hand 'N' Brain", organizer: "IETE", venue: "219 & 220", category: "Formal" },
  { id: "7", name: "NATSAMRAT", organizer: "Ehsaas", venue: "CAT HALL", category: "Formal" },
  { id: "8", name: "SPOTIFY WRAPPED", organizer: "SDS", venue: "235 & 233A", category: "Formal" },
  { id: "9", name: "KALAM-E-TAHIR", organizer: "LITSoc", venue: "206 & 207", category: "Formal" },
  { id: "10", name: "EN CHESSANT", organizer: "IEI Civil", venue: "208 & NCC GROUND", category: "Formal" },
  { id: "11", name: "PANACHE", organizer: "FAS", venue: "SHORBAGH", category: "Formal" },

  // Informal Events
  { id: "12", name: "Race Rumble", organizer: "SAC", venue: "NCC", category: "Informal" },
  { id: "13", name: "ELECTRONICS BINGO", organizer: "ECESoc", venue: "231 & 237", category: "Informal" },
  { id: "14", name: "BYTEHUNT", organizer: "EEESoc", venue: "233A & 235", category: "Informal" },
  { id: "15", name: "WHERE IN BIT?", organizer: "IEEE", venue: "216 & 217", category: "Informal" },
  { id: "16", name: "BRIDGE THE GAP", organizer: "CES", venue: "209 & 205", category: "Informal" },
  { id: "17", name: "VALOMANIA", organizer: "SAC", venue: "RnD", category: "Informal" },
  { id: "18", name: "SKYFALL SCRAMBLE", organizer: "AeroSoc", venue: "OAT", category: "Informal" },
  { id: "19", name: "LOST IN TRANSLATION", organizer: "SPICMACAY", venue: "LH-1", category: "Informal" },
  { id: "20", name: "A-MAZE-&-MARBLE", organizer: "Robolution", venue: "IC ARENA", category: "Informal" },
  { id: "21", name: "Fool's Quest", organizer: "ACM", venue: "231", category: "Informal" },
];

const categories: ("All" | EventCategory)[] = ["All", "Flagship", "Formal", "Informal"];

export default function EventsList() {
  const [activeCategory, setActiveCategory] = useState<"All" | EventCategory>("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <>
      <SectionHeader 
        title="Events Lineup" 
        subtitle="From electrifying performances to mind-bending technical challenges, Bitotsav 2026 has something for everyone."
      />

      {/* Filters */}
      <div className="flex justify-center mb-12 flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent",
              activeCategory === category
                ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border-violet-500"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-white/10"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Events Grid */}
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

      {filteredEvents.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No events found in this category.
        </div>
      )}
    </>
  );
}
