"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, ExternalLink, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export default function HelpdeskContent() {
  return (
    <>
      <SectionHeader 
        title="Command_Center" 
        subtitle="Initiate communication protocols."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-4"
        >
            <div className="p-8 bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-white mb-4" />
                <h3 className="text-lg font-bold font-mono text-white mb-2">WhatsApp_Relay</h3>
                <p className="text-neutral-500 mb-6 font-mono text-sm">Low latency updates and community intel.</p>
                <Link href="https://chat.whatsapp.com/KOqn2PWDhQ1LGlGqSMU4SK" target="_blank" className="inline-flex items-center text-white font-mono uppercase tracking-widest text-xs hover:text-neutral-300 transition-colors">
                    <span>CONNECT_GROUP</span>
                    <ExternalLink className="w-3 h-3 ml-2" />
                </Link>
            </div>

            <div className="p-8 bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-white mb-4" />
                <h3 className="text-lg font-bold font-mono text-white mb-2">Email_Uplink</h3>
                <p className="text-neutral-500 mb-6 font-mono text-sm">Official correspondence channel.</p>
                <Link href="mailto:contact@bitotsav.com" className="inline-flex items-center text-white font-mono uppercase tracking-widest text-xs hover:text-neutral-300 transition-colors">
                    <span>contact@bitotsav.com</span>
                    <ExternalLink className="w-3 h-3 ml-2" />
                </Link>
            </div>

             <div className="p-8 bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Phone className="w-6 h-6 text-white mb-4" />
                <h3 className="text-lg font-bold font-mono text-white mb-2">Emergency_Hotline</h3>
                <p className="text-neutral-500 mb-6 font-mono text-sm">Critical on-campus support.</p>
                <div className="text-white font-mono text-sm">
                    +91 94718 28932 (Mrityunjay Raj)
                </div>
            </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="p-8 bg-black border border-white/10 relative"
        >
             {/* Tech Corners */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />

            <h3 className="text-xl font-bold font-mono text-white mb-6 uppercase tracking-tight">Transmission_Form</h3>
            <form className="space-y-6 font-mono">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Identify User</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700" placeholder="NAME_ID" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Comms Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700" placeholder="EMAIL_ID" />
                </div>
                <div>
                     <label htmlFor="subject" className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Topic</label>
                     <select id="subject" className="w-full px-4 py-3 bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white transition-colors appearance-none">
                        <option>General_Inquiry</option>
                        <option>Event_Registration</option>
                        <option>Sponsorship</option>
                        <option>Technical_Report</option>
                     </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Payload</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700" placeholder="ENTER MESSAGE DATA..."></textarea>
                </div>
                <button type="button" className="w-full px-6 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>TRANSMIT_DATA</span>
                    <Send className="w-3 h-3 ml-2" />
                </button>
            </form>
        </motion.div>
      </div>
    </>
  );
}
