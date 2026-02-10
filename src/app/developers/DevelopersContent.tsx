"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TeamMember } from "@/types";

const developers: TeamMember[] = [
  { 
    name: "Manoj Kumar", 
    role: "Tech Team Lead", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Manoj",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Venkat Saahit Kamu", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Venkat",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Mritunjay Raj", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mritunjay",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Shaswat Raj", 
    role: "Web Developer", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Shaswat",
    socials: { linkedin: "#", github: "https://github.com/sh20raj" } 
  },
  { 
    name: "Abhinav Kumar Choudhary", 
    role: "UI Designer", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abhinav",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Raghav Bajaj", 
    role: "AI/ML Developer", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Raghav",
    socials: { linkedin: "#" } 
  },
   { 
    name: "Aniket Gupta", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aniket",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Vaibhav Anand Singh", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Vaibhav",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Kunal Kashyap", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kunal",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Arya Chakraborty", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arya",
    socials: { linkedin: "#" } 
  },
   { 
    name: "Rishabh Anand", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rishabh",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Sarthak Singh", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarthak",
    socials: { linkedin: "#" } 
  },
   { 
    name: "Deepak Pradhan", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Deepak",
    socials: { linkedin: "#" } 
  },
  { 
    name: "Priyanshu Agrahari", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priyanshu",
    socials: { linkedin: "#" } 
  },
];

export default function DevelopersContent() {
  return (
    <>
      <SectionHeader 
        title="Code Wizards" 
        subtitle="Meet the developers who crafted this digital experience with lines of code and cups of coffee."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.map((dev, i) => (
          <TeamMemberCard key={i} member={dev} />
        ))}
      </div>
    </>
  );
}
