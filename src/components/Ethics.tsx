import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { ETHICS_PRINCIPLES } from "@/lib/ethics";

export function Ethics() {
  return (
    <Section id="ethics" tone="linen">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Eyebrow>Ethics guideline</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            The principles we will not trade.
          </h2>
          <p className="mt-5 leading-relaxed text-stone">
            A short, standing commitment to how we work — for clients, for
            audiences, and for the field we work in.
          </p>
          <Link
            href="/ethics"
            className="font-display mt-7 inline-block text-sm tracking-wide text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-stone"
          >
            Read the full guideline
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
