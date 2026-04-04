"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import ImageSlider from "@/components/home/ImageSlider";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import VideoReels from "@/components/home/VideoReels";

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
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Video reels data - replace with your actual video URLs
  const videoReels = [
    {
      id: "1",
      src: "/videos/RELS 1.mp4",
      title: "Creative Direction Showcase",
    },
    {
      id: "2",
      src: "/videos/RELS 2.mp4",
      title: "Podcast Recording Session",
    },
    {
      id: "3",
      src: "/videos/RELS 3.mp4",
      title: "Video Production Behind Scenes",
    },
    {
      id: "4",
      src: "/videos/RELS 4.mp4",
      title: "Photography Session",
    },
    {
      id: "5",
      src: "/videos/RELS 5.mp4",
      title: "Brand Content Creation",
    },
    {
      id: "6",
      src: "/videos/RELS 6.mp4",
      title: "Social Media Content",
    },
    {
      id: "7",
      src: "/videos/RELS 7 (1).mp4",
      title: "Video Editing Process",
    },
    {
      id: "8",
      src: "/videos/RELS 8.mp4",
      title: "Client Testimonial",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <motion.section
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ImageSlider scrollToSection={scrollToSection} />
      </motion.section>
      <AboutUs />
      <Services sectionRef={sectionRef} />
      <VideoReels videos={videoReels} />
    </main>
  );
}
