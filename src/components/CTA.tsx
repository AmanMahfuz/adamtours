"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export default function CTA() {
    const scrollToBooking = () => {
        const element = document.getElementById("hero");
        if (element) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const openWhatsApp = () => {
        const phoneNumber = "919876543210";
        const message = "Hi! I need assistance with booking.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <SectionWrapper id="contact" className="bg-luxury-white relative overflow-hidden py-32">
            <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black">
                    Ready to Travel in <span className="text-gold-metallic">Style?</span>
                </h2>
                <p className="text-lg text-luxury-gray leading-relaxed">
                    Contact us today to book your premium vehicle or plan your dream Kerala vacation with Adam Tours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button variant="primary" onClick={scrollToBooking} className="px-10 py-4 text-lg">
                        Book a Ride
                    </Button>
                    <Button variant="outline" onClick={openWhatsApp} className="px-10 py-4 text-lg">
                        Contact Support
                    </Button>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-highlight/5 rounded-full blur-[100px] pointer-events-none" />
        </SectionWrapper>
    );
}
