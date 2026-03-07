import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { companyConfig } from "@/lib/config";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-luxury-white text-luxury-black">
            <Navbar />

            <SectionWrapper className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4 text-center">
                        <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Agreement</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black">Terms of Service</h1>
                        <p className="text-luxury-muted text-sm">Last Updated: February 22, 2026</p>
                    </div>

                    <div className="prose prose-luxury max-w-none space-y-8 text-luxury-gray leading-relaxed font-light">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the services provided by {companyConfig.name}, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">2. Booking and Payments</h2>
                            <p>
                                All bookings are subject to availability. Prices quoted are based on current rates and are subject to change without notice. Full or partial payment may be required at the time of booking or upon completion of the service, as specified in your booking confirmation.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">3. Cancellation Policy</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Free cancellation up to 24 hours before the scheduled transfer.</li>
                                <li>Cancellations within 24 hours may incur a 25% service charge.</li>
                                <li>No-shows will be charged the full amount of the booking.</li>
                                <li>Special event bookings (Weddings, Large Groups) may have different terms specified at the time of booking.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">4. User Conduct</h2>
                            <p>
                                Passengers are expected to maintain decorum and treat the vehicle and chauffeur with respect. Any damage to the vehicle caused by the passenger or their guests will be billed to the person who made the booking.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">5. Limitation of Liability</h2>
                            <p>
                                {companyConfig.name} shall not be liable for delays caused by traffic, weather, or other circumstances beyond our control. Our total liability is limited to the amount paid for the specific service in question.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">6. Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Kerala.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
