import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectMeta = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  role?: string;
  link?: string;
  repo?: string;
  cover?: string;
  order?: number;
};

export type Project = ProjectMeta & { body: string };

const POSTS_DIR = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return { slug, ...(data as Omit<ProjectMeta, "slug">), body: content };
  });
  return projects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
