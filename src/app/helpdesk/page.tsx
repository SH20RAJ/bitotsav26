import { Metadata } from "next";
import HelpdeskContent from "./HelpdeskContent";

export const metadata: Metadata = {
  title: "Helpdesk | Bitotsav 2026",
  description: "Get assistance, join our community, or contact the team for support.",
};

export default function HelpdeskPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <HelpdeskContent />
    </div>
  );
}
