import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/10 bg-black/50 backdrop-blur-sm mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12">
                   <Image src="/icons/home.png" alt="Bitotsav" fill className="object-contain" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#E5C079]">Bitotsav 2026</h2>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-sm">
              Experience the fusion of culture, technology, and art. Join us for 
              BIT Mesra&apos;s largest annual festival where innovation meets tradition.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/events" className="hover:text-violet-400 transition-colors">Events</Link></li>
              <li><Link href="/schedule" className="hover:text-violet-400 transition-colors">Schedule</Link></li>
              <li><Link href="/sponsors" className="hover:text-violet-400 transition-colors">Sponsors</Link></li>
              <li><Link href="/helpdesk" className="hover:text-violet-400 transition-colors">Helpdesk</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 group">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300 group">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bitotsav. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500 animate-pulse" />
            <span>by Team Bitotsav</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
