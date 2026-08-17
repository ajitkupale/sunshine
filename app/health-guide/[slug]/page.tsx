import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { healthGuideArticles } from "@/data/healthGuide";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return healthGuideArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = healthGuideArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: {
      canonical: `https://sunshinehospitalkolhapur.in/health-guide/${slug}`,
    },
  };
}

export default async function HealthGuideArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = healthGuideArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const faqSchema = generateFAQSchema(article.faq);
  const articleSchema = generateArticleSchema(slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Health Guide", url: "/health-guide" },
    { name: article.term, url: `/health-guide/${slug}` },
  ]);

  return (
    <>
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-sm" style={{ fontFamily: "Noto Sans, sans-serif" }}>
              <li><Link href="/" className="hover:underline cursor-pointer" style={{ color: "var(--color-primary)" }}>Home</Link></li>
              <li aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>/</li>
              <li><Link href="/health-guide" className="hover:underline cursor-pointer" style={{ color: "var(--color-primary)" }}>Health Guide</Link></li>
              <li aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>/</li>
              <li aria-current="page" style={{ color: "var(--color-text-muted)" }}>{article.term}</li>
            </ol>
          </nav>

          <Link href="/health-guide" className="inline-flex items-center gap-2 text-sm font-medium mb-6 cursor-pointer hover:gap-3 transition-all" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Health Topics
          </Link>

          {/* Article tag */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border" style={{ background: "rgba(8,145,178,0.08)", borderColor: "rgba(8,145,178,0.25)", color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
            Health Guide
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
            {article.title}
          </h1>
          <div className="section-divider" />

          {/* Author */}
          <p className="text-xs mb-8" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
            Reviewed by <strong>Dr. Onkar Kakare</strong> — Internal Medicine Specialist & Diabetologist, Sunshine Multi-Speciality Center, Kolhapur
          </p>

          <p className="text-lg leading-relaxed mb-8 font-medium" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
            {article.intro}
          </p>

          {/* Article sections */}
          <article className="space-y-8" aria-label={`Health guide: ${article.term}`}>
            {/* Definition */}
            <section>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>What is {article.term}?</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{article.definition}</p>
            </section>

            {/* Types if present */}
            {article.types && article.types.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Types of {article.term}</h2>
                <ul className="grid sm:grid-cols-2 gap-2" role="list">
                  {article.types.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--color-primary)" }} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Symptoms */}
            <section className="rounded-2xl p-6 border" style={{ background: "rgba(220,38,38,0.04)", borderColor: "rgba(220,38,38,0.15)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Symptoms of {article.term}</h2>
              <ul className="grid sm:grid-cols-2 gap-2.5" role="list">
                {article.symptoms.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-400" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            {/* Causes */}
            <section>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Causes & Risk Factors</h2>
              <ul className="space-y-2" role="list">
                {article.causes.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--color-primary)" }} aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Treatment */}
            <section className="rounded-2xl p-6 border" style={{ background: "rgba(5,150,105,0.04)", borderColor: "rgba(5,150,105,0.2)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Treatment Options</h2>
              <ul className="space-y-2" role="list">
                {article.treatment.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--color-cta)" }} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* Prevention */}
            <section>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Prevention Tips</h2>
              <ul className="space-y-2" role="list">
                {article.prevention.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--color-gold)" }} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            {/* When to See Doctor */}
            <section className="rounded-2xl p-6 border-l-4" style={{ background: "rgba(8,145,178,0.05)", borderLeftColor: "var(--color-primary)" }}>
              <h2 className="text-lg font-bold mb-2" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>When Should You See a Doctor?</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{article.whenToSeeDoctor}</p>
            </section>

            {/* FAQ */}
            <section aria-labelledby="article-faq-heading">
              <h2 id="article-faq-heading" className="text-2xl font-bold mb-5" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {article.faq.map((item) => (
                  <details key={item.question} className="rounded-xl border group" style={{ background: "white", borderColor: "var(--color-border)" }}>
                    <summary className="px-5 py-4 font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4" style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}>
                      {item.question}
                      <svg className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </article>

          {/* CTA */}
          <div className="mt-10 rounded-3xl p-8 text-center border" style={{ background: "linear-gradient(135deg, rgba(8,145,178,0.06), rgba(5,150,105,0.06))", borderColor: "var(--color-border)" }}>
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
              Concerned about {article.term}?
            </h2>
            <p className="text-sm mb-5" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
              Consult Dr. Onkar Kakare at Sunshine Multi-Speciality Center, Kolhapur. Available 24/7.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, var(--color-cta), #047857)", fontFamily: "Figtree, sans-serif" }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
