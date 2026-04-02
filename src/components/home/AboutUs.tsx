"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  const t = useTranslations("About");

  return (
    <section className="relative overflow-hidden  py-20 text-white md:py-28">
      {/* Background */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Left content */}
          <div>
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex rounded-full border border-[#D8B277]/20 bg-[#D8B277]/10 px-4 py-2 text-xs font-semibold uppercase  text-[#E8CFA4]"
            >
              {t("AboutHookStudio")}
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-2xl text-2xl font-bold  tracking-tight text-white md:text-3xl xl:text-4xl mb-3"
            >
              {/* We create content spaces that feel{" "}
              <span className="text-[#D8B277]">premium</span>, modern, and built
              for ambitious brands. */}
              {t("title")}
            </motion.h2>
            {/* 
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg"
            >
              Hook Studio is a modern production environment designed for
              creators, startups, and brands that want more than just visuals.
              We help shape polished content experiences with clarity, quality,
              and a strong brand presence.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base leading-8 text-white/62 md:text-lg"
            >
              From podcasts and interviews to video production and branded
              storytelling, every setup is crafted to help your ideas look more
              refined, professional, and memorable.
            </motion.p> */}

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {[t("PodcastSets"), t("VideoProduction"), t("BrandContent")].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md transition hover:border-[#D8B277]/20 hover:bg-white/8"
                  >
                    {item}
                  </span>
                ),
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {[
                { value: "4K+", label: t("Premium-readyVisuals") },
                { value: "360°", label: t("CreativeProductionSupport") },
                { value: "24/7", label: t("Brand-focusedFlexibility") },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="text-2xl font-bold text-[#E8CFA4]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="relative h-[520px] overflow-hidden rounded-[26px]">
                <Image
                  src="/images/about-us.webp"
                  alt="Hook Studio creative production space"
                  fill
                  unoptimized
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,42,49,0.12)_0%,rgba(7,42,49,0.34)_45%,rgba(7,42,49,0.92)_100%)]" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#072A31]/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#E8CFA4] backdrop-blur-md">
                  Hook Studio
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-lg">
                    <p className="font-semibold uppercase  text-[#E8CFA4]">
                      {t("ImageSubTitle")}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-snug text-white md:text-3xl">
                      {t("ImageTitle")}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/75 md:text-base">
                      {t("ImageDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-[#166774]/28 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
