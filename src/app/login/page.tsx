import { Metadata } from "next";
import LoginContent from "./LoginContent";

export const metadata: Metadata = {
  title: "Login | Bitotsav 2026",
  description: "Access your digital pass for Bitotsav 2026.",
};

export default function LoginPage() {
  return <LoginContent />;
}
