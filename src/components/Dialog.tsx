import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { DIALOG_IMAGE } from "@/lib/images";

export function Dialog() {
  return (
    <Section id="dialog" tone="bone">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
          <Image
            src={DIALOG_IMAGE.src}
            alt={DIALOG_IMAGE.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <Eyebrow>Sound connects</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Being understood is the real acoustics.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            At the end of every measurement curve and every signal there is a
            person listening. That is why we think about acoustics and
            communication together: we translate complexity into clarity — in the
            product as much as in conversation.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Good communication works like good sound: precise, free of noise and
            tuned to what matters. That is how technical depth becomes a message
            that lands.
          </p>
        </div>
      </div>
    </Section>
  );
}
