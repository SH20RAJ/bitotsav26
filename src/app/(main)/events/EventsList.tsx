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
