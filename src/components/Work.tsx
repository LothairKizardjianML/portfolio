import { getAllProjects } from "@/content/projects_loader";
import WorkList from "./WorkList";

export default function Work() {
  const projects = getAllProjects();
  return (
    <section id="work" className="px-6 md:px-12 py-32 md:py-48">
      <h2 className="text-sm font-mono text-accent mb-16">
        02 — Selected projects
      </h2>
      <WorkList
        projects={projects.map((p) => ({
          slug: p.slug,
          title: p.title,
          tagline: p.tagline,
          year: p.year,
          stack: p.stack,
        }))}
      />
    </section>
  );
}
