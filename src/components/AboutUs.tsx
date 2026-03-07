"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Users } from "lucide-react";
import { companyConfig } from "@/lib/config";

const stats = [
    { value: "6+", label: "Years of Excellence" },
    { value: "1,000+", label: "Happy Customers" },
    { value: "4+", label: "Premium Vehicles" },
    { value: "50+", label: "Destinations Covered" }
];

const values = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Your safety is our top priority with well-maintained vehicles and trained drivers"
    },
    {
        icon: Award,
        title: "Premium Quality",
        description: "Luxury fleet and professional service that exceeds expectations"
    },
    {
        icon: Heart,
        title: "Customer Care",
        description: "24/7 support and personalized attention to every journey"
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Experienced drivers who know every route and destination"
    }
];

export default function AboutUs() {
    return (
        <SectionWrapper id="about" className="bg-luxury-white pt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <span className="text-gold-text text-sm font-bold tracking-[0.2em] uppercase">The Legacy</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black leading-tight">
                            About Adam Tours & Travels Kochi
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-luxury-gray font-light leading-relaxed">
                        <p>
                            At <span className="text-gold-metallic font-semibold text-luxury-black">{companyConfig.name}</span>, we don't just provide transportation; we curate experiences. Our journey began with a single vision: to bridge the gap between reliable travel and premium luxury service in India.
                        </p>
                        <p>
                            Today, we stand as a symbol of trust for thousands of travelers worldwide, offering a meticulously maintained fleet and a team of professional chauffeurs who embody our commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold text-luxury-black font-serif">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gold-metallic">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Values / Visuals */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] bg-luxury-ivory border border-luxury-black/5 hover:border-gold-metallic/30 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-gold-metallic group-hover:text-white transition-all duration-500 text-gold-metallic">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-luxury-black mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-luxury-gray text-sm leading-relaxed font-light">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Quote / Commitment */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 p-12 rounded-[3rem] bg-luxury-black text-white relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-metallic/10 rounded-full blur-[100px]" />
                <div className="relative z-10 text-center space-y-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light italic leading-snug max-w-4xl mx-auto">
                        "Your journey is our canvas. Every mile we drive is a stroke of commitment towards your absolute comfort and safety."
                    </p>
                    <div className="w-12 h-[1px] bg-gold-metallic mx-auto" />
                    <p className="text-gold-metallic uppercase tracking-[0.3em] font-bold text-sm">{companyConfig.name} Management</p>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
