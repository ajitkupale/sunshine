"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\+?[\d\s-]{8,15}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Please describe your health concern";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputBase = `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none`;
  const inputStyle = `border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20`;

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "rgba(8,145,178,0.03)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
            Get In Touch
          </p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>
            Book an Appointment
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-base" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
            Reach out and our team will confirm your appointment promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Form */}
          <div className="rounded-3xl p-8 border shadow-lg" style={{ background: "white", borderColor: "var(--color-border)" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4">
                <CheckCircle className="w-16 h-16" style={{ color: "var(--color-cta)" }} aria-hidden="true" />
                <h3 className="text-2xl font-bold" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Message Sent!</h3>
                <p className="text-base" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                  Thank you, {form.name}. Our team will contact you at {form.phone} within a few hours to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}>
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={`${inputBase} ${inputStyle}`}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      style={{ fontFamily: "Noto Sans, sans-serif", color: "var(--color-text)" }}
                    />
                    {errors.name && <p id="name-error" role="alert" className="text-xs text-red-600 mt-1" style={{ fontFamily: "Noto Sans, sans-serif" }}>{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}>
                      Phone Number <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={`${inputBase} ${inputStyle}`}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      aria-required="true"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-invalid={!!errors.phone}
                      style={{ fontFamily: "Noto Sans, sans-serif", color: "var(--color-text)" }}
                    />
                    {errors.phone && <p id="phone-error" role="alert" className="text-xs text-red-600 mt-1" style={{ fontFamily: "Noto Sans, sans-serif" }}>{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}>
                      Email Address <span className="text-xs font-normal opacity-60">(optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={`${inputBase} ${inputStyle}`}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      style={{ fontFamily: "Noto Sans, sans-serif", color: "var(--color-text)" }}
                    />
                    {errors.email && <p id="email-error" role="alert" className="text-xs text-red-600 mt-1" style={{ fontFamily: "Noto Sans, sans-serif" }}>{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)", fontFamily: "Noto Sans, sans-serif" }}>
                      Health Concern <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`${inputBase} ${inputStyle} resize-none`}
                      placeholder="Briefly describe your symptoms or what you'd like to consult about..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-required="true"
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                      style={{ fontFamily: "Noto Sans, sans-serif", color: "var(--color-text)" }}
                    />
                    {errors.message && <p id="message-error" role="alert" className="text-xs text-red-600 mt-1" style={{ fontFamily: "Noto Sans, sans-serif" }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, var(--color-cta), #047857)", fontFamily: "Figtree, sans-serif" }}
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </button>
                  <p className="text-xs text-center" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                    We respect your privacy. Your information will not be shared.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 border" style={{ background: "white", borderColor: "var(--color-border)" }}>
                <MapPin className="w-5 h-5 mb-3" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Our Address</h3>
                <address className="not-italic text-xs leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                  Opp. Dr. Yedekar Hospital,<br />
                  Near Nagojirao Patankar Highschool,<br />
                  Rankala, Kolhapur — 416013
                </address>
              </div>
              <div className="rounded-2xl p-5 border" style={{ background: "white", borderColor: "var(--color-border)" }}>
                <Phone className="w-5 h-5 mb-3" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Contact</h3>
                <a href="tel:[PLACEHOLDER_PHONE]" className="text-xs font-semibold cursor-pointer block" style={{ color: "var(--color-primary)", fontFamily: "Noto Sans, sans-serif" }}>
                  [PLACEHOLDER_PHONE]
                </a>
                <a href="mailto:info@sunshinehospitalkolhapur.in" className="text-xs cursor-pointer block mt-1" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>
                  info@sunshinehospitalkolhapur.in
                </a>
              </div>
              <div className="rounded-2xl p-5 border sm:col-span-2" style={{ background: "rgba(5,150,105,0.06)", borderColor: "rgba(5,150,105,0.25)" }}>
                <Clock className="w-5 h-5 mb-3" style={{ color: "var(--color-cta)" }} aria-hidden="true" />
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}>Open Hours</h3>
                <p className="text-sm font-bold" style={{ color: "var(--color-cta)", fontFamily: "Figtree, sans-serif" }}>24 Hours a Day · 7 Days a Week · 365 Days a Year</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}>We are always here when you need us.</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: "var(--color-border)" }}>
              <iframe
                title="Sunshine Multi-Speciality Center location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0!2d74.2115!3d16.6949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzQxLjYiTiA3NMKwMTInNDEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing location of Sunshine Multi-Speciality Center, Rankala, Kolhapur"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Sunshine+Multi+Speciality+Center+Rankala+Kolhapur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-colors hover:bg-teal-50"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontFamily: "Figtree, sans-serif" }}
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
