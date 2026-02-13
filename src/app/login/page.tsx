import { Metadata } from "next";
import LoginContent from "./LoginContent";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login | Bitotsav 2026",
  description: "Access your digital pass for Bitotsav 2026.",
};

export default async function LoginPage() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/profile");
  }

  return <LoginContent />;
}
