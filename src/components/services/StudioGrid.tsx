"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const REELS_STUDIOS = [
  { id: 1, src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80", alt: "Studio 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", alt: "Studio 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80", alt: "Studio 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4b4a?w=600&q=80", alt: "Studio 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80", alt: "Studio 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", alt: "Studio 6" },
];

const PODCAST_STUDIOS = [
  { id: 101, src: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=600&q=80", alt: "Podcast 1" },
  { id: 102, src: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&q=80", alt: "Podcast 2" },
  { id: 103, src: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=600&q=80", alt: "Podcast 3" },
  { id: 104, src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80", alt: "Podcast 4" },
  { id: 105, src: "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=600&q=80", alt: "Podcast 5" },
  { id: 106, src: "https://images.unsplash.com/photo-1603574670812-d24560880210?w=600&q=80", alt: "Podcast 6" },
  { id: 107, src: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&q=80", alt: "Podcast 7" },
  { id: 108, src: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=600&q=80", alt: "Podcast 8" },
  { id: 109, src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80", alt: "Podcast 9" },
  { id: 110, src: "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=600&q=80", alt: "Podcast 10" },
  { id: 111, src: "https://images.unsplash.com/photo-1603574670812-d24560880210?w=600&q=80", alt: "Podcast 11" },
  { id: 112, src: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=600&q=80", alt: "Podcast 12" },
];

export function StudioGrid({
  service,
  selectedStudios,
  setSelectedStudios,
}: {
  service: string;
  selectedStudios: number[];
  setSelectedStudios: (studios: number[]) => void;
}) {
  const studios = service === "podcast" ? PODCAST_STUDIOS : REELS_STUDIOS;

  const toggleStudio = (id: number) => {
    if (selectedStudios.includes(id)) {
      setSelectedStudios(selectedStudios.filter((s) => s !== id));
    } else {
      setSelectedStudios([...selectedStudios, id]);
    }
  };

  return (
    <div className="mt-12">
      <p className="mb-4 text-sm text-zinc-600">
        Select one or more studios
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {studios.map((studio) => {
          const active = selectedStudios.includes(studio.id);

          return (
            <div
              key={studio.id}
              onClick={() => toggleStudio(studio.id)}
              className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300
              ${active
                ? "ring-2 ring-[#033C45] shadow-lg scale-[1.02]"
                : "hover:shadow-md hover:scale-[1.02]"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={studio.src}
                  alt={studio.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Selected Badge */}
              {active && (
                <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#033C45] text-white shadow">
                  <Check size={16} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}