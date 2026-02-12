"use client";

import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function BackToTop() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsVisible(latest > 500);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-luxury-black hover:bg-gold-metallic text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
