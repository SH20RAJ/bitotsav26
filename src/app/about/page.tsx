import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Bitotsav 2026",
  description: "Learn about the legacy, history, and impact of Bitotsav - BIT Mesra's premier festival.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <AboutContent />
    </div>
  );
}
