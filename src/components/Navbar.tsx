"use client";

import { useRouter, usePathname } from "next/navigation";
import MacOSDock from "@/components/ui/mac-os-dock";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { 
      id: "home", 
      name: "Home", 
      link: "/", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Home&backgroundColor=0a0a0a" 
    },
    { 
      id: "events", 
      name: "Events", 
      link: "/events", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Events&backgroundColor=0a0a0a"
    },
    { 
      id: "schedule", 
      name: "Schedule", 
      link: "/schedule", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Schedule&backgroundColor=0a0a0a"
    },
    { 
      id: "sponsors", 
      name: "Sponsors", 
      link: "/sponsors", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Sponsors&backgroundColor=0a0a0a"
    },
    { 
      id: "about", 
      name: "About", 
      link: "/about", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=About&backgroundColor=0a0a0a" 
    },
    { 
      id: "leaderboard", 
      name: "Leaderboard", 
      link: "/leaderboard", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Leaderboard&backgroundColor=0a0a0a"
    },
    { 
      id: "help", 
      name: "Help", 
      link: "/helpdesk", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Help&backgroundColor=0a0a0a"
    },
    { 
      id: "login", 
      name: "Login", 
      link: "/login", 
      icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Login&backgroundColor=0a0a0a"
    },
  ];

  const handleAppClick = (appId: string) => {
    const item = navItems.find((app) => app.id === appId);
    if (item) {
      router.push(item.link);
    }
  };

  const activeApp = navItems.find(item => item.link === pathname)?.id;

  return (
    <div className="fixed bottom-6 inset-x-0 mx-auto z-50 flex justify-center pointer-events-none">
       <div className="pointer-events-auto">
          <MacOSDock 
            apps={navItems} 
            onAppClick={handleAppClick} 
            openApps={activeApp ? [activeApp] : []}
          />
       </div>
    </div>
  );
}
