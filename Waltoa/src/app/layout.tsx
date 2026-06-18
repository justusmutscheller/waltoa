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

// GitHub Pages serves under /waltoa in production; prefix asset URLs to match.
// Host-aware: Vercel serves at the domain root; GitHub Pages serves under /waltoa.
const isVercel = !!process.env.VERCEL;
const basePath =
  !isVercel && process.env.NODE_ENV === "production" ? "/waltoa" : "";
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://justusmutscheller.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630, alt: "WALTOA · Science. Sound. Strategy." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WALTOA · Science. Sound. Strategy.",
    description:
      "Acoustics, research, technology and communication. Solutions people hear, understand and trust.",
    images: [`${basePath}/og.png`],
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
