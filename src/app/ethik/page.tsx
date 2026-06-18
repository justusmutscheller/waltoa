import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { ETHICS_PRINCIPLES } from "@/lib/ethics";

export const metadata: Metadata = {
  title: "Ethik & Verantwortung — WALTOA",
  description:
    "Die Ethik-Richtlinie von WALTOA: wissenschaftliche Integrität, transparente Kommunikation, Nachhaltigkeit, Datenschutz und langfristige Wertschöpfung.",
};

export default function EthikPage() {
  return (
    <LegalShell
      eyebrow="Ethik & Verantwortung"
      title="Wie wir arbeiten — und was wir nicht verhandeln."
      intro="WALTOA arbeitet am Schnittpunkt von Wissenschaft, Kommunikation und Klang. Diese Position bringt Verantwortung mit sich — gegenüber unseren Kund:innen, den Menschen, die die Arbeit erleben, und dem Feld selbst. Diese Grundsätze sind eine dauerhafte Verpflichtung, kein Slogan."
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
        Wenn Sie der Meinung sind, dass wir diesen Grundsätzen nicht gerecht
        geworden sind, möchten wir das erfahren. Schreiben Sie uns — wir
        antworten.
      </p>
    </LegalShell>
  );
}
