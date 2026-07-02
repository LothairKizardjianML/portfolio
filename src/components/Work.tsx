"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-32 md:py-48">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-sm font-mono text-accent mb-16"
      >
        01 — Selected work
      </motion.h2>

      <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
        {projects.map((p, i) => (
          <motion.li
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/work/${p.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-10 md:py-14"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight transition-transform group-hover:translate-x-2">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 md:ml-10 text-muted max-w-lg">{p.tagline}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="font-mono text-xs text-muted">{p.year}</span>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-full border border-white/10 text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
