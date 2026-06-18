# Images

The site uses curated photos from **Unsplash**, loaded and optimised at runtime
via `next/image` (the domain is allow-listed in `next.config.ts`). No image files
are stored in this folder.

All image sources are maintained centrally in
[`src/lib/images.ts`](../../src/lib/images.ts). To swap an image, replace the
Unsplash photo ID there.

## Motifs in use (the source of sound, atmosphere, perception)

| Location           | Motif                      | Unsplash ID                         |
| ------------------ | -------------------------- | ----------------------------------- |
| Hero               | Water drop / signal        | `photo-1535868118629-f37bcd69ff59`  |
| About – imagery 1  | Water drop                 | `photo-1535868118629-f37bcd69ff59`  |
| About – imagery 2  | Piano keys                 | `photo-1520523839897-bd0b52f945a0`  |
| About – imagery 3  | Songbird on a branch       | `photo-1591089570621-ea86c99a09a6`  |
| Dialog             | Two people in conversation | `photo-1573497491208-6b1acb260507`  |

Idea of the imagery: don't show the microphone, but the **source** of sound —
water, instrument, nature — plus the human dialogue. Bright, calm shots with
plenty of light; no dark, no neon.

## Using your own photos

Drop your own files into `public/images/` and point the `src` values in
`src/lib/images.ts` to the local path (e.g. `/images/hero.jpg`). Format: bright
3:2 or 4:5 shots, at least ~1600 px on the long edge.
