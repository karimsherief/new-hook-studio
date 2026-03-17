"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import ImageSlider from "@/components/home/ImageSlider";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden ">
      <motion.section
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ImageSlider />
      </motion.section>
      <AboutUs />
      <Services />
    </main>
  );
}
