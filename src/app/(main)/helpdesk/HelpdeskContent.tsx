"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, ExternalLink, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export default function HelpdeskContent() {
  return (
    <>
      <SectionHeader 
        title="We're Here to Help" 
        subtitle="Have questions? need assistance? or just want to say hi? Reach out to us."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
            <div className="p-8 rounded-lg bg-[#0A1025] border border-[#C5A059]/20 hover:bg-[#151b33] transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-[#90EE90] mb-4" />
                <h3 className="text-xl font-bold font-heading text-[#E0D8C0] mb-2">WhatsApp Community</h3>
                <p className="text-[#C5A059]/80 mb-6 font-serif">Objectively the fastest way to get updates and answers.</p>
                <Link href="https://chat.whatsapp.com/KOqn2PWDhQ1LGlGqSMU4SK" target="_blank" className="inline-flex items-center text-[#90EE90] font-semibold hover:text-green-300 transition-colors font-serif uppercase tracking-wider text-sm">
                    <span>Join Group</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
            </div>

            <div className="p-8 rounded-lg bg-[#0A1025] border border-[#C5A059]/20 hover:bg-[#151b33] transition-all duration-300">
                <Mail className="w-8 h-8 text-[#A0C4FF] mb-4" />
                <h3 className="text-xl font-bold font-heading text-[#E0D8C0] mb-2">Email Support</h3>
                <p className="text-[#C5A059]/80 mb-6 font-serif">For formal queries, sponsorships, and collaborations.</p>
                <Link href="mailto:contact@bitotsav.com" className="inline-flex items-center text-[#A0C4FF] font-semibold hover:text-blue-300 transition-colors font-serif uppercase tracking-wider text-sm">
                    <span>contact@bitotsav.com</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
            </div>

             <div className="p-8 rounded-lg bg-[#0A1025] border border-[#C5A059]/20 hover:bg-[#151b33] transition-all duration-300">
                <Phone className="w-8 h-8 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-bold font-heading text-[#E0D8C0] mb-2">Emergency Contact</h3>
                <p className="text-[#C5A059]/80 mb-6 font-serif">For urgent on-campus assistance during the fest.</p>
                <div className="text-[#FFD700] font-mono font-semibold">
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
           className="p-8 rounded-lg bg-[#0A1025] border border-[#C5A059]/40 relative"
        >
             {/* Decorative Border Corners */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FFD700]" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FFD700]" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FFD700]" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FFD700]" />

            <h3 className="text-2xl font-bold font-heading text-[#E0D8C0] mb-6">Send us a Message</h3>
            <form className="space-y-6 font-serif">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#C5A059] mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-sm bg-[#050A1F] border border-[#C5A059]/30 text-[#E0D8C0] focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#C5A059] mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-sm bg-[#050A1F] border border-[#C5A059]/30 text-[#E0D8C0] focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                     <label htmlFor="subject" className="block text-sm font-medium text-[#C5A059] mb-2">Subject</label>
                     <select id="subject" className="w-full px-4 py-3 rounded-sm bg-[#050A1F] border border-[#C5A059]/30 text-[#E0D8C0] focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors">
                        <option>General Inquiry</option>
                        <option>Event Registration</option>
                        <option>Sponsorship</option>
                        <option>Technical Issue</option>
                     </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#C5A059] mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-sm bg-[#050A1F] border border-[#C5A059]/30 text-[#E0D8C0] focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full px-6 py-4 bg-gradient-to-r from-[#800020] to-[#500014] hover:from-[#A00028] hover:to-[#70001C] text-[#FFD700] font-bold rounded-sm border border-[#C5A059]/50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <span>Send Raven</span>
                    <Send className="w-4 h-4 ml-2" />
                </button>
            </form>
        </motion.div>
      </div>
    </>
  );
}
