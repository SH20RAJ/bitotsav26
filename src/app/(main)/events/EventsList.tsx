"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { EventCategory } from "@/types";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";

import { events } from "@/lib/data/events";

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
      <div className="flex justify-center mb-20 flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-500 border backdrop-blur-sm",
              activeCategory === category
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transform scale-105"
                : "bg-neutral-900/40 text-neutral-400 border-white/5 hover:border-white/20 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
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
