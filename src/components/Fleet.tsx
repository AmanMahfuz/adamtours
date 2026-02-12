"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Users, Briefcase, Snowflake, Fuel } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const vehicles = [
    {
        id: 1,
        name: "Luxury Sedan",
        category: "Executive",
        seats: 4,
        features: ["AC", "Leather", "WiFi"],
        image: "/brand/sedan-placeholder.jpg",
        price: "₹12/km"
    },
    {
        id: 2,
        name: "Executive SUV",
        category: "Premium",
        seats: 7,
        features: ["AC", "Panoramic Roof", "WiFi"],
        image: "/brand/suv-placeholder.jpg",
        price: "₹18/km"
    },
    {
        id: 3,
        name: "Premium SUV",
        category: "Luxury",
        seats: 7,
        features: ["AC", "Reclining Seats", "Entertainment"],
        image: "/brand/premium-suv-placeholder.jpg",
        price: "₹25/km"
    },
    {
        id: 4,
        name: "Tempo Traveller",
        category: "Group",
        seats: 12,
        features: ["AC", "Pushback Seats", "Ample Luggage"],
        image: "/brand/tempo-placeholder.jpg",
        price: "₹30/km"
    },
    {
        id: 5,
        name: "Mini Luxury Bus",
        category: "Group",
        seats: 22,
        features: ["AC", "Air Suspension", "Reading Lights"],
        image: "/brand/minibus-placeholder.jpg",
        price: "₹45/km"
    },
    {
        id: 6,
        name: "Tourist Coach",
        category: "Large Group",
        seats: 45,
        features: ["AC", "Sleeper/Seater", "Washroom"],
        image: "/brand/coach-placeholder.jpg",
        price: "₹60/km"
    },
];

export default function Fleet() {
    return (
        <SectionWrapper id="fleet" className="bg-luxury-ivory">
            <div className="text-center mb-16 space-y-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase block"
                >
                    Our Premium Fleet
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black"
                >
                    Travel in Absolute Comfort
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.map((vehicle, index) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}

function VehicleCard({ vehicle, index }: { vehicle: any, index: number }) {
    const scrollToBooking = () => {
        const element = document.getElementById("hero");
        if (element) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden border border-luxury-black/5 hover:border-gold-metallic/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
            {/* Image Area */}
            <div className="relative h-56 bg-luxury-ivory p-4 flex items-center justify-center overflow-hidden">
                {/* Simple background circle */}
                <div className="absolute w-48 h-48 bg-white rounded-full opacity-50" />

                {/* Vehicle Representation */}
                <div className="relative z-10 text-luxury-black/10 text-4xl font-bold font-sans tracking-tight select-none group-hover:scale-105 transition-transform duration-500">
                    {vehicle.name}
                </div>

                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg text-xs font-bold text-luxury-black border border-luxury-black/5 shadow-sm">
                    {vehicle.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-luxury-black mb-1">
                            {vehicle.name}
                        </h3>
                        <p className="text-sm text-luxury-muted flex items-center gap-2">
                            <Users size={14} className="text-gold-metallic" />
                            {vehicle.seats} Seater
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-bold text-gold-metallic">{vehicle.price}</div>
                        <div className="text-xs text-luxury-muted">Starting from</div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.slice(0, 3).map((feature: string, i: number) => (
                        <span key={i} className="text-xs font-medium text-luxury-gray bg-luxury-ivory px-2 py-1 rounded-md border border-luxury-black/5">
                            {feature}
                        </span>
                    ))}
                </div>

                <Button
                    variant="outline"
                    onClick={scrollToBooking}
                    className="w-full border-luxury-black/10 hover:border-gold-metallic hover:bg-gold-metallic hover:text-white transition-all duration-300 group-hover:border-gold-metallic/50"
                >
                    Book This Car
                </Button>
            </div>
        </motion.div>
    )
}
