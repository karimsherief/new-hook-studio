"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const REELS_STUDIOS = [
  {
    id: 1,
    src: "/images/reels/1.webp",
    path: "reels/1.webp",
    alt: "Studio 1",
  },
  {
    id: 2,
    src: "/images/reels/2.webp",
    path: "reels/2.webp",
    alt: "Studio 2",
  },
  {
    id: 3,
    src: "/images/reels/3.webp",
    path: "reels/3.webp",
    alt: "Studio 3",
  },
  {
    id: 4,
    src: "/images/reels/4.webp",
    path: "reels/4.webp",
    alt: "Studio 4",
  },
  {
    id: 5,
    src: "/images/reels/5.webp",
    path: "reels/5.webp",
    alt: "Studio 5",
  },
  {
    id: 6,
    src: "/images/reels/6.webp",
    path: "reels/6.webp",
    alt: "Studio 6",
  },
  {
    id: 7,
    src: "/images/reels/7.webp",
    path: "reels/7.webp",
    alt: "Studio 7",
  },
  {
    id: 8,
    src: "/images/reels/8.webp",
    path: "reels/8.webp",
    alt: "Studio 8",
  },
  {
    id: 9,
    src: "/images/reels/9.webp",
    path: "reels/9.webp",
    alt: "Studio 9",
  },
  {
    id: 10,
    src: "/images/reels/10.webp",
    path: "reels/10.webp",
    alt: "Studio 10",
  },
  {
    id: 11,
    src: "/images/reels/11.webp",
    path: "reels/11.webp",
    alt: "Studio 11",
  },
  {
    id: 12,
    src: "/images/reels/12.webp",
    path: "reels/12.webp",
    alt: "Studio 13",
  },
  {
    id: 13,
    src: "/images/reels/13.webp",
    path: "reels/13.webp",
    alt: "Studio 13",
  },
  {
    id: 14,
    src: "/images/reels/14.webp",
    path: "reels/14.webp",
    alt: "Studio 14",
  },
  {
    id: 15,
    src: "/images/reels/15.webp",
    path: "reels/15.webp",
    alt: "Studio 15",
  },
  {
    id: 16,
    src: "/images/reels/16.webp",
    path: "reels/16.webp",
    alt: "Studio 16",
  },
  {
    id: 17,
    src: "/images/reels/17.webp",
    path: "reels/17.webp",
    alt: "Studio 17",
  },
  {
    id: 18,
    src: "/images/reels/18.webp",
    path: "reels/18.webp",
    alt: "Studio 18",
  },
  {
    id: 19,
    src: "/images/reels/19.webp",
    path: "reels/19.webp",
    alt: "Studio 19",
  },
  {
    id: 20,
    src: "/images/reels/20.webp",
    path: "reels/20.webp",
    alt: "Studio 20",
  },
  {
    id: 21,
    src: "/images/reels/21.webp",
    path: "reels/21.webp",
    alt: "Studio 21",
  },
  {
    id: 22,
    src: "/images/reels/22.webp",
    path: "reels/22.webp",
    alt: "Studio 22",
  },
  {
    id: 23,
    src: "/images/reels/23.webp",
    path: "reels/23.webp",
    alt: "Studio 23",
  },
  {
    id: 24,
    src: "/images/reels/24.webp",
    path: "reels/24.webp",
    alt: "Studio 24",
  },
  {
    id: 25,
    src: "/images/reels/25.webp",
    path: "reels/25.webp",
    alt: "Studio 25",
  },
  {
    id: 26,
    src: "/images/reels/26.webp",
    path: "reels/26.webp",
    alt: "Studio 26",
  },
  {
    id: 27,
    src: "/images/reels/27.webp",
    path: "reels/27.webp",
    alt: "Studio 1",
  },
  {
    id: 28,
    src: "/images/reels/28.webp",
    path: "reels/28.webp",
    alt: "Studio 28",
  },
  {
    id: 29,
    src: "/images/reels/29.webp",
    path: "reels/29.webp",
    alt: "Studio 29",
  },
  {
    id: 30,
    src: "/images/reels/30.webp",
    path: "reels/30.webp",
    alt: "Studio 30",
  },
  {
    id: 31,
    src: "/images/reels/31.webp",
    path: "reels/31.webp",
    alt: "Studio 31",
  },
  {
    id: 32,
    src: "/images/reels/32.webp",
    path: "reels/32.webp",
    alt: "Studio 32",
  },
  {
    id: 33,
    src: "/images/reels/33.webp",
    path: "reels/33.webp",
    alt: "Studio 33",
  },
  {
    id: 34,
    src: "/images/reels/34.webp",
    path: "reels/34.webp",
    alt: "Studio 34",
  },
  {
    id: 35,
    src: "/images/reels/35.webp",
    path: "reels/35.webp",
    alt: "Studio 35",
  },
];

const PODCAST_STUDIOS = [
  {
    id: 1,
    src: "/images/podcast/1.webp",
    path: "podcast/1.webp",
    alt: "Studio 1",
  },
  {
    id: 2,
    src: "/images/podcast/2.webp",
    path: "podcast/2.webp",
    alt: "Studio 2",
  },
  {
    id: 3,
    src: "/images/podcast/3.webp",
    path: "podcast/3.webp",
    alt: "Studio 3",
  },
  {
    id: 4,
    src: "/images/podcast/4.webp",
    path: "podcast/4.webp",
    alt: "Studio 4",
  },
  {
    id: 5,
    src: "/images/podcast/5.webp",
    path: "podcast/5.webp",
    alt: "Studio 1",
  },
];

export function StudioGrid({
  selectedStudios,
  setSelectedStudios,
  selectedService,
}: {
  selectedStudios: string[];
  setSelectedStudios: (studios: string[]) => void;
  selectedService: string;
}) {
  const studios =
    selectedService === "podcast" ? PODCAST_STUDIOS : REELS_STUDIOS;

  const toggleStudio = (path: string) => {
    if (selectedStudios.includes(path)) {
      setSelectedStudios(selectedStudios.filter((s) => s !== path));
    } else {
      setSelectedStudios([...selectedStudios, path]);
    }
  };

  return (
    <div className="mt-12">
      <p className="mb-4 text-sm text-zinc-600">Select one or more studios</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {studios.map((studio) => {
          const active = selectedStudios.includes(studio.path);

          return (
            <div
              key={studio.id}
              onClick={() => toggleStudio(studio.path)}
              className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300
              ${
                active
                  ? "ring-2 ring-[#033C45] shadow-lg scale-[1.02]"
                  : "hover:shadow-md hover:scale-[1.02]"
              }`}
            >
              <div className="relative aspect-4/3">
                <Image
                  src={studio.src}
                  alt={studio.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  
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
