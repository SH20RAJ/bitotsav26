"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TeamMember } from "@/types";

// Static data based on fetched content (will be expanded later)
const coreTeam: TeamMember[] = [
  { name: "John Doe", role: "President", socials: { linkedin: "#" } },
  { name: "Jane Smith", role: "Vice President", socials: { linkedin: "#" } },
  { name: "Alex Johnson", role: "General Secretary", socials: { linkedin: "#" } },
  { name: "Emily Brown", role: "Treasurer", socials: { linkedin: "#" } },
];

const developers: TeamMember[] = [
  { name: "Manoj Kumar", role: "Tech Team Lead", socials: { linkedin: "#" } },
  { name: "Venkat Saahit Kamu", role: "Tech Team", socials: { linkedin: "#" } },
  { name: "Mritunjay Raj", role: "Tech Team", socials: { linkedin: "#" } },
  { name: "Shaswat Raj", role: "Web Developer", socials: { linkedin: "#", github: "https://github.com/sh20raj" } },
  { name: "Abhinav Kumar Choudhary", role: "UI Designer", socials: { linkedin: "#" } },
  { name: "Raghav Bajaj", role: "AI/ML Developer", socials: { linkedin: "#" } },
];

export default function TeamContent() {
  return (
    <>
      <SectionHeader 
        title="System_Admins" 
        subtitle="Core processors and protocol maintainers."
      />

      <div className="max-w-7xl mx-auto mb-20 px-4">
        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="h-2 w-2 bg-white" />
            <h3 className="text-sm font-mono text-white uppercase tracking-widest">
                Core_Kernel_Level_0
            </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTeam.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>

       <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="h-2 w-2 bg-neutral-500" />
            <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
                Dev_Ops_Unit
            </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {developers.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}
