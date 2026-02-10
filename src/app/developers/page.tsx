import { Metadata } from "next";
import DevelopersContent from "./DevelopersContent";

export const metadata: Metadata = {
  title: "Developers | Bitotsav 2026",
  description: "Meet the brilliant minds who built the digital experience for Bitotsav 2026.",
};

export default function DevelopersPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <DevelopersContent />
    </div>
  );
}
