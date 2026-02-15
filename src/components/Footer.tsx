import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full relative z-10 text-white overflow-hidden">
        {/* Golden Top Border */}
        <div className="h-1 w-full bg-linear-to-r from-[#C5A059] via-[#FFD700] to-[#C5A059] shadow-[0_0_20px_#FFD700]" />
        
        <div className="bg-[#05020a] relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                           <Image src="/icons/home.png" alt="Bitotsav" fill className="object-contain" />
                        </div>
                        <div>
                             <h2 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-[#FDB931] to-[#C08F09]">BITOTSAV 2026</h2>
                             <p className="text-[#C5A059] text-sm tracking-widest uppercase opacity-80">The Endless Saga</p>
                        </div>
                    </div>
                    <p className="text-neutral-400 max-w-sm leading-relaxed text-base font-serif italic border-l-2 border-[#C5A059]/30 pl-4">
                    &quot;Experience the fusion of culture, technology, and art. Join us for 
                    BIT Mesra&apos;s largest annual festival where innovation meets tradition.&quot;
                    </p>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold font-heading text-[#E0D8C0] mb-6 uppercase tracking-wider relative inline-block">
                        Quick Exploration
                        <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#FFD700]" />
                    </h3>
                    <ul className="space-y-3 text-neutral-400">
                    <li><Link href="/events" className="hover:text-[#FFD700] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:bg-[#FFD700] transition-colors" /> Events</Link></li>
                    <li><Link href="/schedule" className="hover:text-[#FFD700] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:bg-[#FFD700] transition-colors" /> Schedule</Link></li>
                    <li><Link href="/sponsors" className="hover:text-[#FFD700] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:bg-[#FFD700] transition-colors" /> Sponsors</Link></li>
                    <li><Link href="/helpdesk" className="hover:text-[#FFD700] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:bg-[#FFD700] transition-colors" /> Helpdesk</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold font-heading text-[#E0D8C0] mb-6 uppercase tracking-wider relative inline-block">
                        Connect With Us
                        <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#FFD700]" />
                    </h3>
                    <div className="flex space-x-4">
                    {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                        <Link key={i} href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#FFD700] hover:text-[#2a0a3d] hover:border-[#FFD700] hover:shadow-[0_0_20px_#FFD700] transition-all duration-300 group transform hover:-translate-y-1">
                            <Icon className="w-5 h-5" />
                        </Link>
                    ))}
                    </div>
                </div>
                </div>
                
                <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
                <p>&copy; {new Date().getFullYear()} Bitotsav. All rights reserved.</p>
                <div className="flex items-center mt-4 md:mt-0 font-medium">
                    <span>Forged with</span>
                    <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500 animate-pulse" />
                    <span>by Team Bitotsav</span>
                </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
