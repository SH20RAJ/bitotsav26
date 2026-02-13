"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, TrendingUp, Users, Zap, Network } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const teams = [
  { rank: 1, name: "Bits & Bytes", score: 12500, institute: "BIT Mesra", status: "Active" },
  { rank: 2, name: "Quantum Coders", score: 11200, institute: "IIT Kharagpur", status: "Active" },
  { rank: 3, name: "Neural Network", score: 10800, institute: "NIT Trichy", status: "Active" },
  { rank: 4, name: "Cyber Punks", score: 9500, institute: "BIT Mesra", status: "Active" },
  { rank: 5, name: "Tech Titans", score: 9200, institute: "IIIT Hyderabad", status: "Active" },
  { rank: 6, name: "Logic Legends", score: 8800, institute: "DTU", status: "Active" },
  { rank: 7, name: "Code Crusaders", score: 8500, institute: "NSUT", status: "Active" },
  { rank: 8, name: "Pixel Perfect", score: 8100, institute: "BIT Mesra", status: "Active" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] as any 
    } 
  }
};

export default function LeaderboardContent() {
  return (
    <div className="space-y-24">
      <SectionHeader 
        title="Live_Rankings" 
        subtitle="Real-time competitive metrics and team standings."
        align="center"
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 items-end">
          {/* Rank 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 p-8 bg-neutral-900/50 border border-white/5 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-neutral-700" />
            <div className="flex flex-col items-center text-center">
              <Medal className="w-12 h-12 text-neutral-400 mb-4" />
              <div className="text-4xl font-bold font-mono text-white mb-2">02</div>
              <div className="text-xl font-bold font-mono text-white mb-1">{teams[1].name}</div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{teams[1].institute}</div>
              <div className="mt-6 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-white">
                {teams[1].score.toLocaleString()} PTS
              </div>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 p-12 bg-neutral-950 border border-yellow-500/20 relative group z-10 scale-105"
          >
             <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-500" />
             <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
             
             <div className="flex flex-col items-center text-center">
               <Trophy className="w-16 h-16 text-yellow-500 mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
               <div className="text-6xl font-bold font-mono text-white mb-4">01</div>
               <div className="text-2xl font-bold font-mono text-white mb-2">{teams[0].name}</div>
               <div className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{teams[0].institute}</div>
               <div className="mt-8 px-6 py-2 bg-yellow-500 text-black font-bold font-mono rounded-full">
                 {teams[0].score.toLocaleString()} PTS
               </div>
             </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-3 md:order-3 p-8 bg-neutral-900/50 border border-white/5 relative group"
          >
             <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-700" />
             <div className="flex flex-col items-center text-center">
               <Award className="w-12 h-12 text-amber-700 mb-4" />
               <div className="text-4xl font-bold font-mono text-white mb-2">03</div>
               <div className="text-xl font-bold font-mono text-white mb-1">{teams[2].name}</div>
               <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{teams[2].institute}</div>
               <div className="mt-6 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-white">
                 {teams[2].score.toLocaleString()} PTS
               </div>
             </div>
          </motion.div>
        </div>

        {/* Global Standings Table */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
           {/* Header Stats */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                  { label: "Active Teams", value: "142", icon: Users },
                  { label: "Updates", value: "Live", icon: Zap },
                  { label: "Region", value: "Global", icon: Network }, // Changed from Globe to Network to avoid missing import
                  { label: "Trend", value: "+12%", icon: TrendingUp },
              ].map((stat) => (
                  <div key={stat.label} className="p-4 border border-white/5 bg-neutral-900/30 flex items-center justify-between">
                      <div>
                          <div className="text-[10px] uppercase tracking-widest text-neutral-500">{stat.label}</div>
                          <div className="text-lg font-mono font-bold text-white">{stat.value}</div>
                      </div>
                      <stat.icon className="w-4 h-4 text-neutral-600" />
                  </div>
              ))}
           </div>

           {/* Table Header */}
           <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500">
              <div className="col-span-2 md:col-span-1">Rank</div>
              <div className="col-span-6 md:col-span-5">Team Identifier</div>
              <div className="col-span-2 md:col-span-3 text-right md:text-left">Institute</div>
              <div className="col-span-2 md:col-span-3 text-right">Score Metric</div>
           </div>

           {/* Table Rows */}
           <div className="space-y-px bg-white/5 border border-white/5">
              {teams.slice(3).map((team) => (
                  <motion.div 
                    key={team.rank}
                    variants={itemVariants}
                    className="grid grid-cols-12 gap-4 px-6 py-5 bg-neutral-950 items-center hover:bg-neutral-900 transition-colors group"
                  >
                      <div className="col-span-2 md:col-span-1 font-mono text-neutral-400">#{team.rank.toString().padStart(2, '0')}</div>
                      <div className="col-span-6 md:col-span-5">
                          <div className="font-mono font-bold text-white group-hover:text-blue-400 transition-colors">{team.name}</div>
                          <div className="text-[10px] text-green-500 uppercase tracking-widest flex items-center gap-2 mt-1 md:hidden">
                             <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                             {team.status}
                          </div>
                      </div>
                      <div className="col-span-2 md:col-span-3 text-right md:text-left text-sm text-neutral-400 hidden md:block">{team.institute}</div>
                      <div className="col-span-4 md:col-span-3 text-right font-mono text-white">{team.score.toLocaleString()}</div>
                  </motion.div>
              ))}
           </div>
        </motion.div>

        <div className="mt-12 text-center">
             <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-widest text-neutral-400">
                 Load_More_Data
             </button>
        </div>

      </div>
    </div>
  );
}
