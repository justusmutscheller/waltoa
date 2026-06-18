import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { FocusAreas } from "@/components/FocusAreas";
import { Studio } from "@/components/Studio";
import { Ethics } from "@/components/Ethics";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <FocusAreas />
        <Studio />
        <Ethics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
