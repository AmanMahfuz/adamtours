"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, Car } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-luxury-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold-highlight/10 to-transparent rounded-bl-full pointer-events-none" />

            <SectionWrapper className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column: Text Content & CTAs */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-black/5 border border-luxury-black/10 mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-gold-metallic animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider text-luxury-black">Available 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-luxury-black tracking-tight leading-[1.1]">
                            Kochi Taxi Service <br />
                            <span className="text-gold-metallic">Premium Cabs</span>
                        </h1>

                        <p className="text-base md:text-lg text-luxury-gray max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                            Book reliable Kochi taxi services for airport transfers, city rides, and Kerala tour packages. Comfortable vehicles with experienced drivers serving all Kerala destinations.
                        </p>
                    </motion.div>

                    {/* CTA Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                    >
                        <Button
                            variant="primary"
                            className="w-full sm:w-auto px-10 py-5 text-lg shadow-lg shadow-gold-metallic/20 hover:scale-105 transition-transform"
                            onClick={() => window.location.href = "#packages"}
                        >
                            Book Your Journey
                            <ArrowRight size={20} className="ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto px-8 py-4 text-lg border-luxury-black/10 text-luxury-black hover:bg-luxury-black/5"
                            onClick={() => window.location.href = "#fleet"}
                        >
                            View Taxi Fleet
                        </Button>
                    </motion.div>

                    {/* SEO Trust Badges (Quick Reads) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
                    >
                        <div className="flex items-center gap-2 text-sm text-luxury-gray font-medium">
                            <span className="text-gold-metallic">✔</span> 24/7 Taxi Service
                        </div>
                        <div className="flex items-center gap-2 text-sm text-luxury-gray font-medium">
                            <span className="text-gold-metallic">✔</span> Professional Drivers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-luxury-gray font-medium">
                            <span className="text-gold-metallic">✔</span> Clean Vehicles
                        </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-8 justify-center lg:justify-start pt-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-luxury-ivory overflow-hidden relative">
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Avatar${i}`}
                                        alt={`Customer testimonial avatar ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-left">
                            <div className="font-bold text-luxury-black">1k+ Happy Travelers</div>
                            <div className="text-luxury-muted">Professional & Reliable Service</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative hidden lg:block h-full min-h-[600px]"
                >
                    <div className="absolute inset-0 bg-luxury-ivory rounded-[3rem] overflow-hidden border border-luxury-black/5 shadow-xl">
                        <Image
                            src="/vehicles/force-urbania-luxury-van-group-tour-3.webp"
                            alt="Premium Luxury Force Urbania travel van for group tours in Kerala - Adam Tours & Travels"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-80" />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-metallic/10 rounded-full blur-3xl" />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 -left-12 bg-white/95 backdrop-blur-sm rounded-2xl border border-luxury-black/5 p-5 flex items-center gap-4 shadow-lg z-30 max-w-[200px]"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold">
                            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div>
                            <p className="text-xs text-luxury-muted uppercase tracking-wider font-bold">Status</p>
                            <p className="text-sm font-bold text-luxury-black leading-tight">Drivers Nearby</p>
                        </div>
                    </motion.div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
