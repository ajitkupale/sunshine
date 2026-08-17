"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card rounded-2xl p-7 text-center cursor-default transition-all duration-500`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
        background: "white",
        border: "1.5px solid var(--color-border)",
      }}
    >
      <p
        className="text-4xl sm:text-5xl font-extrabold mb-2 bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(135deg, var(--color-primary), var(--color-cta))",
          fontFamily: "Figtree, sans-serif",
        }}
      >
        {value}
      </p>
      <p
        className="text-sm font-semibold uppercase tracking-wide"
        style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

const stats = [
  { value: "4.8★", label: "Patient Rating" },
  { value: "24/7", label: "Round-the-Clock Care" },
  { value: "500+", label: "Patients Treated" },
  { value: "10+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Our achievements"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
          >
            Trusted by Kolhapur
          </h2>
          <div className="section-divider mx-auto" />
          <p
            className="text-base"
            style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
          >
            Numbers that reflect our commitment to your health
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
