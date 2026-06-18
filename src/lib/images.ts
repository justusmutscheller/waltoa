/*
  Bild-Registry — kuratierte Fotos (Unsplash) rund um die Quelle von Klang,
  Atmosphäre und Wahrnehmung. Keine Mikrofone, sondern das, was Klang erzeugt:
  Wasser, Klavier, Vögel — sowie der menschliche Dialog.

  Unsplash-CDN ist in next.config.ts (images.unsplash.com) freigegeben.
  Zum Austausch einfach die ID/URL hier ersetzen.
*/

const unsplash = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}` +
  (h ? `&h=${h}` : "");

export type Img = { src: string; alt: string; credit: string };

export const HERO_IMAGE: Img = {
  src: unsplash("photo-1535868118629-f37bcd69ff59", 1800),
  alt: "Ein Wassertropfen trifft auf eine ruhige Oberfläche — der Moment, in dem ein Signal entsteht.",
  credit: "Unsplash",
};

// Die Bildwelt: die Quelle von Klang, Atmosphäre und Wahrnehmung.
export const SOURCES: Img[] = [
  {
    src: unsplash("photo-1535868118629-f37bcd69ff59", 900, 1125),
    alt: "Wassertropfen mit konzentrischen Ringen — ein Signal breitet sich aus.",
    credit: "Unsplash",
  },
  {
    src: unsplash("photo-1520523839897-bd0b52f945a0", 900, 1125),
    alt: "Klaviertasten im warmen Licht — Klang als Information.",
    credit: "Unsplash",
  },
  {
    src: unsplash("photo-1591089570621-ea86c99a09a6", 900, 1125),
    alt: "Ein Singvogel auf einem Zweig — natürliche Akustik und Wahrnehmung.",
    credit: "Unsplash",
  },
];

export const AUDIO_IMAGE: Img = {
  src: unsplash("photo-1520523839897-bd0b52f945a0", 1200),
  alt: "Klaviertasten im weichen Tageslicht.",
  credit: "Unsplash",
};

export const DIALOG_IMAGE: Img = {
  src: unsplash("photo-1573497491208-6b1acb260507", 1200),
  alt: "Zwei Menschen im Dialog an einem hellen Fenster.",
  credit: "Unsplash",
};
