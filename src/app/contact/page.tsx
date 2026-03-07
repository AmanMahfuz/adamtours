"use client";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { companyConfig } from "@/lib/config";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("pending");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            const form = e.target as HTMLFormElement;
            form.reset();
        }, 1500);
    };

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
                                    <p className="text-xl font-bold text-luxury-black">{companyConfig.phone}</p>
                                    <p className="text-base text-luxury-gray">{companyConfig.phoneSecondary}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-luxury-black/5 flex items-center justify-center shrink-0">
                                    <Mail className="text-gold-metallic" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-luxury-muted uppercase tracking-wide">Email</p>
                                    <p className="text-xl font-bold text-luxury-black">{companyConfig.email}</p>
                                    <p className="text-base text-luxury-gray">{companyConfig.emailSupport}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-luxury-black/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-gold-metallic" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-luxury-muted uppercase tracking-wide">Office</p>
                                    <p className="text-xl font-bold text-luxury-black">{companyConfig.name}</p>
                                    <p className="text-base text-luxury-gray max-w-xs">
                                        {companyConfig.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map View */}
                        <div className="w-full aspect-video bg-luxury-ivory rounded-2xl border border-luxury-black/5 overflow-hidden relative group">
                            <iframe
                                src={companyConfig.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Adam Tours Office Location"
                                className="filter grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-luxury-black/5">
                        <h3 className="text-2xl font-bold mb-8">Send Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-name" className="text-sm font-bold text-luxury-muted uppercase">Name</label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        required
                                        className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-phone" className="text-sm font-bold text-luxury-muted uppercase">Phone</label>
                                    <input
                                        type="tel"
                                        id="contact-phone"
                                        required
                                        className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                        placeholder="Your Number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-sm font-bold text-luxury-muted uppercase">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    required
                                    className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-message" className="text-sm font-bold text-luxury-muted uppercase">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    required
                                    className="w-full bg-luxury-ivory rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-metallic/20 border border-transparent focus:border-gold-metallic transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-full justify-center py-4 text-base"
                                disabled={status === "pending"}
                            >
                                {status === "pending" ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : status === "success" ? (
                                    <span className="flex items-center gap-2 text-green-100 italic">
                                        <CheckCircle2 size={18} />
                                        Message Sent!
                                    </span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
