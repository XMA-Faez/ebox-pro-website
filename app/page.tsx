import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import TransportSolutions from "@/components/TransportSolutions";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Capabilities />
      <Services />
      <TransportSolutions />
      <ProcessSteps />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
