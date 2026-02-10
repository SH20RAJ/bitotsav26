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
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-6xl font-bold font-heading mb-4 tracking-tighter text-white uppercase"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-2"
        >
          <div className={cn(
             "h-px w-24 bg-white/20 mb-2",
             align === "center" && "mx-auto",
             align === "right" && "ml-auto"
          )} />
          <p className="text-sm md:text-base text-neutral-400 font-mono tracking-wide uppercase">
            {subtitle}
          </p>
        </motion.div>
      )}
    </div>
  );
}
