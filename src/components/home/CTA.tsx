import Image from "next/image";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/premium-button";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-[#FFD700]/5 mix-blend-overlay" />
      
      {/* Golden Frame */}
      <div className="absolute inset-4 border border-[#C5A059]/20 rounded-3xl pointer-events-none" />
      <div className="absolute inset-4 border border-[#C5A059]/10 rounded-3xl blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="flex justify-center mb-10">
              <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
                  <div className="absolute inset-0 bg-[#FFD700]/20 blur-[50px] rounded-full" />
                  <Image src="/icons/login.png" alt="Unlock" fill className="object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.6)]" />
              </div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold font-heading mb-8 text-transparent bg-clip-text bg-linear-to-b from-[#FFD700] via-[#FDB931] to-[#C08F09] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            THE SAGA AWAITS
          </h2>
          
          <p className="text-lg md:text-2xl text-[#E0D8C0] mb-12 font-serif italic tracking-wide max-w-2xl mx-auto opacity-90">
              &quot;Will you be part of the legend? Join us for the grandest celebration of the year.&quot;
          </p>

          <Link href="/login">
            <PremiumButton className="text-lg md:text-xl px-12 py-6">
              Get Digital Pass
            </PremiumButton>
          </Link>
      </div>
    </section>
  );
}
