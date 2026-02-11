"use client";

import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#800020]/5 pattern-grid-lg opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-[#FFD700]">The Saga Awaits</h2>
          <p className="text-xl text-[#E0D8C0] mb-12 font-serif italic">
              Will you be part of the legend? Join us for the grandest celebration of the year.
          </p>
          <Link
            href="/tickets"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-[#050A1F] transition-all duration-300 bg-gradient-to-r from-[#C5A059] to-[#FFD700] rounded-sm hover:from-[#E5C079] hover:to-[#FFE033] shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transform hover:-translate-y-1"
          >
            Claim Your Access
          </Link>
      </div>
    </section>
  );
}
