"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const vehicles = [
    {
        id: 1,
        name: "Toyota Etios",
        category: "Sedan",
        seats: 4,
        features: ["AC", "Premium Comfort", "Ample Boot"],
        image: "/vehicles/etios.png",
        price: "₹12/km"
    },
    {
        id: 2,
        name: "Maruti Ertiga",
        category: "MUV",
        seats: 6,
        features: ["AC", "Smooth Journey", "Modern Interior"],
        image: "/vehicles/ertiga.png",
        price: "₹18/km"
    },
    {
        id: 3,
        name: "Toyota Innova",
        category: "Premium SUV",
        seats: 7,
        features: ["AC", "Executive Travel", "Spacious"],
        image: "/vehicles/innova.png",
        price: "₹25/km"
    },
    {
        id: 4,
        name: "Force Urbania",
        category: "Luxury Van",
        seats: "12-17",
        features: ["AC", "Grand Luxury", "Group Special"],
        image: "/vehicles/urbania1.jpeg",
        price: "₹35/km"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
            className="group bg-white rounded-3xl overflow-hidden border border-luxury-black/5 hover:border-gold-metallic/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 h-full flex flex-col"
        >
            {/* Image Area */}
            <div className="relative h-64 bg-luxury-ivory overflow-hidden">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-luxury-black border border-white/20 shadow-sm z-10 tracking-[0.2em] uppercase">
                    {vehicle.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-serif font-bold text-luxury-black group-hover:text-gold-metallic transition-colors duration-300">
                            {vehicle.name}
                        </h3>
                        <div className="text-right">
                            <div className="text-xl font-serif font-bold text-gold-metallic">{vehicle.price}</div>
                            <div className="text-[10px] text-luxury-muted uppercase tracking-tighter">Starting Rate</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-luxury-gray">
                        <Users size={16} className="text-gold-metallic" />
                        <span className="text-sm font-medium">{vehicle.seats} Seater Comfort</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {vehicle.features.map((feature: string, i: number) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-luxury-gray bg-luxury-ivory px-3 py-1.5 rounded-lg border border-luxury-black/5 group-hover:border-gold-metallic/20 transition-colors duration-300">
                            {feature}
                        </span>
                    ))}
                </div>

                <Button
                    variant="outline"
                    onClick={scrollToBooking}
                    className="w-full border-luxury-black/10 hover:border-gold-metallic hover:bg-gold-metallic hover:text-white transition-all duration-500 group-hover:shadow-lg py-6 text-sm tracking-widest uppercase"
                >
                    Reserve This Vehicle
                </Button>
            </div>
        </motion.div>
    )
}
