import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WALTOA — Science. Sound. Strategy.",
  description:
    "WALTOA verbindet Akustik, Forschung, Technologie und Kommunikation zu Lösungen, die Menschen hören, verstehen und vertrauen. Akustische Beratung, Audio Design, Forschung & Innovationsstrategie.",
  keywords: [
    "Akustik",
    "Akustische Beratung",
    "Audio Design",
    "Klang",
    "Signalverarbeitung",
    "Forschung",
    "Technologiemarketing",
    "Innovationsstrategie",
  ],
  openGraph: {
    title: "WALTOA — Science. Sound. Strategy.",
    description:
      "Akustik, Forschung, Technologie und Kommunikation — Lösungen, die Menschen hören, verstehen und vertrauen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
