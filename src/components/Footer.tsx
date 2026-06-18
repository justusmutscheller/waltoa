import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IMPRINT } from "@/lib/imprint";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Research", href: "/#topics" },
  { label: "Audio design", href: "/#services" },
  { label: "Technology", href: "/#topics" },
  { label: "Ethics", href: "/#ethics" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-linen-deep">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Wordmark */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-medium uppercase tracking-[0.42em] text-ink">
              Waltoa
            </p>
            <p className="font-display mt-3 text-sm uppercase tracking-[0.28em] text-stone">
              Science · Sound · Strategy
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-stone">
              Acoustics, research, technology and communication — solutions
              people hear, understand and trust.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigate</p>
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

          {/* Imprint */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Imprint</p>
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
              href="/imprint"
              className="font-display mt-4 inline-block text-sm tracking-wide text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-stone"
            >
              Full legal notice
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-sm text-stone sm:flex-row sm:items-center">
          <p>
            © {year} {IMPRINT.companyName}. All rights reserved.
            <span className="ml-2 text-stone/70">Photography: Unsplash</span>
          </p>
          <div className="flex gap-6">
            <Link href="/imprint" className="transition-colors hover:text-ink">
              Imprint
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/ethics" className="transition-colors hover:text-ink">
              Ethics
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
