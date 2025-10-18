import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import KeyUSPs from "@/components/KeyUSPs";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      <Hero />
      <KeyUSPs />
      <Services />
      <ProcessSteps />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
