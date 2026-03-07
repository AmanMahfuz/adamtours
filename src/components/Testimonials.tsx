"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Arun Nair",
        location: "Kochi",
        text: "The most comfortable journey we've had in India. The driver was professional and the car was immaculate.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arun&backgroundColor=f0e68c"
    },
    {
        name: "Rajesh Kumar",
        location: "Bangalore",
        text: "Excellent service for our corporate event. Timely, professional, and very well coordinated.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh&backgroundColor=deb887"
    },
    {
        name: "Priya Sharma",
        location: "Mumbai",
        text: "Booking a wedding fleet with Adam Tours was the best decision. Everything went smoothly.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=f5deb3"
    },
    {
        name: "Rahul Menon",
        location: "Chennai",
        text: "A truly premium experience. The driver acted as a perfect guide for our Kerala tour.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=e6d5b8"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Testimonials() {
    return (
        <SectionWrapper id="testimonials" className="bg-luxury-white overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center mb-16 space-y-4"
            >
                <motion.span variants={itemVariants} className="text-gold-text text-sm font-bold tracking-[0.2em] uppercase">Client Stories</motion.span>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">What Our Customers Say</motion.h2>
            </motion.div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6 w-max px-4 pb-20 will-change-transform"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    aria-label="Customer journey photo gallery"
                    role="region"
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] p-10 rounded-3xl bg-luxury-ivory border border-luxury-black/5 relative shrink-0 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform-gpu"
                        >
                            <div className="absolute top-10 right-10 text-gold-metallic/10 group-hover:text-gold-metallic/30 transition-colors duration-500">
                                <Quote size={60} fill="currentColor" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" className="text-gold-metallic" />
                                ))}
                            </div>

                            <p className="text-luxury-gray text-lg leading-relaxed mb-8 font-light italic">
                                &quot;{testimonial.text}&quot;
                            </p>

                            <div className="flex items-center gap-5">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-metallic/10 group-hover:border-gold-metallic/40 transition-all duration-500 shrink-0 shadow-sm">
                                    <Image
                                        src={testimonial.image}
                                        alt={`Review from ${testimonial.name} - ${testimonial.location}`}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-luxury-black text-lg">{testimonial.name}</h3>
                                    <p className="text-[10px] text-luxury-muted uppercase tracking-[0.2em] font-bold">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
