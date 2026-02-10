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
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 glass hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold font-heading text-white mb-2">WhatsApp Community</h3>
                <p className="text-gray-400 mb-6">Objectively the fastest way to get updates and answers.</p>
                <Link href="https://chat.whatsapp.com/KOqn2PWDhQ1LGlGqSMU4SK" target="_blank" className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors">
                    <span>Join Group</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 glass hover:bg-white/10 transition-all duration-300">
                <Mail className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold font-heading text-white mb-2">Email Support</h3>
                <p className="text-gray-400 mb-6">For formal queries, sponsorships, and collaborations.</p>
                <Link href="mailto:contact@bitotsav.com" className="inline-flex items-center text-violet-400 font-semibold hover:text-violet-300 transition-colors">
                    <span>contact@bitotsav.com</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
            </div>

             <div className="p-8 rounded-2xl bg-white/5 border border-white/10 glass hover:bg-white/10 transition-all duration-300">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold font-heading text-white mb-2">Emergency Contact</h3>
                <p className="text-gray-400 mb-6">For urgent on-campus assistance during the fest.</p>
                <div className="text-cyan-400 font-mono font-semibold">
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
           className="p-8 rounded-2xl bg-white/5 border border-white/10 glass"
        >
            <h3 className="text-2xl font-bold font-heading text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                     <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                     <select id="subject" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors">
                        <option>General Inquiry</option>
                        <option>Event Registration</option>
                        <option>Sponsorship</option>
                        <option>Technical Issue</option>
                     </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                </button>
            </form>
        </motion.div>
      </div>
    </>
  );
}
