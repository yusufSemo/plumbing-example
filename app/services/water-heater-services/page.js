// app/services/water-heater-services/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Water Heater Services in North Richland Hills, TX | ABC Plumbing",
  description: "Water heater installation, repair, and replacement in North Richland Hills, TX. Tank and tankless water heaters. Same-day service available. Free estimates.",
  keywords: "water heater repair, water heater installation, tankless water heater, hot water heater, plumber North Richland Hills",
};

export default function WaterHeaterPage() {
  const { business } = siteConfig;

  const services = [
    { title: "Water Heater Repair", description: "Fast repairs for all water heater issues including no hot water, leaks, and strange noises" },
    { title: "Water Heater Installation", description: "Professional installation of new tank and tankless water heaters" },
    { title: "Water Heater Replacement", description: "Out with the old, in with a new efficient unit properly sized for your home" },
    { title: "Tankless Water Heaters", description: "On-demand hot water with energy-efficient tankless systems" },
    { title: "Water Heater Maintenance", description: "Annual maintenance to extend lifespan and maintain efficiency" },
    { title: "Emergency Service", description: "24/7 emergency water heater repair when you need it most" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Water Heater Services
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            From repairs to full replacements, we handle all your water heater needs. Our licensed plumbers work on all brands and types of water heaters, including traditional tank and modern tankless systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Water Heater Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tank vs Tankless */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Tank vs. Tankless: Which Is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tank Water Heaters</h3>
              <ul className="space-y-3">
                {[
                  "Lower upfront cost",
                  "Simple installation",
                  "Works during power outages (gas)",
                  "Familiar technology",
                  "8-12 year lifespan",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tankless Water Heaters</h3>
              <ul className="space-y-3">
                {[
                  "Endless hot water",
                  "Energy efficient (save 20-30%)",
                  "Compact, wall-mounted",
                  "Longer lifespan (20+ years)",
                  "No standby heat loss",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-8">
            Not sure which is best for your home? We offer free consultations to help you choose.
          </p>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Signs Your Water Heater Needs Service
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "No hot water or not enough hot water",
              "Water takes too long to heat up",
              "Rusty or discolored hot water",
              "Strange noises (popping, rumbling)",
              "Water pooling around the unit",
              "Unit is over 10 years old",
              "Higher than normal energy bills",
              "Hot water runs out quickly",
            ].map((sign) => (
              <div key={sign} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Water Heater Service?
          </h2>
          <p className="text-slate-300 mb-8">
            Whether it's a repair, replacement, or new installation, we've got you covered. Free estimates on all water heater services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
