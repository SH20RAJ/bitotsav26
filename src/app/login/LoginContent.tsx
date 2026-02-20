"use client";

import { motion } from "framer-motion";
import { Ticket, AlertTriangle } from "lucide-react";
import { SignIn } from "@stackframe/stack";

export default function LoginContent() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-neutral-900/50 border border-white/10 p-8 backdrop-blur-xl relative rounded-2xl"
      >

        <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
                <Ticket className="w-12 h-12 text-[#FFD700]" />
            </div>
            <h1 className="text-2xl font-bold font-heading text-white mb-2 uppercase tracking-tight">Register</h1>
            <p className="text-neutral-400 text-sm">Sign in with your BIT Mesra webmail to get your pass</p>
        </div>

        {/* Webmail Notice */}
        <div className="mb-6 p-4 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
            <div className="text-sm">
                <p className="text-[#FFD700] font-bold mb-1">BIT Mesra Students Only</p>
                <p className="text-neutral-400">
                    Only emails ending with <span className="text-white font-mono text-xs">@bitmesra.ac.in</span> are allowed. 
                    If you don&apos;t have a webmail, contact the ERP office to get one.
                </p>
            </div>
        </div>

        <div className="stack-auth-container">
          <SignIn />
        </div>
      </motion.div>

      <style jsx global>{`
        .stack-auth-container {
          --stack-primary: #FFD700;
          --stack-background: transparent;
          --stack-surface: rgba(255, 255, 255, 0.05);
          --stack-border: rgba(255, 255, 255, 0.1);
          --stack-text: #ffffff;
          --stack-text-muted: rgba(255, 255, 255, 0.5);
          --stack-radius: 12px;
        }
        .stack-auth-container button {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 12px !important;
          border-radius: 12px !important;
        }
        .stack-auth-container input {
          background-color: rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 12px !important;
          font-size: 14px !important;
        }
      `}</style>
    </div>
  );
}
