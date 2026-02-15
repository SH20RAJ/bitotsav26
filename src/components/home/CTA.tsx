"use client";

import Image from "next/image";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#800020]/5 pattern-grid-lg opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 animate-float">
                  <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full" />
                  <Image src="/icons/login.png" alt="Unlock" fill className="object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]" />
              </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-linear-to-b from-[#FFD700] to-[#B8860B]">The Saga Awaits</h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 font-light tracking-wide max-w-2xl mx-auto">
              Will you be part of the legend? Join us for the grandest celebration of the year.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-[#050A1F] transition-all duration-300 bg-linear-to-r from-[#C5A059] to-[#FFD700] rounded-sm hover:from-[#E5C079] hover:to-[#FFE033] shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transform hover:-translate-y-1"
          >
            Get Digital Pass
          </Link>
      </div>
    </section>
  );
}
