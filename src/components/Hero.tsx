"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 20% 30%, rgba(124,92,255,0.35), transparent 60%), radial-gradient(500px circle at 80% 60%, rgba(255,80,180,0.25), transparent 60%)",
        }}
      />
      <motion.div style={{ y, opacity }} className="max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm text-accent mb-6"
        >
          Portfolio — 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
        >
          Lothair Kizardjian.
          <br />
          <span className="text-muted">AI Software Engineer.</span>
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-muted"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
