import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { IMPRINT } from "@/lib/imprint";

export const metadata: Metadata = {
  title: "Imprint · WALTOA",
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
      eyebrow="Imprint"
      title="Legal notice"
      intro="Information provided in accordance with applicable disclosure requirements."
    >
      <dl>
        <Row label="Company">
          {IMPRINT.companyName}
          <br />
          {IMPRINT.legalForm}
        </Row>
        <Row label="Represented by">{IMPRINT.responsible}</Row>
        <Row label="Address">
          {IMPRINT.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Row>
      </dl>

      <div className="mt-12 space-y-6 border-t border-hairline pt-10 text-sm leading-relaxed text-stone">
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Liability for content
          </h2>
          <p>
            The contents of these pages were created with care. However, we
            assume no liability for the accuracy, completeness or timeliness of
            the content.
          </p>
        </div>
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Copyright
          </h2>
          <p>
            The content and works published on these pages are protected by
            copyright. Any use beyond the limits of copyright law requires the
            prior written consent of {IMPRINT.companyName}.
          </p>
        </div>
      </div>
    </LegalShell>
  );
}
