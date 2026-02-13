"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Send, ShieldAlert, Cpu, Network } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] as any 
    } 
  }
};

export default function HelpdeskContent() {
  return (
    <div className="space-y-24">
      <SectionHeader 
        title="Support Center" 
        subtitle="Get assistance, join our community, or contact the team for support."
        align="center"
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Helpdesk Links */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <motion.div variants={itemVariants} className="p-8 bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] uppercase tracking-widest text-[#FF00FF]">Helpdesk Status: Online</span>
              </div>
              <Network className="w-8 h-8 text-white mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Community Chat</h3>
              <p className="text-neutral-500 mb-6 text-xs leading-relaxed">Join our WhatsApp group for quick updates and community support.</p>
              <Link href="https://chat.whatsapp.com/KOqn2PWDhQ1LGlGqSMU4SK" target="_blank" className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-[10px] py-2 px-4 border border-white/10 hover:bg-white hover:text-black transition-all">
                <span>Join WhatsApp</span>
                <ExternalLink className="w-3 h-3 ml-2" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
               <Mail className="w-8 h-8 text-white mb-4 opacity-50" />
               <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Email Support</h3>
               <p className="text-neutral-500 mb-6 text-xs leading-relaxed">Send us an email for official inquiries and formal support.</p>
               <Link href="mailto:contact@bitotsav.com" className="text-white text-xs hover:text-neutral-400 transition-colors uppercase tracking-widest font-bold">
                  contact@bitotsav.com
               </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-neutral-950 border border-red-500/20 relative overflow-hidden group">
               <ShieldAlert className="w-8 h-8 text-red-500 mb-4 opacity-50" />
               <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Emergency Contact</h3>
               <p className="text-neutral-500 mb-6 text-xs leading-relaxed">Direct line for urgent security or event-related emergencies.</p>
               <div className="text-white font-bold text-sm border-l-2 border-red-500 pl-4 py-1">
                  +91 94718 28932 <span className="text-neutral-600 block text-[10px] mt-1 font-normal">REF: MRITYUNJAY RAJ</span>
               </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 md:p-12 bg-neutral-950 border border-white/10 relative"
          >
             {/* Subtle Grid Decoration */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
             
             <div className="flex items-center gap-4 mb-12 relative z-10">
                <Cpu className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Send a Message</h3>
             </div>

             <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] text-neutral-600 mb-2 uppercase tracking-[0.2em] font-bold">Full Name</label>
                    <input type="text" className="w-full bg-neutral-900/50 border-b border-white/10 p-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-600 mb-2 uppercase tracking-[0.2em] font-bold">Email Address</label>
                    <input type="email" className="w-full bg-neutral-900/50 border-b border-white/10 p-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800" placeholder="Enter your email" />
                  </div>
                </div>

                <div>
                   <label className="block text-[10px] text-neutral-600 mb-2 uppercase tracking-[0.2em] font-bold">Select Topic</label>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['GENERAL', 'REGISTRATION', 'SPONSOR', 'TECHNICAL'].map(topic => (
                        <button key={topic} type="button" className="py-2 px-1 border border-white/5 text-[10px] text-neutral-500 hover:border-white/40 hover:text-white transition-all font-bold">
                          {topic}
                        </button>
                      ))}
                   </div>
                </div>

                <div>
                    <label className="block text-[10px] text-neutral-600 mb-2 uppercase tracking-[0.2em] font-bold">Your Message</label>
                    <textarea rows={6} className="w-full bg-neutral-900/50 border border-white/5 p-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-neutral-800 resize-none text-sm leading-relaxed" placeholder="Write your message here..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button" 
                  className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-3"
                >
                    Submit Form
                    <Send className="w-3 h-3" />
                </motion.button>
             </form>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="p-12 border-t border-b border-white/5 bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8 grayscale hover:grayscale-0 transition-all duration-700 opacity-40 hover:opacity-100">
          <div className="text-center md:text-left">
            <div className="text-xs text-neutral-500 mb-2 tracking-widest uppercase font-bold">Location</div>
            <div className="text-xl font-bold text-white">BIRLA INSTITUTE OF TECHNOLOGY, MESRA</div>
          </div>
          <div className="flex gap-12 text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">
            <div>Ver: 2026.1.0</div>
            <div>Latency: 12ms</div>
            <div>Encryption: AES-256</div>
          </div>
        </div>
      </div>
    </div>
  );
}
