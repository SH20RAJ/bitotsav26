import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Explore the legacy of Bitotsav - from its humble beginnings to becoming BIT Mesra's premier cultural saga.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "Our Story | Bitotsav 2026",
    description: "Explore the legacy of Bitotsav - BIT Mesra's premier cultural saga.",
    url: 'https://bitotsav.strivio.world/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <AboutContent />
    </div>
  );
}
