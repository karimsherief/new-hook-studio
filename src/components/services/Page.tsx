"use client";

import { motion } from "framer-motion";
import { ServicesHero } from "@/components/services/ServicesHero";
import  { ContactCards } from "@/components/services/ContactCards";
import {SelectStudioForm }from "@/components/services/SelectStudioForm";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesHero />
      </motion.div>

      {/* CONTACT CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContactCards />
      </motion.div>

      {/* BOOKING FORM */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SelectStudioForm />
      </motion.div>

    </main>
  );
}