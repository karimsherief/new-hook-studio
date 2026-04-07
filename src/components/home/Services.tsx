"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useState } from "react";

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
  const t = useTranslations("Services");
  const services = [
    {
      title: t("List.CreativeDirection.title"),
      desc: t("List.CreativeDirection.desc"),
      name: "Creative Direction",
      image: "/images/creative-direction.webp",
      icon: "🎬",
      location: "indoor",
      services: "video-editing",
    },
    {
      title: t("List.SocialMedia.title"),
      desc: t("List.SocialMedia.desc"),
      image: "/images/content-creation-service.webp",
      name: "Content Creation",
      icon: "📱",
      location: "",
      services: "",
    },
    {
      id: 2,
      title: t("List.VideoProduction.title"),
      desc: t("List.VideoProduction.desc"),
      name: "Video Production",
      icon: "🎥",
      image: "/images/ContactSheet-003.webp",
      location: "indoor",
      services: "video-editing",
    },
    {
     id: 1,
      title: t("List.Podcast.title"),
      name: "Photography Session",
      desc: t("List.Podcast.desc"),
      icon: "🎙️",
      image: "/images/photography-sessions.webp",
      location: "",
      services: "podcast",
    },
    {
      title: t("List.Photography.title"),
      desc: t("List.Photography.desc"),
      image: "/images/about-us.webp",
      name: "Photography",
      icon: "📸",
      location: "",
      services: "",
    },
    {
      title: t("List.VideoEditing.title"),
      desc: t("List.VideoEditing.desc"),
      image: "/images/video-editing.webp",
      name: "Video Editing",
      icon: "🎥",
      location: "indoor",
      services: "video-editing",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-12 text-white md:py-20 lg:py-28"
      ref={sectionRef}
    >
      {/* Background */}

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-[36px] border border-white/10 bg-[#03171f]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/5 backdrop-blur-xl lg:max-w-7xl lg:rounded-4xl lg:border-white/10 lg:bg-white/5 lg:p-0 lg:shadow-none lg:ring-0">
          {/* Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="mb-6 max-w-3xl md:mb-8 lg:mb-14"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#E0C28F]/20 bg-[#E0C28F]/8 px-3 py-1.5 text-xs font-semibold text-[#E0C28F] backdrop-blur-md md:px-4 md:py-2 md:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E0C28F] md:h-2 md:w-2" />
              {t("OurServicesBadge")}
            </motion.div>
          </motion.div>

          {/* Top grid */}
          <div className="grid gap-6 items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left visual */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative h-80 md:h-96 lg:h-full rounded-4xl border border-white/10 bg-white/4 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              {services.map((service, index) => {
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
                        src={service.image}
                        alt={service.name}
                        fill
                        quality={100}
                        objectFit="cover"
                        className=" transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,22,0.10)_0%,rgba(4,19,22,0.22)_38%,rgba(4,19,22,0.94)_100%)]" />

                      <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-4 md:p-6 lg:p-8">
                        <div className="inline-flex rounded-full border border-white/15 bg-[#06171B]/75 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                          {t("Slider.Badge1")}
                        </div>

                        <div className="hidden rounded-full border border-white/10 bg-[#E0C28F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8CCA0] backdrop-blur-md md:inline-flex">
                          {t("Slider.Badge2")}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                        <div className="max-w-xl rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md md:p-5 lg:p-6">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4E2C3]">
                            {t("Slider.CreativeStudio")}
                          </p>

                          <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-3xl">
                            {t("Slider.Title")}
                          </h3>

                          <p className="mt-3 text-sm leading-5 md:leading-7 text-white/78 md:text-base">
                            {t("Slider.Desc")}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-3">
                            {[
                              t("Slider.Tags.Podcast"),
                              t("Slider.Tags.Video"),
                              t("Slider.Tags.Photography"),
                            ].map((item) => (
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
              className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl md:p-8 lg:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E0C28F]">
                {t("WhatWeOffer")}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-2xl lg:text-3xl">
                {t("ServicesSubtitle")}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 grid gap-3 md:gap-4"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={fadeUp}
                    className={`group text-left cursor-pointer rounded-2xl border transition duration-300 bg-white/4 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.10)] backdrop-blur-md md:rounded-3xl md:p-5
                  ${
                    current === index
                      ? "border-white -translate-y-1 scale-[1.01]"
                      : "border-white/8 hover:border-white hover:-translate-y-1 hover:scale-[1.01]"
                  }`}
                    onMouseEnter={() => setCurrent(index)}
                  >
                    <Link
                      href={`/book-studio?location=${service.location}&service=${service.services}`}
                      className="flex items-start gap-3 md:gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E0C28F]/18 text-lg shadow-sm transition md:h-12 md:w-12 md:text-xl">
                        {service.icon}
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-white md:text-lg">
                          {service.title}
                        </h4>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-3 md:mt-8 md:grid-cols-3 md:gap-4"
          >
            {[
              { value: t("Stats.4K.value"), label: t("Stats.4K.label") },
              { value: t("Stats.360.value"), label: t("Stats.360.label") },
              { value: t("Stats.247.value"), label: t("Stats.247.label") },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)] backdrop-blur-xl md:rounded-[28px] md:p-6"
              >
                <div className="text-2xl font-bold text-[#F1DEB7] md:text-3xl">
                  {item.value}
                </div>
                <p className="mt-1 text-xs leading-5 text-white/60 md:mt-2 md:text-sm md:leading-6">
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
            className="mt-8 grid gap-6"
          >
            {/* Experience block */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-4xl bg-[#0A2024] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.20)] md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,194,143,0.22),transparent_28%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EAD8B7]">
                    {t("Experience.Title")}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-4xl md:leading-[1.1]">
                    {t("Experience.Heading")}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-white/72">
                    {t("Experience.Desc")}
                  </p>

                  <Link
                    href="/book-studio"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#0DA9B3_0%,#0A7E86_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,169,179,0.22)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(13,169,179,0.28)]"
                  >
                    <span>{t("CTA.Button")}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-base transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-3xl text-white shadow-inner backdrop-blur-md">
                  ✨
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
