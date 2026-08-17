import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { generateMedicalBusinessSchema } from "@/lib/schema";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://sunshinehospitalkolhapur.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Sunshine Hospital Kolhapur",
    default:
      "Sunshine Multi-Speciality Center | 24/7 Hospital in Rankala, Kolhapur",
  },
  description:
    "Sunshine Multi-Speciality Center — 24/7 multi-specialty hospital in Rankala, Kolhapur. Expert care by Dr. Onkar Kakare (Diabetologist, Internal Medicine). 4.8★ rated.",
  keywords: [
    "hospital kolhapur",
    "sunshine hospital kolhapur",
    "dr onkar kakare",
    "diabetologist kolhapur",
    "internal medicine kolhapur",
    "24 hour hospital kolhapur",
    "rankala hospital",
    "multi specialty hospital kolhapur",
  ],
  authors: [{ name: "Dr. Onkar Kakare" }],
  creator: "Sunshine Multi-Speciality Center",
  publisher: "Sunshine Multi-Speciality Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Sunshine Hospital Kolhapur",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Sunshine Multi-Speciality Center, Rankala, Kolhapur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Kolhapur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = generateMedicalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
