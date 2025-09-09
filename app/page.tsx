import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import EcommerceShowcase from "@/components/EcommerceShowcase";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <EcommerceShowcase />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <CTASection />
        {/* Calculator section placeholder */}
        <section id="calculator" className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Cost Calculator</h2>
            <p className="text-neutral-600">Interactive cost calculator coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
