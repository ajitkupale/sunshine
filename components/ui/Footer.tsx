import Link from "next/link";
import { Phone, MapPin, Clock, Heart, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/doctor", label: "About Dr. Kakare" },
  { href: "/services", label: "Our Services" },
  { href: "/facilities", label: "Facilities" },
  { href: "/health-guide", label: "Health Guide" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services/diabetes-management", label: "Diabetes & BP Management" },
  { href: "/services/thyroid-treatment", label: "Thyroid Treatment" },
  { href: "/services/pain-management", label: "Pain Management" },
  { href: "/services/gastric-disorders", label: "Gastric Disorders" },
  { href: "/services/respiratory-problems", label: "Respiratory Problems" },
  { href: "/services/emergency-care", label: "Emergency Care" },
];

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 mt-20"
      style={{ background: "linear-gradient(180deg, #083344 0%, #0c1a2e 100%)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0891B2] to-[#059669] flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-bold text-white text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Sunshine
                </span>
                <span className="block text-xs text-teal-300" style={{ fontFamily: "Noto Sans, sans-serif" }}>
                  Multi-Speciality Center
                </span>
              </div>
            </Link>
            <p className="text-sm text-teal-200 leading-relaxed mb-4" style={{ fontFamily: "Noto Sans, sans-serif" }}>
              Your trusted 24/7 multi-specialty hospital in Rankala, Kolhapur — delivering compassionate, expert medical care.
            </p>
            <div className="flex items-center gap-1.5 text-sm font-bold text-yellow-400">
              <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              4.8 / 5 — Google Reviews
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Figtree, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-200 hover:text-white transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: "Noto Sans, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Figtree, sans-serif" }}>
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-200 hover:text-white transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: "Noto Sans, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Figtree, sans-serif" }}>
              Contact & Location
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-teal-200" style={{ fontFamily: "Noto Sans, sans-serif" }}>
                  Opposite Dr. Yedekar Hospital,<br />
                  Near Nagojirao Patankar Highschool,<br />
                  Rankala, Kolhapur — 416013
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:[PLACEHOLDER_PHONE]"
                  className="text-sm text-teal-200 hover:text-white transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "Noto Sans, sans-serif" }}
                >
                  [PLACEHOLDER_PHONE]
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@sunshinehospitalkolhapur.in"
                  className="text-sm text-teal-200 hover:text-white transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "Noto Sans, sans-serif" }}
                >
                  info@sunshinehospitalkolhapur.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm font-semibold text-green-400" style={{ fontFamily: "Noto Sans, sans-serif" }}>
                  Open 24 Hours · 7 Days a Week
                </p>
              </div>
            </address>

            {/* Emergency */}
            <div className="mt-5 rounded-xl bg-red-900/30 border border-red-500/30 p-3">
              <p className="text-xs font-semibold text-red-300 mb-1 uppercase tracking-wide">Emergency</p>
              <a
                href="tel:[PLACEHOLDER_PHONE]"
                className="text-lg font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                style={{ fontFamily: "Figtree, sans-serif" }}
                aria-label="Call emergency number"
              >
                [PLACEHOLDER_PHONE]
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-teal-400" style={{ fontFamily: "Noto Sans, sans-serif" }}>
            © {new Date().getFullYear()} Sunshine Multi-Speciality Center, Rankala, Kolhapur. All rights reserved.
          </p>
          <p className="text-xs text-teal-500" style={{ fontFamily: "Noto Sans, sans-serif" }}>
            Information on this site is for educational purposes only. Always consult your doctor.
          </p>
        </div>
      </div>
    </footer>
  );
}
