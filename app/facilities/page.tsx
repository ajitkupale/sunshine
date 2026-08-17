import type { Metadata } from "next";
import Facilities from "@/components/sections/Facilities";

export const metadata: Metadata = {
  title: "Our Facilities | Sunshine Multi-Speciality Center, Rankala, Kolhapur",
  description: "Sunshine Hospital, Kolhapur — clean, hygienic, wheelchair accessible with supportive staff. Explore our 24/7 facility at Rankala, Kolhapur.",
  alternates: { canonical: "https://sunshinehospitalkolhapur.in/facilities" },
};

export default function FacilitiesPage() {
  return <Facilities />;
}
