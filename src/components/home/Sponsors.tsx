"use client";

import { LogoCloud } from "@/components/ui/logo-cloud-4";

export function Sponsors() {
  return (
    <section className="py-10 border-t border-[#C5A059]/10 bg-[#070D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h3 className="text-xl font-bold font-serif tracking-widest uppercase text-[#C5A059]/60">Supported By The Kingdom</h3>
      </div>
      <LogoCloud logos={[
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=SBI", alt: "SBI" },
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=RedBull", alt: "RedBull" },
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=Nestle", alt: "Nestle" },
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=CMPDI", alt: "CMPDI" },
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=JHTourism", alt: "Jharkhand Tourism" },
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=Coke", alt: "Coca Cola" },
        { src: "https://api.dicebear.com/9.x/initials/svg?seed=NTPC", alt: "NTPC" },
      ]} />
    </section>
  );
}
