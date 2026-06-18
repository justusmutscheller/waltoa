import { Section, Eyebrow } from "@/components/Section";

export function Philosophy() {
  return (
    <Section id="philosophie" tone="bone" className="text-center">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Philosophie</Eyebrow>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          Präzision vor Lautstärke.
        </h2>
        <p className="mt-8 text-xl leading-relaxed text-ink">
          Wir glauben nicht an Aufmerksamkeit um jeden Preis. Wir glauben an
          Lösungen, die langfristig funktionieren, auf Daten basieren und echte
          Wirkung erzeugen.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          Technologie sollte nicht nur innovativ sein. Sie sollte sinnvoll sein.
        </p>
      </div>
    </Section>
  );
}
