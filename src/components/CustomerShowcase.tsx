"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/vehicles/urbania1.jpeg", alt: "Customer Journey 1" },
    { src: "/vehicles/urbania2.jpeg", alt: "Customer Journey 2" },
    { src: "/vehicles/urbania3.jpeg", alt: "Customer Journey 3" },
    { src: "/vehicles/urbania4.jpeg", alt: "Customer Journey 4" },
];

export default function CustomerShowcase() {
    return (
        <SectionWrapper id="showcase" className="bg-luxury-white overflow-hidden py-0">
            <div className="text-center mb-12 space-y-4">
                <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Visual Journey</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Happy Customers</h2>
                <p className="text-luxury-gray max-w-2xl mx-auto font-light">
                    Real moments captured during our premium tours across India.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6 w-max px-4 pb-20"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    aria-label="Customer journey photo gallery"
                    role="region"
                >
                    {[...images, ...images].map((image, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[450px] aspect-[4/3] relative rounded-3xl overflow-hidden shadow-xl border border-luxury-black/5 group"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="font-bold text-lg">Premium Experience</p>
                                <p className="text-sm opacity-80 uppercase tracking-widest">Adam Tours India</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
