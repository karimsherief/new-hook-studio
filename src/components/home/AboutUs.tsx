"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
const aboutContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const aboutImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export default function AboutUs() {
  return (
    <section className="bg-[#F8F6F2] py-12 transition-all duration-700 ease-out">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 lg:px-10 ">
        {/* Text Content */}
        <motion.div
          variants={aboutContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative rounded-[28px] border border-[#0F3E47]/8 bg-white p-8 shadow-[0_12px_40px_rgba(15,62,71,0.08)] md:p-10"
        >
          <div className="mb-5 inline-flex rounded-full bg-[#EAD8B7]/40 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0F3E47]">
            About Hook Studio
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F3E47] md:text-5xl">
            A modern media studio built for creators and brands
          </h2>

          <p className="mt-6 text-base leading-8 text-[#0F3E47]/75 md:text-lg">
            Hook Studio is a refined media production space designed for
            creators, startups, and brands who want high-quality content with a
            premium visual presence.
          </p>

          <p className="mt-4 text-base leading-8 text-[#0F3E47]/75 md:text-lg">
            From podcasts and video shoots to branded social media content, our
            studio combines professional equipment, creative flexibility, and a
            comfortable environment to help you produce with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2 text-sm font-medium text-[#0F3E47]">
              Podcast Production
            </span>
            <span className="rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2 text-sm font-medium text-[#0F3E47]">
              Video Content
            </span>
            <span className="rounded-full border border-[#0F3E47]/10 bg-[#F8F6F2] px-4 py-2 text-sm font-medium text-[#0F3E47]">
              Brand Storytelling
            </span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={aboutImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="group relative h-90 overflow-hidden rounded-[28px] shadow-[0_14px_45px_rgba(15,62,71,0.12)] md:h-125"
        >
          <Image
            src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1400&auto=format&fit=crop"
            alt="Studio setup"
            fill
            unoptimized
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#0F3E47]/55 via-[#0F3E47]/15 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-md rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F4E2C3]">
                Creative Space
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                Designed for premium content production
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/80 md:text-base">
                A modern setup that helps your brand look professional,
                polished, and visually memorable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
