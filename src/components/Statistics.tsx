"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Car, MapPin, Award } from "lucide-react";

const stats = [
    { icon: Award, value: 10, suffix: "+", label: "Years in Business" },
    { icon: Users, value: 5000, suffix: "+", label: "Happy Customers" },
    { icon: Car, value: 50, suffix: "+", label: "Premium Vehicles" },
    { icon: MapPin, value: 100, suffix: "+", label: "Destinations" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <SectionWrapper className="bg-luxury-black text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-metallic/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-metallic/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center group"
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-metallic/10 flex items-center justify-center text-gold-metallic group-hover:bg-gold-metallic group-hover:text-white transition-all duration-300">
                            <stat.icon size={28} strokeWidth={1.5} />
                        </div>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-metallic mb-2">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            {stat.suffix}
                        </div>
                        <p className="text-sm text-white/70 uppercase tracking-wider font-semibold">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
