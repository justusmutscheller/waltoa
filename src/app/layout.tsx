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
  metadataBase: new URL("https://justusmutscheller.github.io"),
  title: "WALTOA · Science. Sound. Strategy.",
  description:
    "WALTOA connects acoustics, research, technology and communication into solutions people hear, understand and trust. Acoustic consulting, audio design, research & innovation strategy.",
  keywords: [
    "acoustics",
    "acoustic consulting",
    "audio design",
    "sound",
    "signal processing",
    "research",
    "technology marketing",
    "innovation strategy",
  ],
  openGraph: {
    title: "WALTOA · Science. Sound. Strategy.",
    description:
      "Acoustics, research, technology and communication. Solutions people hear, understand and trust.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
