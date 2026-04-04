# sergioylee.com

My personal portfolio. Fast, minimal, no trackers, no nonsense.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and JavaScript. Hosted on Cloudflare Pages.

## Stack

- **Astro 5** — static site generation, zero JS by default
- **Tailwind CSS 4** — utility-first styling, configured entirely in CSS
- **IBM Plex Serif + Mono** — self-hosted, Latin subset only
- **Biome** — formatting (JS/TS linting disabled)
- **@astrojs/sitemap** — auto-generated `sitemap.xml` at build time
- **pnpm** — package manager

## Project structure

```
src/
├── content.config.js  ← Astro content collection schema (blog)
├── content/
│   └── posts/         ← Markdown post files (.md)
├── data/
│   ├── site.js        ← name, email, social handles, URL
│   └── projects.js    ← work projects (shared between /work and home)
├── layouts/
│   └── Layout.astro   ← HTML shell, nav, footer, all SEO meta
├── pages/
│   ├── index.astro
│   ├── work.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── 404.astro
│   └── blog/
│       ├── index.astro    ← post listing
│       └── [slug].astro   ← individual post
└── styles/
    └── global.css     ← design tokens, Tailwind theme, base styles
```

`public/_headers` sets strict security headers (CSP, X-Frame-Options, etc.) for the Cloudflare Pages deployment. Inline scripts are blocked by the CSP — do not add `<script>` tags without updating this file.

## Blog

Posts are Markdown files in `src/content/posts/`. Each post requires `title`, `date` (ISO string), and `summary` frontmatter, with an optional `draft: true` to exclude from the build. The collection schema is defined in `src/content.config.js` using Zod. Draft posts are filtered out at build time; published posts are sorted by date descending on the listing page.

## Getting started

Requires Node >= 22.12.0 and pnpm.

```bash
pnpm install
pnpm dev
```

## Commands

| Command        | Description                         |
| -------------- | ----------------------------------- |
| `pnpm dev`     | Start dev server at `localhost:3000` |
| `pnpm build`   | Build for production                |
| `pnpm preview` | Preview the production build locally |
| `pnpm check`   | Format and lint with Biome          |
| `pnpm format`  | Format files only                   |
| `pnpm lint`    | Lint files only                     |

## License

All rights reserved. See [LICENSE](./LICENSE).
