import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { ETHICS_PRINCIPLES } from "@/lib/ethics";

export const metadata: Metadata = {
  title: "Ethics guideline — WALTOA",
  description:
    "WALTOA's standing ethics guideline: honesty, integrity in research, quality, and respect for the listener.",
};

export default function EthicsPage() {
  return (
    <LegalShell
      eyebrow="Ethics guideline"
      title="How we work, and what we won't trade."
      intro="WALTOA works at the meeting point of science, marketing and sound. That position carries responsibility — to our clients, to the people who experience the work, and to the field itself. These principles are a standing commitment, not a slogan."
    >
      <ol className="space-y-10">
        {ETHICS_PRINCIPLES.map((p) => (
          <li key={p.no} className="flex gap-6 border-t border-hairline pt-8">
            <span className="font-display shrink-0 text-sm tracking-[0.3em] text-clay">
              {p.no}
            </span>
            <div>
              <h2 className="font-display text-xl font-medium text-ink">
                {p.title}
              </h2>
              <p className="mt-3 leading-relaxed text-stone">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-14 border-t border-hairline pt-10 text-sm leading-relaxed text-stone">
        If you believe we have fallen short of these principles, we want to know.
        Write to us and we will respond.
      </p>
    </LegalShell>
  );
}
