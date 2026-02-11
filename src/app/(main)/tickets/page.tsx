import { Metadata } from "next";
import TicketsClient from "./TicketsClient";

export const metadata: Metadata = {
  title: "Tickets & Passes | Bitotsav '26",
  description: "Secure your access to Bitotsav '26. Choose from Day Passes, Fest Passes, and exclusive Royal Passes.",
};

export default function TicketsPage() {
  return <TicketsClient />;
}
