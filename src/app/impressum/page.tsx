import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { IMPRINT } from "@/lib/imprint";

export const metadata: Metadata = {
  title: "Impressum — WALTOA",
  description: "Impressum und Anbieterkennzeichnung von WALTOA.",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-hairline py-5 sm:grid-cols-3 sm:gap-6">
      <dt className="eyebrow !mb-0">{label}</dt>
      <dd className="leading-relaxed text-ink sm:col-span-2">{children}</dd>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <LegalShell
      eyebrow="Impressum"
      title="Impressum"
      intro="Angaben gemäß den geltenden Kennzeichnungspflichten. Bitte die Platzhalter unten vor Veröffentlichung durch die registrierten Angaben des Unternehmens ersetzen."
    >
      <dl>
        <Row label="Unternehmen">
          {IMPRINT.companyName}
          <br />
          {IMPRINT.legalForm}
        </Row>
        <Row label="Verantwortlich für den Inhalt">{IMPRINT.responsible}</Row>
        <Row label="Anschrift">
          {IMPRINT.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Row>
        <Row label="Kontakt">
          <a
            href={`mailto:${IMPRINT.email}`}
            className="underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-stone"
          >
            {IMPRINT.email}
          </a>
          <br />
          {IMPRINT.phone}
        </Row>
        <Row label="USt-IdNr.">{IMPRINT.vatId}</Row>
      </dl>

      <div className="mt-12 space-y-6 border-t border-hairline pt-10 text-sm leading-relaxed text-stone">
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Haftung für Inhalte
          </h2>
          <p>
            Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
            jedoch keine Gewähr übernehmen.
          </p>
        </div>
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Urheberrecht
          </h2>
          <p>
            Die auf diesen Seiten veröffentlichten Inhalte und Werke unterliegen
            dem Urheberrecht. Jede Verwertung außerhalb der Grenzen des
            Urheberrechts bedarf der vorherigen schriftlichen Zustimmung von{" "}
            {IMPRINT.companyName}.
          </p>
        </div>
      </div>
    </LegalShell>
  );
}
