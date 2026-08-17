import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://sunshinehospitalkolhapur.in";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = "/images/og-default.png",
}: PageSEO): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sunshine Hospital Kolhapur",
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": "Kolhapur",
      "geo.position": "16.6949;74.2115",
      ICBM: "16.6949, 74.2115",
    },
  };
}

export function generateLocationMetadata(service: string, city: string, slug: string): Metadata {
  const title = `${service} in ${city} | Dr. Onkar Kakare | Sunshine Hospital`;
  const description = `Find expert ${service} in ${city}. Dr. Onkar Kakare at Sunshine Multi-Speciality Center, Rankala, Kolhapur — 4.8★ rated, 24/7 care. Book an appointment today.`;
  return generatePageMetadata({ title, description, path: `/${slug}` });
}

export function generateGlossaryMetadata(term: string, slug: string): Metadata {
  const title = `What is ${term}? — Causes, Symptoms & Treatment | Sunshine Hospital`;
  const description = `Learn about ${term} — causes, symptoms, diagnosis and treatment options. Expert health guide by Dr. Onkar Kakare, Sunshine Multi-Speciality Center, Kolhapur.`;
  return generatePageMetadata({ title, description, path: `/health-guide/${slug}` });
}
