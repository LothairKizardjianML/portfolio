"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-32 md:py-48 border-t border-white/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-sm font-mono text-accent mb-16"
      >
        03 — Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <a
          href="mailto:kizardjian.lothair@gmail.com"
          className="block text-4xl md:text-7xl font-semibold tracking-tight hover:text-accent transition-colors"
        >
          kizardjian.lothair@gmail.com →
        </a>
        <div className="mt-12 flex gap-6 text-sm text-muted font-mono">
          <a
            href="https://github.com/LothairKizardjianML"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a href="#" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="#" className="hover:text-foreground">
            Twitter
          </a>
        </div>
      </motion.div>

      <p className="mt-24 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Lothair Kizardjian.
      </p>
    </section>
  );
}
