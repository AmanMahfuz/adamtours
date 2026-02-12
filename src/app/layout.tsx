import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Tours & Travels | Premium Luxury Travel in Kerala",
  description: "Experience the ultimate in luxury travel with Adam Tours. Premium fleet, exclusive packages, and world-class destinations across Kerala. Book your ride today!",
  keywords: ["Kerala tours", "luxury travel", "premium cabs", "Kerala taxi service", "tour packages", "airport transfers"],
  openGraph: {
    title: "Adam Tours & Travels | Premium Luxury Travel",
    description: "Experience the ultimate in luxury travel with Adam Tours. Premium fleet, exclusive packages, and world-class destinations.",
    url: "https://adamtours.com",
    siteName: "Adam Tours & Travels",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Tours - Premium Luxury Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Tours & Travels | Premium Luxury Travel",
    description: "Experience the ultimate in luxury travel with Adam Tours.",
    images: ["/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Adam Tours & Travels",
  "description": "Premium luxury travel and taxi services in Kerala",
  "url": "https://adamtours.com",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Lane, Premium Tower",
    "addressLocality": "Cochin",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "priceRange": "₹₹₹",
  "areaServed": {
    "@type": "State",
    "name": "Kerala"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased bg-luxury-white text-luxury-black`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
