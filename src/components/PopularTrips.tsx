"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Check, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/config";

const trips = [
    {
        name: "Kochi → Munnar Taxi",
        price: "₹____",
        duration: "One Way / Round Trip",
        highlights: "Hills, tea gardens, waterfalls",
        icon: <MapPin size={18} />,
        recommended: true
    },
    {
        name: "Kochi → Alleppey Taxi",
        price: "₹____",
        duration: "One Way / Round Trip",
        highlights: "Backwaters & Houseboats",
        icon: <Clock size={18} />,
        recommended: false
    },
    {
        name: "Kochi → Wayanad Taxi",
        price: "₹____",
        duration: "One Way / Round Trip",
        highlights: "Wildlife, lakes, mountains",
        icon: <MapPin size={18} />,
        recommended: false
    },
    {
        name: "Kochi Airport Transfers",
        price: "₹____",
        duration: "24/7 Service",
        highlights: "Prompt pickup & drop-offs",
        icon: <Clock size={18} />,
        recommended: false
    }
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

export default function PopularTrips() {
    return (
        <SectionWrapper id="packages" className="bg-luxury-ivory">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center mb-16 space-y-4"
            >
                <motion.span variants={itemVariants} className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase block">
                    Commonly Booked
                </motion.span>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">
                    Popular Taxi Routes from Kochi
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {trips.map((trip, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`relative p-8 rounded-3xl border transition-all duration-500 group flex flex-col bg-white transform-gpu will-change-transform
              ${trip.recommended
                                ? "border-gold-metallic/30 shadow-[0_30px_60px_rgba(198,168,79,0.12)] z-10 scale-[1.02]"
                                : "border-luxury-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-gold-metallic/20"
                            }`}
                    >
                        {trip.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-metallic text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg z-20">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6 flex-grow">
                            <h3 className="text-xl font-bold text-luxury-black mb-3 h-14 flex items-center leading-snug">{trip.name}</h3>
                            <div className="flex items-center gap-2 text-luxury-muted text-sm mb-6">
                                <div className="text-gold-metallic">{trip.icon}</div>
                                <span className="font-medium">{trip.duration}</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3 text-luxury-gray text-sm leading-relaxed">
                                    <div className="mt-1 text-gold-metallic/60">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-light">{trip.highlights}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-luxury-black/5">
                            <div className="mb-6">
                                <p className="text-luxury-muted text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Starting from</p>
                                <div className="text-gold-metallic font-serif text-3xl font-bold">{trip.price}</div>
                            </div>

                            <a
                                href={getWhatsAppUrl(`Hi Adam Tours! I'd like to plan the "${trip.name}" (${trip.duration}).`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button
                                    variant={trip.recommended ? "primary" : "outline"}
                                    className={`w-full py-4 text-xs font-bold tracking-widest uppercase shadow-sm group-hover:shadow-md transition-all duration-300 ${trip.recommended ? "shadow-gold-metallic/20" : "hover:border-gold-metallic hover:text-gold-metallic"}`}
                                >
                                    Plan Trip
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
