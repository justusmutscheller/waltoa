import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { IMPRINT } from "@/lib/imprint";

export function Contact() {
  return (
    <Section id="kontakt" tone="bone" className="text-center">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>Kontakt</Eyebrow>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          Gemeinsam neue
          <br />
          Signale setzen.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          Ob Forschungsprojekt, technische Innovation oder strategische
          Entwicklung — wir freuen uns auf den Austausch.
        </p>
        <p className="font-display mt-8 text-sm uppercase tracking-[0.28em] text-clay">
          Science · Sound · Strategy
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${IMPRINT.email}`} size="lg">
            Kontakt aufnehmen
          </Button>
          <Button href="#top" variant="outline" size="lg">
            Nach oben
          </Button>
        </div>
      </div>
    </Section>
  );
}
