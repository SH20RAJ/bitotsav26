"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, User } from "lucide-react";
import { TeamMember } from "@/types";
import Link from "next/link";
import Image from "next/image";

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
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-500 hover:border-[#FFD700]/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] rounded-xl"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FFD700]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-24 h-24 rounded-full border border-white/10 p-1 mb-4 group-hover:border-[#FFD700]/50 transition-colors duration-300 relative">
        <div className="absolute inset-0 bg-[#FFD700]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500">
             {member.image ? (
                <Image src={member.image} alt={member.name} fill className="object-cover" />
            ) : (
                <User className="w-8 h-8 text-neutral-600 group-hover:text-[#FFD700] transition-colors" />
            )}
        </div>
      </div>
      
      <h3 className="text-lg font-bold font-heading text-white mb-1 group-hover:text-[#FFD700] transition-colors tracking-wide text-center">
        {member.name}
      </h3>
      <p className="text-[10px] text-white/60 mb-4 font-mono uppercase tracking-[0.2em] text-center border-b border-white/10 pb-2 group-hover:border-[#FFD700]/50 transition-colors">
        {member.role}
      </p>
      
      {member.socials && (
        <div className="flex justify-center space-x-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          {member.socials.linkedin && (
            <Link href={member.socials.linkedin} className="text-white hover:text-[#0077B5] transition-colors hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </Link>
          )}
          {member.socials.github && (
            <Link href={member.socials.github} className="text-white hover:text-[#EFD700] transition-colors hover:scale-110">
              <Github className="w-4 h-4" />
            </Link>
          )}
          {member.socials.twitter && (
            <Link href={member.socials.twitter} className="text-white hover:text-[#1DA1F2] transition-colors hover:scale-110">
              <Twitter className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
