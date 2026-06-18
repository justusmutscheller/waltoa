import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { FOCUS_IMAGES } from "@/lib/images";

const PILLARS = [
  {
    key: "science",
    no: "01",
    title: "Science",
    body: "We start from evidence. Acoustics, perception and measurement inform every recommendation we make — so a claim is never louder than the data behind it.",
  },
  {
    key: "quality",
    no: "02",
    title: "Quality",
    body: "Quality is a discipline, not a finish. We hold the standard from first concept to final master, where small, careful decisions compound into lasting work.",
  },
  {
    key: "research",
    no: "03",
    title: "Research",
    body: "We read deeply and listen widely. Original research and a curious audience let us position technical ideas where they are genuinely understood.",
  },
  {
    key: "audio-design",
    no: "04",
    title: "Audio Design",
    body: "From a product's voice to a brand's signature sound, we design audio with intention — clear, characterful, and true to the thing it represents.",
  },
  {
    key: "atmosphere",
    no: "05",
    title: "Tech & Atmosphere",
    body: "Technology should feel like somewhere. We shape the atmosphere around a product so the experience is as considered as the engineering beneath it.",
  },
];

export function FocusAreas() {
  return (
    <Section id="focus" tone="linen">
      <div className="max-w-2xl">
        <Eyebrow>What we work on</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          Five concerns, held in balance.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-stone">
          WALTOA works across broad territory, but always returns to the same
          five concerns — the things that make technical work both credible and
          worth experiencing.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => {
          const img = FOCUS_IMAGES[p.key];
          return (
            <article
              key={p.key}
              className="group flex flex-col overflow-hidden rounded-2xl bg-bone shadow-card transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="font-display text-xs tracking-[0.3em] text-clay">
                  {p.no}
                </span>
                <h3 className="font-display mt-3 text-xl font-medium text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-stone">
                  {p.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
