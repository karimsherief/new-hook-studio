"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Studio = {
  id: string;
  path: string;
  src: string;
  alt: string;
};
type FileProps = {
  name: string;
  id?: string;
};
export function StudioGrid({
  selectedStudios,
  setSelectedStudios,
  selectedService,
}: {
  selectedStudios: string[];
  setSelectedStudios: (studios: string[]) => void;
  selectedService: string;
}) {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchStudios = async () => {
      setLoading(true);

      const folder = selectedService === "podcast" ? "podcast" : "reels";

      const { data, error } = await supabase.storage
        .from("booking-images")
        .list(folder);

      if (error) {
        console.error("Error fetching studios:", error);
        setStudios([]);
        setLoading(false);
        return;
      }

      const mapped: Studio[] = (data || []).map((file: FileProps) => {
        const { data: urlData } = supabase.storage
          .from("booking-images")
          .getPublicUrl(`${folder}/${file.name}`);

        return {
          id: file.id || file.name,
          path: `${folder}/${file.name}`,
          src: urlData.publicUrl,
          alt: file.name,
        };
      });

      setStudios(mapped);
      setLoading(false);
    };

    fetchStudios();
  }, [selectedService]);

  const toggleStudio = (path: string) => {
    if (selectedStudios.includes(path)) {
      setSelectedStudios(selectedStudios.filter((s) => s !== path));
    } else {
      setSelectedStudios([...selectedStudios, path]);
    }
  };
  console.log(studios);
  return (
    <div className="mt-12">
      <p className="mb-4 text-sm text-zinc-600">Select one or more studios</p>

      {/* Loading */}
      {loading ? (
        <div className="text-center text-sm text-zinc-500">
          Loading studios...
        </div>
      ) : (
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
      )}
    </div>
  );
}
