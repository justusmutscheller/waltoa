import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Footer } from "@/components/Footer";

export function LegalShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-hairline bg-bone/80 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl font-medium uppercase tracking-[0.42em] text-ink"
          >
            Waltoa
          </Link>
          <Link
            href="/"
            className="font-display text-sm tracking-wide text-stone transition-colors hover:text-ink"
          >
            ← Zur Startseite
          </Link>
        </Container>
      </header>

      <main className="bg-bone">
        <Container className="max-w-3xl py-24 md:py-32">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 text-lg leading-relaxed text-stone">{intro}</p>
          ) : null}
          <div className="mt-14">{children}</div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
