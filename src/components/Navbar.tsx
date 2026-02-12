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
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Calendar_Icon_macOS_Big_Sur.png/1024px-Calendar_Icon_macOS_Big_Sur.png?20200624021703"
    },
    { 
      id: "sponsors", 
      name: "Sponsors", 
      link: "/sponsors", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Contacts_Icon_macOS_Big_Sur.png/1024px-Contacts_Icon_macOS_Big_Sur.png?20200810141934"
    },
    { 
      id: "about", 
      name: "About", 
      link: "/about", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Safari_Browser_Icon_macOS_Big_Sur.png/1024px-Safari_Browser_Icon_macOS_Big_Sur.png?20200623201438" 
    },
    { 
      id: "help", 
      name: "Help", 
      link: "/helpdesk", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/System_Preferences_Icon_macOS_Big_Sur.png/1024px-System_Preferences_Icon_macOS_Big_Sur.png?20200623201502"
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
