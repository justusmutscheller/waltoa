import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IMPRINT } from "@/lib/imprint";

const NAV = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Forschung", href: "/#themen" },
  { label: "Audio Design", href: "/#leistungen" },
  { label: "Technologie", href: "/#themen" },
  { label: "Ethik", href: "/#ethik" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-linen-deep">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Wortmarke */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-medium uppercase tracking-[0.42em] text-ink">
              Waltoa
            </p>
            <p className="font-display mt-3 text-sm uppercase tracking-[0.28em] text-stone">
              Science · Sound · Strategy
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-stone">
              Akustik, Forschung, Technologie und Kommunikation — Lösungen, die
              Menschen hören, verstehen und denen sie vertrauen.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Impressum */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Impressum</p>
            <address className="space-y-1 not-italic leading-relaxed text-stone">
              <p className="text-ink">{IMPRINT.companyName}</p>
              <p>{IMPRINT.responsible}</p>
              {IMPRINT.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a
                  href={`mailto:${IMPRINT.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {IMPRINT.email}
                </a>
              </p>
            </address>
            <Link
              href="/impressum"
              className="font-display mt-4 inline-block text-sm tracking-wide text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-stone"
            >
              Vollständiges Impressum
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-sm text-stone sm:flex-row sm:items-center">
          <p>
            © {year} {IMPRINT.companyName}. Alle Rechte vorbehalten.
            <span className="ml-2 text-stone/70">Fotografie: Unsplash</span>
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-ink">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-ink">
              Datenschutz
            </Link>
            <Link href="/ethik" className="transition-colors hover:text-ink">
              Ethik
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
