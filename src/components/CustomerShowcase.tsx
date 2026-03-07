"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/vehicles/force-urbania-luxury-van-group-tour-1.webp", alt: "Adam Tours Luxury Van" },
    { src: "/vehicles/force-urbania-luxury-van-group-tour-2.webp", alt: "Kerala Premium Travel" },
    { src: "/vehicles/force-urbania-luxury-van-group-tour-3.webp", alt: "Corporate Travel Kerala" },
    { src: "/vehicles/force-urbania-luxury-van-group-tour-4.webp", alt: "Group Tours Journey" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function CustomerShowcase() {
    return (
        <SectionWrapper id="showcase" className="bg-luxury-white overflow-hidden py-0">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center mb-16 space-y-4"
            >
                <motion.span variants={itemVariants} className="text-gold-text text-sm font-bold tracking-[0.2em] uppercase">Visual Journey</motion.span>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Happy Customers</motion.h2>
                <motion.p variants={itemVariants} className="text-luxury-gray max-w-2xl mx-auto font-light leading-relaxed">
                    Real moments captured during our premium tours across India.
                </motion.p>
            </motion.div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6 w-max px-4 pb-20 will-change-transform"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    aria-label="Customer journey photo gallery"
                    role="region"
                >
                    {[...images, ...images].map((image, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[450px] aspect-[4/3] relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-luxury-black/5 group bg-luxury-ivory"
                        >
                            <Image
                                src={image.src}
                                alt={`Customer travel moment in Kerala - ${image.alt}`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 text-white translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                                <p className="font-bold text-xl tracking-tight">Luxury Experience</p>
                                <p className="text-xs opacity-70 uppercase tracking-[0.3em] mt-1 font-bold">Adam Tours India</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
