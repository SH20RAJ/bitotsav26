"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home, Calendar, Users, Info, LifeBuoy } from "lucide-react";

export function Navbar() {
  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Events", link: "/events", icon: <Calendar className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Sponsors", link: "/sponsors", icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "About", link: "/about", icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Help", link: "/helpdesk", icon: <LifeBuoy className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 pointer-events-none">
       <div className="pointer-events-auto">
          <FloatingNav navItems={navItems} />
       </div>
    </div>
  );
}

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "flex max-w-fit md:min-w-fit fixed z-5000 top-6 inset-x-0 mx-auto px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
        "bg-white dark:bg-black border-white/20",
        className
      )}
      style={{
           backdropFilter: "blur(16px) saturate(180%)",
           backgroundColor: "rgba(17, 25, 40, 0.75)",
           borderRadius: "12px",
           border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
           <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
      ))}
       <Link href="/tickets" className="border text-sm font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white px-4 py-2 rounded-full">
          <span>Tickets</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
    </motion.div>
  );
};
