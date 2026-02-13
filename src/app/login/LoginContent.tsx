"use client";

import { motion } from "framer-motion";
import { Ticket } from "lucide-react";
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
            <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Identify Yourself to Secure Pass</p>
        </div>

        <div className="stack-auth-container">
          <SignIn />
        </div>
      </motion.div>

      <style jsx global>{`
        .stack-auth-container {
          --stack-primary: #ffffff;
          --stack-background: transparent;
          --stack-surface: rgba(255, 255, 255, 0.05);
          --stack-border: rgba(255, 255, 255, 0.1);
          --stack-text: #ffffff;
          --stack-text-muted: rgba(255, 255, 255, 0.5);
          --stack-radius: 0px;
        }
        .stack-auth-container * {
          font-family: var(--font-mono), monospace !important;
        }
        .stack-auth-container button {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 10px !important;
          border-radius: 0px !important;
        }
        .stack-auth-container input {
          background-color: rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 0px !important;
          font-size: 12px !important;
        }
      `}</style>
    </div>
  );
}
