"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scroll, Calendar, Users, Info, Crown, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Scroll },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Team", href: "/team", icon: Users },
  { name: "About", href: "/about", icon: Info },
  { name: "Sponsors", href: "/sponsors", icon: Crown },
  { name: "Devs", href: "/developers", icon: Terminal },
];

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
        "fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-xl border border-transparent",
        scrolled 
            ? "bg-[#050A1F]/80 backdrop-blur-md border-[#C5A059]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#800020] to-[#500014] rounded-lg border border-[#C5A059]/50 overflow-hidden transform group-hover:rotate-45 transition-transform duration-500">
              <span className="text-xl font-bold font-heading text-[#FFD700] transform group-hover:-rotate-45 transition-transform duration-500">B</span>
            </div>
            <span className="text-2xl font-bold font-heading text-gradient-gold tracking-widest uppercase">
              Bitotsav
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-bold tracking-wider uppercase transition-colors duration-300 flex items-center space-x-1 font-serif",
                    isActive ? "text-[#FFD700]" : "text-[#C5A059] hover:text-[#FFD700]"
                  )}
                >
                  <item.icon className={cn("w-4 h-4", isActive ? "text-[#FFD700]" : "text-[#C5A059]")} />
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C5A059] hover:text-[#FFD700] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-[#050A1F]/95 backdrop-blur-xl border-t border-[#C5A059]/30 overflow-hidden rounded-b-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-bold font-serif uppercase tracking-wider transition-all duration-200 flex items-center space-x-3",
                    pathname === item.href
                      ? "bg-[#800020]/30 text-[#FFD700] border border-[#C5A059]/50"
                      : "text-[#C5A059] hover:bg-[#C5A059]/10 hover:text-[#FFD700]"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
