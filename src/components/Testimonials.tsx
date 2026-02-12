"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Jenkins",
        location: "United Kingdom",
        text: "The most comfortable journey we've had in India. The driver was professional and the car was immaculate.",
        rating: 5
    },
    {
        name: "Rajesh Kumar",
        location: "Bangalore",
        text: "Excellent service for our corporate event. Timely, professional, and very well coordinated.",
        rating: 5
    },
    {
        name: "Anita Desai",
        location: "Mumbai",
        text: "Booking a wedding fleet with Adam Tours was the best decision. Everything went smoothly.",
        rating: 5
    },
    {
        name: "David Smith",
        location: "Australia",
        text: "A truly premium experience. The driver acted as a perfect guide for our Kerala tour.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <SectionWrapper id="testimonials" className="bg-luxury-white overflow-hidden">
            <div className="text-center mb-16 space-y-4">
                <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Client Stories</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Trusted by Travelers</h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max px-4 pb-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] md-[450px] p-8 rounded-3xl bg-luxury-ivory border border-luxury-black/5 relative shrink-0 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                        >
                            <div className="absolute top-8 right-8 text-gold-metallic/20 group-hover:text-gold-metallic/40 transition-colors">
                                <Quote size={40} fill="currentColor" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" className="text-gold-metallic" />
                                ))}
                            </div>

                            <p className="text-luxury-gray text-lg leading-relaxed mb-6 font-light">
                                &quot;{testimonial.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-metallic/10 flex items-center justify-center text-gold-metallic font-serif font-bold">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-luxury-black">{testimonial.name}</h4>
                                    <p className="text-xs text-luxury-muted uppercase tracking-wider">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
