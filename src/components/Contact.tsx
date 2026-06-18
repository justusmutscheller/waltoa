import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <Section id="contact" tone="bone" className="text-center">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          Let&rsquo;s give your idea
          <br />
          the sound it deserves.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          Tell us what you&rsquo;re building. We reply thoughtfully, and only
          take on work we believe we can do well.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:hello@waltoa.com" size="lg">
            hello@waltoa.com
          </Button>
          <Button href="#top" variant="outline" size="lg">
            Back to top
          </Button>
        </div>
      </div>
    </Section>
  );
}
