"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useState } from "react";

const services = [
  {
    title: "Professional podcast recording",
    desc: "Record in a fully equipped studio with high-end audio clarity and controlled acoustics — ensuring every conversation sounds polished and professional.",
    icon: "🎙️",
    location: "",
    services: "",
  },
  {
    title: "Video production",
    desc: "End-to-end video production using modern setups, cinematic framing, and precise execution — delivering content that looks refined and on-brand.",
    icon: "🎥",
    location: "indoor",
    services: "video-editing",
  },
  {
    title: "Creative Direction",
    desc: "We develop clear visual and creative concepts that guide your content. From moodboards to storytelling, we ensure everything aligns with your brand image and stands out in a crowded market.",
    icon: "🎬",
    location: "indoor",
    services: "video-editing",
  },
  {
    title: "Social media content creation",
    desc: "Short-form content tailored for each platform — visually sharp, consistent, and designed to drive engagement.",
    icon: "📱",
    location: "",
    services: "",
  },
  {
    title: "Photography sessions",
    desc: "Professional photography for brands, products, and campaigns — focused on clean visuals, balanced lighting, and a polished finish.",
    icon: "📸",
    location: "",
    services: "",
  },
  {
    title: "Video Editing",
    desc: "We transform raw footage into polished, cohesive videos through precise editing, color grading, and sound design — ensuring a smooth and professional final result.",
    icon: "🎥",
    location: "",
    services: "",
  },
];

const slides = [
  {
    id: 1,
    badge: "PREMIUM CREATIVE STUDIO",
    titleTop: "We create content",
    titleAccent: "that stands out",
    desc: "Join modern brands and creators who trust Hook Studio to shape polished visuals and refined production experiences.",
    subDesc:
      "A studio environment designed to make every frame feel premium, intentional, and memorable.",
    image: "/images/content-creation-service.webp",
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
    image: "/images/creative-direction.webp",
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
    image: "/images/video-editing.webp",
    imageLabel: "STUDIO EXPERIENCE",
    count: "03",
  },
  {
    id: 4,
    badge: "HOOK STUDIO EXPERIENCE",
    titleTop: "Create stronger visuals",
    titleAccent: "with confidence",
    desc: "Our production workflow is crafted for podcasts, photography, social content, and cinematic storytelling that leaves a lasting impression.",
    subDesc:
      "A refined content space where quality, creativity, and modern aesthetics come together.",
    image: "/images/photography-sessions.webp",
    imageLabel: "STUDIO EXPERIENCE",
    count: "04",
  },
];
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const [current, setCurrent] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-20 text-white md:py-28"
      ref={sectionRef}
    >
      {/* Background */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mb-14 max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#E0C28F]/20 bg-[#E0C28F]/8 px-4 py-2 text-sm font-semibold text-[#E0C28F] backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#E0C28F]" />
            Our Services
          </motion.div>
        </motion.div>

        {/* Top grid */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left visual */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative max-lg:h-150 rounded-4xl border border-white/10 bg-white/4 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            {slides.map((slide, index) => {
              const isActive = index === current;
              return (
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className={`group inset-3  absolute  overflow-hidden  rounded-3xl
                  ${!isActive && "hidden"}
                `}
                >
                  <div className="overflow-hidden rounded-[28px] border border-white/8">
                    <Image
                      src={slide.image}
                      alt="Modern studio workspace"
                      fill
                      quality={100}
                      objectFit="cover"
                      className=" transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,22,0.10)_0%,rgba(4,19,22,0.22)_38%,rgba(4,19,22,0.94)_100%)]" />

                    <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-6 md:p-8">
                      <div className="inline-flex rounded-full border border-white/15 bg-[#06171B]/75 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                        Hook Studio
                      </div>

                      <div className="hidden rounded-full border border-white/10 bg-[#E0C28F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8CCA0] backdrop-blur-md md:inline-flex">
                        Premium Production
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="max-w-xl rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md md:p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4E2C3]">
                          Creative Studio
                        </p>

                        <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-3xl">
                          A premium environment built for standout content
                          experiences
                        </h3>

                        <p className="mt-3 text-sm leading-5 md:leading-7 text-white/78 md:text-base">
                          Crafted for podcasts, videos, social content, and
                          photography with modern styling, visual clarity, and a
                          strong branded presence.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          {["Podcast", "Video", "Photography"].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E0C28F]">
              What We Offer
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
              Services thoughtfully shaped to make every piece of content feel
              polished and professional
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className={`group text-left cursor-pointer rounded-3xl border transition duration-300 bg-white/4 p-5 shadow-[0_8px_20px_rgba(0,0,0,0.10)] backdrop-blur-md
                  ${
                    current === index
                      ? "border-white -translate-y-1 scale-[1.01]"
                      : "border-white/8 hover:border-white hover:-translate-y-1 hover:scale-[1.01]"
                  }`}
                  onMouseEnter={() => setCurrent(index)}
                >
                  <Link
                    href={`/book-studio?location=${service.location}&service=${service.services}`}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E0C28F]/18 text-xl shadow-sm transition">
                      {service.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {service.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-white/65 md:text-[15px]">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-8 text-base leading-8 text-white/68">
              Our studio experience brings together lighting, audio, visual
              styling, and smooth production flow so your final content feels
              intentional, cohesive, and visually strong from start to finish.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Podcast Setup",
                "Video Editing",
                "Brand Content",
                "Creative Direction",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 shadow-sm transition hover:-translate-y-0.5 hover:border-[#E0C28F]/25 hover:bg-white/[0.07]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#E0C28F]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {[
            { value: "4K+", label: "Premium-ready visual quality" },
            { value: "360°", label: "Creative production support" },
            { value: "24/7", label: "Flexible brand-focused workflow" },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="rounded-[28px] border border-white/10 bg-white/4 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.14)] backdrop-blur-xl"
            >
              <div className="text-3xl font-bold text-[#F1DEB7]">
                {item.value}
              </div>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]"
        >
          {/* Experience block */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-[#0A2024] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.20)] md:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,194,143,0.22),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EAD8B7]">
                  Studio Experience
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-4xl md:leading-[1.1]">
                  From concept to final delivery, every detail is handled with
                  style, clarity, and intention
                </h3>

                <p className="mt-4 text-base leading-8 text-white/72">
                  We create a smooth production flow that helps your content
                  feel more confident, visually aligned, and ready to perform
                  across digital platforms.
                </p>
              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-3xl text-white shadow-inner backdrop-blur-md">
                ✨
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E0C28F]">
              Let’s Work Together
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
              Ready to create media content that looks sharper, stronger, and
              more premium?
            </h3>

            <p className="mt-4 text-base leading-8 text-white/68">
              Start your next project with a studio experience designed for
              quality, modern aesthetics, and meaningful brand impact.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Book your recording session",
                "Plan a branded shoot",
                "Explore custom production packages",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#081B1F] px-4 py-3 text-sm text-white/78"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0C28F]/18 text-xs font-bold text-[#F1DEB7]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#0DA9B3_0%,#0A7E86_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,169,179,0.22)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(13,169,179,0.28)]"
            >
              <span>Book Service</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-base transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
