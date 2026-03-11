import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Footer = dynamic(() => import("@/components/Footer"));
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const CustomerShowcase = dynamic(() => import("@/components/CustomerShowcase"));
const Fleet = dynamic(() => import("@/components/Fleet"));
const Services = dynamic(() => import("@/components/Services"));
const Destinations = dynamic(() => import("@/components/Destinations"));
const PopularTrips = dynamic(() => import("@/components/PopularTrips"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));
const Statistics = dynamic(() => import("@/components/Statistics"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const BackToTop = dynamic(() => import("@/components/BackToTop"));

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-white text-luxury-black relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Statistics />
      <Fleet />
      <Services />
      <Destinations />
      <PopularTrips />
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
