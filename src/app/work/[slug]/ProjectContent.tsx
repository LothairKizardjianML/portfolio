"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectContent({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <article className="max-w-3xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 mb-16"
      >
        <p className="font-mono text-xs text-accent mb-4">
          {project.year} — Case study
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          {project.title}
        </h1>
        <p className="mt-6 text-xl text-muted max-w-2xl">{project.tagline}</p>
      </motion.header>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10 mb-16 text-sm"
      >
        {project.role && (
          <div>
            <dt className="font-mono text-xs text-muted mb-2">Role</dt>
            <dd>{project.role}</dd>
          </div>
        )}
        <div>
          <dt className="font-mono text-xs text-muted mb-2">Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div className="col-span-2">
          <dt className="font-mono text-xs text-muted mb-2">Stack</dt>
          <dd className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-2 py-1 rounded-full border border-white/10"
              >
                {s}
              </span>
            ))}
          </dd>
        </div>
        {(project.link || project.repo) && (
          <div className="col-span-full flex gap-4 font-mono text-xs pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Live →
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Repo →
              </a>
            )}
          </div>
        )}
      </motion.dl>

      <div className="flex flex-col gap-16">
        {project.sections.map((s, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            {s.heading && (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                {s.heading}
              </h2>
            )}
            <p className="text-lg leading-relaxed text-muted whitespace-pre-wrap">
              {s.body}
            </p>
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-32 pt-16 border-t border-white/10"
      >
        <p className="font-mono text-xs text-muted mb-4">Next project</p>
        <Link
          href={`/work/${next.slug}`}
          className="group inline-flex items-baseline gap-4"
        >
          <span className="text-3xl md:text-5xl font-semibold tracking-tight transition-transform group-hover:translate-x-2">
            {next.title}
          </span>
          <span className="text-accent">→</span>
        </Link>
      </motion.div>
    </article>
  );
}
