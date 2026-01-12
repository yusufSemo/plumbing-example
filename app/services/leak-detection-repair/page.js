// app/services/leak-detection-repair/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Leak Detection & Repair Services in North Richland Hills, TX | ABC Plumbing",
  description: "Professional leak detection and repair in North Richland Hills, TX. We use advanced technology to find hidden leaks and provide lasting repairs. Free estimates.",
  keywords: "leak detection, leak repair, water leak, hidden leak, plumber North Richland Hills, slab leak detection",
};

export default function LeakDetectionPage() {
  const { business } = siteConfig;

  const leakTypes = [
    { title: "Slab Leaks", description: "Leaks under your home's foundation that can cause serious structural damage" },
    { title: "Hidden Pipe Leaks", description: "Leaks inside walls, ceilings, and floors that aren't immediately visible" },
    { title: "Faucet & Fixture Leaks", description: "Dripping faucets, showerheads, and other visible fixture leaks" },
    { title: "Toilet Leaks", description: "Running toilets and leaks at the base or tank connections" },
    { title: "Water Heater Leaks", description: "Tank leaks, valve leaks, and connection issues" },
    { title: "Outdoor Leaks", description: "Sprinkler systems, hose bibs, and main line leaks" },
  ];

  const signs = [
    "Unusually high water bills",
    "Sound of running water when nothing is on",
    "Wet spots on floors, walls, or ceilings",
    "Mold or mildew growth",
    "Musty odors",
    "Cracks in foundation",
    "Low water pressure",
    "Warm spots on floors (slab leak)",
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
            Leak Detection & Repair
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Water leaks can cause thousands of dollars in damage if left unchecked. Our advanced leak detection technology pinpoints hidden leaks without unnecessary damage to your home, and our expert plumbers provide lasting repairs.
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

      {/* Leak Types */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Types of Leaks We Detect & Repair
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leakTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of a Leak */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Signs You May Have a Hidden Leak
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Leak Detection Process
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Initial Assessment</h3>
                <p className="text-slate-600">We start by discussing your concerns and inspecting visible signs of water damage.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Advanced Detection</h3>
                <p className="text-slate-600">Using acoustic listening devices, thermal imaging, and pressure testing, we locate the exact source of the leak without unnecessary demolition.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Clear Diagnosis</h3>
                <p className="text-slate-600">We explain exactly what we found, show you the problem area, and discuss your repair options with upfront pricing.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Professional Repair</h3>
                <p className="text-slate-600">Our skilled plumbers perform the repair with minimal disruption to your home, restoring your plumbing to perfect working order.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Suspect a Leak? Don't Wait.
          </h2>
          <p className="text-slate-300 mb-8">
            The longer a leak goes undetected, the more damage it causes. Contact us today for professional leak detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30"
            >
              Schedule an Inspection
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
