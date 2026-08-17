"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials, aggregateRating } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400" : "fill-gray-200"}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const go = (dir: "prev" | "next") => {
    stopAutoplay();
    setCurrent((prev) =>
      dir === "next"
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
    startAutoplay();
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
          >
            Patient Voices
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
          >
            What Our Patients Say
          </h2>
          <div className="section-divider mx-auto" />

          {/* Aggregate rating badge */}
          <div
            className="inline-flex items-center gap-3 mt-4 px-5 py-2.5 rounded-2xl border"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.25)" }}
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span
              className="font-bold text-lg"
              style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}
              aria-label={`Average rating: ${aggregateRating.ratingValue} out of 5`}
            >
              {aggregateRating.ratingValue} / 5
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
            >
              {aggregateRating.reviewCount}+ {aggregateRating.source}
            </span>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div
          className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-10 border shadow-lg mb-8 transition-all duration-500"
          style={{ background: "white", borderColor: "var(--color-border)", boxShadow: "var(--shadow-card)" }}
          aria-live="polite"
          aria-atomic="true"
        >
          <StarRating rating={testimonials[current].rating} />
          <blockquote
            className="mt-4 text-lg leading-relaxed font-medium italic"
            style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}
          >
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
          <footer className="mt-5 flex items-center justify-between">
            <div>
              <p className="font-bold text-sm" style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}>
                {testimonials[current].name}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
                {testimonials[current].service}
              </p>
            </div>
            {/* Nav */}
            <div className="flex gap-2">
              <button
                onClick={() => go("prev")}
                className="w-9 h-9 rounded-xl border flex items-center justify-center cursor-pointer transition-colors hover:bg-teal-50"
                style={{ borderColor: "var(--color-border)" }}
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              </button>
              <button
                onClick={() => go("next")}
                className="w-9 h-9 rounded-xl border flex items-center justify-center cursor-pointer transition-colors hover:bg-teal-50"
                style={{ borderColor: "var(--color-border)" }}
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              </button>
            </div>
          </footer>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { stopAutoplay(); setCurrent(i); startAutoplay(); }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-6" : "w-2 opacity-40"}`}
              style={{ background: "var(--color-primary)" }}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
