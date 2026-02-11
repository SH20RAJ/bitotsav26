import { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events | Bitotsav '26",
  description: "Explore the schedule of flagship events, competitions, and cultural nights at Bitotsav.",
};

export default function EventsPage() {
  return <EventsClient />;
}
