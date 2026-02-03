import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import HowWeWork from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida",
  description:
    "Creamos aplicaciones web y software a medida para empresas que buscan soluciones tecnológicas sólidas y escalables.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className= "pt-28">
        <Hero />
        <HowWeWork/>
        <Services />
        <ValueProposition />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
