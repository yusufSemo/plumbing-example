// app/services/emergency-plumbing/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "24/7 Emergency Plumbing Services in North Richland Hills, TX | ABC Plumbing",
  description: "Emergency plumber available 24/7 in North Richland Hills, TX. Fast response for burst pipes, severe leaks, sewage backups, and plumbing emergencies. Call now!",
  keywords: "emergency plumber, 24 hour plumber, emergency plumbing North Richland Hills, burst pipe repair, plumbing emergency",
};

export default function EmergencyPlumbingPage() {
  const { business } = siteConfig;

  const emergencyTypes = [
    { title: "Burst Pipes", description: "Immediate response to stop flooding and repair damaged pipes" },
    { title: "Severe Leaks", description: "Fast leak containment and repair to prevent water damage" },
    { title: "Sewage Backups", description: "Emergency sewage cleanup and line clearing" },
    { title: "No Hot Water", description: "Urgent water heater repairs when you need them" },
    { title: "Overflowing Toilets", description: "Quick fixes to stop overflow and restore function" },
    { title: "Gas Leaks", description: "Immediate response for dangerous gas line issues" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
              24/7 Available
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Emergency Plumbing Services
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Plumbing emergencies don't wait for business hours. Our licensed plumbers are available 24 hours a day, 7 days a week to handle urgent plumbing problems in North Richland Hills and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: {business.phone}
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Request Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Emergencies We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((type) => (
              <div key={type.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Call Us */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Choose Us for Emergencies
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Fast Response Times</h3>
                <p className="text-slate-600">We understand emergencies can't wait. Our plumbers are dispatched immediately and typically arrive within 60 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Licensed & Insured</h3>
                <p className="text-slate-600">All our plumbers are fully licensed and insured, giving you peace of mind even in stressful emergency situations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Upfront Pricing</h3>
                <p className="text-slate-600">Even in emergencies, we provide clear pricing before starting work. No surprise charges on your bill.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Plumbing Emergency? We're Here to Help.
          </h2>
          <p className="text-red-100 mb-8">
            Don't wait for the damage to get worse. Call us now for immediate assistance.
          </p>
          <a
            href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {business.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
