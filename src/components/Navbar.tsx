"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "fleet", "services", "destinations", "packages", "testimonials", "contact"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 100;
                const elementPosition = element.offsetTop - offset;
                window.scrollTo({ top: elementPosition, behavior: "smooth" });
                setIsMobileMenuOpen(false);
            }
        }
    };

    const scrollToBooking = () => {
        const element = document.getElementById("hero");
        if (element) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
            {/* 
                We use a LayoutGroup to allow Framer Motion to seamlessly animate layout changes.
                The 'layout' prop is key here.
            */}
            <motion.nav
                layout
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between transition-colors duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-xl border border-luxury-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-6 py-3 w-[90%] md:w-auto min-w-[320px] md:min-w-[700px]"
                        : "bg-transparent w-full max-w-7xl px-8 py-2"
                )}
                aria-label="Main navigation"
            >
                {/* Logo */}
                <motion.div layout className="flex-shrink-0 relative group mr-8">
                    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Adam Tours Home">
                        <div className="relative w-32 h-10">
                            <Image
                                src="/logo1.png"
                                alt="Adam Tours Logo"
                                fill
                                className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <motion.div layout className="hidden md:flex items-center gap-1 flex-1 justify-center">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-bold transition-colors rounded-full whitespace-nowrap",
                                    isActive
                                        ? "text-gold-metallic bg-gold-metallic/10"
                                        : "text-luxury-gray hover:text-luxury-black hover:bg-luxury-black/5"
                                )}
                                aria-current={isActive ? "page" : undefined}
                                aria-label={`Scroll to ${link.name} section`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </motion.div>

                {/* Action Button & Mobile Toggle */}
                <motion.div layout className="flex items-center gap-4 ml-8">
                    {/* Desktop Book Button */}
                    <div className="hidden md:block">
                        <Button
                            variant="primary"
                            onClick={scrollToBooking}
                            className={cn("px-6 py-2 text-xs uppercase tracking-widest h-10")}
                            aria-label="Book a ride"
                        >
                            Book Ride
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-luxury-black/5 hover:bg-luxury-black/10 transition-colors text-luxury-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed top-24 left-4 right-4 z-40 bg-white rounded-3xl shadow-2xl border border-luxury-black/5 p-6 md:hidden pointer-events-auto"
                        aria-label="Mobile navigation menu"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            "text-lg font-bold p-3 rounded-xl transition-colors flex justify-between items-center group",
                                            isActive ? "text-gold-metallic bg-gold-metallic/10" : "text-luxury-black hover:bg-luxury-ivory"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                        aria-label={`Scroll to ${link.name} section`}
                                    >
                                        {link.name}
                                        <span className={cn(
                                            "w-1.5 h-1.5 rounded-full bg-gold-metallic transition-opacity",
                                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        )} />
                                    </Link>
                                );
                            })}
                            <div className="flex gap-4">
                                {[
                                    { Icon: Instagram, name: "Instagram" },
                                    { Icon: Facebook, name: "Facebook" },
                                    { Icon: Twitter, name: "Twitter" }
                                ].map(({ Icon, name }, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-10 h-10 rounded-full border border-luxury-black/10 flex items-center justify-center text-luxury-gray hover:text-gold-metallic hover:border-gold-metallic transition-all duration-300"
                                        aria-label={`Follow us on ${name}`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-luxury-black/5">
                                <Button variant="primary" onClick={scrollToBooking} className="w-full justify-center" aria-label="Book your ride now">
                                    Book Your Ride
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
