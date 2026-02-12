import React from "react";
import { events } from "@/lib/data/events";
import { notFound } from "next/navigation";
import EventDetails from "./EventDetails";

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return <EventDetails event={event} />;
}
