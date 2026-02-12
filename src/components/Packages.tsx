"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const packages = [
    {
        name: "Airport Executive",
        price: "₹3,500",
        duration: "Per Transfer",
        features: [
            "Luxury Sedan Pickup",
            "Meet & Greet",
            "Luggage Assistance",
            "Mineral Water & Newspapers",
            "Wait Time Included (60 mins)"
        ],
        recommended: false
    },
    {
        name: "Kerala Highlights",
        price: "₹45,000",
        duration: "5 Days / 4 Nights",
        features: [
            "Premium SUV Disposal",
            "Munnar - Thekkady - Alleppey",
            "Houseboat Cruise",
            "4-Star Accommodation",
            "Certified Guide"
        ],
        recommended: true
    },
    {
        name: "Wedding Fleet",
        price: "Custom",
        duration: "Full Day Event",
        features: [
            "Luxury Wedding Car",
            "Decorations Included",
            "Guest Transport (Bus/Van)",
            "Uniformed Chauffeurs",
            "On-site Coordinator"
        ],
        recommended: false
    }
];

export default function Packages() {
    return (
        <SectionWrapper id="packages" className="bg-luxury-ivory">
            <div className="text-center mb-16 space-y-4">
                <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Best Offers</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Curated Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative p-8 rounded-3xl border transition-all duration-300 group
              ${pkg.recommended
                                ? "bg-white border-gold-metallic/30 shadow-[0_20px_50px_rgba(198,168,79,0.15)] scale-105 z-10"
                                : "bg-white border-luxury-black/5 hover:border-gold-metallic/20 hover:shadow-lg"
                            }`}
                    >
                        {pkg.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-metallic text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                                Most Popular
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-luxury-black mb-2">{pkg.name}</h3>
                            <div className="text-gold-metallic font-serif text-4xl font-bold mb-1">{pkg.price}</div>
                            <p className="text-luxury-muted text-sm">{pkg.duration}</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-luxury-gray text-sm">
                                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.recommended ? "bg-gold-metallic/10 text-gold-metallic" : "bg-luxury-black/5 text-luxury-black/40"}`}>
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={pkg.recommended ? "primary" : "outline"}
                            className={`w-full ${!pkg.recommended && "hover:border-gold-metallic hover:text-gold-metallic"}`}
                        >
                            Book Now
                        </Button>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
