import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { getSiteSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Sunshine Hospital, Rankala, Kolhapur",
  description: "Book an appointment at Sunshine Multi-Speciality Center, Rankala, Kolhapur. Contact Dr. Onkar Kakare for diabetes, blood pressure, thyroid, and general medicine. 24/7 facility.",
  alternates: { canonical: "https://sunshinehospitalkolhapur.in/contact" },
};

export default async function ContactPage() {
  let settings = null;
  try {
    settings = await getSiteSettings();
  } catch {}
  return <Contact settings={settings} />;
}
