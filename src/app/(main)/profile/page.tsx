import { Metadata } from "next";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "Profile | Bitotsav 2026",
  description: "View and print your digital pass for Bitotsav 2026.",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
