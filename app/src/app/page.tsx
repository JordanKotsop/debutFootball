import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Agent from "@/components/Agent";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Parents from "@/components/Parents";
import Cities from "@/components/Cities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Agent />
      <Services />
      <Process />
      <Parents />
      <Cities />
      <Contact />
      <Footer />
    </main>
  );
}
