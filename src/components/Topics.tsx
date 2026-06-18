import { Section, Eyebrow } from "@/components/Section";

const TOPICS = [
  { title: "Research", body: "New insight grows from careful observation." },
  { title: "Acoustics", body: "The science of hearing and understanding." },
  { title: "Sustainable technology", body: "Solutions with long-term value." },
  { title: "Artificial intelligence", body: "Intelligent systems for analysis and optimisation." },
  { title: "Signal processing", body: "The foundation of modern communication." },
  { title: "Human experience", body: "How people perceive and experience technology." },
];

export function Topics() {
  return (
    <Section id="topics" tone="linen">
      <div className="max-w-2xl">
        <Eyebrow>Topics</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          Where we think and work.
        </h2>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
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
