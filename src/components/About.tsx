import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { SOURCES } from "@/lib/images";

const GRUNDLAGE = [
  "Wissenschaftliches Denken",
  "Technische Präzision",
  "Langfristige Qualität",
  "Verantwortungsvolle Innovation",
];

export function About() {
  return (
    <Section id="ueber" tone="bone">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Eyebrow>Über WALTOA</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Klang ist Information.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-xl leading-relaxed text-ink">
            Jede technische Innovation beginnt mit einem Signal. Bei WALTOA
            betrachten wir Akustik, Technologie und Kommunikation als
            zusammenhängendes System.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Wir unterstützen Unternehmen, Forschungseinrichtungen und
            technologieorientierte Projekte dabei, komplexe Ideen hörbar,
            verständlich und wirksam zu machen — vom ersten Messwert bis zur
            fertigen Botschaft.
          </p>

          <p className="eyebrow mt-10 mb-4">Unsere Grundlage</p>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {GRUNDLAGE.map((g) => (
              <li key={g} className="flex items-center gap-3 text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bildwelt: die Quelle von Klang, Atmosphäre und Wahrnehmung */}
      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {SOURCES.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone">
        Unsere Bildwelt zeigt nicht das Mikrofon, sondern die Quelle: den
        Ursprung von Klang, Atmosphäre und Wahrnehmung — vom Wassertropfen über
        das Instrument bis zur Stimme der Natur.
      </p>
    </Section>
  );
}
