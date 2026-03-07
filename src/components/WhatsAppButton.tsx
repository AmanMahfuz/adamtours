"use client";

import { companyConfig, getWhatsAppUrl } from "@/lib/config";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const whatsappUrl = getWhatsAppUrl("Hi! I'd like to book a ride with Adam Tours.");

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 md:bottom-10 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat with us on WhatsApp"
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-500 rounded-full opacity-20"
            />
            <MessageCircle size={24} className="relative z-10" />

            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-luxury-black text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us on WhatsApp
            </div>
        </motion.a>
    );
}
