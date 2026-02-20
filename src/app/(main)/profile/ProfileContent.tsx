"use client";

import { useEffect, useState } from "react";
import { Printer, CheckCircle, Sparkles, AlertTriangle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useUser } from "@stackframe/stack";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { syncUser } from "@/app/actions/user";

export default function ProfileContent() {
  const user = useUser({ or: "redirect" });
  const [loading, setLoading] = useState(true);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    if (user) {
      setLoading(false);
      // Sync user to DB on load
      if (!synced) {
        syncUser({
          id: user.id,
          email: user.primaryEmail || "",
          displayName: user.displayName,
          profileImageUrl: user.profileImageUrl,
        }).then((result) => {
          if (!result.success) {
            setSyncError(result.message);
          }
          setSynced(true);
        });
      }
    }
  }, [user, synced]);

  if (loading || !user) return null;

  const qrData = encodeURIComponent(JSON.stringify({ 
    id: btoa(user.primaryEmail || user.id), 
    name: user.displayName || "Guest", 
    type: "VISITOR_PASS", 
    valid: true 
  }));
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&bgcolor=000&color=fff&format=svg`;

  return (
    <PageWrapper>
      {/* Sync Error Banner */}
      {syncError && (
        <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 font-bold text-sm mb-1">Registration Not Allowed</p>
            <p className="text-neutral-400 text-sm">{syncError}</p>
          </div>
        </div>
      )}

      <div className="print:hidden">
        <SectionHeader 
            title="Profile" 
            subtitle="Your unique access token for Bitotsav 2026."
            align="center"
        />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-[#05020a]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(255,215,0,0.03)] overflow-hidden">
            
            {/* Header */}
            <div className="bg-linear-to-r from-[#FFD700]/10 via-transparent to-[#8A2BE2]/10 p-8 border-b border-white/5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#FFD700] to-[#8A2BE2] flex items-center justify-center text-2xl font-bold text-black font-heading shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                        {(user.displayName || user.primaryEmail || "?")[0]?.toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-heading text-white">{user.displayName || "Guest"}</h2>
                        <p className="text-sm text-neutral-400 font-mono">{user.primaryEmail}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-400 font-mono">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                    <Sparkles className="w-3 h-3 text-[#FFD700] ml-2" />
                </div>
            </div>

            {/* QR Pass */}
            <div className="p-8 text-center border-b border-white/5">
                <p className="text-xs font-mono text-[#FFD700] uppercase tracking-widest mb-6 opacity-70">Your Digital Pass</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={qrUrl}
                    alt="QR Pass" 
                    width={200}
                    height={200}
                    className="mx-auto rounded-xl border-4 border-white/10 p-2 bg-black print:border-black"
                />
            </div>

            {/* Print Button */}
            <div className="print:hidden p-6 flex justify-center">
                <button 
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-black font-bold font-heading text-xs uppercase tracking-widest hover:bg-[#FDB931] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all rounded-full"
                >
                    <Printer className="w-4 h-4" />
                    Print Pass
                </button>
            </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body { background: white !important; }
          nav, footer { display: none !important; }
          .print\\:hidden { display: none !important; }
          .print\\:border-black { border-color: black !important; }
        }
      `}</style>
    </PageWrapper>
  );
}
