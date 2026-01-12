// app/services/bathroom-plumbing/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Bathroom Plumbing Services in North Richland Hills, TX | ABC Plumbing",
  description: "Complete bathroom plumbing services in North Richland Hills, TX. Repairs, installations, and remodel plumbing. Toilets, showers, sinks, and more.",
  keywords: "bathroom plumbing, bathroom remodel plumbing, shower installation, bathroom sink, plumber North Richland Hills, bathtub plumbing",
};

export default function BathroomPlumbingPage() {
  const { business } = siteConfig;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Bathroom Plumbing Services</h1>
          <p className="text-lg text-slate-600 mb-8">From simple repairs to complete bathroom remodels, we handle all your bathroom plumbing needs. Expert installation and service for toilets, sinks, showers, tubs, and more.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Bathroom Plumbing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Toilet Services", description: "Repair, replacement, and installation of all toilet types" },
              { title: "Sink & Faucet", description: "Bathroom sink and faucet repair and installation" },
              { title: "Shower Plumbing", description: "Shower valve repair, installation, and upgrades" },
              { title: "Bathtub Plumbing", description: "Tub installation, drain repair, and faucet service" },
              { title: "Drain Services", description: "Clearing clogs in sinks, tubs, and showers" },
              { title: "Remodel Plumbing", description: "Complete plumbing for bathroom renovations" },
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Planning a Bathroom Remodel?</h2>
          <p className="text-slate-600 mb-8">We work with homeowners and contractors to provide reliable plumbing for bathroom renovations of all sizes. From moving fixtures to installing new plumbing, we do it right.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Remodel Quote</Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bathroom Plumbing Problems?</h2>
          <p className="text-slate-300 mb-8">We fix bathroom plumbing issues fast so you can get back to your routine.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Get a Free Estimate</Link>
        </div>
      </section>
    </div>
  );
}
