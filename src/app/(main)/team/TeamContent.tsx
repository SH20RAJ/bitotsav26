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
        title="Council of Leaders" 
        subtitle="The dedicated individuals who steer the ship through stormy seas."
      />

      <div className="max-w-7xl mx-auto mb-20">
        <h3 className="text-2xl font-bold font-serif text-[#FFD700] mb-8 text-center uppercase tracking-widest border-b border-[#C5A059]/30 pb-4 inline-block w-full">Core Committee</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTeam.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>

       <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold font-serif text-[#FFD700] mb-8 text-center uppercase tracking-widest border-b border-[#C5A059]/30 pb-4 inline-block w-full">Technical Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {developers.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}
