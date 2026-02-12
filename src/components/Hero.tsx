"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Calendar, Phone, ArrowRight, Car } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
    const [formData, setFormData] = useState({
        pickup: "",
        drop: "",
        date: "",
        time: "",
        vehicle: "sedan"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.pickup || !formData.drop || !formData.date || !formData.time) {
            alert("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert(`Booking request submitted!\nTrip: ${tripType}\nFrom: ${formData.pickup}\nTo: ${formData.drop}\nDate: ${formData.date}\nTime: ${formData.time}\nVehicle: ${formData.vehicle}`);
            setIsSubmitting(false);
        }, 1000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-luxury-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold-highlight/10 to-transparent rounded-bl-full pointer-events-none" />

            <SectionWrapper className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column: Text & Booking Widget */}
                <div className="space-y-8">
                    {/* Text Content */}
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
                            Reliable Cabs & <br />
                            <span className="text-gold-metallic">Premium Tours</span>
                        </h1>

                        <p className="text-base md:text-lg text-luxury-gray max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Professional taxi service for airport transfers, outstation trips, and daily commutes.
                        </p>
                    </motion.div>

                    {/* Booking Widget (Now on Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-luxury-black/5 p-6 md:p-8 relative z-20"
                    >
                        <div className="mb-6 pb-6 border-b border-luxury-black/5 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-luxury-black">Book a Ride</h3>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setTripType("oneway")}
                                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${tripType === "oneway"
                                        ? "bg-gold-metallic text-white"
                                        : "bg-luxury-ivory text-luxury-gray hover:bg-luxury-black/5"
                                        }`}
                                >
                                    One Way
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setTripType("roundtrip")}
                                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${tripType === "roundtrip"
                                        ? "bg-gold-metallic text-white"
                                        : "bg-luxury-ivory text-luxury-gray hover:bg-luxury-black/5"
                                        }`}
                                >
                                    Round Trip
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-luxury-muted uppercase tracking-wider">Pickup</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-metallic" size={18} />
                                        <input
                                            type="text"
                                            name="pickup"
                                            value={formData.pickup}
                                            onChange={handleInputChange}
                                            placeholder="Location"
                                            className="w-full bg-luxury-ivory rounded-xl pl-12 pr-4 py-3 text-luxury-black font-medium focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-luxury-muted uppercase tracking-wider">Drop</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gray" size={18} />
                                        <input
                                            type="text"
                                            name="drop"
                                            value={formData.drop}
                                            onChange={handleInputChange}
                                            placeholder="Location"
                                            className="w-full bg-luxury-ivory rounded-xl pl-12 pr-4 py-3 text-luxury-black font-medium focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-luxury-muted uppercase tracking-wider">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gray pointer-events-none" size={18} />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full bg-luxury-ivory rounded-xl pl-12 pr-4 py-3 text-luxury-black font-medium focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-luxury-muted uppercase tracking-wider">Time</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gray pointer-events-none" size={18} />
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            className="w-full bg-luxury-ivory rounded-xl pl-12 pr-4 py-3 text-luxury-black font-medium focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-luxury-muted uppercase tracking-wider">Vehicle</label>
                                <div className="relative">
                                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gray pointer-events-none" size={18} />
                                    <select
                                        name="vehicle"
                                        value={formData.vehicle}
                                        onChange={handleInputChange}
                                        className="w-full bg-luxury-ivory rounded-xl pl-12 pr-4 py-3 text-luxury-black font-medium focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="sedan">Sedan (4 Seater)</option>
                                        <option value="suv">SUV (6 Seater)</option>
                                        <option value="tempo">Tempo Traveller</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full justify-center py-4 text-base shadow-lg shadow-gold-metallic/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Processing..." : "Search Cabs"}
                                    {!isSubmitting && <ArrowRight size={18} className="ml-2" />}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Right Column: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative hidden lg:block h-full min-h-[600px]"
                >
                    {/* Abstract/Image Container */}
                    <div className="absolute inset-0 bg-luxury-ivory rounded-[3rem] overflow-hidden border border-luxury-black/5 shadow-2xl">
                        {/* Placeholder Gradient until explicit image is added */}
                        <div className="absolute inset-0 bg-gradient-to-br from-luxury-ivory via-white to-gold-highlight/20" />

                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-metallic/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />

                        {/* Car Silhouette / Image Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center opacity-20">
                                <Car size={120} className="mx-auto text-luxury-black mb-4" />
                                <span className="text-4xl font-bold text-luxury-black tracking-widest uppercase">Premium<br />Fleet</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge - Keep this, it adds nice depth */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 -left-12 bg-white/95 backdrop-blur-md rounded-2xl border border-luxury-black/5 p-5 flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-30 max-w-[200px]"
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
