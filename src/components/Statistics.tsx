"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Car, MapPin, Award } from "lucide-react";

const stats = [
    { icon: Award, value: 6, suffix: "+", label: "Years in Business" },
    { icon: Users, value: 1000, suffix: "+", label: "Happy Customers" },
    { icon: Car, value: 4, suffix: "+", label: "Premium Vehicles" },
    { icon: MapPin, value: 50, suffix: "+", label: "Destinations" },
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

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true, margin: "-150px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
        return () => unsubscribe();
    }, [springValue]);

    return (
        <span ref={ref} className="inline-block">
            0
        </span>
    );
}

export default function Statistics() {
    return (
        <SectionWrapper id="statistics" className="bg-luxury-black text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-metallic/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-metallic/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-center group transform-gpu will-change-transform"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center text-gold-metallic group-hover:bg-gold-metallic group-hover:text-white transition-all duration-500 border border-white/10 shadow-lg">
                            <stat.icon size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gold-metallic mb-3">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            {stat.suffix}
                        </div>
                        <p className="text-xs sm:text-sm text-white/50 uppercase tracking-[0.25em] font-bold">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
