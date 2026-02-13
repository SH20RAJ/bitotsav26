"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Building2, Ticket } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("bitotsav_user", JSON.stringify(formData));
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-neutral-900/50 border border-white/10 p-8 backdrop-blur-xl relative"
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />

        <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
                <Ticket className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-2xl font-bold font-mono text-white mb-2 uppercase tracking-tight">Access Control</h1>
            <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Enter Credentials for Digital Pass</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-[10px] text-neutral-400 mb-2 uppercase tracking-[0.2em] font-bold">Identity</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 pl-10 pr-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" 
                        placeholder="FULL NAME"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[10px] text-neutral-400 mb-2 uppercase tracking-[0.2em] font-bold">Comms</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 pl-10 pr-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" 
                        placeholder="EMAIL@ADDRESS.COM"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[10px] text-neutral-400 mb-2 uppercase tracking-[0.2em] font-bold">Affiliation</label>
                <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                        type="text" 
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({...formData, institution: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 pl-10 pr-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" 
                        placeholder="INSTITUTION / COMPANY"
                    />
                </div>
            </div>

            <button 
                type="submit"
                className="w-full py-4 bg-white text-black font-bold font-mono text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
            >
                Generate_Pass
            </button>
        </form>
      </motion.div>
    </div>
  );
}
