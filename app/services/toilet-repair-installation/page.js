// app/services/toilet-repair-installation/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Toilet Repair & Installation in North Richland Hills, TX | ABC Plumbing",
  description: "Expert toilet repair and installation in North Richland Hills, TX. Running toilets, clogs, leaks, and new toilet installation. Same-day service. Free estimates.",
  keywords: "toilet repair, toilet installation, running toilet, clogged toilet, toilet replacement, plumber North Richland Hills",
};

export default function ToiletRepairPage() {
  const { business } = siteConfig;

  const problems = [
    { title: "Running Toilet", description: "Toilets that won't stop running waste water and money" },
    { title: "Clogged Toilet", description: "Stubborn clogs that a plunger can't clear" },
    { title: "Leaking Toilet", description: "Leaks at the base, tank, or supply line" },
    { title: "Weak Flush", description: "Toilets that don't flush properly or completely" },
    { title: "Phantom Flush", description: "Toilets that randomly refill on their own" },
    { title: "Rocking Toilet", description: "Loose toilets that move when you sit down" },
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
            Toilet Repair & Installation
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            From minor repairs to complete replacements, we handle all toilet issues quickly and professionally. Our plumbers arrive with fully stocked trucks to fix most problems in a single visit.
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

      {/* Common Problems */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Toilet Problems We Fix
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            New Toilet Installation
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Whether you're upgrading an old toilet or installing in a new bathroom, we've got you covered.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">We Install All Types:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Standard two-piece toilets",
                "One-piece toilets",
                "High-efficiency toilets",
                "Comfort height toilets",
                "Dual-flush toilets",
                "Smart toilets",
                "Wall-mounted toilets",
                "ADA-compliant toilets",
              ].map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Upgrade */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Benefits of Upgrading Your Toilet
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Save Water</h3>
                <p className="text-slate-600 text-sm">Modern toilets use 1.28 gallons per flush vs. 3-7 gallons for older models.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Better Performance</h3>
                <p className="text-slate-600 text-sm">New flush technology clears the bowl more effectively with less water.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Improved Comfort</h3>
                <p className="text-slate-600 text-sm">Comfort height toilets are easier to use for people of all ages and abilities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Modern Look</h3>
                <p className="text-slate-600 text-sm">Update the look of your bathroom with sleek, contemporary designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Toilet Trouble? We Can Help.
          </h2>
          <p className="text-slate-300 mb-8">
            From quick repairs to new installations, we've got your bathroom covered.
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
