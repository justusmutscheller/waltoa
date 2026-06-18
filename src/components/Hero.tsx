import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Full-bleed editorial photograph */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Bright wash so the image stays light and text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-bone/80 via-bone/55 to-bone/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-bone/70 to-transparent" />
      </div>

      <Container className="flex min-h-[92vh] flex-col justify-center pb-24 pt-40">
        <p className="eyebrow mb-7">Marketing · Audio · Consultancy</p>

        <h1 className="font-display max-w-4xl text-balance text-5xl font-medium leading-[1.04] tracking-tight text-ink md:text-7xl">
          Technical ideas,
          <br />
          worth hearing.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone">
          WALTOA is a marketing and audio consultancy for technical ideas of
          every kind. We work where science, craft and atmosphere meet — giving
          considered work the clarity, quality and sound it deserves.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-4">
          <Button href="#focus" size="lg">
            What we work on
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Start a conversation
          </Button>
        </div>
      </Container>
    </section>
  );
}
