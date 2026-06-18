import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { IMPRINT } from "@/lib/imprint";

export const metadata: Metadata = {
  title: "Imprint — WALTOA",
  description: "Legal notice and provider identification for WALTOA.",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-hairline py-5 sm:grid-cols-3 sm:gap-6">
      <dt className="eyebrow !mb-0">{label}</dt>
      <dd className="leading-relaxed text-ink sm:col-span-2">{children}</dd>
    </div>
  );
}

export default function ImprintPage() {
  return (
    <LegalShell
      eyebrow="Imprint · Impressum"
      title="Legal notice"
      intro="Information provided in accordance with applicable disclosure requirements. Replace the placeholder details below with the firm's registered information before publishing."
    >
      <dl>
        <Row label="Company">
          {IMPRINT.companyName}
          <br />
          {IMPRINT.legalForm}
        </Row>
        <Row label="Responsible for content">{IMPRINT.responsible}</Row>
        <Row label="Address">
          {IMPRINT.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Row>
        <Row label="Contact">
          <a
            href={`mailto:${IMPRINT.email}`}
            className="underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-stone"
          >
            {IMPRINT.email}
          </a>
          <br />
          {IMPRINT.phone}
        </Row>
        <Row label="VAT identification">{IMPRINT.vatId}</Row>
      </dl>

      <div className="mt-12 space-y-6 border-t border-hairline pt-10 text-sm leading-relaxed text-stone">
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Liability for content
          </h2>
          <p>
            The contents of these pages were created with care. We assume no
            liability for the accuracy, completeness or timeliness of the
            content.
          </p>
        </div>
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Copyright
          </h2>
          <p>
            The content and works on these pages are protected by copyright. Any
            use beyond the limits of copyright law requires the prior written
            consent of {IMPRINT.companyName}.
          </p>
        </div>
      </div>
    </LegalShell>
  );
}
