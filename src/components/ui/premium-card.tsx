import React from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function PremiumCard({ children, className, ...props }: PremiumCardProps) {
  return (
    <div 
      className={cn(
        "relative rounded-2xl overflow-hidden bg-[#0a0510]/80 backdrop-blur-md border border-[#C5A059]/30",
        "shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-500",
        className
      )}
      {...props}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C5A059]/50 group-hover:border-[#FFD700] transition-colors duration-500 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C5A059]/50 group-hover:border-[#FFD700] transition-colors duration-500 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C5A059]/50 group-hover:border-[#FFD700] transition-colors duration-500 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C5A059]/50 group-hover:border-[#FFD700] transition-colors duration-500 rounded-br-2xl" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
