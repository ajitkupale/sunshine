"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const facilities = [
  {
    title: "Clean & Hygienic Environment",
    desc: "Our facility maintains the highest standards of cleanliness with daily deep sanitation, sterilized medical equipment, and strict infection control protocols — giving you confidence in your safety.",
    points: ["Daily deep sanitation", "Sterilized instruments", "Strict infection control"],
    image: "/images/facility-clean.png",
    imageAlt: "Clean and hygienic hospital room at Sunshine Multi-Speciality Center, Kolhapur",
  },
  {
    title: "Wheelchair Accessible",
    desc: "Sunshine Multi-Speciality Center is designed to be fully inclusive. All areas are wheelchair accessible, with wide corridors, ramps, and staff trained to assist patients with mobility needs.",
    points: ["Ramps and wide corridors", "Accessible consultation rooms", "Trained support staff"],
    image: "/images/facility-wheelchair.png",
    imageAlt: "Wheelchair accessible corridor at Sunshine Hospital, Rankala, Kolhapur",
  },
  {
    title: "Supportive & Attentive Staff",
    desc: "Our team is chosen not just for their medical expertise, but for their compassion. Every patient interaction — from reception to discharge — is handled with care, respect, and patience.",
    points: ["Trained in patient communication", "Calm & organised triage", "Respectful to all ages"],
    image: "/images/facility-staff.png",
    imageAlt: "Friendly and supportive medical staff at Sunshine Multi-Speciality Center",
  },
];

export default function Facilities() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(facilities.length).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section
      id="facilities"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "rgba(8,145,178,0.03)" }}
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
          >
            World-Class Facilities
          </p>
          <h2
            id="facilities-heading"
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
          >
            Why Patients Trust Us
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="space-y-20">
          {facilities.map((facility, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={facility.title}
                ref={(el) => { refs.current[i] = el; }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
                  visibleItems[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Image — alternates side */}
                <div className={isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={facility.image}
                      alt={facility.imageAlt}
                      width={560}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-3"
                    style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
                  >
                    {facility.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
                  >
                    {facility.desc}
                  </p>
                  <ul className="space-y-2.5" role="list">
                    {facility.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5">
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "var(--color-cta)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
