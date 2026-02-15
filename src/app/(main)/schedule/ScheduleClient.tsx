"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { cn } from "@/lib/utils";

const scheduleData = [
  {
    day: "Day 01",
    date: "Feb 14",
    events: [
      { time: "10:00 AM", name: "Inauguration Ceremony", venue: "GP Birla Auditorium", type: "Main" },
      { time: "02:00 PM", name: "Dance Saga Prelims", venue: "OAT", type: "Dance" },
      { time: "05:00 PM", name: "Battle of Bands", venue: "Main Stage", type: "Music" },
      { time: "08:00 PM", name: "EDM Nite", venue: "Main Grounds", type: "Star Nite" },
    ]
  },
  {
    day: "Day 02",
    date: "Feb 15",
    events: [
      { time: "09:00 AM", name: "Hackathon 24H Begin", venue: "Lab 1", type: "Tech" },
      { time: "11:00 AM", name: "Robowars", venue: "SAC", type: "Tech" },
      { time: "03:00 PM", name: "Natsamrat", venue: "Main Stage", type: "Drama" },
      { time: "07:00 PM", name: "Fashion Show", venue: "GP Birla Auditorium", type: "Flagship" },
    ]
  },
  {
    day: "Day 03",
    date: "Feb 16",
    events: [
      { time: "10:00 AM", name: "Squiz Games", venue: "OAT", type: "Informal" },
      { time: "01:00 PM", name: "Music Solo", venue: "Mini Auditorium", type: "Music" },
      { time: "04:00 PM", name: "Closing Ceremony", venue: "Main Stage", type: "Main" },
      { time: "08:00 PM", name: "Live Concert", venue: "Main Stage", type: "Star Nite" },
    ]
  }
];

export default function ScheduleClient() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <PageWrapper>
      <SectionHeader 
        title="Schedule_Module" 
        subtitle="Operational timeline for the festival sequence."
      />

      {/* Day Selector */}
      <div className="max-w-4xl mx-auto mb-16 flex flex-wrap justify-center gap-4">
        {scheduleData.map((data, index) => (
          <button
            key={data.day}
            onClick={() => setActiveDay(index)}
            className={cn(
              "relative px-8 py-4 border transition-all duration-500 group rounded-xl overflow-hidden",
              activeDay === index 
                ? "border-[#FFD700] bg-[#FFD700]/10 text-white shadow-[0_0_20px_rgba(255,215,0,0.2)]" 
                : "border-white/10 text-neutral-500 hover:border-[#FFD700]/50 hover:text-white bg-[#05020a]/50"
            )}
          >
            <div className={cn(
                "text-2xl font-bold font-heading mb-1",
                activeDay === index ? "text-[#FFD700]" : "group-hover:text-neutral-200"
            )}>{data.day}</div>
            <div className="text-xs font-mono opacity-60 uppercase tracking-widest">{data.date}</div>
            
            {activeDay === index && (
              <motion.div 
                layoutId="activeDay"
                className="absolute inset-0 border-2 border-[#FFD700] rounded-xl pointer-events-none"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-t from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        ))}
      </div>

      {/* Timeline Display */}
      <div className="max-w-4xl mx-auto relative px-4 pb-20">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#FFD700]/30 to-transparent hidden md:block" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {scheduleData[activeDay].events.map((event, idx) => (
              <div key={idx} className="relative pl-0 md:pl-16 group">
                <div className="absolute left-[27px] top-8 w-4 h-4 rounded-full bg-[#05020a] border-2 border-[#FFD700] shadow-[0_0_10px_#FFD700] z-10 hidden md:block group-hover:scale-125 transition-transform duration-300" />
                
                <div className="rounded-2xl border border-white/10 p-6 md:p-8 bg-[#05020a]/40 backdrop-blur-md hover:border-[#FFD700]/30 hover:bg-[#FFD700]/5 transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(255,215,0,0.05)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                    <div className="space-y-2">
                      <div className="text-[#FFD700] font-bold font-mono tracking-widest text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_8px_#FFD700]" />
                        {event.time}
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold font-heading uppercase tracking-tight text-white group-hover:text-[#FDB931] transition-colors">
                        {event.name}
                      </h3>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-neutral-300 text-sm font-bold font-serif italic">{event.venue}</div>
                      <div className="text-[10px] text-[#8A2BE2] tracking-[0.2em] font-mono mt-1 font-bold">CLASS: {event.type}</div>
                    </div>
                  </div>
                  
                  {/* Subtle Hex Pattern on hover */}
                  <div className="absolute right-0 top-0 w-40 h-40 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle,rgba(255,215,0,0.2)_1px,transparent_1px)] bg-size-[20px_20px]" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
