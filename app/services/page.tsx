import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Activity, Shield, Zap, Heart, Wind, AlertCircle } from "lucide-react";
import { generateMedicalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Medical Services | Sunshine Multi-Speciality Center, Kolhapur",
  description: "Explore all medical services at Sunshine Multi-Speciality Center — diabetes, blood pressure, thyroid, gastric, respiratory, and 24/7 emergency care by Dr. Onkar Kakare in Kolhapur.",
  alternates: { canonical: "https://sunshinehospitalkolhapur.in/services" },
};

const iconMap: Record<string, React.ElementType> = { Activity, Shield, Zap, Heart, Wind, AlertCircle };

export default function ServicesPage() {
  const schema = generateMedicalBusinessSchema();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Our Medical Services</h1>
            <div className="section-divider mx-auto" />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
              Expert diagnosis and treatment across key specialties at Sunshine Multi-Speciality Center, Rankala, Kolhapur.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl p-6 border cursor-pointer transition-all duration-250 hover:-translate-y-1" style={{ background: "white", borderColor: "var(--color-border)", boxShadow: "var(--shadow-card)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(8,145,178,0.08)" }}>
                    <Icon className="w-6 h-6 group-hover:text-[var(--color-cta)]" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)]" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>{service.title}</h2>
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{service.shortDesc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--color-primary)" }}>
                    Learn more <span aria-hidden="true">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
