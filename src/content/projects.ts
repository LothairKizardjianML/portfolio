export type ProjectSection = {
  heading?: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  role?: string;
  link?: string;
  repo?: string;
  cover?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "hell-vs-heaven",
    title: "Hell vs Heaven",
    tagline: "2D co-op roguelike platformer with a PvP finale.",
    year: "2026",
    stack: ["TypeScript", "Phaser 3", "Vite", "Vitest"],
    role: "Solo developer",
    repo: "https://github.com/LothairKizardjianML/hell_vs_heaven",
    sections: [
      {
        heading: "Overview",
        body: "Two players team up as either Hell or Heaven, run through procedurally selected rooms, and assemble a build from roguelike upgrades. The run ends with a Brawlhalla-style PvP arena where Hell fights Heaven using the builds earned in PvE.",
      },
      {
        heading: "What I built",
        body: "Custom Brawlhalla-style character controller on top of Phaser Arcade Physics — variable-height jumps, coyote time, jump buffering, air control, wall slide, and wall jump. Fixed-timestep game loop decoupled from render rate. Seeded RNG for reproducible runs.",
      },
      {
        heading: "Why it is interesting",
        body: "The whole codebase is TDD-first — physics math, RNG systems, damage formulas all start with a Vitest case. Strict module boundaries: gameplay never imports rendering, so headless tests work end-to-end.",
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "Short punchy description of the thing.",
    year: "2025",
    stack: ["Next.js", "TypeScript"],
    sections: [
      {
        heading: "Overview",
        body: "Replace this with a real writeup. Talk about the problem, the constraints, and what you shipped.",
      },
    ],
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "Another thing worth showing off.",
    year: "2025",
    stack: ["Rust", "WebAssembly"],
    sections: [
      {
        heading: "Overview",
        body: "Replace this with a real writeup.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
