/*
  Image registry — curated photos (Unsplash) around the source of sound,
  atmosphere and perception. Not microphones, but what creates sound:
  water, piano, birds — plus the human dialogue.

  The Unsplash CDN is allow-listed in next.config.ts (images.unsplash.com).
  To swap an image, replace the ID/URL here.
*/

const unsplash = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}` +
  (h ? `&h=${h}` : "");

export type Img = { src: string; alt: string; credit: string };

export const HERO_IMAGE: Img = {
  src: unsplash("photo-1535868118629-f37bcd69ff59", 1800),
  alt: "A water drop meeting a still surface, the moment a signal is born.",
  credit: "Unsplash",
};

// The imagery: the source of sound, atmosphere and perception.
export const SOURCES: Img[] = [
  {
    src: unsplash("photo-1535868118629-f37bcd69ff59", 900, 1125),
    alt: "A water drop with concentric rings, a signal spreading out.",
    credit: "Unsplash",
  },
  {
    src: unsplash("photo-1520523839897-bd0b52f945a0", 900, 1125),
    alt: "Piano keys in warm light, sound as information.",
    credit: "Unsplash",
  },
  {
    src: unsplash("photo-1591089570621-ea86c99a09a6", 900, 1125),
    alt: "A songbird on a branch, natural acoustics and perception.",
    credit: "Unsplash",
  },
];

export const AUDIO_IMAGE: Img = {
  src: unsplash("photo-1520523839897-bd0b52f945a0", 1200),
  alt: "Piano keys in soft daylight.",
  credit: "Unsplash",
};

export const DIALOG_IMAGE: Img = {
  src: unsplash("photo-1573497491208-6b1acb260507", 1200),
  alt: "Two people in dialogue by a bright window.",
  credit: "Unsplash",
};
