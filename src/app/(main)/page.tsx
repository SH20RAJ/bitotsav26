"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Zap, Music, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Cultural Extravaganza",
    description: "Experience the vibrancy of dance, music, and drama with flagship events like Dance Saga and Battle of Bands.",
    icon: Music,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Technical Prowess",
    description: "Showcase your coding and engineering skills in Hackathons, Robowars, and Technical Quizzes.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Star Nights",
    description: "Witness electrifying performances by celebrity artists and bands that will leave you spellbound.",
    icon: Mic,
    color: "from-violet-500 to-purple-500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-[pulse_6s_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-[pulse_8s_infinite]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading mb-6 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-white to-cyan-400">
                Bitotsav
              </span>
              <span className="block text-4xl md:text-6xl text-white/80 mt-2">
                2026
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Where Technology Meets Culture. BIT Mesra's Premier Cultural, Sports & Technical Festival.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/events"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Our Legacy</span>
              <Users className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Experience the Magic</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-white/10"
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br",
                  feature.color
                )}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee/Sponsors Preview */}
      <section className="py-20 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold font-heading mb-12 text-gray-500">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* Placeholders for Sponsor Logos */}
                <div className="text-2xl font-bold text-white">SBI</div>
                <div className="text-2xl font-bold text-white">RedBull</div>
                <div className="text-2xl font-bold text-white">Nestle</div>
                <div className="text-2xl font-bold text-white">CMPDI</div>
                <div className="text-2xl font-bold text-white">Jharkhand Tourism</div>
            </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-900/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white">Ready for the Experience?</h2>
            <p className="text-xl text-gray-300 mb-10">
                Join us for 4 days of unlimited fun, competition, and memories.
                Bitotsav 2026 awaits you.
            </p>
            <Link
              href="/tickets"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full hover:from-violet-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Passes
            </Link>
        </div>
      </section>
    </div>
  );
}
