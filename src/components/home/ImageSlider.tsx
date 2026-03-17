"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    badge: "PREMIUM CREATIVE STUDIO",
    titleTop: "We create content",
    titleAccent: "that stands out",
    desc: "Join modern brands and creators who trust Hook Studio to shape polished visuals and refined production experiences.",
    subDesc:
      "A studio environment designed to make every frame feel premium, intentional, and memorable.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    imageLabel: "VISUAL CONTENT",
    count: "01",
  },
  {
    id: 2,
    badge: "MODERN MEDIA PRODUCTION",
    titleTop: "Premium setups for",
    titleAccent: "ambitious brands",
    desc: "We build visual experiences that help your content look sharper, more professional, and aligned with your brand identity.",
    subDesc:
      "From studio shoots to branded campaigns, every detail is handled with clarity and style.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    imageLabel: "BRAND SHOOTS",
    count: "02",
  },
  {
    id: 3,
    badge: "HOOK STUDIO EXPERIENCE",
    titleTop: "Create stronger visuals",
    titleAccent: "with confidence",
    desc: "Our production workflow is crafted for podcasts, photography, social content, and cinematic storytelling that leaves a lasting impression.",
    subDesc:
      "A refined content space where quality, creativity, and modern aesthetics come together.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    imageLabel: "STUDIO EXPERIENCE",
    count: "03",
  },
];

export default function HookStudioHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <section className="relative overflow-hidden bg-[#0B3F49] text-white">
      {/* background بنفس روح لون اللوجو */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(22,103,116,0.24),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(6,26,31,0.22),transparent_26%),linear-gradient(90deg,#072A31_0%,#0B3F49_45%,#0E4B57_100%)]" />
      <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* glows */}
      <div className="absolute left-[45%] top-[58%] h-24 w-24 rounded-full bg-[#166774]/25 blur-2xl" />
      <div className="absolute right-[7%] top-[44%] h-24 w-24 rounded-full bg-[#1D6C79]/25 blur-xl" />
      <div className="absolute bottom-[10%] left-[47%] h-28 w-28 rounded-full bg-[#114E59]/25 blur-xl" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 lg:px-10">
        <div className="grid min-h-screen items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* left side */}
          <div className="max-w-xl">
            <div
              key={`badge-${activeSlide.id}`}
              className="inline-flex animate-[fadeUp_.7s_ease] items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white/78 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#D8B277]" />
              {activeSlide.badge}
            </div>

            <h1
              key={`title-${activeSlide.id}`}
              className="mt-6 animate-[fadeUp_.85s_ease] text-5xl font-bold leading-[0.96] tracking-tight md:text-7xl"
            >
              <span className="block">{activeSlide.titleTop}</span>
              <span className="mt-2 block text-[#D8B277]">
                {activeSlide.titleAccent}
              </span>
            </h1>

            <p
              key={`desc-${activeSlide.id}`}
              className="mt-8 animate-[fadeUp_1s_ease] text-xl leading-9 text-white/80"
            >
              {activeSlide.desc}
            </p>

            <p
              key={`sub-${activeSlide.id}`}
              className="mt-3 animate-[fadeUp_1.1s_ease] text-lg leading-8 text-[#A8D0D6]"
            >
              {activeSlide.subDesc}
            </p>

            <div
              key={`actions-${activeSlide.id}`}
              className="mt-10 flex animate-[fadeUp_1.2s_ease] flex-wrap gap-4"
            >
              <Link
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#166774_0%,#0E4B57_100%)] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(14,75,87,0.35)] transition hover:-translate-y-1"
              >
                <span>Book Studio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-transparent px-8 py-4 text-sm font-semibold text-white/90 transition hover:bg-white/5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 text-[10px]">
                  ▶
                </span>
                <span>Explore Services</span>
              </Link>
            </div>

            {/* slider controls */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-[#D8B277]" : "w-2.5 bg-white/35"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/85 backdrop-blur-md transition hover:bg-white/15"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/85 backdrop-blur-md transition hover:bg-white/15"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="relative">
            <div className="relative ml-auto w-full max-w-[620px]">
              <div className="absolute -left-8 bottom-[-36px] h-24 w-24 rounded-full bg-[#1B6674]/30 blur-md" />
              <div className="absolute -right-4 top-20 h-18 w-18 rounded-full bg-[#2A7280]/25 blur-sm" />

              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="relative h-[520px] overflow-hidden rounded-[24px]">
                  {slides.map((slide, i) => {
                    const isActive = i === current;

                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-out ${
                          isActive
                            ? "z-10 opacity-100"
                            : "pointer-events-none z-0 opacity-0"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.titleTop}
                          fill
                          priority={i === 0}
                          unoptimized
                          className={`object-cover transition-transform duration-[2200ms] ease-out ${
                            isActive ? "scale-100" : "scale-110"
                          }`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,42,49,0.06)_0%,rgba(7,42,49,0.20)_38%,rgba(7,42,49,0.72)_100%)]" />
                      </div>
                    );
                  })}

                  <div className="absolute bottom-8 right-8 rounded-full border border-white/10 bg-[#0D3A43]/78 px-4 py-3 text-lg font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur-md">
                    {activeSlide.count}
                  </div>

                  <div className="absolute bottom-10 left-10">
                    <div className="text-3xl font-bold leading-none text-white/92">
                      {activeSlide.imageLabel.split(" ")[0]}
                    </div>
                    <div className="mt-1 text-2xl leading-none text-white/58">
                      {activeSlide.imageLabel.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                </div>
              </div>

              {/* top floating stat */}
              <div className="absolute right-[-8px] top-[-18px] rounded-[18px] border border-white/12 bg-white/10 px-5 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#166774_0%,#0E4B57_100%)] text-sm font-bold text-white">
                    ↗
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-white/70">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* extra glow circle */}
              <div className="absolute right-[-60px] top-[44%] h-18 w-18 rounded-full bg-[#2A7280]/30" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}