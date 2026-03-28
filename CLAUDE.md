# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Production build (output to dist/)
pnpm preview    # Preview production build locally
pnpm check      # Format + lint with Biome (run before committing)
pnpm typecheck  # TypeScript/Astro type validation
pnpm format     # Format only
pnpm lint       # Lint only
```

Node >=22.12.0 required. Use pnpm as the package manager.

## Architecture

**Astro 5 static site** — zero JavaScript shipped to the browser by default. All pages are pre-rendered at build time and deployed to Cloudflare Pages.

### Data layer

All content lives in `src/data/`:
- `site.ts` — global site config (name, email, URL, social handles). Consumed by `Layout.astro` for SEO meta and by pages directly.
- `projects.ts` — typed `Project[]` array. The home page shows a subset; `work.astro` shows all of them.

To add or edit content, edit these files — no CMS, no markdown files.

### Layout

`src/layouts/Layout.astro` is the single shared shell for all pages. It handles the `<head>` (SEO, OG, font preloads, JSON-LD), nav, and footer. All pages pass `title` and `description` props to it.

### Styling

Tailwind CSS v4 — configured entirely inside `src/styles/global.css` via `@theme {}`. There is no `tailwind.config.ts`. Design tokens (colors, fonts, spacing) are CSS custom properties defined in that file.

Fonts are self-hosted via `@fontsource` (IBM Plex Serif and Mono, Latin subset only). They are imported in `Layout.astro` and preloaded via `<link rel="preload">`.

### Tooling

Biome handles formatting and import organization (linting is disabled in `biome.json` — formatter only). Double quotes, 2-space indent.
