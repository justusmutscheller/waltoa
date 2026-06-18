import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
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
        <Services />
        <Philosophy />
        <Ethics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
