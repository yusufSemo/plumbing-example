// app/services/drain-cleaning/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Drain Cleaning Services in North Richland Hills, TX | ABC Plumbing",
  description: "Professional drain cleaning in North Richland Hills, TX. We clear clogged drains fast using hydro jetting and drain snaking. Same-day service available.",
  keywords: "drain cleaning, clogged drain, drain snake, hydro jetting, plumber North Richland Hills, slow drain",
};

export default function DrainCleaningPage() {
  const { business } = siteConfig;

  const drainTypes = [
    { title: "Kitchen Drains", description: "Grease, food particles, and soap buildup cleared from kitchen sinks" },
    { title: "Bathroom Drains", description: "Hair, soap scum, and product buildup removed from showers and sinks" },
    { title: "Toilet Drains", description: "Stubborn toilet clogs cleared quickly and effectively" },
    { title: "Floor Drains", description: "Basement and garage floor drains cleaned and flowing" },
    { title: "Main Sewer Lines", description: "Complete main line cleaning to restore flow throughout your home" },
    { title: "Outdoor Drains", description: "Storm drains and yard drains cleared of debris" },
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
            Drain Cleaning Services
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Slow or clogged drains are more than just an inconvenience—they can lead to backups, odors, and water damage. Our professional drain cleaning services restore full flow to your plumbing quickly and affordably.
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

      {/* Drain Types */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Drains We Clean
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drainTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Drain Cleaning Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Drain Snaking</h3>
              <p className="text-slate-600">
                A flexible metal cable is inserted into the drain to break up and remove clogs. Effective for most household clogs including hair, soap, and minor blockages.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hydro Jetting</h3>
              <p className="text-slate-600">
                High-pressure water is blasted through your pipes to scour away years of buildup, grease, and debris. The most thorough cleaning method available for severe clogs and main lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Signs You Need Drain Cleaning
          </h2>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Water drains slowly",
                "Gurgling sounds from drains",
                "Unpleasant odors from drains",
                "Multiple clogged drains",
                "Water backing up",
                "Fruit flies around drains",
              ].map((sign) => (
                <li key={sign} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Drains Flowing Again
          </h2>
          <p className="text-slate-300 mb-8">
            Same-day drain cleaning service available. Call now or request a free estimate online.
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
