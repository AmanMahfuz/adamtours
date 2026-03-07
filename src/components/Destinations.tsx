"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const destinations = [
    { name: "Munnar", image: "/locations/munnar-tea-gardens-tour-kerala.webp", description: "Hills & Tea Gardens" },
    { name: "Alleppey", image: "/locations/alleppey-backwater-houseboat-cruise.webp", description: "Backwater Cruises" },
    { name: "Wayanad", image: "/locations/wayanad-nature-wildlife-escape-kerala.webp", description: "Nature & Wildlife" },
    { name: "Kochi", image: "/locations/kochi-fort-heritage-tour-kerala.webp", description: "Heritage & Culture" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Destinations() {
    return (
        <SectionWrapper id="destinations" className="bg-luxury-ivory">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center mb-16 space-y-4"
            >
                <motion.span variants={textVariants} className="text-gold-text text-sm font-bold tracking-[0.2em] uppercase block">Destinations</motion.span>
                <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Popular Kerala Tourist Destinations</motion.h2>
                <motion.p variants={textVariants} className="text-luxury-gray max-w-2xl mx-auto font-light leading-relaxed">
                    Discover the God&apos;s Own Country with our curated travel experiences to the most beautiful locations.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {destinations.map((dest, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative aspect-[3/2] rounded-3xl overflow-hidden cursor-pointer bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-700 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-luxury-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-700" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                            <p className="text-gold-metallic text-xs font-bold tracking-[0.25em] uppercase mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                {dest.description}
                            </p>
                            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white relative inline-block">
                                {dest.name}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gold-metallic transition-all duration-500 group-hover:w-full" />
                            </h3>
                            <div className="mt-6 overflow-hidden">
                                <p className="text-white/60 text-sm font-light transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200 uppercase tracking-widest">
                                    Click to explore tour packages
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
