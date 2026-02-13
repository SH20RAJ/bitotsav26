import { Metadata } from "next";
import HelpdeskContent from "./HelpdeskContent";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Get assistance, join our community, or contact the Bitotsav 2026 team for support.",
  alternates: {
    canonical: '/helpdesk',
  },
  openGraph: {
    title: "Support Center | Bitotsav 2026",
    description: "Get assistance, join our community, or contact the Bitotsav 2026 team for support.",
    url: 'https://bitotsav.in/helpdesk',
  },
};

export default function HelpdeskPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <HelpdeskContent />
    </div>
  );
}
