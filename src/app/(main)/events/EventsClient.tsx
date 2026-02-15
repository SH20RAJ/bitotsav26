"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/data/events";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/ui/page-wrapper";

const categories = ["All", "Flagship", "Formal", "Informal"];

export default function EventsClient() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <PageWrapper>
      <SectionHeader 
        title="Event Logs" 
        subtitle="System activities and competitive modules."
        className="mb-12"
      />

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12 space-x-2 md:space-x-4 flex-wrap gap-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "relative px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 font-heading overflow-hidden group clip-path-polygon",
              filter === category
                ? "text-[#05020a]"
                : "text-white/60 hover:text-[#FFD700]"
            )}
          >
            {/* Active Background */}
            {filter === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-linear-to-r from-[#FFD700] to-[#EBAF3F]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Border definition for non-active */}
            {filter !== category && (
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#FFD700]/50 transition-colors" />
            )}

            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </AnimatePresence>
      </motion.div>
    </PageWrapper>
  );
}
