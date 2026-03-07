import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { companyConfig } from "@/lib/config";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-luxury-white text-luxury-black">
            <Navbar />

            <SectionWrapper className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4 text-center">
                        <span className="text-gold-metallic text-sm font-bold tracking-[0.2em] uppercase">Policy</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black">Privacy Policy</h1>
                        <p className="text-luxury-muted text-sm">Last Updated: February 22, 2026</p>
                    </div>

                    <div className="prose prose-luxury max-w-none space-y-8 text-luxury-gray leading-relaxed font-light">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">1. Introduction</h2>
                            <p>
                                Welcome to {companyConfig.name}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at {companyConfig.email}.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">2. Information We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on our website or otherwise contacting us.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Data:</strong> Name, phone number, email address, and pickup/drop-off locations.</li>
                                <li><strong>Booking Details:</strong> Travel dates, vehicle preferences, and special requirements.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">3. How We Use Your Information</h2>
                            <p>
                                We use personal information collected via our website for a variety of business purposes described below:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To fulfill and manage your bookings.</li>
                                <li>To send administrative information to you.</li>
                                <li>To protect our services and users.</li>
                                <li>To respond to legal requests and prevent harm.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">4. Sharing Your Information</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. This may include sharing with our partner drivers and logistics providers.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-luxury-black">5. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at {companyConfig.emailSupport} or by post to:
                            </p>
                            <p className="font-medium text-luxury-black uppercase tracking-tight">
                                {companyConfig.name}<br />
                                {companyConfig.address}
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
