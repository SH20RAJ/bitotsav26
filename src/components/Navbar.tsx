"use client";

import React from "react";
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
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" 
    },
    { 
      id: "events", 
      name: "Events", 
      link: "/events", 
      icon: "https://www.svgrepo.com/show/530609/compass.svg"
    },
    { 
      id: "sponsors", 
      name: "Sponsors", 
      link: "/sponsors", 
      icon: "https://www.svgrepo.com/show/330513/githubsponsors.svg"
    },
    { 
      id: "about", 
      name: "About", 
      link: "/about", 
      icon: "https://www.svgrepo.com/show/530613/camera.svg" 
    },
    { 
      id: "help", 
      name: "Help", 
      link: "/helpdesk", 
      icon: "https://www.svgrepo.com/show/530614/map.svg"
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
