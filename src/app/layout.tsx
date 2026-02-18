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
  metadataBase: new URL("https://adamtours.com"),
  title: "Adam Tours & Travels | Premium Luxury Travel & Taxi Service in Kerala",
  description: "Experience the ultimate in luxury travel with Adam Tours. Premium fleet, exclusive packages, and world-class destinations across Kerala. Reliable taxi service in Cochin, Munnar, and Alleppey.",
  keywords: ["Kerala tours", "luxury travel Kerala", "premium cabs Kerala", "Kerala taxi service", "tour packages Munnar", "airport transfers Cochin", "luxury van hire Kerala"],
  alternates: {
    canonical: "https://adamtours.com",
  },
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
        alt: "Adam Tours - Premium Luxury Travel in Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Tours & Travels | Premium Luxury Travel",
    description: "Experience the ultimate in luxury travel with Adam Tours. Reliable taxi and tour services in Kerala.",
    images: ["/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Adam Tours & Travels",
  "image": "https://adamtours.com/og-image.jpg",
  "@id": "https://adamtours.com",
  "url": "https://adamtours.com",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Lane, Premium Tower",
    "addressLocality": "Cochin",
    "addressRegion": "Kerala",
    "postalCode": "682001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9312,
    "longitude": 76.2673
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://facebook.com/adamtours",
    "https://instagram.com/adamtours"
  ],
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
