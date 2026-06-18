import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { SOURCES } from "@/lib/images";

const FOUNDATION = [
  "Scientific thinking",
  "Technical precision",
  "Lasting quality",
  "Responsible innovation",
];

export function About() {
  return (
    <Section id="about" tone="bone">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Eyebrow>About WALTOA</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Sound is information.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-xl leading-relaxed text-ink">
            Every technical innovation begins with a signal. At WALTOA we treat
            acoustics, technology and communication as one connected system.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            We help companies, research institutions and technology-driven
            projects make complex ideas audible, understandable and effective,
            from the first measurement to the finished message.
          </p>

          <p className="eyebrow mt-10 mb-4">Our foundation</p>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {FOUNDATION.map((g) => (
              <li key={g} className="flex items-center gap-3 text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Imagery: the source of sound, atmosphere and perception */}
      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {SOURCES.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone">
        Capturing sound and speech, from the water drop and the instrument to the
        voice of nature.
      </p>
    </Section>
  );
}
