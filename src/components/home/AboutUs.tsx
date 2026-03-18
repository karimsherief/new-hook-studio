"use client";

import { motion, Variants } from "framer-motion";
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
              className="mb-5 inline-flex rounded-full border border-[#D8B277]/20 bg-[#D8B277]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8CFA4]"
            >
              About Hook Studio
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl"
            >
              We create content spaces that feel{" "}
              <span className="text-[#D8B277]">premium</span>, modern, and built
              for ambitious brands.
            </motion.h2>

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
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Podcast Sets", "Video Production", "Brand Content"].map(
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

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="rounded-full bg-[linear-gradient(135deg,#166774_0%,#0E4B57_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(14,75,87,0.35)] transition hover:scale-[1.02] hover:brightness-110">
                Book Studio
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D8B277]/30 hover:bg-white/10">
                Explore Services
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {[
                { value: "4K+", label: "Premium-ready visuals" },
                { value: "360°", label: "Creative production support" },
                { value: "24/7", label: "Brand-focused flexibility" },
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
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
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
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8CFA4]">
                      Studio Experience
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-snug text-white md:text-3xl">
                      A refined environment for standout visual content
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/75 md:text-base">
                      Designed to support podcasts, branded shoots, and social
                      media production with a modern, professional feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="absolute -left-4 bottom-10 hidden w-52 rounded-2xl border border-white/10 bg-[#0A343C]/85 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl md:block"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#E8CFA4]">
                Premium Setup
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Styled spaces, clean lighting, and a polished production mood.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute -right-3 top-10 hidden w-48 rounded-2xl border border-[#D8B277]/15 bg-[#D8B277]/10 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl md:block"
            >
              <p className="text-sm font-semibold text-[#E8CFA4]">
                Brand-first production
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Every frame is shaped to look intentional and memorable.
              </p>
            </motion.div>

            <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-[#166774]/28 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}