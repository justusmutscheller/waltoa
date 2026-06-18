# WALTOA — website

Marketing and audio consultancy for technical ideas worth hearing.

A calm, bright, Scandinavian-interior-inspired marketing site built with
**Next.js (App Router)**, **Tailwind CSS v4**, and a small set of
shadcn-style components.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

Content and UI are in English ("Science. Sound. Strategy.").

## Structure

- `src/app/page.tsx` — the one-page composition (Hero → About → Services →
  Dialog → Topics → Philosophy → Ethics → Contact).
- `src/app/layout.tsx` — fonts (Space Grotesk + Inter) and metadata.
- `src/app/globals.css` — the WALTOA palette (warm white, sandstone, mist grey,
  graphite; no dark, no neon).
- `src/components/` — section components + `ui/` primitives.
- `src/app/imprint/`, `src/app/privacy/`, `src/app/ethics/` — legal pages
  (also linked from the footer).
- `src/lib/images.ts` — central image registry (Unsplash); see
  `public/images/README.md`.

## Before publishing

1. **Imprint** — fill in real details in [`src/lib/imprint.ts`](src/lib/imprint.ts)
   (placeholders are marked).
2. **Privacy** — adapt the content in `src/app/privacy/page.tsx` to your actual
   processing activities.
3. **Images** — swap motifs in [`src/lib/images.ts`](src/lib/images.ts) if needed
   (guide in [`public/images/README.md`](public/images/README.md)).
4. **Contact** — set the email in `src/lib/imprint.ts` (used in Contact & footer).
