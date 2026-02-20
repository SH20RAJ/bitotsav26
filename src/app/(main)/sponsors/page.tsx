import { Metadata } from "next";
import SponsorsContent from "./SponsorsContent";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Recognizing the corporate partners and sponsors who empower Bitotsav 2026.",
  alternates: {
    canonical: '/sponsors',
  },
  openGraph: {
    title: "Our Partners | Bitotsav 2026",
    description: "Recognizing the corporate partners and sponsors who empower Bitotsav 2026.",
    url: 'https://bitotsav.bitmesra.ac.in/sponsors',
  },
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SponsorsContent />
    </div>
  );
}
