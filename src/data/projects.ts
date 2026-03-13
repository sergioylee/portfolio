export interface Project {
  id: string;
  title: string;
  date: string;
  stack: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    id: "industrias-proba-sa",
    title: "Industrias Proba SA Website",
    date: "2026",
    stack: "Astro, TailwindCSS, DaisyUI",
    bullets: [],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    date: "2026",
    stack: "Astro, TailwindCSS, TypeScript",
    bullets: [
      "Minimalist static personal site built with performance and privacy in mind.",
      "No analytics, no trackers, no unnecessary JavaScript.",
      "Hosted on Cloudflare Pages.",
    ],
  },
  {
    id: "lens-nvim",
    title: "Lens Neovim Plugin",
    date: "2025",
    stack: "Lua",
    bullets: [],
  },
  {
    id: "resumint",
    title: "ResuMint CLI Tool",
    date: "2023",
    stack: "TypeScript, Node.js, Puppeteer, Handlebars, HTML, CSS",
    bullets: [
      "CLI tool that generates multilingual PDF resumes from a single JSON file.",
      "Built-in spell checking per language with custom whitelists for technical terms.",
      "Templating system so the same data renders into any design you write.",
    ],
  },
];
