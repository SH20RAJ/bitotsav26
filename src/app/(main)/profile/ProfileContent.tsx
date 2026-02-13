"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Printer, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{name: string, email: string, institution: string} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("bitotsav_user");
    if (!userData) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  if (loading || !user) return null;

  const qrData = encodeURIComponent(JSON.stringify({ 
    id: btoa(user.email), 
    name: user.name, 
    type: "VISITOR_PASS", 
    valid: true 
  }));
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&bgcolor=000&color=fff&format=svg`;

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="print:hidden">
        <SectionHeader 
            title="Digital_Identity" 
            subtitle="Your unique access token for Bitotsav 2026."
            align="center"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div id="print-area" className="bg-white text-black p-8 md:p-12 relative overflow-hidden group max-w-2xl mx-auto shadow-2xl">
           {/* Ticket Design Elements */}
           <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-black via-neutral-500 to-black" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
           
           {/* Watermark */}
           <div className="absolute right-[-20px] top-[40%] -rotate-90 text-[120px] font-bold text-neutral-100 select-none pointer-events-none">
             PASS
           </div>

           <div className="relative z-10">
             <div className="flex justify-between items-start mb-12">
                <div>
                   <h2 className="text-3xl font-bold font-mono tracking-tighter mb-1">BITOTSAV &apos;26</h2>
                   <div className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em]">Official Access Permit</div>
                </div>
                <div className="text-right">
                    <div className="text-4xl font-mono font-bold">2026</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">Edition 35</div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-b border-black py-8">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Holder Name</div>
                        <div className="text-xl font-bold font-mono">{user.name}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Affiliation</div>
                        <div className="text-lg font-mono">{user.institution}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Access Level</div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            <span>ALL_ACCESS_GRANTED</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-black/5 border border-black/10">
                    {/* Inverted colors for QR to match paper style */}
                    <img src={qrUrl} alt="QR Code" className="w-32 h-32 mix-blend-multiply" />
                    <div className="mt-2 text-[8px] font-mono text-neutral-400 text-center">SCAN FOR ENTRY</div>
                </div>
             </div>

             <div className="flex justify-between items-end font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                <div>
                    <div>Generated: {new Date().toLocaleDateString()}</div>
                    <div>ID: {btoa(user.email).substring(0, 12)}...</div>
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
                className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
                <Printer className="w-4 h-4" />
                Print_Pass
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
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none;
            border: 2px solid black;
          }
          /* Hide Navbar and Footer specifically if they are not caught by body * */
          nav, footer, .fixed {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
