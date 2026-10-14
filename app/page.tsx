import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import CapabilitySection from "@/components/CapabilitySection";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <CapabilitySection />
        <Experience />
        <Leadership />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
