import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Vollflächiges Bild: der Moment, in dem ein Signal entsteht */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Heller Schleier: Bild bleibt licht, Text bleibt lesbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-bone/70 via-bone/45 to-bone/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-bone/85 via-bone/40 to-transparent" />
      </div>

      <Container className="flex min-h-[94vh] flex-col justify-center pb-24 pt-40">
        <p className="eyebrow mb-7">Akustik · Forschung · Technologie · Kommunikation</p>

        <h1 className="font-display text-6xl font-medium uppercase leading-none tracking-[0.12em] text-ink md:text-8xl">
          Waltoa
        </h1>
        <p className="font-display mt-6 text-2xl font-medium tracking-tight text-ink md:text-4xl">
          Science. Sound. Strategy.
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
          Wir verbinden Forschung, Technologie und Kommunikation zu Lösungen, die
          Menschen hören, verstehen und denen sie vertrauen. Von akustischer
          Beratung über technische Innovationskonzepte bis zur strategischen
          Vermarktung komplexer Technologien.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-4">
          <Button href="#kontakt" size="lg">
            Projekt besprechen
          </Button>
          <Button href="#leistungen" variant="outline" size="lg">
            Leistungen ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
