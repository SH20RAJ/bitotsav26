"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type EventCategory = "Flagship" | "Formal" | "Informal";

interface Event {
  id: string;
  name: string;
  organizer: string;
  venue: string;
  category: EventCategory;
  description?: string;
}

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

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | EventCategory>("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-white to-cyan-400">
            Events Lineup
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          From electrifying performances to mind-bending technical challenges, 
          Bitotsav 2026 has something for everyone.
        </motion.p>
      </div>

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
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-violet-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-6 relative z-10">
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
                
                <div className="space-y-2 mt-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-violet-500" />
                    <span>{event.organizer}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No events found in this category.
        </div>
      )}
    </div>
  );
}
