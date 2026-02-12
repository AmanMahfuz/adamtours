import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-luxury-white border-t border-luxury-black/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-luxury-black">
                            ADAM <span className="text-gold-metallic">TOURS</span>
                        </h2>
                        <p className="text-luxury-gray leading-relaxed max-w-xs text-sm">
                            Experience the pinnacle of luxury travel. Premium vehicles, curated destinations, and unforgettable journeys.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-luxury-black/10 flex items-center justify-center text-luxury-gray hover:text-gold-metallic hover:border-gold-metallic transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-black mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Fleet", "Services", "Destinations", "Packages", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-luxury-gray hover:text-gold-metallic transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-black mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-luxury-gray text-sm">
                                <MapPin size={18} className="text-gold-metallic shrink-0" />
                                <span>123 Luxury Lane, Premium Tower,<br />Cochin, Kerala</span>
                            </li>
                            <li className="flex items-center gap-3 text-luxury-gray text-sm">
                                <Phone size={18} className="text-gold-metallic shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-luxury-gray text-sm">
                                <Mail size={18} className="text-gold-metallic shrink-0" />
                                <span>book@adamtours.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-black mb-6">Newsletter</h3>
                        <p className="text-luxury-gray text-sm mb-4">Subscribe for exclusive offers and travel inspiration.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-luxury-ivory border border-luxury-black/10 rounded-lg px-4 py-3 text-luxury-black focus:outline-none focus:border-gold-metallic transition-colors placeholder:text-luxury-muted/50 text-sm"
                                aria-label="Email for newsletter"
                            />
                            <button
                                type="button"
                                className="w-full bg-luxury-black text-white font-semibold py-3 rounded-lg hover:bg-gold-metallic hover:text-white transition-colors text-sm tracking-wide"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-luxury-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-luxury-muted text-xs">
                        © {new Date().getFullYear()} Adam Tours & Travels. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-luxury-muted">
                        <Link href="#" className="hover:text-luxury-black transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-luxury-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
