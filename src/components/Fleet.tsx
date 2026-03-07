"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Phone, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { companyConfig, getWhatsAppUrl } from "@/lib/config";

const vehicles = [
    {
        id: 1,
        name: "Toyota Etios",
        category: "Sedan",
        seats: 4,
        features: ["AC", "Premium Comfort", "Ample Boot"],
        image: "/vehicles/toyota-etios-sedan-kerala.webp",
        price: "₹12/km"
    },
    {
        id: 2,
        name: "Maruti Ertiga",
        category: "MUV",
        seats: 6,
        features: ["AC", "Smooth Journey", "Modern Interior"],
        image: "/vehicles/maruti-ertiga-muv-kerala.webp",
        price: "₹18/km"
    },
    {
        id: 3,
        name: "Toyota Innova",
        category: "Premium SUV",
        seats: 7,
        features: ["AC", "Executive Travel", "Spacious"],
        image: "/vehicles/toyota-innova-crysta-premium-suv.png",
        price: "₹25/km"
    },
    {
        id: 4,
        name: "Force Urbania",
        category: "Luxury Van",
        seats: "12-17",
        features: ["AC", "Grand Luxury", "Group Special"],
        image: "/vehicles/force-urbania-luxury-van-group-tour-1.webp",
        price: "₹35/km"
    },
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

export default function Fleet() {
    return (
        <SectionWrapper id="fleet" className="bg-luxury-ivory">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center mb-16 space-y-4"
            >
                <motion.span variants={itemVariants} className="text-gold-text text-sm font-bold tracking-[0.2em] uppercase block">
                    Our Premium Fleet
                </motion.span>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">
                    Our Taxi Fleet in Kochi
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
                {vehicles.map((vehicle) => (
                    <motion.div key={vehicle.id} variants={itemVariants}>
                        <VehicleCard vehicle={vehicle} />
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}

function VehicleCard({ vehicle }: { vehicle: any }) {
    const scrollToBooking = () => {
        const element = document.getElementById("hero");
        if (element) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition duration-700 h-full flex flex-col border border-luxury-black/5 transform-gpu will-change-transform">
            {/* Image Area */}
            <div className="relative aspect-square bg-luxury-ivory overflow-hidden">
                <Image
                    src={vehicle.image}
                    alt={`Premium luxury ${vehicle.name} ${vehicle.category} for ground travel in Kerala - Adam Tours`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-luxury-black border border-white/20 shadow-sm z-10 tracking-[0.2em] uppercase">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    <a
                        href={`tel:${companyConfig.phone}`}
                        className="block w-full"
                    >
                        <Button
                            variant="outline"
                            className="w-full border-luxury-black/10 hover:border-gold-metallic hover:text-gold-metallic transition-all duration-500 py-6 text-[10px] tracking-widest uppercase px-2"
                        >
                            <Phone size={14} />
                            Call Us
                        </Button>
                    </a>
                    <a
                        href={getWhatsAppUrl(`Hi Adam Tours! I'd like to reserve the ${vehicle.name} (${vehicle.category}, ${vehicle.seats} seats).`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                    >
                        <Button
                            variant="primary"
                            className="w-full transition-all duration-500 py-6 text-[10px] tracking-widest uppercase px-2 shadow-lg shadow-gold-metallic/20"
                        >
                            Book Now
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
