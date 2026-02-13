"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative font-mono text-white">
      {/* Background Tech Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

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
              "relative px-8 py-4 border transition-all duration-300 group",
              activeDay === index 
                ? "border-white bg-white text-black" 
                : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-white"
            )}
          >
            <div className="text-2xl font-bold">{data.day}</div>
            <div className="text-xs opacity-60 uppercase tracking-tighter">{data.date}</div>
            {activeDay === index && (
              <motion.div 
                layoutId="activeDay"
                className="absolute inset-0 border-2 border-white pointer-events-none"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Timeline Display */}
      <div className="max-w-4xl mx-auto relative px-4">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-800 hidden md:block" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {scheduleData[activeDay].events.map((event, idx) => (
              <div key={idx} className="relative pl-0 md:pl-16 group">
                <div className="absolute left-[30px] top-6 w-3 h-3 rounded-full bg-neutral-800 border-2 border-black group-hover:bg-white transition-colors duration-500 hidden md:block" />
                
                <div className="border border-neutral-800 p-6 md:p-8 hover:border-neutral-700 transition-colors duration-300 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-emerald-500 font-bold tracking-widest text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {event.time}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                        {event.name}
                      </h3>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-neutral-400 text-sm font-bold uppercase">{event.venue}</div>
                      <div className="text-[10px] text-neutral-600 tracking-[0.2em] font-mono mt-1">CLASS: {event.type}</div>
                    </div>
                  </div>
                  
                  {/* Subtle Hex Pattern on hover */}
                  <div className="absolute right-0 top-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[20px_20px]" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
