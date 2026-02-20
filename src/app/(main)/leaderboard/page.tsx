import { Metadata } from "next";
import LeaderboardContent from "./LeaderboardContent";

export const metadata: Metadata = {
  title: "Live Leaderboard",
  description: "Track the real-time rankings and competition standings of BIT Mesra's premier saga - Bitotsav 2026.",
  alternates: {
    canonical: '/leaderboard',
  },
  openGraph: {
    title: "Live Leaderboard | Bitotsav 2026",
    description: "Track the real-time rankings and competition standings of BIT Mesra's premier saga.",
    url: 'https://bitotsav.bitmesra.ac.in/leaderboard',
  },
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <LeaderboardContent />
    </div>
  );
}
