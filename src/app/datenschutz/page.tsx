import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { IMPRINT } from "@/lib/imprint";

export const metadata: Metadata = {
  title: "Datenschutz — WALTOA",
  description: "Datenschutzhinweise von WALTOA.",
};

export default function DatenschutzPage() {
  return (
    <LegalShell
      eyebrow="Datenschutz"
      title="Datenschutz"
      intro="Der Schutz Ihrer Daten ist uns wichtig. Diese Hinweise geben einen Überblick darüber, wie wir mit personenbezogenen Daten umgehen. Bitte vor Veröffentlichung an die tatsächlichen Verarbeitungen und Rechtsgrundlagen anpassen."
    >
      <div className="space-y-8 text-sm leading-relaxed text-stone">
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Verantwortliche Stelle
          </h2>
          <p>
            {IMPRINT.companyName}, {IMPRINT.responsible}
            <br />
            {IMPRINT.addressLines.join(", ")}
            <br />
            <a
              href={`mailto:${IMPRINT.email}`}
              className="underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              {IMPRINT.email}
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Erhebung und Verarbeitung
          </h2>
          <p>
            Diese Website wird statisch ausgeliefert und erhebt selbst keine
            personenbezogenen Daten über Formulare oder Tracking. Bei einer
            Kontaktaufnahme per E-Mail verarbeiten wir die übermittelten Angaben
            ausschließlich zur Bearbeitung Ihrer Anfrage.
          </p>
        </div>
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit.
            Wenden Sie sich dazu an die oben genannte verantwortliche Stelle.
          </p>
        </div>
      </div>
    </LegalShell>
  );
}
