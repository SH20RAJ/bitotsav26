import { Metadata } from "next";
import EventsList from "./EventsList";

export const metadata: Metadata = {
  title: "Events | Bitotsav 2026",
  description: "Explore the lineup of Flagship, Formal, and Informal events at Bitotsav 2026.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <EventsList />
    </div>
  );
}

