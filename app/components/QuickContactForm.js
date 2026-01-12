// app/components/ServiceInquiry.js
"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/siteConfig";

export default function ServiceInquiry() {
  const { business } = siteConfig;
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { name: "Leak Detection & Repair", icon: "💧" },
    { name: "Drain Cleaning", icon: "🚿" },
    { name: "Water Heater Repair & Installation", icon: "🔥" },
    { name: "Toilet & Faucet Repair", icon: "🚽" },
    { name: "Sewer Line Inspection & Repair", icon: "🔧" },
    { name: "24/7 Emergency Plumbing Services", icon: "🚨" },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      source: "service-inquiry-form",
      timestamp: new Date().toISOString(),
    };

    /**
     * 🔗 WEBHOOK INTEGRATION (LATER)
     *
     * Example:
     *
     * fetch("https://your-webhook-url.com", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify(payload),
     * });
     *
     * This can be:
     * - LeadConnector
     * - Zapier
     * - Make.com
     * - Custom backend
     */

    console.log("Form payload (not sent):", payload);

    setSubmitted(true);
  }

  return (
    <section
      aria-labelledby="plumbing-services-heading"
      className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="relative mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-sm font-medium mb-4">
            Professional Plumbing Services
          </span>

          <h2
            id="plumbing-services-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Reliable <span className="text-sky-400">Plumbing Services</span> You Can Trust
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            From emergency plumbing repairs to water heater installations, our licensed plumbers
            deliver fast, professional solutions.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* SERVICES */}
          <div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <li
                  key={service.name}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="flex items-center gap-4 text-white font-medium">
                    <span className="text-2xl">{service.icon}</span>
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-slate-400 text-sm">
              ✔ Licensed & Insured &nbsp; • &nbsp; ✔ 24/7 Emergency &nbsp; • &nbsp; ✔ Free Estimates
            </div>
          </div>

          {/* FORM / THANK YOU */}
          <div>
            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Request a Free Plumbing Estimate
                  </h3>

                  <p className="text-slate-500 text-sm mb-6">
                    We’ll respond within 30 minutes.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border"
                    />

                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border"
                    />

                    <select
                      name="service"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Service Needed</option>
                      <option>Leak Detection & Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Repair</option>
                      <option>Toilet & Faucet Repair</option>
                      <option>Sewer Line Services</option>
                      <option>Emergency Plumbing</option>
                      <option>Other</option>
                    </select>

                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Describe the issue (optional)"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-sky-500 text-white font-semibold text-lg"
                    >
                      Get Free Quote
                    </button>
                  </form>
                </>
              ) : (
                /* THANK YOU STATE */
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-500">
                    Your request has been received. A licensed plumber will contact you shortly.
                  </p>
                </div>
              )}

              {/* CALL OPTION */}
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-slate-500 text-sm mb-2">Prefer to call?</p>
                <a
                  href={`tel:${business.phone.replace(/[^0-9]/g, "")}`}
                  className="font-semibold text-slate-900 hover:text-sky-500"
                >
                  {business.phone}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
