import Image from "next/image";

const STUDIOS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    alt: "Studio with armchair and warm lighting",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    alt: "Retro-style studio with yellow accent",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    alt: "Living room setup with red wall",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4b4a?w=600&q=80",
    alt: "Leather armchair and bookshelf",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
    alt: "Curved armchair with green curtains",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    alt: "Modern seating with red curtains",
  },
];

export function StudioGrid() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {STUDIOS.map((studio) => (
          <div
            key={studio.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-200 shadow-md"
          >
            <Image
              src={studio.src}
              alt={studio.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
