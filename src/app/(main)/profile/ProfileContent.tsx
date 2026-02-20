"use client";

import { useEffect, useState } from "react";

import { Printer, CheckCircle, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useUser } from "@stackframe/stack";
import { PageWrapper } from "@/components/ui/page-wrapper";


export default function ProfileContent() {
  const user = useUser({ or: "redirect" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading || !user) return null;

  const qrData = encodeURIComponent(JSON.stringify({ 
    id: btoa(user.primaryEmail || user.id), 
    name: user.displayName || "GUEST_IDENTIFIED", 
    type: "VISITOR_PASS", 
    valid: true 
  }));
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&bgcolor=000&color=fff&format=svg`;

  return (
    <PageWrapper>
      <div className="print:hidden">
        <SectionHeader 
            title="Profile" 
            subtitle="Your unique access token for Bitotsav 2026."
            align="center"
        />
      </div>

      <div className="max-w-4xl mx-auto pb-20">
        <div id="print-area" className="bg-[#05020a] text-white p-8 md:p-12 relative overflow-hidden group max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#FFD700]/20 rounded-3xl">
           {/* Ticket Design Elements */}
           <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#8A2BE2] via-[#FFD700] to-[#8A2BE2]" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
           
           {/* Watermark */}
           <div className="absolute right-[-20px] top-[40%] -rotate-90 text-[120px] font-bold text-white/5 select-none pointer-events-none font-heading">
             PASS
           </div>

           <div className="relative z-10">
             <div className="flex justify-between items-start mb-12">
                <div>
                   <h2 className="text-3xl font-bold font-heading tracking-tighter mb-1 text-white">BITOTSAV &apos;26</h2>
                   <div className="text-xs font-mono text-[#FFD700] uppercase tracking-[0.3em] font-bold">Official Access Permit</div>
                </div>
                <div className="text-right">
                    <div className="text-4xl font-heading font-bold text-white">2026</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Edition 35</div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-b border-white/10 py-8 relative">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1 font-bold">Holder Name</div>
                        <div className="text-2xl font-bold font-heading text-white">{user.displayName || "ANONYMOUS_USER"}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1 font-bold">Identifier</div>
                        <div className="text-lg font-mono text-neutral-300">{user.primaryEmail}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1 font-bold">Access Level</div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold font-mono rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            <span>ALL_ACCESS_GRANTED</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl">
                    {/* QR Code */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={qrUrl} alt="QR Code" className="w-32 h-32" />
                    <div className="mt-2 text-[8px] font-mono text-black text-center font-bold tracking-widest">SCAN FOR ENTRY</div>
                </div>
             </div>

             <div className="flex justify-between items-end font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                <div>
                    <div className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-[#FFD700]" /> Generated: {new Date().toLocaleDateString()}</div>
                    <div>ID: {user.id.substring(0, 12)}...</div>
                </div>
                <div className="text-right">
                    <div>Birla Institute of Technology</div>
                    <div>Mesra, Ranchi</div>
                </div>
             </div>
           </div>
        </div>

        <div className="mt-12 flex justify-center gap-4 print:hidden">
            <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-black font-bold font-heading text-xs uppercase tracking-widest hover:bg-[#FDB931] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all rounded-full"
            >
                <Printer className="w-4 h-4" />
                Print Pass
            </button>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
            color: black !important;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px;
            box-shadow: none;
            border: 2px solid black;
            background: white !important;
            border-radius: 0;
          }
          /* Hide gradients and irrelevant elements for print */
          .absolute.bg-linear-to-r, .absolute.bg-linear-to-b {
            display: none !important;
          }
          h2, .font-heading {
             font-family: monospace !important;
          }
          /* Hide Navbar and Footer specifically if they are not caught by body * */
          nav, footer, .fixed {
            display: none !important;
          }
        }
      `}</style>
    </PageWrapper>
  );
}
