"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import ImageSlider from "@/components/home/ImageSlider";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 1.03,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

const aboutVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const servicesVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#F8F6F2]">
      <motion.section
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ImageSlider />
      </motion.section>

      <motion.section
        variants={aboutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <AboutUs />
      </motion.section>

      <motion.section
        variants={servicesVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Services />
      </motion.section>
    </main>
  );
} 