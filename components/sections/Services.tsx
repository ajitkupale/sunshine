import Link from "next/link";
import {
  Activity,
  Shield,
  Zap,
  Heart,
  Wind,
  AlertCircle,
  Stethoscope,
  Pill,
  Syringe,
  Brain,
  Eye,
  Bone,
} from "lucide-react";
import { services as fallbackServices } from "@/data/services";
import { getServices } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Shield,
  Zap,
  Heart,
  Wind,
  AlertCircle,
  Stethoscope,
  Pill,
  Syringe,
  Brain,
  Eye,
  Bone,
};

export default async function Services() {
  let services = fallbackServices;
  try {
    const data = await getServices();
    if (Array.isArray(data) && data.length > 0) {
      services = data.filter((s: any) => s.isPublished !== false);
    }
  } catch (error) {
    console.warn("Could not fetch services from API, using fallback data:", error);
  }

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "rgba(8,145,178,0.03)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
          >
            What We Treat
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
          >
            Our Medical Services
          </h2>
          <div className="section-divider mx-auto" />
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
          >
            Expert diagnosis and treatment across key medical specialties, led by
            Dr. Onkar Kakare.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Activity;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl p-6 border cursor-pointer transition-all duration-250 hover:-translate-y-1"
                style={{
                  background: "white",
                  borderColor: "var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
                aria-label={`Learn more about ${service.title}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-250"
                  style={{ background: "rgba(8,145,178,0.08)" }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-250 group-hover:text-[var(--color-cta)]"
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold mb-2 transition-colors duration-250 group-hover:text-[var(--color-primary)]"
                  style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
                >
                  {service.shortDesc}
                </p>

                {/* Arrow */}
                <div
                  className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-250 group-hover:gap-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
