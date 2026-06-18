import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { IMPRINT } from "@/lib/imprint";

export const metadata: Metadata = {
  title: "Privacy — WALTOA",
  description: "Privacy notice for WALTOA.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Privacy"
      title="Privacy notice"
      intro="Protecting your data matters to us. This notice gives an overview of how we handle personal data. Please adapt it to your actual processing activities and legal bases before publishing."
    >
      <div className="space-y-8 text-sm leading-relaxed text-stone">
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Controller
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
            Collection and processing
          </h2>
          <p>
            This website is served statically and does not itself collect
            personal data through forms or tracking. If you contact us by email,
            we process the information you provide solely to handle your enquiry.
          </p>
        </div>
        <div>
          <h2 className="font-display mb-2 text-base font-medium text-ink">
            Your rights
          </h2>
          <p>
            You have the right to access, rectification, erasure, restriction of
            processing and data portability. To exercise these rights, please
            contact the controller named above.
          </p>
        </div>
      </div>
    </LegalShell>
  );
}
