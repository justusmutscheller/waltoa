import { Section, Eyebrow } from "@/components/Section";

const SERVICES = [
  {
    no: "01",
    title: "Akustische Beratung",
    body: "Analyse, Entwicklung und Optimierung akustischer Umgebungen, Audiotechnologien und Signalprozesse — von der ersten Messung bis zur praktischen Anwendung.",
  },
  {
    no: "02",
    title: "Forschung & Entwicklung",
    body: "Innovationen entstehen dort, wo Neugier auf Methodik trifft. Wir begleiten Forschungsprojekte, technische Konzepte und experimentelle Entwicklungen mit Struktur.",
  },
  {
    no: "03",
    title: "Audio Design",
    body: "Klang beeinflusst Wahrnehmung stärker als jedes visuelle Element. Wir entwickeln akustische Identitäten, Soundkonzepte und sensorische Erlebnisse für Marken und Produkte.",
  },
  {
    no: "04",
    title: "Technologiemarketing",
    body: "Komplexe Technologien brauchen verständliche Kommunikation. Wir übersetzen technische Inhalte in präzise Botschaften für Investoren, Kunden und Partner.",
  },
  {
    no: "05",
    title: "Innovationsstrategie",
    body: "Neue Ideen entfalten ihren Wert erst durch eine klare Richtung. Wir entwickeln Positionierungen, Marktstrategien und Kommunikationssysteme für technologiegetriebene Vorhaben.",
  },
];

export function Leistungen() {
  return (
    <Section id="leistungen" tone="linen">
      <div className="max-w-2xl">
        <Eyebrow>Leistungsbereiche</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          Von der Messung bis zur Botschaft.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-stone">
          Fünf Disziplinen, die ineinandergreifen — verbunden durch ein
          gemeinsames Verständnis von Klang, Signal und Wirkung.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.no}
            className="flex flex-col rounded-2xl bg-bone p-8 shadow-card transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="font-display text-xs tracking-[0.3em] text-clay">
              {s.no}
            </span>
            <h3 className="font-display mt-4 text-xl font-medium text-ink">
              {s.title}
            </h3>
            <p className="mt-3 leading-relaxed text-stone">{s.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
