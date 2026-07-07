import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getAllProjects, getProject } from "@/content/projects_loader";
import { mdxComponents } from "@/components/mdx";
import ProjectHeader from "./ProjectHeader";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Lothair Kizardjian`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const all = getAllProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  const next = all[(idx + 1) % all.length];

  return (
    <main className="noise flex-1 relative pt-32 pb-32 px-6 md:px-12">
      <Link
        href="/#work"
        className="font-mono text-xs text-muted hover:text-foreground transition-colors"
      >
        ← back to projects
      </Link>

      <article className="max-w-[818px] mx-auto">
        <ProjectHeader project={project} />

        <div className="mdx-body text-justify hyphens-auto">
          <MDXRemote
            source={project.body}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark",
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        <div className="mt-32 pt-16 border-t border-white/10">
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
        </div>
      </article>
    </main>
  );
}
