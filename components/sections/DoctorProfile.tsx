import Image from "next/image";
import { MapPin, Award, Stethoscope, Quote } from "lucide-react";

const specialties = [
  "Internal Medicine Specialist",
  "General Practitioner",
  "Diabetologist",
];

const credentials = [
  { label: "MBBS", sub: "Medical Degree" },
  { label: "MD", sub: "Internal Medicine" },
  { label: "10+", sub: "Years Experience" },
];

const clinics = [
  { city: "Kolhapur", areas: "Laxmipuri & Rankala (Sunshine Center)" },
  { city: "Karad", areas: "Satara District" },
];

export default function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="doctor-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
          >
            Meet Your Doctor
          </p>
          <h2
            id="doctor-heading"
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
          >
            Dr. Onkar Kakare
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
              {/* Decorative gradient blob */}
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl opacity-20 -z-10"
                style={{ background: "radial-gradient(ellipse, var(--color-secondary), transparent)" }}
                aria-hidden="true"
              />
              <Image
                src="/images/doctor-kakare.png"
                alt="Dr. Onkar Kakare — Diabetologist and Internal Medicine Specialist in Kolhapur"
                width={480}
                height={560}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating rating badge */}
            <div
              className="absolute bottom-6 right-0 sm:right-4 rounded-2xl px-4 py-3 shadow-xl border"
              style={{ background: "white", borderColor: "var(--color-border)" }}
            >
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-bold text-lg" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>4.8</span>
                <span className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>/ 5 rating</span>
              </div>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>200+ Google Reviews</p>
            </div>
          </div>

          {/* Right: Credentials */}
          <div>
            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-6">
              {specialties.map((sp) => (
                <span
                  key={sp}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ background: "rgba(8,145,178,0.08)", borderColor: "rgba(8,145,178,0.25)", color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
                >
                  {sp}
                </span>
              ))}
            </div>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
            >
              Dr. Onkar Kakare is a highly respected physician in Kolhapur, known for his
              thorough diagnostic approach and compassionate bedside manner. He has built a
              reputation for accurate diagnoses and personalised treatment plans — with
              particular warmth and respect towards elderly patients that has become a hallmark
              of his practice.
            </p>

            {/* Gold Credential Badges */}
            <div className="flex gap-3 mb-8" aria-label="Dr. Kakare's qualifications">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="badge-gold rounded-xl px-4 py-3 text-center cursor-default"
                >
                  <p className="text-lg font-extrabold text-white" style={{ fontFamily: "Figtree, sans-serif" }}>
                    {cred.label}
                  </p>
                  <p className="text-xs font-medium text-yellow-100" style={{ fontFamily: "Noto Sans, sans-serif" }}>
                    {cred.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinic Locations */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                <h3
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}
                >
                  Clinic Locations
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {clinics.map((clinic) => (
                  <div
                    key={clinic.city}
                    className="rounded-xl px-4 py-3 border"
                    style={{ background: "rgba(8,145,178,0.04)", borderColor: "var(--color-border)" }}
                  >
                    <p className="font-semibold text-sm" style={{ color: "var(--color-text)", fontFamily: "Figtree, sans-serif" }}>
                      {clinic.city}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                      {clinic.areas}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Quote */}
            <blockquote
              className="rounded-2xl p-5 border-l-4"
              style={{ background: "rgba(8,145,178,0.05)", borderLeftColor: "var(--color-primary)" }}
            >
              <Quote className="w-5 h-5 mb-2 opacity-50" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}
              >
                &ldquo;Patients specifically appreciate Dr. Kakare&rsquo;s humble, polite demeanor and
                his respectful approach towards elderly patients — a quality that sets him apart
                from other physicians.&rdquo;
              </p>
              <footer
                className="mt-2 text-xs font-semibold"
                style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
              >
                — Patient Testimonials, Google Reviews
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
