"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
    const baseStyles = "relative px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group cursor-pointer tracking-wider text-sm";

    const variants = {
        primary: "bg-gold-metallic text-white hover:bg-gold-rich hover:shadow-[0_5px_15px_rgba(198,168,79,0.3)]",
        outline: "border border-luxury-black/10 text-luxury-black hover:border-gold-metallic hover:text-gold-metallic bg-transparent",
        ghost: "text-luxury-black/60 hover:text-gold-metallic bg-transparent",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
        </motion.button>
    );
}
