import React from "react";
import { events } from "@/lib/data/events";
import { notFound } from "next/navigation";
import EventDetails from "./EventDetails";

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return <EventDetails event={event} />;
}
