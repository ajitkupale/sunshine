import { getSiteSettings } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { locationPages } from "@/data/locations";
import {
  generateLocationSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export async function generateStaticParams() {
  return locationPages.map((l) => ({ locationSlug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}): Promise<Metadata> {
  const { locationSlug } = await params;
  let settings = null;
  try {
    settings = await getSiteSettings();
  } catch {}
  const phone = settings?.phone?.trim() || settings?.emergencyPhone?.trim() || "";
  const phoneTel = phone.replace(/[^\d+]/g, "");
  const page = locationPages.find((l) => l.slug === locationSlug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      canonical: `https://sunshinehospitalkolhapur.in/${locationSlug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;
  const page = locationPages.find((l) => l.slug === locationSlug);
  if (!page) notFound();

  const locationSchema = generateLocationSchema(locationSlug);
  const faqSchema = generateFAQSchema(page.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: page.service, url: `/services/${page.serviceSlug}` },
    { name: `${page.service} in ${page.city}`, url: `/${page.slug}` },
  ]);

  return (
    <>
      {locationSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-sm" style={{ fontFamily: "Noto Sans, sans-serif" }}>
              <li><Link href="/" className="hover:underline cursor-pointer" style={{ color: "var(--color-primary)" }}>Home</Link></li>
              <li aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>/</li>
              <li><Link href={`/services/${page.serviceSlug}`} className="hover:underline cursor-pointer" style={{ color: "var(--color-primary)" }}>{page.service}</Link></li>
              <li aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>/</li>
              <li aria-current="page" style={{ color: "var(--color-text-muted)" }}>{page.city}</li>
            </ol>
          </nav>

          <Link href={`/services/${page.serviceSlug}`} className="inline-flex items-center gap-2 text-sm font-medium mb-6 cursor-pointer hover:gap-3 transition-all" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to {page.service}
          </Link>

          {/* Location tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border" style={{ background: "rgba(8,145,178,0.08)", borderColor: "rgba(8,145,178,0.25)", color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
            📍 {page.area}, {page.city}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
            {page.service} in {page.city}
          </h1>
          <div className="section-divider" />

          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
            {page.intro}
          </p>

          {/* Why Choose Us */}
          <div className="rounded-2xl p-7 border mb-8" style={{ background: "white", borderColor: "var(--color-border)" }}>
            <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
              Why Choose Sunshine Hospital?
            </h2>
            <ul className="space-y-3" role="list">
              {page.whyChooseUs.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--color-cta)" }} aria-hidden="true" />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby Landmarks */}
          <div className="rounded-2xl p-6 border mb-8" style={{ background: "rgba(8,145,178,0.04)", borderColor: "var(--color-border)" }}>
            <h2 className="text-base font-bold mb-3" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
              Nearby Landmarks
            </h2>
            <ul className="space-y-1.5" role="list">
              {page.nearbyLandmarks.map((lm) => (
                <li key={lm} className="text-sm flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-primary)" }} aria-hidden="true" />
                  {lm}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold mb-6" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <details key={item.question} className="rounded-xl border group" style={{ background: "white", borderColor: "var(--color-border)" }}>
                  <summary className="px-6 py-4 font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4" style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}>
                    {item.question}
                    <svg className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-10 rounded-3xl p-8 text-center border" style={{ background: "linear-gradient(135deg, rgba(8,145,178,0.06), rgba(5,150,105,0.06))", borderColor: "var(--color-border)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
              Book your appointment in {page.city}
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
              Sunshine Multi-Speciality Center is open 24/7. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, var(--color-cta), #047857)", fontFamily: "Figtree, sans-serif" }}>
                Book Appointment
              </Link>
              <a href={phoneTel ? `tel:${phoneTel}` : "tel:"} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold cursor-pointer transition-all duration-200 border-2 hover:-translate-y-0.5" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontFamily: "Figtree, sans-serif" }}>
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
