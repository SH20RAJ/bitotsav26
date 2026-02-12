"use client";

import { FocusRail, FocusRailItem } from "@/components/ui/focus-rail";

const galleryItems: FocusRailItem[] = [
  {
    id: 1,
    title: "The Royal Stage",
    description: "Where the night comes alive with star-studded performances.",
    imageSrc: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cbbbe480-d397-451a-afac-3b830918d4be/anim=false,width=450,optimized=true/WVVR0GT1QCT4ZQXDJ4TCCR04K0.jpeg", // Concert
    meta: "Pro Nite",
  },
  {
    id: 2,
    title: "Rhythm of Culture",
    description: "A celebration of dance traditions from across the globe.",
    imageSrc: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2c2873c6-29ba-42e4-b1a3-8c88c4445d90/anim=false,width=450,optimized=true/00013-2783160955.jpeg", // Dance dramatic
    meta: "Dance Saga",
  },
  {
    id: 3,
    title: "Battle of Bands",
    description: "Electrifying riffs and thundering beats echoing through the night.",
    imageSrc: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a33b3663-ce84-425f-99f1-9a9f1a3bdc17/anim=false,width=450,optimized=true/ComfyUI_01278.jpeg", // Band dark
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
    imageSrc: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a162a38b-7099-49ba-9372-e05c76fe8f51/anim=false,width=450,optimized=true/00266-3278282696.jpeg", // Fashion
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
