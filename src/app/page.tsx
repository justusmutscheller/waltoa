import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Leistungen } from "@/components/Leistungen";
import { Dialog } from "@/components/Dialog";
import { Themen } from "@/components/Themen";
import { Philosophy } from "@/components/Philosophy";
import { Ethics } from "@/components/Ethics";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Leistungen />
        <Dialog />
        <Themen />
        <Philosophy />
        <Ethics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
