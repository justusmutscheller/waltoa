import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { IMPRINT } from "@/lib/imprint";

export function Contact() {
  return (
    <Section id="contact" tone="bone" className="text-center">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          Let&rsquo;s set new
          <br />
          signals together.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          Whether it&rsquo;s a research project, a technical innovation or a
          strategic initiative, we look forward to the conversation.
        </p>
        <p className="font-display mt-8 text-sm uppercase tracking-[0.28em] text-clay">
          Science · Sound · Strategy
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${IMPRINT.email}`} size="lg">
            Get in touch
          </Button>
          <Button href="#top" variant="outline" size="lg">
            Back to top
          </Button>
        </div>
      </div>
    </Section>
  );
}
