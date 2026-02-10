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
      className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
    >
      <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
        ) : (
            <User className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
        )}
      </div>
      
      <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-violet-400 transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-gray-400 mb-4">{member.role}</p>
      
      {member.socials && (
        <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {member.socials.linkedin && (
            <Link href={member.socials.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
          )}
          {member.socials.github && (
            <Link href={member.socials.github} className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </Link>
          )}
          {member.socials.twitter && (
            <Link href={member.socials.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
