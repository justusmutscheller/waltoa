import { Section, Eyebrow } from "@/components/Section";

const SERVICES = [
  {
    no: "01",
    title: "Acoustic consulting",
    body: "Analysis, development and optimisation of acoustic environments, audio technologies and signal processes — from the first measurement to practical application.",
  },
  {
    no: "02",
    title: "Research & development",
    body: "Innovation happens where curiosity meets method. We accompany research projects, technical concepts and experimental development with structure.",
  },
  {
    no: "03",
    title: "Audio design",
    body: "Sound shapes perception more than any visual element. We create sonic identities, sound concepts and sensory experiences for brands and products.",
  },
  {
    no: "04",
    title: "Technology marketing",
    body: "Complex technologies need understandable communication. We translate technical substance into precise messages for investors, customers and partners.",
  },
  {
    no: "05",
    title: "Innovation strategy",
    body: "New ideas only unfold their value through a clear direction. We develop positioning, market strategies and communication systems for technology-driven ventures.",
  },
];

export function Services() {
  return (
    <Section id="services" tone="linen">
      <div className="max-w-2xl">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          From measurement to message.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-stone">
          Five disciplines that work together — connected by a shared
          understanding of sound, signal and effect.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.no}
            className="flex flex-col rounded-2xl bg-bone p-8 shadow-card transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="font-display text-xs tracking-[0.3em] text-clay">
              {s.no}
            </span>
            <h3 className="font-display mt-4 text-xl font-medium text-ink">
              {s.title}
            </h3>
            <p className="mt-3 leading-relaxed text-stone">{s.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
