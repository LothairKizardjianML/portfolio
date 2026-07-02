"use client";

import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <>
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
    </>
  );
}
