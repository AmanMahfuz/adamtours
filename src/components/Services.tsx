"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { Plane, Calendar, Shield, Map, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description: "Seamless pickup and drop-off services for all major airports."
    },
    {
        icon: Calendar,
        title: "Corporate Events",
        description: "Premium transport solutions for business meetings and events."
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        description: "Certified drivers and 24/7 GPS tracking for your safety."
    },
    {
        icon: Map,
        title: "Tour Packages",
        description: "Customized itineraries for exploring the beauty of Kerala."
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock customer assistance for peace of mind."
    },
    {
        icon: Headphones,
        title: "Wedding Travel",
        description: "Luxury fleets for your special day to make it memorable."
    }
];

export default function Services() {
    return (
        <SectionWrapper id="services" className="bg-luxury-white">
            <div className="text-center mb-16 space-y-4">
                <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Why Choose Our Kochi Taxi Service</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-white border border-luxury-black/5 hover:border-gold-metallic/30 hover:shadow-[0_10px_30px_rgba(198,168,79,0.1)] transition-all duration-300 transform-gpu will-change-transform"
                    >
                        <div className="w-14 h-14 rounded-full bg-luxury-ivory flex items-center justify-center text-gold-metallic mb-6 group-hover:bg-gold-metallic group-hover:text-white transition-all duration-300">
                            <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-luxury-black mb-3 group-hover:text-gold-metallic transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-luxury-gray leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
