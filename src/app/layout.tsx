import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
        className={`${cinzel.variable} ${playfair.variable} ${lato.variable} antialiased bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-mono`}
      >
        {/* Tech Overlay */}
        <div className="fixed inset-0 -z-10 h-full w-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        
        {/* Grid Background */}
        <div className="fixed inset-0 -z-20 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

