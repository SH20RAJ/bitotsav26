import { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "All Events",
  description: "Explore the schedule of flagship events, cultural competitions, and tech challenges at Bitotsav 2026.",
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: "All Events | Bitotsav 2026",
    description: "Explore the schedule of flagship events, cultural competitions, and tech challenges at Bitotsav 2026.",
    url: 'https://bitotsav.bitmesra.ac.in/events',
  },
};

export default function EventsPage() {
  return <EventsClient />;
}
