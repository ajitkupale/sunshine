import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { services } from "@/data/services";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `https://sunshinehospitalkolhapur.in/services/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = generateServiceSchema(slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${slug}` },
  ]);
  const faqSchema = generateFAQSchema([
    { question: `What is ${service.title}?`, answer: service.fullDesc },
    {
      question: `What are the symptoms that require ${service.title}?`,
      answer: service.symptoms.join(", ") + ".",
    },
  ]);

  return (
    <>
      {serviceSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm" style={{ fontFamily: "Noto Sans, sans-serif" }}>
              <li><Link href="/" className="hover:underline cursor-pointer" style={{ color: "var(--color-primary)" }}>Home</Link></li>
              <li aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>/</li>
              <li><Link href="/services" className="hover:underline cursor-pointer" style={{ color: "var(--color-primary)" }}>Services</Link></li>
              <li aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>/</li>
              <li aria-current="page" style={{ color: "var(--color-text-muted)" }}>{service.title}</li>
            </ol>
          </nav>

          {/* Back */}
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium mb-6 cursor-pointer hover:gap-3 transition-all" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Services
          </Link>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
            {service.title}
          </h1>
          <div className="section-divider" />
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
            {service.fullDesc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Symptoms */}
            <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "var(--color-border)" }}>
              <h2 className="font-bold text-lg mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Common Symptoms</h2>
              <ul className="space-y-2.5" role="list">
                {service.symptoms.map((s) => (
                  <li key={s} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "var(--color-border)" }}>
              <h2 className="font-bold text-lg mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Treatment Approach</h2>
              <ul className="space-y-2.5" role="list">
                {service.treatments.map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-cta)" }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl p-8 text-center border" style={{ background: "linear-gradient(135deg, rgba(8,145,178,0.06), rgba(5,150,105,0.06))", borderColor: "var(--color-border)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
              Ready to consult Dr. Kakare?
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
              Sunshine Multi-Speciality Center is open 24/7. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, var(--color-cta), #047857)", fontFamily: "Figtree, sans-serif" }}>
                Book Appointment
              </Link>
              <a href="tel:[PLACEHOLDER_PHONE]" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold cursor-pointer transition-all duration-200 border-2 hover:-translate-y-0.5" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontFamily: "Figtree, sans-serif" }}>
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
