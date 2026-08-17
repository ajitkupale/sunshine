"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/doctor", label: "About Doctor" },
  { href: "/facilities", label: "Facilities" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/health-guide", label: "Health Guide" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-teal-100/60"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
      role="banner"
    >
      <nav
        className="flex items-center justify-between px-5 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Sunshine Hospital — Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0891B2] to-[#059669] flex items-center justify-center flex-shrink-0 shadow-md">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
              <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="4" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
          <div>
            <span
              className="block font-bold text-sm leading-tight"
              style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
            >
              Sunshine
            </span>
            <span
              className="block text-xs leading-tight"
              style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}
            >
              Multi-Speciality Center
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-teal-50 hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile trigger */}
        <div className="flex items-center gap-2">
          <a
            href="tel:[PLACEHOLDER_PHONE]"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-teal-50"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call Now</span>
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, var(--color-cta), #047857)" }}
          >
            Book Appointment
          </Link>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg cursor-pointer transition-colors hover:bg-teal-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            style={{ color: "var(--color-text)" }}
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-teal-100 px-5 py-4 rounded-b-2xl bg-white/98"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-teal-50 hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-teal-50 mt-1">
              <a
                href="tel:[PLACEHOLDER_PHONE]"
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer"
                style={{ color: "var(--color-emergency)" }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Emergency: Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
