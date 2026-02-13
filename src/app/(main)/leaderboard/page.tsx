import { Metadata } from "next";
import LeaderboardContent from "./LeaderboardContent";

export const metadata: Metadata = {
  title: "Leaderboard | Bitotsav 2026",
  description: "Live rankings and competitive standings for Bitotsav 2026.",
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <LeaderboardContent />
    </div>
  );
}
