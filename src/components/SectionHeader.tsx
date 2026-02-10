"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-16",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-wide text-[#FFD700] uppercase"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#C5A059] max-w-2xl mx-auto leading-relaxed font-serif italic"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={cn(
          "h-1 w-32 bg-gradient-to-r from-transparent via-[#800020] to-transparent rounded-full mt-6 opacity-80",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
      <div className={cn(
        "h-[1px] w-16 bg-[#C5A059] mt-1 opacity-50",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )}></div>
    </div>
  );
}
