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
  title: "WALTOA — Marketing & audio consultancy for technical ideas",
  description:
    "WALTOA is a marketing and audio consultancy that turns technical ideas into work worth hearing — grounded in science, quality, research, audio design, and a sense of atmosphere.",
  keywords: [
    "audio consultancy",
    "sound branding",
    "marketing",
    "audio design",
    "acoustics",
    "research",
  ],
  openGraph: {
    title: "WALTOA",
    description:
      "Marketing and audio consultancy for technical ideas worth hearing.",
    type: "website",
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
