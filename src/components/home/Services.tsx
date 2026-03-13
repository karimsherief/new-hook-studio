"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Professional podcast recording",
  "Video production",
  "Social media content creation",
  "Photography sessions",
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-20">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-30 top-10 h-65 w-65 rounded-full bg-[#EAD8B7]/20 blur-3xl" />
        <div className="absolute bottom-0 -right-25 h-70 w-70 rounded-full bg-[#0F3E47]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* heading */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 200,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: "backOut",
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#0F3E47]/10 bg-white px-4 py-1.5 text-sm font-semibold text-[#0F3E47] shadow-sm">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0F3E47] md:text-5xl md:leading-[1.08]">
            Premium media services built for modern creators and brands
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#0F3E47]/72 md:text-lg">
            We create refined digital content through a professional studio
            experience, creative direction, and production tools that help your
            brand look polished, modern, and memorable.
          </p>
        </motion.div>

        {/* first row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* image card */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="group relative min-h-95 overflow-hidden rounded-4xl border border-white/40 shadow-[0_18px_50px_rgba(15,62,71,0.12)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
              alt="Modern studio workspace"
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0F3E47]/78 via-[#0F3E47]/20 to-transparent" />

            <div className="absolute left-0 right-0 top-0 p-6 md:p-8">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
                Hook Studio
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-lg rounded-3xl border border-white/20 bg-white/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4E2C3]">
                  Creative Studio
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                  A premium environment for standout visual content
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                  Designed for podcasts, branded videos, photography, and social
                  media production with a modern, professional feel.
                </p>
              </div>
            </div>
          </motion.div>

          {/* content card */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-4xl border border-[#0F3E47]/8 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,62,71,0.08)] backdrop-blur-sm md:p-10 "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A66B]">
              What We Offer
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#0F3E47] md:text-3xl">
              Services crafted to make your content look polished and
              professional
            </h3>

            <ul className="mt-8 grid gap-4">
              {services.map((service, idx) => (
                <motion.li
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -80 * idx,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8 * idx,
                        delay: 0.25 * idx,
                        ease: "backInOut",
                      },
                    },
                    hover: {
                      scale: 1.1,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  key={service}
                  className="flex items-start gap-4 rounded-2xl border border-[#0F3E47]/6 bg-[#F8F6F2] px-4 py-4 shadow-[0_8px_20px_rgba(15,62,71,0.06)]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAD8B7] text-sm font-bold text-[#0F3E47] shadow-sm">
                    ✓
                  </span>
                  <span className="text-base leading-7 text-[#0F3E47]/82 md:text-lg">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-8 text-[#0F3E47]/72">
              Our studio combines lighting, sound, styling, and creative setups
              to deliver a production experience that feels elevated, organized,
              and visually strong from start to finish.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Podcast Setup", "Video Editing", "Brand Content"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2.5 text-sm font-medium text-[#0F3E47] shadow-sm transition hover:-translate-y-0.5 hover:border-[#EAD8B7] hover:bg-[#EAD8B7]/18"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#EAD8B7]" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* second row */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.2,
                ease: "backInOut",
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]"
        >
          {/* feature block */}
          <div className="relative overflow-hidden rounded-4xl bg-[#0F3E47] p-8 shadow-[0_18px_50px_rgba(15,62,71,0.14)] md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,216,183,0.22),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EAD8B7]">
                  Studio Experience
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-4xl md:leading-[1.1]">
                  From concept to final production, every detail is shaped with
                  clarity, style, and intention
                </h3>

                <p className="mt-4 text-base leading-8 text-white/74">
                  We build a seamless workflow that helps your content feel
                  confident, visually consistent, and ready to perform across
                  platforms.
                </p>
              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-3xl text-white shadow-inner backdrop-blur-md">
                🎥
              </div>
            </div>
          </div>

          {/* cta card */}
          <div className="rounded-4xl border border-[#0F3E47]/8 bg-white/95 p-8 shadow-[0_18px_50px_rgba(15,62,71,0.08)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A66B]">
              Let’s Work Together
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#0F3E47]">
              Ready to book your next media production service?
            </h3>

            <p className="mt-4 text-base leading-8 text-[#0F3E47]/72">
              Start your project with a studio experience built for modern
              content, visual quality, and brand impact.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0F3E47] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(15,62,71,0.18)]  hover:-translate-y-1 hover:bg-[#0b333a] hover:shadow-[0_16px_34px_rgba(15,62,71,0.22)]"
            >
              <span>Book Service</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 text-base  group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
