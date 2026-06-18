# Imagery — swap-in guide

The site ships with tasteful, on-brand **placeholder art** (the `.svg` files in
this folder) so it reads as intentional from the first load. To go live, replace
each file with a real photograph of the **same base name** and update the
extension in [`src/lib/images.ts`](../../src/lib/images.ts) if you use `.jpg`.

Keep the WALTOA mood: **bright, calm, classy — no dark or neon images.** Think
Scandinavian interior photography of *things that create sound*.

| File              | Used for            | Subject                                   | Suggested size      |
| ----------------- | ------------------- | ----------------------------------------- | ------------------- |
| `hero.svg`        | Full-bleed hero     | A single waterdrop meeting still water    | 2400 × 1500 (3:2)   |
| `studio.svg`      | Studio section      | Daylight across a grand piano, bright room| 1600 × 1200 (4:3)   |
| `waterdrop.svg`   | Focus · Science     | Waterdrop / ripple                        | 1200 × 900 (4:3)    |
| `piano.svg`       | Focus · Quality     | Piano keys, warm light                    | 1200 × 900 (4:3)    |
| `bird.svg`        | Focus · Research    | Songbird mid-call                         | 1200 × 900 (4:3)    |
| `wave.svg`        | Focus · Audio Design| Waveform / sound visualisation            | 1200 × 900 (4:3)    |
| `atmosphere.svg`  | Focus · Atmosphere  | Light and shadow in a still interior      | 1200 × 900 (4:3)    |

## Choosing photos — "award candidates, not winners"

Aim for understated, high-craft images rather than the obvious crowd-pleasers.
Good calm, license-free sources:

- **Unsplash** — search: `water drop ripple`, `grand piano daylight`,
  `bird branch minimal`, `sound waveform`, `scandinavian interior light`.
- **Pexels** and **Wikimedia Commons** are good fallbacks.

Pick frames with lots of soft, bright negative space and a single quiet subject —
they sit best against the warm "bone" background and let the typography lead.

> Tip: if you place real photos and want Next.js to optimise remote URLs instead
> of local files, add the host to `images.remotePatterns` in `next.config.ts`
> (`images.unsplash.com` is already allow-listed).
