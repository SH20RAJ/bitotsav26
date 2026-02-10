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
      "mb-12",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold font-heading mb-4 tracking-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-white to-cyan-400">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
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
          "h-1 w-24 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-6",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </div>
  );
}
