export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "hell-vs-heaven",
    title: "Hell vs Heaven",
    tagline: "2D co-op roguelike platformer with a PvP finale.",
    year: "2026",
    stack: ["TypeScript", "Phaser 3", "Vite"],
    href: "https://github.com/LothairKizardjianML/hell_vs_heaven",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "Short punchy description of the thing.",
    year: "2025",
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "Another thing worth showing off.",
    year: "2025",
    stack: ["Rust", "WebAssembly"],
  },
];
