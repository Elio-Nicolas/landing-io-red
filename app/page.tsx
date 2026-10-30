import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import type { Metadata } from "next";
import HowWeWork from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "Desarrollo de software a medida y productos digitales",
  description:
    "IORed Software Arg. crea aplicaciones web, sistemas y productos digitales. Conocé MiFarma, MascotasVM y MiBus.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <Services />
        <Projects />
        <ValueProposition />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
