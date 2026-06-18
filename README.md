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

Inhalt und Oberfläche sind auf Deutsch („Science. Sound. Strategy.").

## Structure

- `src/app/page.tsx` — die One-Page-Komposition (Hero → Über → Leistungen →
  Dialog → Themen → Philosophie → Ethik → Kontakt).
- `src/app/layout.tsx` — Schriften (Space Grotesk + Inter) und Metadaten.
- `src/app/globals.css` — die WALTOA-Farbwelt (warmes Weiß, Sandstein,
  Nebelgrau, Graphit; kein Dunkel, kein Neon).
- `src/components/` — Section-Komponenten + `ui/`-Primitives.
- `src/app/impressum/`, `src/app/datenschutz/`, `src/app/ethik/` — Rechtstexte
  (auch aus dem Footer verlinkt).
- `src/lib/images.ts` — zentrale Bild-Registry (Unsplash); siehe
  `public/images/README.md`.

## Vor der Veröffentlichung

1. **Impressum** — echte Angaben in [`src/lib/imprint.ts`](src/lib/imprint.ts)
   eintragen (Platzhalter sind markiert).
2. **Datenschutz** — Inhalte in `src/app/datenschutz/page.tsx` an die
   tatsächlichen Verarbeitungen anpassen.
3. **Bilder** — bei Bedarf Motive in [`src/lib/images.ts`](src/lib/images.ts)
   austauschen (Anleitung in [`public/images/README.md`](public/images/README.md)).
4. **Kontakt** — E-Mail in `src/lib/imprint.ts` setzen (wird in Kontakt & Footer
   verwendet).
