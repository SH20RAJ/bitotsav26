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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden bg-neutral-900/50 border border-white/10 p-6 flex flex-col items-center hover:bg-neutral-900 transition-all duration-300 hover:border-white/30"
    >
      <div className="w-24 h-24 rounded-full border border-white/10 p-1 mb-4 group-hover:border-white/50 transition-colors duration-300 relative">
        <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500">
             {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
                <User className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors" />
            )}
        </div>
      </div>
      
      <h3 className="text-lg font-bold font-mono text-white mb-1 group-hover:text-neutral-200 transition-colors tracking-tight">
        {member.name}
      </h3>
      <p className="text-xs text-neutral-500 mb-4 font-mono uppercase tracking-widest">{member.role}</p>
      
      {member.socials && (
        <div className="flex justify-center space-x-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          {member.socials.linkedin && (
            <Link href={member.socials.linkedin} className="text-white hover:text-white transition-colors hover:scale-110">
              <Linkedin className="w-3 h-3" />
            </Link>
          )}
          {member.socials.github && (
            <Link href={member.socials.github} className="text-white hover:text-white transition-colors hover:scale-110">
              <Github className="w-3 h-3" />
            </Link>
          )}
          {member.socials.twitter && (
            <Link href={member.socials.twitter} className="text-white hover:text-white transition-colors hover:scale-110">
              <Twitter className="w-3 h-3" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
