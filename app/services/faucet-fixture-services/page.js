// app/services/faucet-fixture-services/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Faucet & Fixture Services in North Richland Hills, TX | ABC Plumbing",
  description: "Faucet repair and installation in North Richland Hills, TX. Kitchen faucets, bathroom faucets, showerheads, and more. Same-day service available.",
  keywords: "faucet repair, faucet installation, leaky faucet, showerhead replacement, plumber North Richland Hills, fixture installation",
};

export default function FaucetFixturePage() {
  const { business } = siteConfig;

  const fixtures = [
    { title: "Kitchen Faucets", description: "Repair and installation of all kitchen faucet styles" },
    { title: "Bathroom Faucets", description: "Sink faucets for bathrooms of all sizes" },
    { title: "Showerheads", description: "Standard, rain, and handheld showerhead installation" },
    { title: "Bathtub Faucets", description: "Tub spouts and faucet repair or replacement" },
    { title: "Outdoor Faucets", description: "Hose bibs, frost-proof faucets, and spigots" },
    { title: "Utility Faucets", description: "Laundry room and utility sink faucets" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Faucet & Fixture Services</h1>
          <p className="text-lg text-slate-600 mb-8">Dripping faucets, outdated fixtures, or planning an upgrade? Our plumbers repair and install all types of faucets and plumbing fixtures throughout your home.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Fixtures We Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fixtures.map((fixture) => (
              <div key={fixture.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{fixture.title}</h3>
                <p className="text-slate-600 text-sm">{fixture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Faucet Problems We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Dripping or leaking faucets", "Low water pressure", "Squeaky handles", "Difficulty turning handles", "Rust or corrosion", "Sprayer not working", "Water temperature issues", "Loose or wobbly faucets"].map((issue) => (
              <div key={issue} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-slate-700">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Faucet Service?</h2>
          <p className="text-slate-300 mb-8">From repairs to upgrades, we handle all your faucet and fixture needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">Call {business.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
