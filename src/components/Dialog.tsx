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
          <Eyebrow>Klang verbindet</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Verstanden zu werden ist die eigentliche Akustik.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Am Ende jeder Messkurve und jedes Signals steht ein Mensch, der
            zuhört. Deshalb denken wir Akustik und Kommunikation zusammen: Wir
            übersetzen Komplexität in Klarheit — im Produkt wie im Gespräch.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Gute Kommunikation funktioniert wie guter Klang: präzise, frei von
            Rauschen und auf das Wesentliche abgestimmt. So entsteht aus
            technischer Tiefe eine Botschaft, die ankommt.
          </p>
        </div>
      </div>
    </Section>
  );
}
