"use client";

import { Hero } from "@/components/home/Hero";
import { Gallery } from "@/components/home/Gallery";
import { Features } from "@/components/home/Features";
import { Sponsors } from "@/components/home/Sponsors";
import { CTA } from "@/components/home/CTA";

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A1F]">
      <Hero />
      <Gallery />
      <Features />
      <Sponsors />
      <CTA />
    </div>
  );
}
