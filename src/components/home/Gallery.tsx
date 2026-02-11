"use client";

import { FocusRail, FocusRailItem } from "@/components/ui/focus-rail";

const galleryItems: FocusRailItem[] = [
  {
    id: 1,
    title: "The Royal Stage",
    description: "Where the night comes alive with star-studded performances.",
    imageSrc: "https://images.unsplash.com/photo-1470229722913-7ea549c1c5c4?q=80&w=2074&auto=format&fit=crop", // Concert
    meta: "Pro Nite",
  },
  {
    id: 2,
    title: "Rhythm of Culture",
    description: "A celebration of dance traditions from across the globe.",
    imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop", // Dance dramatic
    meta: "Dance Saga",
  },
  {
    id: 3,
    title: "Battle of Bands",
    description: "Electrifying riffs and thundering beats echoing through the night.",
    imageSrc: "https://images.unsplash.com/photo-1511735111819-9a3f77ebd90d?q=80&w=2070&auto=format&fit=crop", // Band dark
    meta: "Band Nite",
  },
  {
    id: 4,
    title: "Dramatic Arts",
    description: "Stories unfolding on stage, capturing hearts and minds.",
    imageSrc: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=2070&auto=format&fit=crop", // Drama
    meta: "Natsamrat",
  },
   {
    id: 5,
    title: "Fashion & Flare",
    description: "Walking the ramp with elegance and panache.",
    imageSrc: "https://images.unsplash.com/photo-1509631179647-0177f153519b?q=80&w=1978&auto=format&fit=crop", // Fashion
    meta: "Saptak",
  },
];

export function Gallery() {
  return (
    <section className="py-0 relative z-20 -mt-20">
        <FocusRail items={galleryItems} />
    </section>
  );
}
