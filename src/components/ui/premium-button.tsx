import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "gold" | "violet";
}

export function PremiumButton({ children, className, variant = "gold", ...props }: PremiumButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative group px-8 py-4 font-bold font-heading uppercase tracking-wider text-sm md:text-base overflow-hidden rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300",
        variant === "gold" 
          ? "bg-linear-to-b from-[#FFD700] via-[#FDB931] to-[#C08F09] text-[#2a0a3d] border-2 border-[#FFE57F]"
          : "bg-linear-to-b from-[#8A2BE2] via-[#4B0082] to-[#2E0249] text-white border-2 border-[#D8BFD8]",
        className
      )}
      {...props}
    >
      {/* Glossy highlight */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-linear-to-b from-white/40 to-transparent rounded-t-xl" />
      
      {/* Inner Glow */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        variant === "gold" ? "bg-[#FFD700]/20" : "bg-[#8A2BE2]/20"
      )} />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
        {children}
      </span>
    </motion.button>
  );
}
