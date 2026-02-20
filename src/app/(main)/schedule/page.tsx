import { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Festival Schedule",
  description: "View the complete three-day timeline of Bitotsav 2026 events, from cultural nights to technical workshops.",
  alternates: {
    canonical: '/schedule',
  },
  openGraph: {
    title: "Festival Schedule | Bitotsav 2026",
    description: "View the complete three-day timeline of Bitotsav 2026 events.",
    url: 'https://bitotsav.bitmesra.ac.in/schedule',
  },
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
