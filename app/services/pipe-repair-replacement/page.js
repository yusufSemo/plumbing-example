// app/services/pipe-repair-replacement/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Pipe Repair & Replacement in North Richland Hills, TX | ABC Plumbing",
  description: "Pipe repair, repiping, and replacement in North Richland Hills, TX. Fix leaking, corroded, or damaged pipes. Whole-house repiping available. Free estimates.",
  keywords: "pipe repair, repiping, pipe replacement, leaking pipe, corroded pipes, plumber North Richland Hills, burst pipe repair",
};

export default function PipeRepairPage() {
  const { business } = siteConfig;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Pipe Repair & Replacement</h1>
          <p className="text-lg text-slate-600 mb-8">Whether you have a single leaking pipe or need whole-house repiping, our experienced plumbers provide reliable pipe repair and replacement services to protect your home.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Pipe Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pipe Leak Repair", description: "Fast repair of leaking pipes to prevent water damage" },
              { title: "Burst Pipe Repair", description: "Emergency repair for burst or broken pipes" },
              { title: "Pipe Replacement", description: "Replacing damaged sections of pipe" },
              { title: "Whole-House Repiping", description: "Complete replacement of outdated plumbing" },
              { title: "Frozen Pipe Repair", description: "Thawing and repairing frozen pipes" },
              { title: "Pipe Insulation", description: "Protecting pipes from freezing temperatures" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">When to Consider Repiping</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Home is over 50 years old", "Galvanized or polybutylene pipes", "Frequent leaks throughout the house", "Rusty or discolored water", "Low water pressure throughout", "Visible corrosion on pipes", "Planning a major renovation", "Multiple plumbing repairs needed"].map((sign) => (
              <div key={sign} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-slate-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pipe Problems?</h2>
          <p className="text-slate-300 mb-8">We'll assess the situation and recommend the most cost-effective solution.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Get a Free Estimate</Link>
        </div>
      </section>
    </div>
  );
}
