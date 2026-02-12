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
      "mb-20 space-y-4",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white/90"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className={cn(
             "h-px w-12 bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0 mb-6",
             align === "center" && "mx-auto",
             align === "right" && "ml-auto"
          )} />
          <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      )}
    </div>
  );
}
