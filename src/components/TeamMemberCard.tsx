"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types";
import Link from "next/link";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg bg-[#0A1025] border border-[#C5A059]/20 p-6 text-center hover:bg-[#151b33] transition-all duration-300 hover:border-[#800020]/50"
    >
      <div className="mx-auto w-24 h-24 rounded-full border-2 border-[#C5A059]/40 p-1 mb-4 group-hover:border-[#FFD700] transition-colors duration-300">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#050A1F] flex items-center justify-center">
             {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
                <User className="w-10 h-10 text-[#C5A059] group-hover:text-[#FFD700] transition-colors" />
            )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold font-heading text-[#E0D8C0] mb-1 group-hover:text-[#FFD700] transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-[#C5A059]/80 mb-4 font-serif italic">{member.role}</p>
      
      {member.socials && (
        <div className="flex justify-center space-x-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {member.socials.linkedin && (
            <Link href={member.socials.linkedin} className="text-[#800020] hover:text-[#FFD700] transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
          )}
          {member.socials.github && (
            <Link href={member.socials.github} className="text-[#800020] hover:text-[#FFD700] transition-colors">
              <Github className="w-4 h-4" />
            </Link>
          )}
          {member.socials.twitter && (
            <Link href={member.socials.twitter} className="text-[#800020] hover:text-[#FFD700] transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
