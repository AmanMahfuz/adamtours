"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
    { name: "Munnar", image: "/locations/munnar.jpg", description: "Hills & Tea Gardens" },
    { name: "Alleppey", image: "/locations/alappuzha.jpg", description: "Backwater Cruises" },
    { name: "Wayanad", image: "/locations/wayanad1.jpg", description: "Nature & Wildlife" },
    { name: "Kochi", image: "/locations/kochi.jpg", description: "Heritage & Culture" },
];

export default function Destinations() {
    return (
        <SectionWrapper id="destinations" className="bg-luxury-ivory">
            <div className="text-center mb-16 space-y-4">
                <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Destinations</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Explore Kerala</h2>
                <p className="text-luxury-gray max-w-2xl mx-auto">
                    Discover the God&apos;s Own Country with our curated travel experiences to the most beautiful locations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destinations.map((dest, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer bg-white shadow-lg"
                    >
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                            <p className="text-gold-metallic text-sm font-bold tracking-widest uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                {dest.description}
                            </p>
                            <h3 className="text-3xl font-serif font-bold text-white relative inline-block">
                                {dest.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-metallic transition-all duration-500 group-hover:w-full" />
                            </h3>
                            <div className="mt-4 overflow-hidden">
                                <p className="text-white/70 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    Click to explore tour packages for {dest.name}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
