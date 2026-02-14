import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CustomerShowcase from "@/components/CustomerShowcase";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-white text-luxury-black relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Fleet />
      <Services />
      <Statistics />
      <Destinations />
      <Packages />
      <Testimonials />
      <CustomerShowcase />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
