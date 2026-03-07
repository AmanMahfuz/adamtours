"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { companyConfig } from "@/lib/config";

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

    const sectionThemes: Record<string, "light" | "ivory" | "dark"> = {
        hero: "light",
        about: "light",
        statistics: "dark",
        fleet: "ivory",
        services: "light",
        destinations: "ivory",
        packages: "ivory",
        testimonials: "light",
        showcase: "light",
        faq: "light",
        contact: "light"
    };

    const currentTheme = sectionThemes[activeSection] || "light";

    // Map scroll sections to navigation links
    const sectionToNavMap: Record<string, string> = {
        hero: "hero",
        about: "about",
        statistics: "about",
        fleet: "fleet",
        services: "services",
        destinations: "destinations",
        packages: "packages",
        testimonials: "packages",
        showcase: "packages",
        faq: "packages",
        contact: "contact"
    };

    const activeNavLink = sectionToNavMap[activeSection] || activeSection;

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    // Track active section using IntersectionObserver for high performance
    useEffect(() => {
        const sections = Object.keys(sectionThemes);

        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -65% 0px", // Focus area in the upper-middle of screen
            threshold: 0
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80;
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
            <motion.nav
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between transition duration-500",
                    isScrolled
                        ? cn(
                            "backdrop-blur-sm border rounded-full px-6 py-3 w-[90%] md:w-auto min-w-[320px] md:min-w-[700px]",
                            currentTheme === "dark"
                                ? "bg-luxury-black/90 border-white/10 shadow-md"
                                : currentTheme === "ivory"
                                    ? "bg-luxury-ivory/90 border-luxury-black/5 shadow-sm"
                                    : "bg-white/90 border-luxury-black/5 shadow-sm"
                        )
                        : "bg-transparent w-full max-w-7xl px-8 py-2"
                )}
                aria-label="Main navigation"
            >
                {/* Logo */}
                <div className="flex-shrink-0 relative group mr-8">
                    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Adam Tours Home">
                        <div className="relative w-32 h-10">
                            <Image
                                src="/logo1.png"
                                alt="Adam Tours Logo"
                                fill
                                className={cn(
                                    "object-contain object-left group-hover:scale-105 transition-all duration-300",
                                    isScrolled && currentTheme === "dark" && "brightness-0 invert"
                                )}
                                priority
                                sizes="128px"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
                    {navLinks.map((link) => {
                        const isActive = activeNavLink === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={cn(
                                    "relative px-4 py-2 text-xs font-bold transition-all rounded-full whitespace-nowrap tracking-widest uppercase",
                                    isActive
                                        ? "text-white bg-luxury-black"
                                        : isScrolled && currentTheme === "dark"
                                            ? "text-white/70 hover:text-white hover:bg-white/10"
                                            : "text-luxury-gray hover:text-luxury-black hover:bg-luxury-black/5"
                                )}
                                aria-current={isActive ? "page" : undefined}
                                aria-label={`Scroll to ${link.name} section`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Button & Mobile Toggle */}
                <div className="flex items-center gap-4 ml-8">
                    {/* Desktop Book Button */}
                    <div className="hidden md:block">
                        <Button
                            variant={isScrolled && currentTheme === "dark" ? "outline" : "primary"}
                            onClick={scrollToBooking}
                            className={cn(
                                "px-6 py-2 text-[10px] uppercase tracking-widest h-10",
                                isScrolled && currentTheme === "dark" && "border-white/20 text-white hover:bg-white hover:text-luxury-black"
                            )}
                            aria-label="Book a ride"
                        >
                            Book Ride
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                            isScrolled && currentTheme === "dark"
                                ? "bg-white/10 text-white hover:bg-white/20"
                                : "bg-luxury-black/5 text-luxury-black hover:bg-luxury-black/10"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className={cn(
                            "fixed top-24 left-4 right-4 z-40 rounded-3xl shadow-lg border p-6 md:hidden pointer-events-auto transition duration-500",
                            currentTheme === "dark"
                                ? "bg-luxury-black border-white/10 text-white"
                                : currentTheme === "ivory"
                                    ? "bg-luxury-ivory border-luxury-black/5 text-luxury-black"
                                    : "bg-white border-luxury-black/5 text-luxury-black"
                        )}
                        aria-label="Mobile navigation menu"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => {
                                const isActive = activeNavLink === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            "text-lg font-bold p-3 rounded-xl transition-all flex justify-between items-center group",
                                            isActive
                                                ? "text-white bg-luxury-black"
                                                : currentTheme === "dark"
                                                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                                                    : "text-luxury-black hover:bg-luxury-ivory"
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
                                    { Icon: Instagram, name: "Instagram", href: companyConfig.social.instagram },
                                    { Icon: Facebook, name: "Facebook", href: companyConfig.social.facebook },
                                    { Icon: Twitter, name: "Twitter", href: "#" }
                                ].map(({ Icon, name, href }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300",
                                            currentTheme === "dark"
                                                ? "border-white/10 text-white/70 hover:text-gold-metallic hover:border-gold-metallic"
                                                : "border-luxury-black/10 text-luxury-gray hover:text-gold-metallic hover:border-gold-metallic"
                                        )}
                                        aria-label={`Follow us on ${name}`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-luxury-black/5">
                                <Button
                                    variant={currentTheme === "dark" ? "outline" : "primary"}
                                    onClick={scrollToBooking}
                                    className={cn(
                                        "w-full justify-center",
                                        currentTheme === "dark" && "border-white/20 text-white hover:bg-white hover:text-luxury-black"
                                    )}
                                    aria-label="Book your ride now"
                                >
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
