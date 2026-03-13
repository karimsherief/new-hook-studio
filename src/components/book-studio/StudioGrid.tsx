"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const REELS_STUDIOS = [
  {
    id: 1,
    src: "/images/reels/1.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 2,
    src: "/images/reels/2.webp",
    fileName: "2.webp",
    alt: "Studio 1",
  },
  {
    id: 3,
    src: "/images/reels/3.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 4,
    src: "/images/reels/4.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 5,
    src: "/images/reels/5.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 6,
    src: "/images/reels/6.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 7,
    src: "/images/reels/7.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 8,
    src: "/images/reels/8.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 9,
    src: "/images/reels/9.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 10,
    src: "/images/reels/10.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 11,
    src: "/images/reels/11.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 12,
    src: "/images/reels/12.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 13,
    src: "/images/reels/13.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 14,
    src: "/images/reels/14.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 15,
    src: "/images/reels/15.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 16,
    src: "/images/reels/16.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 17,
    src: "/images/reels/17.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 18,
    src: "/images/reels/18.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 19,
    src: "/images/reels/19.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 20,
    src: "/images/reels/20.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 21,
    src: "/images/reels/21.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 22,
    src: "/images/reels/22.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 23,
    src: "/images/reels/23.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 24,
    src: "/images/reels/24.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 25,
    src: "/images/reels/25.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 26,
    src: "/images/reels/26.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 27,
    src: "/images/reels/27.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 28,
    src: "/images/reels/28.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 29,
    src: "/images/reels/29.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 30,
    src: "/images/reels/30.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 31,
    src: "/images/reels/31.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 32,
    src: "/images/reels/32.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 33,
    src: "/images/reels/33.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 34,
    src: "/images/reels/34.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 35,
    src: "/images/reels/35.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
];

const PODCAST_STUDIOS = [
  {
    id: 1,
    src: "/images/podcast/1.webp",
    fileName: "1.webp",
    alt: "Studio 1",
  },
  {
    id: 2,
    src: "/images/podcast/2.webp",
    fileName: "2.webp",
    alt: "Studio 1",
  },
  {
    id: 3,
    src: "/images/podcast/3.webp",
    fileName: "3.webp",
    alt: "Studio 1",
  },
  {
    id: 4,
    src: "/images/podcast/4.webp",
    fileName: "4.webp",
    alt: "Studio 1",
  },
  {
    id: 5,
    src: "/images/podcast/5.webp",
    fileName: "5.webp",
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

  const toggleStudio = (fileName: string) => {
    if (selectedStudios.includes(fileName)) {
      setSelectedStudios(selectedStudios.filter((s) => s !== fileName));
    } else {
      setSelectedStudios([...selectedStudios, fileName]);
    }
  };

  return (
    <div className="mt-12">
      <p className="mb-4 text-sm text-zinc-600">Select one or more studios</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {studios.map((studio) => {
          const active = selectedStudios.includes(studio.fileName);

          return (
            <div
              key={studio.id}
              onClick={() => toggleStudio(studio.fileName)}
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
