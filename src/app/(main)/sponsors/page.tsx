import { Metadata } from "next";
import SponsorsContent from "./SponsorsContent";

export const metadata: Metadata = {
  title: "Sponsors | Bitotsav 2026",
  description: "Our partners and sponsors who make Bitotsav 2026 possible.",
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SponsorsContent />
    </div>
  );
}
