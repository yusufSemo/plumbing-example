// app/services/gas-line-services/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Gas Line Services in North Richland Hills, TX | ABC Plumbing",
  description: "Licensed gas line installation, repair, and leak detection in North Richland Hills, TX. Gas appliance hookups and safety inspections. Call for service.",
  keywords: "gas line repair, gas line installation, gas leak detection, gas plumber North Richland Hills, gas appliance hookup",
};

export default function GasLinePage() {
  const { business } = siteConfig;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Licensed Gas Plumbers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Gas Line Services</h1>
          <p className="text-lg text-slate-600 mb-8">Gas line work requires licensed professionals. Our certified plumbers safely install, repair, and inspect gas lines for homes and businesses throughout North Richland Hills.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Gas Line Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Gas Leak Detection", description: "Professional detection and repair of dangerous gas leaks" },
              { title: "Gas Line Installation", description: "New gas line installation for appliances and additions" },
              { title: "Gas Line Repair", description: "Repair of damaged, corroded, or leaking gas lines" },
              { title: "Appliance Hookups", description: "Safe connection of gas stoves, dryers, and water heaters" },
              { title: "Gas Line Inspection", description: "Safety inspections and pressure testing" },
              { title: "Gas Line Relocation", description: "Moving gas lines for remodels and renovations" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              Smell Gas? Act Immediately.
            </h2>
            <ul className="space-y-2 text-red-700">
              <li>• Do NOT turn on any lights or electrical switches</li>
              <li>• Do NOT use your phone inside the house</li>
              <li>• Leave the house immediately</li>
              <li>• Call 911 and your gas company from outside</li>
              <li>• Do not re-enter until cleared by professionals</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Gas Line Service?</h2>
          <p className="text-slate-300 mb-8">Our licensed gas plumbers ensure safe, code-compliant work every time.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Get a Free Estimate</Link>
        </div>
      </section>
    </div>
  );
}
