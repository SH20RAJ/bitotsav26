import React, { Suspense } from "react";
import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { stackServerApp } from "../stack/server";
import { cn } from "@/lib/utils";

const cinzel = localFont({
  src: "../../public/fonts/Cinzel-latin-normal-400900.woff2",
  variable: "--font-cinzel",
  display: "swap",
  weight: "400 900",
});

const playfair = localFont({
  src: "../../public/fonts/PlayfairDisplay-latin-normal-400900.woff2",
  variable: "--font-playfair",
  display: "swap",
  weight: "400 900",
});

const lato = localFont({
  src: [
    { path: "../../public/fonts/Lato-latin-normal-100.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/Lato-latin-normal-300.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Lato-latin-normal-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Lato-latin-normal-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Lato-latin-normal-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bitotsav.strivio.world'),
  title: {
    default: "Bitotsav 2026 | Gaatha",
    template: "%s | Bitotsav 2026"
  },
  description: "The Endless Saga - BIT Mesra's Premier Cultural, Sports & Technical Festival",
  keywords: ["Bitotsav", "2026", "Gaatha", "BIT Mesra", "Cultural Fest", "Technical Fest", "Sports Fest", "The Endless Saga"],
  authors: [{ name: "Bitotsav Team" }],
  creator: "Bitotsav Team",
  publisher: "BIT Mesra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bitotsav 2026 | Gaatha",
    description: "The Endless Saga - BIT Mesra's Premier Cultural, Sports & Technical Festival",
    url: 'https://bitotsav.strivio.world',
    siteName: 'Bitotsav 2026',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-main.png',
        width: 1200,
        height: 630,
        alt: 'Bitotsav 2026 | Gaatha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bitotsav 2026 | Gaatha",
    description: "The Endless Saga - BIT Mesra's Premier Cultural, Sports & Technical Festival",
    creator: '@bitotsav',
    images: ['/og-main.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

const customTheme = {
  dark: {
    primary: "#ffffff",
    background: "#000000",
    surface: "#0a0a0a",
    border: "#1a1a1a",
  },
  radius: "0px",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          cinzel.variable,
          playfair.variable,
          lato.variable,
          "antialiased bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-mono"
        )}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme theme={customTheme}>
          

            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
