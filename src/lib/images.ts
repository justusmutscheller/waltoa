/*
  Central image registry.

  These point at tasteful, on-brand placeholder art in /public/images so the
  site reads as intentional from the first load. To go live, replace each .svg
  with a real photograph of the same name (see /public/images/README.md for the
  curated candidate shortlist and exact dimensions).
*/

export const HERO_IMAGE = {
  src: "/images/hero.svg",
  alt: "A single drop meeting still water — sound beginning as a ripple.",
};

export const STUDIO_IMAGE = {
  src: "/images/studio.svg",
  alt: "Soft daylight across a grand piano in a quiet, bright room.",
};

export type FocusImage = { src: string; alt: string };

export const FOCUS_IMAGES: Record<string, FocusImage> = {
  science: {
    src: "/images/waterdrop.svg",
    alt: "A waterdrop suspended above its own reflection.",
  },
  quality: {
    src: "/images/piano.svg",
    alt: "Close detail of piano keys in warm light.",
  },
  research: {
    src: "/images/bird.svg",
    alt: "A songbird mid-call on a bare branch.",
  },
  "audio-design": {
    src: "/images/wave.svg",
    alt: "A calm waveform rendered as fine lines.",
  },
  atmosphere: {
    src: "/images/atmosphere.svg",
    alt: "Light and shadow falling across a still interior.",
  },
};
