import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Bitotsav 2026 | Gaatha",
  description: "The Endless Saga - BIT Mesra's Premier Cultural, Sports & Technical Festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${playfair.variable} ${lato.variable} antialiased bg-[#050A1F] text-[#E0D8C0] selection:bg-[#800020]/30 selection:text-white overflow-x-hidden`}
      >
        {/* Texture Overlay */}
        <div className="fixed inset-0 -z-10 h-full w-full opacity-30 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
        
        {/* Gradient Mesh */}
        <div className="fixed inset-0 -z-20 h-full w-full bg-[#050A1F] [background:radial-gradient(125%_125%_at_50%_10%,#1A0505_40%,#050A1F_100%)]"></div>

        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

