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

## Structure

- `src/app/page.tsx` — the one-page composition (Hero → Approach → Focus →
  Studio → Ethics → Contact).
- `src/app/layout.tsx` — fonts (Space Grotesk + Inter) and metadata.
- `src/app/globals.css` — the **"Quiet Resonance"** design tokens (warm light
  palette; no dark or neon).
- `src/components/` — section components + `ui/` primitives.
- `src/app/imprint/` and `src/app/ethics/` — full legal / ethics pages
  (also linked from the footer).
- `public/images/` — placeholder art + swap-in guide for real photography.

## Before publishing

1. **Imprint** — fill in real legal details in [`src/lib/imprint.ts`](src/lib/imprint.ts)
   (placeholders are marked).
2. **Photography** — replace the placeholders per
   [`public/images/README.md`](public/images/README.md).
3. **Contact** — update the email in [`src/components/Contact.tsx`](src/components/Contact.tsx)
   and `src/lib/imprint.ts`.
