// app/services/water-line-repair/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Water Line Repair & Replacement in North Richland Hills, TX | ABC Plumbing",
  description: "Main water line repair and replacement in North Richland Hills, TX. Low water pressure? No water? Wet yard? We diagnose and fix water line problems.",
  keywords: "water line repair, main water line, water pipe repair, low water pressure, plumber North Richland Hills, water line replacement",
};

export default function WaterLineRepairPage() {
  const { business } = siteConfig;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Water Line Repair & Replacement</h1>
          <p className="text-lg text-slate-600 mb-8">Your main water line brings fresh water into your home. When it fails, you need fast, professional repairs. We offer trenchless options to minimize disruption to your property.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Signs of Water Line Problems</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Sudden drop in water pressure", "No water in the house", "Wet or soggy spots in your yard", "Unexplained increase in water bills", "Discolored water", "Sound of running water when nothing is on", "Cracks in your foundation", "Muddy or sinkholes in yard"].map((sign) => (
              <div key={sign} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <span className="text-slate-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Water Line Issues?</h2>
          <p className="text-slate-300 mb-8">We'll locate the problem and provide repair options, including trenchless solutions.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Schedule an Inspection</Link>
        </div>
      </section>
    </div>
  );
}
