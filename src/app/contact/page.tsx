"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-luxury-white text-luxury-black pt-32 pb-20">
            <SectionWrapper>
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-gold-metallic font-bold tracking-widest uppercase text-sm">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-luxury-gray max-w-2xl mx-auto text-lg">
                        Whether you need a quick ride, a tour package, or have a question, we are here to help. Reach out to us anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Contact Information</h3>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-luxury-black/5 flex items-center justify-center shrink-0">
                                    <Phone className="text-gold-metallic" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-luxury-muted uppercase tracking-wide">Phone</p>
                                    <p className="text-xl font-bold text-luxury-black">+91 98765 43210</p>
                                    <p className="text-base text-luxury-gray">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-luxury-black/5 flex items-center justify-center shrink-0">
                                    <Mail className="text-gold-metallic" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-luxury-muted uppercase tracking-wide">Email</p>
                                    <p className="text-xl font-bold text-luxury-black">bookings@adamtours.com</p>
                                    <p className="text-base text-luxury-gray">support@adamtours.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-luxury-black/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-gold-metallic" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-luxury-muted uppercase tracking-wide">Office</p>
                                    <p className="text-xl font-bold text-luxury-black">Adam Tours & Travels</p>
                                    <p className="text-base text-luxury-gray max-w-xs">
                                        123, Luxury Lane, Downtown Business District, Kerala, India - 670001
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full aspect-video bg-luxury-ivory rounded-2xl border border-luxury-black/5 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-luxury-muted font-bold tracking-widest uppercase">
                                Map View
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-luxury-black/5">
                        <h3 className="text-2xl font-bold mb-8">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-luxury-muted uppercase">Name</label>
                                    <input type="text" className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-luxury-muted uppercase">Phone</label>
                                    <input type="tel" className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all" placeholder="Your Number" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-luxury-muted uppercase">Email</label>
                                <input type="email" className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all" placeholder="Your Email" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-luxury-muted uppercase">Message</label>
                                <textarea rows={4} className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button variant="primary" className="w-full justify-center py-4 text-base">
                                Send Message
                                <Send size={18} className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
