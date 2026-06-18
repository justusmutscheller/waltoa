# Bilder

Die Website nutzt kuratierte Fotos von **Unsplash**, die zur Laufzeit per
`next/image` geladen und optimiert werden (Domain ist in `next.config.ts`
freigegeben). Es liegen daher keine Bilddateien in diesem Ordner.

Alle Bildquellen sind zentral in [`src/lib/images.ts`](../../src/lib/images.ts)
gepflegt. Zum Austausch dort einfach die Unsplash-Foto-ID ersetzen.

## Verwendete Motive (Quelle von Klang, Atmosphäre, Wahrnehmung)

| Stelle              | Motiv                         | Unsplash-ID                         |
| ------------------- | ----------------------------- | ----------------------------------- |
| Hero                | Wassertropfen / Signal        | `photo-1535868118629-f37bcd69ff59`  |
| Über – Bildwelt 1   | Wassertropfen                 | `photo-1535868118629-f37bcd69ff59`  |
| Über – Bildwelt 2   | Klaviertasten                 | `photo-1520523839897-bd0b52f945a0`  |
| Über – Bildwelt 3   | Singvogel am Zweig            | `photo-1591089570621-ea86c99a09a6`  |
| Dialog              | Zwei Menschen im Gespräch     | `photo-1573497491208-6b1acb260507`  |

Idee der Bildwelt: nicht das Mikrofon zeigen, sondern die **Quelle** von Klang —
Wasser, Instrument, Natur — sowie den menschlichen Dialog. Helle, ruhige
Aufnahmen mit viel Licht; kein Dunkel, kein Neon.

## Eigene Fotos verwenden

Eigene Dateien in `public/images/` ablegen und die `src`-Werte in
`src/lib/images.ts` auf den lokalen Pfad (z. B. `/images/hero.jpg`) umstellen.
Format: helle 3:2- bzw. 4:5-Aufnahmen, mindestens ~1600 px breite Seite.
