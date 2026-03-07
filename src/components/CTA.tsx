"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { companyConfig, getWhatsAppUrl } from "@/lib/config";

export default function CTA() {
    const scrollToBooking = () => {
        const element = document.getElementById("hero");
        if (element) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const openWhatsApp = () => {
        window.open(getWhatsAppUrl("Hi! I need assistance with booking."), '_blank');
    };

    return (
        <SectionWrapper id="contact" className="bg-luxury-white relative overflow-hidden py-32">
            <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black">
                    Contact Adam Tours & <span className="text-gold-metallic">Travels</span>
                </h2>
                <p className="text-lg text-luxury-gray leading-relaxed">
                    Book your reliable Kochi taxi service today. Available 24/7 for airport transfers and Kerala tour packages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button variant="primary" onClick={scrollToBooking} className="px-10 py-4 text-lg">
                        Call Now
                    </Button>
                    <Button variant="outline" onClick={openWhatsApp} className="px-10 py-4 text-lg">
                        WhatsApp Booking
                    </Button>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-highlight/5 rounded-full blur-[100px] pointer-events-none" />
        </SectionWrapper>
    );
}
