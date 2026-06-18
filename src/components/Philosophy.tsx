import { Section, Eyebrow } from "@/components/Section";

export function Philosophy() {
  return (
    <Section id="philosophy" tone="bone" className="text-center">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Philosophy</Eyebrow>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          Precision over volume.
        </h2>
        <p className="mt-8 text-xl leading-relaxed text-ink">
          We don&rsquo;t believe in attention at any cost. We believe in
          solutions that work over the long term, are grounded in data and create
          real impact.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          Technology shouldn&rsquo;t only be innovative. It should be meaningful.
        </p>
      </div>
    </Section>
  );
}
