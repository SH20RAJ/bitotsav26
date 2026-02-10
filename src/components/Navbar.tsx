"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, Code, Cpu, Globe, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Terminal },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Team", href: "/team", icon: Users },
  { name: "About", href: "/about", icon: Info },
  { name: "Sponsors", href: "/sponsors", icon: DollarSign },
  { name: "Devs", href: "/developers", icon: Code },
];

import { Calendar, Users, Info, DollarSign } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
            ? "bg-black/80 backdrop-blur-md border-white/10 py-3" 
            : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center border border-white/20 bg-white/5 overflow-hidden group-hover:border-white/50 transition-colors">
              <span className="text-lg font-mono font-bold text-white">B</span>
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold font-mono tracking-tighter text-white leading-none">
                BITOTSAV<span className="text-neutral-500">_26</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-[0.2em] leading-none mt-1">
                    SYSTEM.ONLINE
                </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 border border-transparent hover:border-white/10 hover:bg-white/5",
                    isActive ? "text-white bg-white/5 border-white/10" : "text-neutral-400 hover:text-white"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="absolute top-1/2 right-2 -translate-y-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neutral-300 focus:outline-none p-2 border border-white/10 bg-white/5"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-mono uppercase tracking-wider transition-colors border-l-2",
                    pathname === item.href
                      ? "border-white bg-white/5 text-white"
                      : "border-transparent text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
