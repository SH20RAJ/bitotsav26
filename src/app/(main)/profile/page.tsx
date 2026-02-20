import { Metadata } from "next";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "User Profile",
  description: "Access your digital pass and manage your Bitotsav 2026 identity.",
  alternates: {
    canonical: '/profile',
  },
  openGraph: {
    title: "User Profile | Bitotsav 2026",
    description: "Access your digital pass and manage your Bitotsav 2026 identity.",
    url: 'https://bitotsav.strivio.world/profile',
  },
};

export default function ProfilePage() {
  return <ProfileContent />;
}
