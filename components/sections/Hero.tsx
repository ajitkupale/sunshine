"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  Star,
  Accessibility,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  { icon: Clock, label: "24/7 Emergency" },
  { icon: Star, label: "4.8★ Rated" },
  { icon: Accessibility, label: "Wheelchair Access" },
  { icon: ShieldCheck, label: "Hygienic Facility" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="hero-gradient min-h-screen flex items-center pt-28 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ background: "rgba(8,145,178,0.08)", borderColor: "rgba(8,145,178,0.25)", color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              24/7 Multi-Specialty Hospital — Rankala, Kolhapur
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
            >
              Sunshine{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, var(--color-primary), var(--color-cta))" }}
              >
                Multi-Speciality
              </span>
              <br />Center
            </h1>

            {/* Sub-heading */}
            <p
              className="text-lg sm:text-xl leading-relaxed mb-3 font-medium"
              style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
            >
              Expert care by{" "}
              <strong style={{ color: "var(--color-primary)" }}>Dr. Onkar Kakare</strong>{" "}
              — Diabetologist & Internal Medicine Specialist
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
            >
              Serving Kolhapur with compassionate, accurate, and accessible healthcare.
              Rated 4.8★ by over 200 patients.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, var(--color-cta), #047857)", fontFamily: "Figtree, sans-serif" }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:[PLACEHOLDER_PHONE]"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base cursor-pointer transition-all duration-200 border-2 hover:-translate-y-0.5"
                style={{ borderColor: "var(--color-emergency)", color: "var(--color-emergency)", background: "rgba(220,38,38,0.05)", fontFamily: "Figtree, sans-serif" }}
                aria-label="Emergency call"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Emergency: Call Now
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative animate-float">
              {/* Decorative glow ring */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                style={{ background: "radial-gradient(ellipse, var(--color-secondary), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60">
                <Image
                  src="/images/hero-medical.png"
                  alt="Sunshine Multi-Speciality Center — modern, clean hospital facility in Kolhapur"
                  width={600}
                  height={500}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-2.5 rounded-2xl px-4 py-3.5 border"
              style={{ background: "rgba(255,255,255,0.7)", borderColor: "var(--color-border)" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(8,145,178,0.10)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              </div>
              <span
                className="text-sm font-semibold text-center sm:text-left"
                style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
