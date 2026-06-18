import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { ETHICS_PRINCIPLES, ETHICS_INTRO } from "@/lib/ethics";

export function Ethics() {
  return (
    <Section id="ethik" tone="linen">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Eyebrow>Ethik & Verantwortung</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Grundsätze, die wir nicht verhandeln.
          </h2>
          <p className="mt-5 leading-relaxed text-stone">{ETHICS_INTRO}</p>
          <Link
            href="/ethik"
            className="font-display mt-7 inline-block text-sm tracking-wide text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-stone"
          >
            Vollständige Richtlinie lesen
          </Link>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <ol className="space-y-8">
            {ETHICS_PRINCIPLES.map((p) => (
              <li key={p.no} className="flex gap-6">
                <span className="font-display shrink-0 text-sm tracking-[0.3em] text-clay">
                  {p.no}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
