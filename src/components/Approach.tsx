import { Section, Eyebrow } from "@/components/Section";

export function Approach() {
  return (
    <Section id="approach" tone="bone">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Calm, considered, and quietly precise.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-xl leading-relaxed text-ink">
            We believe the best technical work deserves to be understood — and
            felt. WALTOA sits between the laboratory and the listening room,
            translating rigorous ideas into clear stories and considered sound.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Our practice is deliberately unhurried. We read the research, test
            the claims, and shape every detail with the restraint of a good
            interior: nothing loud, nothing wasted. The result is work that
            feels honest, holds its quality over time, and carries its own
            atmosphere into the room.
          </p>
        </div>
      </div>
    </Section>
  );
}
