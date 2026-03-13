"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    title: "Creative Media Production",
    subtitle:
      "Cinematic visuals, premium storytelling, and modern production for brands that want to stand out.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    title: "Professional Studio Experience",
    subtitle:
      "From planning to final delivery, every detail is designed with clarity, emotion, and visual impact.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    title: "Visual Content That Builds Brands",
    subtitle:
      "Photography, video, editing, and creative direction for a refined digital presence.",
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      <div className="relative h-[78vh] min-h-130 w-full overflow-hidden">
        {slides.map((slide, i) => {
          const active = i === index;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                active
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={i === 0}
                unoptimized
                className={`object-cover transition-transform duration-3000 ease-out ${
                  active ? "scale-100" : "scale-110"
                }`}
              />

              <div className="absolute inset-0 bg-linear-to-r from-[#0F3E47]/85 via-[#0F3E47]/50 to-black/30" />

              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                  <div className="max-w-2xl text-white">
                    <span
                      className={`mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md transition-all duration-700 ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      Hook Studio
                    </span>

                    <h1
                      className={`mt-4 text-4xl font-bold leading-tight md:text-6xl transition-all duration-700 delay-100 ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className={`mt-4 max-w-xl text-base leading-7 text-white/85 md:text-lg transition-all duration-700 delay-200 ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    <div
                      className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      <div
                        className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                          active
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <Link
                          href="/book-studio"
                          className="group inline-flex items-center gap-3 rounded-full bg-[#EAD8B7] px-7 py-3.5 text-sm font-semibold text-[#0F3E47] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                        >
                          <span>Book Service</span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F3E47] text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`relative h-3 rounded-full transition-all duration-300 overflow-hidden ${
                i === index ? "w-10 bg-white/30" : "w-3 bg-white/40"
              }`}
            >
              {i === index && (
                <span className="absolute inset-0 rounded-full bg-[#EAD8B7] animate-[progress_5s_linear]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
