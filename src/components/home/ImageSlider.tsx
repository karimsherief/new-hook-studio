"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { CirclePlay, MoveLeft, MoveRight } from "lucide-react";

export default function HookStudioHero({
  scrollToSection,
}: {
  scrollToSection: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const locale = useLocale();
  const t = useTranslations();

  const slides = [
    {
      id: 1,
      badge: "PREMIUM CREATIVE STUDIO",
      title: t("ImageSlider.ProfessionalPodcastRecording.title"),
      desc: t("ImageSlider.ProfessionalPodcastRecording.description"),
      image: "/images/content-creation-service.webp",
      count: "01",
    },
    {
      id: 2,
      badge: "MODERN MEDIA PRODUCTION",
      title: t("ImageSlider.VideoProduction.title"),
      desc: t("ImageSlider.VideoProduction.description"),
      image: "/images/creative-direction.webp",
      count: "02",
    },
    {
      id: 3,
      badge: "HOOK STUDIO EXPERIENCE",
      title: t("ImageSlider.CreativeDirection.title"),
      desc: t("ImageSlider.CreativeDirection.description"),
      image: "/images/photography-sessions.webp",
      count: "03",
    },
    {
      id: 4,
      badge: "HOOK STUDIO EXPERIENCE",
      title: t("ImageSlider.SocialMediaContent.title"),
      desc: t("ImageSlider.SocialMediaContent.description"),
      image: "/images/video-editing.webp",
      count: "04",
    },
    {
      id: 5,
      badge: "HOOK STUDIO EXPERIENCE",
      title: t("ImageSlider.PhotographySessions.title"),
      desc: t("ImageSlider.PhotographySessions.description"),
      image: "/images/video-editing.webp",
      count: "05",
    },
    {
      id: 6,
      badge: "HOOK STUDIO EXPERIENCE",
      title: t("ImageSlider.VideoEditing.title"),
      desc: t("ImageSlider.VideoEditing.description"),
      image: "/images/video-editing.webp",
      count: "06",
    },
  ];

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
    <section className="relative overflow-hidden  text-white">
      {/* background بنفس روح لون اللوجو */}

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 lg:px-10">
        <div className="grid min-h-screen items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* left side */}
          <div className="max-w-xl">
            {/* <div
              key={`badge-${activeSlide.id}`}
              className="inline-flex animate-[fadeUp_.7s_ease] items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white/78 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#D8B277]" />
              {activeSlide.badge}
            </div> */}

            <article>
              <h1
                key={`title-${activeSlide.id}`}
                className="mb-3 animate-[fadeUp_.85s_ease] text-5xl font-bold leading-[0.96] tracking-tight md:text-7xl"
              >
                {activeSlide.title}
                {/* <span className="block "></span> */}
                {/* <span className="mt-2 block text-[#D8B277]">
                {activeSlide.titleAccent}
              </span> */}
              </h1>

              <p
                key={`desc-${activeSlide.id}`}
                className="animate-[fadeUp_1s_ease] text-xl leading-7 text-white/80"
              >
                {activeSlide.desc}
              </p>
            </article>

            {/* <p
              key={`sub-${activeSlide.id}`}
              className="mt-3 animate-[fadeUp_1.1s_ease] text-lg leading-8 text-[#A8D0D6]"
            >
              {activeSlide.subDesc}
            </p> */}

            <div
              key={`actions-${activeSlide.id}`}
              className="mt-5 flex animate-[fadeUp_1.2s_ease] flex-wrap gap-4"
            >
              <Link
                href="/book-studio"
                className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#166774_0%,#0E4B57_100%)] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(14,75,87,0.35)] transition hover:-translate-y-1"
              >
                <span>{t("BookNow")}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {locale === "ar" ? <MoveLeft /> : <MoveRight />}
                </span>
              </Link>

              <button
                onClick={scrollToSection}
                className="group inline-flex cursor-pointer  items-center gap-3 rounded-full border border-white/15 bg-transparent px-8 py-4 text-sm font-semibold text-white/90 transition hover:bg-white/5"
              >
                <CirclePlay />
                <span>{t("ExploreServices")}</span>
              </button>
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
                  {locale === "en" ? <MoveLeft /> : <MoveRight />}
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/85 backdrop-blur-md transition hover:bg-white/15"
                  aria-label="Next slide"
                >
                  {locale === "ar" ? <MoveLeft /> : <MoveRight />}
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
                          alt={slide.title}
                          fill
                          priority={i === 0}
                          unoptimized
                          className={`object-cover transition-transform duration-2200 ease-out ${
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
                </div>
              </div>
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
