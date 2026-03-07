"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { companyConfig } from "@/lib/config";

const faqs = [
    {
        question: "How do I book a ride?",
        answer: "You can book a ride through our website booking form, call us directly, or message us on WhatsApp. We're available 24/7 to assist you."
    },
    {
        question: "What is your cancellation policy?",
        answer: "Free cancellation up to 24 hours before your scheduled pickup. Cancellations within 24 hours may incur a 25% charge. No-shows are charged in full."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, UPI, credit/debit cards, and online bank transfers. Payment can be made in advance or after the trip is completed."
    },
    {
        question: "Are your drivers certified?",
        answer: "Yes, all our drivers are professionally trained, licensed, and have extensive experience. They undergo regular background checks and customer service training."
    },
    {
        question: "Do you provide outstation services?",
        answer: "Absolutely! We offer outstation trips across Kerala and neighboring states. Our packages include accommodation assistance and customized itineraries."
    },
    {
        question: "Can I customize my tour package?",
        answer: `Yes, we specialize in customized tour packages. Tell us your preferences, budget, and destinations, and we'll create a perfect itinerary for you with ${companyConfig.name}.`
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <SectionWrapper id="faq" className="bg-luxury-white">
            <div className="text-center mb-16 space-y-4">
                <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">FAQ</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white border border-luxury-black/5 rounded-2xl overflow-hidden hover:border-gold-metallic/30 transition-colors"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left group"
                        >
                            <span className="font-bold text-luxury-black group-hover:text-gold-metallic transition-colors pr-4">
                                {faq.question}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-luxury-ivory flex items-center justify-center text-luxury-black group-hover:bg-gold-metallic group-hover:text-white transition-all shrink-0">
                                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-luxury-gray leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
