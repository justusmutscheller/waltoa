import { Section, Eyebrow } from "@/components/Section";

const THEMEN = [
  { title: "Forschung", body: "Neue Erkenntnisse entstehen durch sorgfältige Beobachtung." },
  { title: "Akustik", body: "Die Wissenschaft des Hörens und Verstehens." },
  { title: "Nachhaltige Technologien", body: "Lösungen mit langfristigem Nutzen." },
  { title: "Künstliche Intelligenz", body: "Intelligente Systeme für Analyse und Optimierung." },
  { title: "Signalverarbeitung", body: "Die Grundlage moderner Kommunikation." },
  { title: "Human Experience", body: "Wie Menschen Technologie wahrnehmen und erleben." },
];

export function Themen() {
  return (
    <Section id="themen" tone="linen">
      <div className="max-w-2xl">
        <Eyebrow>Themenfelder</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          Wo wir denken und arbeiten.
        </h2>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {THEMEN.map((t) => (
          <div key={t.title} className="border-t border-hairline pt-5">
            <h3 className="font-display text-lg font-medium text-ink">
              {t.title}
            </h3>
            <p className="mt-2 leading-relaxed text-stone">{t.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
