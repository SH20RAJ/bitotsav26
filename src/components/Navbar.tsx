"use client";

import { useRouter, usePathname } from "next/navigation";
import MacOSDock from "@/components/ui/mac-os-dock";
import { useUser } from "@stackframe/stack";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUser();

  const navItems = [
    {
      id: "home",
      name: "Home",
      link: "/",
      icon: "/icons/home.png",
    },
    {
      id: "events",
      name: "Events",
      link: "/events",
      icon: "/icons/events.png",
    },
    {
      id: "schedule",
      name: "Schedule",
      link: "/schedule",
      icon: "/icons/schedule.png",
    },
    {
      id: "sponsors",
      name: "Sponsors",
      link: "/sponsors",
      icon: "/icons/sponsors.png",
    },
    {
      id: "leaderboard",
      name: "Leaderboard",
      link: "/leaderboard",
      icon: "/icons/leaderboard.png",
    },
    {
      id: "help",
      name: "Help",
      link: "/helpdesk",
      icon: "/icons/help.png",
    },
    ...(user
      ? [
          {
            id: "profile",
            name: "Profile",
            link: "/profile",
            icon: "/icons/profile.png",
          },
        ]
      : [
          {
            id: "login",
            name: "Login",
            link: "/login",
            icon: "/icons/login.png",
          },
        ]),
  ];

  const handleAppClick = (appId: string) => {
    const item = navItems.find((app) => app.id === appId);
    if (item) {
      router.push(item.link);
    }
  };

  const activeApp = navItems.find((item) => item.link === pathname)?.id;

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
