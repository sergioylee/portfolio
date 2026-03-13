# sergioylee.com

My personal portfolio. Fast, minimal, no trackers, no nonsense.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript. Hosted on Cloudflare Pages.

## Stack

- **Astro 5** — static site generation, zero JS by default
- **Tailwind CSS 4** — utility-first styling, configured entirely in CSS
- **IBM Plex Serif + Mono** — self-hosted, Latin subset only
- **Biome** — formatting and linting
- **pnpm** — package manager

## Project structure

```
src/
├── data/
│   ├── site.ts        ← name, email, social handles, URL
│   └── projects.ts    ← work projects (shared between /work and home)
├── layouts/
│   └── Layout.astro   ← HTML shell, nav, footer, all SEO meta
├── pages/
│   ├── index.astro
│   ├── work.astro
│   ├── about.astro
│   ├── contact.astro
│   └── 404.astro
└── styles/
    └── global.css     ← design tokens, Tailwind theme, base styles
```

## Getting started

```bash
pnpm install
pnpm dev
```

## Commands

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start dev server at `localhost:4321` |
| `pnpm build`     | Build for production                 |
| `pnpm preview`   | Preview the production build locally |
| `pnpm check`     | Format and lint                      |
| `pnpm typecheck` | TypeScript validation                |

## License

All rights reserved. See [LICENSE](./LICENSE).
