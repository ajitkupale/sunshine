import type { Metadata } from "next";
import DoctorProfile from "@/components/sections/DoctorProfile";
import Testimonials from "@/components/sections/Testimonials";
import { generateDoctorSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dr. Onkar Kakare | Diabetologist & Internal Medicine Specialist, Kolhapur",
  description: "Meet Dr. Onkar Kakare — Internal Medicine Specialist, Diabetologist, and General Practitioner at Sunshine Multi-Speciality Center, Rankala, Kolhapur. 4.8★ rated by 200+ patients.",
  alternates: { canonical: "https://sunshinehospitalkolhapur.in/doctor" },
};

export default function DoctorPage() {
  const schema = generateDoctorSchema();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <DoctorProfile />
      <Testimonials />
    </>
  );
}
