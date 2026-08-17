import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import DoctorProfile from "@/components/sections/DoctorProfile";
import Facilities from "@/components/sections/Facilities";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { generateDoctorSchema, generateFAQSchema } from "@/lib/schema";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://sunshinehospitalkolhapur.in";

export const metadata: Metadata = {
  title:
    "Sunshine Multi-Speciality Center | 24/7 Hospital in Rankala, Kolhapur",
  description:
    "Sunshine Multi-Speciality Center — 24/7 multi-specialty hospital in Rankala, Kolhapur. Expert care by Dr. Onkar Kakare (Diabetologist & Internal Medicine Specialist). 4.8★ rated by 200+ patients. Wheelchair accessible, clean, and hygienic.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
  },
};

const homepageFAQ = [
  {
    question: "Where is Sunshine Multi-Speciality Center located?",
    answer:
      "Sunshine Multi-Speciality Center is located at Rankala, Kolhapur — opposite Dr. Yedekar Hospital, near Nagojirao Patankar Highschool.",
  },
  {
    question: "Is Sunshine Hospital open 24 hours?",
    answer:
      "Yes. Sunshine Multi-Speciality Center operates 24 hours a day, 7 days a week, 365 days a year — including all public holidays.",
  },
  {
    question: "Who is Dr. Onkar Kakare?",
    answer:
      "Dr. Onkar Kakare is an Internal Medicine Specialist, General Practitioner, and Diabetologist practising at Sunshine Multi-Speciality Center, Rankala, Kolhapur, and also in Karad.",
  },
  {
    question: "Is the hospital wheelchair accessible?",
    answer:
      "Yes. Sunshine Multi-Speciality Center is fully wheelchair accessible with ramps, wide corridors, and trained support staff.",
  },
];

export default function HomePage() {
  const doctorSchema = generateDoctorSchema();
  const faqSchema = generateFAQSchema(homepageFAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Stats />
      <Services />
      <DoctorProfile />
      <Facilities />
      <Testimonials />
      <Contact />
    </>
  );
}
