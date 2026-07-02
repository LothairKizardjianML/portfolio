import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/content/projects";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Lothair Kizardjian`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="noise flex-1 relative pt-32 pb-32 px-6 md:px-12">
      <Link
        href="/#work"
        className="font-mono text-xs text-muted hover:text-foreground transition-colors"
      >
        ← back to work
      </Link>
      <ProjectContent project={project} next={next} />
    </main>
  );
}
