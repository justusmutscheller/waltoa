import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { STUDIO_IMAGE } from "@/lib/images";

const SERVICES = [
  {
    title: "Consultancy",
    body: "Strategy and positioning for technical products, from microphones and audio hardware to research-led ventures.",
  },
  {
    title: "Sound & brand identity",
    body: "Designing the voice of a product or company — sonic identity, tone and the language that surrounds it.",
  },
  {
    title: "Technical storytelling",
    body: "Turning complex engineering and research into clear, credible narratives for the people who matter.",
  },
];

export function Studio() {
  return (
    <Section id="studio" tone="bone">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
          <Image
            src={STUDIO_IMAGE.src}
            alt={STUDIO_IMAGE.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <Eyebrow>The studio</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            A consultancy for ideas that make sound.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            WALTOA partners with engineers, founders and research teams who care
            how their work is heard. We are small by design — close to the
            detail, and accountable for it.
          </p>

          <dl className="mt-10 space-y-7">
            {SERVICES.map((s) => (
              <div key={s.title} className="border-t border-hairline pt-5">
                <dt className="font-display text-lg font-medium text-ink">
                  {s.title}
                </dt>
                <dd className="mt-2 leading-relaxed text-stone">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
