import { services } from "@/data/services";
import { locationPages } from "@/data/locations";
import { healthGuideArticles } from "@/data/healthGuide";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sunshinehospitalkolhapur.in";

// ─── JSON-LD Schema Generators ───────────────────────────────────────────────

export function generateMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Sunshine Multi-Speciality Center",
    description:
      "24/7 multi-specialty hospital in Rankala, Kolhapur offering internal medicine, diabetes, blood pressure, thyroid, gastric, and respiratory care.",
    url: BASE_URL,
    telephone: "[PLACEHOLDER_PHONE]",
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite Dr. Yedekar Hospital, Near Nagojirao Patankar Highschool, Rankala",
      addressLocality: "Kolhapur",
      addressRegion: "Maharashtra",
      postalCode: "416013",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.6949",
      longitude: "74.2115",
    },
    medicalSpecialty: [
      "Internal Medicine",
      "Diabetology",
      "General Practice",
    ],
    availableService: services.map((s) => ({
      "@type": "MedicalService",
      name: s.title,
      description: s.shortDesc,
    })),
    sameAs: [],
  };
}

export function generateDoctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Onkar Kakare",
    description:
      "Internal Medicine Specialist, General Practitioner, and Diabetologist with over 10 years of experience. Practises at Sunshine Multi-Speciality Center, Rankala, Kolhapur and also consults in Karad.",
    url: `${BASE_URL}/doctor`,
    telephone: "[PLACEHOLDER_PHONE]",
    medicalSpecialty: [
      {
        "@type": "MedicalSpecialty",
        name: "Internal Medicine",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Diabetology",
      },
      {
        "@type": "MedicalSpecialty",
        name: "General Practice",
      },
    ],
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Sunshine Multi-Speciality Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rankala",
        addressLocality: "Kolhapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "Diabetes",
      "Hypertension",
      "Thyroid disorders",
      "Gastric disorders",
      "Respiratory diseases",
      "Internal medicine",
    ],
  };
}

export function generateServiceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: service.title,
    description: service.fullDesc,
    provider: {
      "@type": "MedicalBusiness",
      name: "Sunshine Multi-Speciality Center",
      url: BASE_URL,
    },
    availableAtOrFrom: {
      "@type": "Place",
      name: "Sunshine Multi-Speciality Center, Rankala, Kolhapur",
    },
  };
}

export function generateLocationSchema(slug: string) {
  const page = locationPages.find((l) => l.slug === slug);
  if (!page) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Sunshine Multi-Speciality Center — ${page.service} in ${page.city}`,
    description: page.intro,
    url: `${BASE_URL}/${page.slug}`,
    telephone: "[PLACEHOLDER_PHONE]",
    address: {
      "@type": "PostalAddress",
      addressLocality: page.city,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    hasMap: `https://maps.google.com/?q=Sunshine+Multi+Speciality+Center+Rankala+Kolhapur`,
    openingHours: "Mo-Su 00:00-24:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
      bestRating: "5",
    },
  };
}

export function generateFAQSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(slug: string) {
  const article = healthGuideArticles.find((a) => a.slug === slug);
  if (!article) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDesc,
    url: `${BASE_URL}/health-guide/${article.slug}`,
    author: {
      "@type": "Person",
      name: "Dr. Onkar Kakare",
      jobTitle: "Internal Medicine Specialist, Diabetologist",
    },
    publisher: {
      "@type": "Organization",
      name: "Sunshine Multi-Speciality Center",
      url: BASE_URL,
    },
    dateModified: new Date().toISOString().split("T")[0],
    about: {
      "@type": "MedicalCondition",
      name: article.term,
    },
  };
}

export function generateBreadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.url}`,
    })),
  };
}
