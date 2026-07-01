"use client";

import { motion } from "framer-motion";

const words =
  "I build games, tools, and web experiences. Currently focused on TypeScript, real-time systems, and everything that makes a product feel alive.".split(
    " "
  );

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-32 md:py-48">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-sm font-mono text-accent mb-16"
      >
        02 — About
      </motion.h2>

      <p className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-4xl flex flex-wrap gap-x-3 gap-y-2">
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
          >
            {w}
          </motion.span>
        ))}
      </p>
    </section>
  );
}
