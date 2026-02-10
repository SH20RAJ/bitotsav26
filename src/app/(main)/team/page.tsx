import { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team | Bitotsav 2026",
  description: "Meet the organizers and team members behind Bitotsav 2026.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <TeamContent />
    </div>
  );
}
