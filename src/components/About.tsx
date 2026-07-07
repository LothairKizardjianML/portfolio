"use client";

import { motion } from "framer-motion";

const words =
  "Software and DevOps engineer at Airbus Geo (Toulouse). Master's in AI from PSL / PRAIRIE. Currently pivoting from software engineering to agentic engineering — building LLM-agent tooling in production, and learning what actually matters: context, retrieval, and cost.".split(
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
        01 — About
      </motion.h2>

      <p className="text-lg md:text-2xl font-medium tracking-tight leading-relaxed max-w-3xl text-muted flex flex-wrap gap-x-2 gap-y-2">
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

      <motion.a
        href="/cv.pdf"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 font-mono text-sm hover:border-accent hover:text-accent transition-colors"
      >
        Download CV
        <span aria-hidden>↓</span>
      </motion.a>
    </section>
  );
}
