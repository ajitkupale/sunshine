import type { Metadata } from "next";
import Link from "next/link";
import { healthGuideArticles } from "@/data/healthGuide";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Guide | Sunshine Hospital Kolhapur — Diabetes, Thyroid, Hypertension",
  description: "Expert health guides on diabetes, hypertension, thyroid disorders, and more — reviewed by Dr. Onkar Kakare at Sunshine Multi-Speciality Center, Kolhapur.",
  alternates: { canonical: "https://sunshinehospitalkolhapur.in/health-guide" },
};

export default function HealthGuidePage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>Knowledge Centre</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Health Guide</h1>
          <div className="section-divider mx-auto" />
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
            Expert health information reviewed by Dr. Onkar Kakare — Internal Medicine Specialist & Diabetologist, Kolhapur.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthGuideArticles.map((article) => (
            <Link key={article.slug} href={`/health-guide/${article.slug}`} className="group rounded-2xl p-6 border cursor-pointer transition-all duration-250 hover:-translate-y-1" style={{ background: "white", borderColor: "var(--color-border)", boxShadow: "var(--shadow-card)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(8,145,178,0.08)" }}>
                <BookOpen className="w-5 h-5" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>Health Guide</span>
              <h2 className="mt-1 text-lg font-bold mb-2 group-hover:text-[var(--color-primary)]" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>{article.title}</h2>
              <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>{article.intro}</p>
              <div className="mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--color-primary)" }}>Read more →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
