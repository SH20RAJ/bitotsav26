"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Music, Zap, Mic, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";
import EnergyBeam from "@/components/ui/energy-beam";
import { FocusRail, FocusRailItem } from "@/components/ui/focus-rail";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

const features = [
  {
    title: "Cultural Extravaganza",
    description: "Experience the vibrancy of dance, music, and drama with flagship events like Dance Saga and Battle of Bands.",
    icon: Music,
    color: "from-[#800020] to-[#500014]", // Maroon gradient
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop", // Live music/Club
  },
  {
    title: "Technical Prowess",
    description: "Showcase your coding and engineering skills in Hackathons, Robowars, and Technical Quizzes.",
    icon: Zap,
    color: "from-[#B8860B] to-[#DAA520]", // Gold gradient
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Tech/Circuitry
  },
  {
    title: "Star Nights",
    description: "Witness electrifying performances by celebrity artists and bands that will leave you spellbound.",
    icon: Mic,
    color: "from-[#050A1F] to-[#0A1F45]", // Deep Blue gradient
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop", // Concert crowd
  },
];

const galleryItems: FocusRailItem[] = [
  {
    id: 1,
    title: "The Royal Stage",
    description: "Where the night comes alive with star-studded performances.",
    imageSrc: "https://images.unsplash.com/photo-1470229722913-7ea549c1c5c4?q=80&w=2074&auto=format&fit=crop", // Concert
    meta: "Pro Nite",
  },
  {
    id: 2,
    title: "Rhythm of Culture",
    description: "A celebration of dance traditions from across the globe.",
    imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop", // Dance dramatic
    meta: "Dance Saga",
  },
  {
    id: 3,
    title: "Battle of Bands",
    description: "Electrifying riffs and thundering beats echoing through the night.",
    imageSrc: "https://images.unsplash.com/photo-1511735111819-9a3f77ebd90d?q=80&w=2070&auto=format&fit=crop", // Band dark
    meta: "Band Nite",
  },
  {
    id: 4,
    title: "Dramatic Arts",
    description: "Stories unfolding on stage, capturing hearts and minds.",
    imageSrc: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=2070&auto=format&fit=crop", // Drama
    meta: "Natsamrat",
  },
   {
    id: 5,
    title: "Fashion & Flare",
    description: "Walking the ramp with elegance and panache.",
    imageSrc: "https://images.unsplash.com/photo-1509631179647-0177f153519b?q=80&w=1978&auto=format&fit=crop", // Fashion
    meta: "Saptak",
  },
];

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A1F]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-black">
        {/* Energy Beam Background */}
        <div className="absolute inset-0 z-0">
             <EnergyBeam className="opacity-80" />
             {/* Overlay to blend with theme */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050A1F]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 relative"
          >
            <h1 className="text-6xl md:text-9xl font-bold font-heading text-[#FFD700] tracking-wider relative z-10 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]">
              BITOTSAV <span className="text-[#C5A059]">&apos;26</span>
            </h1>
            {/* Subtle Glow behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD700]/10 blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* Thematic Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4 mb-10"
          >
            <div className="flex items-center justify-center space-x-4">
               <div className="h-px w-12 bg-[#C5A059]/60"></div>
               <p className="text-xl md:text-2xl text-[#E0D8C0] font-serif tracking-[0.2em] uppercase">
                  The 35th Edition
               </p>
               <div className="h-px w-12 bg-[#C5A059]/60"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F4E4BC] to-[#C5A059] drop-shadow-sm">
              GAATHA: The Endless Saga
            </h2>
          </motion.div>

          

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                href="/events"
                className="group px-8 py-4 bg-[#800020] hover:bg-[#A00028] text-[#FFD700] border border-[#C5A059] rounded-sm font-bold text-lg flex items-center space-x-3 transition-all duration-300 shadow-[0_0_20px_rgba(128,0,32,0.4)] hover:shadow-[0_0_30px_rgba(128,0,32,0.6)]"
              >
                <span>Explore The Saga</span>
                <ScrollText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent hover:bg-[#C5A059]/10 text-[#E0D8C0] border border-[#C5A059]/30 rounded-sm font-medium text-lg flex items-center space-x-2 transition-all duration-300 backdrop-blur-sm font-serif"
              >
                <span>Our Legacy</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
        </div>
      </section>

      {/* Focus Rail Gallery Section */}
      <section className="py-0 relative z-20 -mt-20">
          <FocusRail items={galleryItems} />
      </section>

      {/* Features Section - Cinematic Overhaul */}
      <section className="py-32 relative overflow-hidden bg-[#050A1F]">
        {/* Background Ambient Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#800020]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#FFD700]">Chapters of the Fest</h2>
            <div className="flex items-center justify-center gap-2 opacity-60">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C5A059]" />
                <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-[400px] rounded-lg overflow-hidden border border-[#C5A059]/20 transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]"
              >
                {/* Background Image (Revealed on Hover) */}
                <div className="absolute inset-0 bg-[#0A1025] transition-all duration-500 group-hover:scale-110">
                    <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A1F] via-[#050A1F]/80 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br border border-[#FFFFFF]/10 shadow-lg backdrop-blur-md",
                    feature.color
                    )}>
                    <feature.icon className="w-5 h-5 text-[#E0D8C0]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-serif text-[#E0D8C0] mb-3 group-hover:text-[#FFD700] transition-colors translate-y-2 group-hover:translate-y-0 duration-300">
                        {feature.title}
                    </h3>
                    
                    <p className="text-[#C5A059]/70 leading-relaxed font-sans text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {feature.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee/Sponsors Preview */}
      <section className="py-20 border-t border-[#C5A059]/10 bg-[#070D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h3 className="text-xl font-bold font-serif tracking-widest uppercase text-[#C5A059]/60">Supported By The Kingdom</h3>
        </div>
        <LogoCloud logos={[
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=SBI", alt: "SBI" },
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=RedBull", alt: "RedBull" },
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=Nestle", alt: "Nestle" },
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=CMPDI", alt: "CMPDI" },
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=JHTourism", alt: "Jharkhand Tourism" },
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=Coke", alt: "Coca Cola" },
          { src: "https://api.dicebear.com/9.x/initials/svg?seed=NTPC", alt: "NTPC" },
        ]} />
      </section>

       {/* CTA Section */}
       <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#800020]/5 pattern-grid-lg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-[#FFD700]">The Saga Awaits</h2>
            <p className="text-xl text-[#E0D8C0] mb-12 font-serif italic">
                Will you be part of the legend? Join us for the grandest celebration of the year.
            </p>
            <Link
              href="/tickets"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-[#050A1F] transition-all duration-300 bg-gradient-to-r from-[#C5A059] to-[#FFD700] rounded-sm hover:from-[#E5C079] hover:to-[#FFE033] shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transform hover:-translate-y-1"
            >
              Claim Your Access
            </Link>
        </div>
      </section>
    </div>
  );
}
