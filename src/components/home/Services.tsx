"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  "Professional podcast recording",
  "Video production",
  "Social media content creation",
  "Photography sessions",
];

import { useEffect, useRef, useState } from "react";

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F8F6F2] py-8 transition-all duration-700 ease-out"
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
        {/* Section Heading */}
        <div className="mb-4 max-w-2xl">
          <span className="inline-flex rounded-full border border-[#0F3E47]/10 bg-white px-4 py-1.5 text-sm font-semibold text-[#0F3E47] shadow-sm">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F3E47] md:text-5xl">
            Professional media services designed for modern brands
          </h2>

          <p className="mt-4 text-base leading-8 text-[#0F3E47]/75 md:text-lg">
            We help creators and businesses produce premium digital content with
            the right tools, creative direction, and studio environment.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Image Card */}
          <div className="group relative min-h-[340px] overflow-hidden rounded-[28px] shadow-[0_14px_45px_rgba(15,62,71,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
              alt="Modern studio workspace"
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3E47]/65 via-[#0F3E47]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-md rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F4E2C3]">
                  Creative Studio
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                  A premium setup for high-quality content
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/80 md:text-base">
                  A modern production space built for podcasts, brand videos,
                  photography, and social media storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="rounded-[28px] border border-[#0F3E47]/8 bg-white p-8 shadow-[0_12px_40px_rgba(15,62,71,0.08)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
              What We Offer
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#0F3E47] md:text-3xl">
              Services that help your content look polished and professional
            </h3>

            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-[#0F3E47]/80"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAD8B7] text-sm font-bold text-[#0F3E47]">
                    ✓
                  </span>
                  <span className="text-base leading-7 md:text-lg">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-8 text-[#0F3E47]/75">
              Our studio includes professional lighting, sound equipment, and
              creative sets to help bring your ideas to life with a refined,
              modern production experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2 text-sm font-medium text-[#0F3E47]">
                Podcast Setup
              </span>
              <span className="rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2 text-sm font-medium text-[#0F3E47]">
                Video Editing
              </span>
              <span className="rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2 text-sm font-medium text-[#0F3E47]">
                Brand Content
              </span>
            </div>
          </div>
        </div>

        {/* Video Preview / Highlight Block */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0F3E47] p-8 shadow-[0_14px_45px_rgba(15,62,71,0.12)] md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,216,183,0.16),transparent_30%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EAD8B7]">
                  Studio Experience
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white md:text-4xl">
                  From concept to final production, everything is crafted with
                  clarity and style
                </h3>

                <p className="mt-4 text-base leading-8 text-white/75">
                  We create a seamless production workflow so your content feels
                  clean, confident, and visually strong across every platform.
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-3xl text-white backdrop-blur-md">
                🎥
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="rounded-[28px] border border-[#0F3E47]/8 bg-white p-8 text-center shadow-[0_12px_40px_rgba(15,62,71,0.08)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
              Let’s Work Together
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#0F3E47]">
              Ready to create your next media project?
            </h3>

            <p className="mt-4 text-base leading-8 text-[#0F3E47]/75">
              Book your service and start building premium digital content for
              your brand, audience, or business.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0F3E47] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0c333a]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}