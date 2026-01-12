// app/services/water-filtration/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Water Filtration Systems in North Richland Hills, TX | ABC Plumbing",
  description: "Whole-house water filtration and water softener installation in North Richland Hills, TX. Enjoy cleaner, better-tasting water throughout your home.",
  keywords: "water filtration, water softener, whole house filter, water purification, plumber North Richland Hills, water treatment",
};

export default function WaterFiltrationPage() {
  const { business } = siteConfig;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Water Filtration Systems</h1>
          <p className="text-lg text-slate-600 mb-8">Enjoy cleaner, better-tasting water from every tap in your home. We install whole-house water filtration systems, water softeners, and point-of-use filters to improve your water quality.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Water Treatment Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Whole-House Filtration", description: "Filter all the water entering your home for clean water at every tap" },
              { title: "Water Softeners", description: "Remove hard minerals that cause scale buildup and dry skin" },
              { title: "Reverse Osmosis", description: "Advanced filtration for the purest drinking water" },
              { title: "Carbon Filters", description: "Remove chlorine, chemicals, and odors from your water" },
              { title: "UV Purification", description: "Kill bacteria and viruses for safe drinking water" },
              { title: "Under-Sink Filters", description: "Point-of-use filtration for drinking and cooking water" },
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Benefits of Water Filtration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Better Tasting Water", desc: "Remove chlorine and contaminants that affect taste" },
              { title: "Healthier Skin & Hair", desc: "Soft water is gentler on your body" },
              { title: "Protect Appliances", desc: "Reduce scale buildup in water heaters and dishwashers" },
              { title: "Cleaner Dishes", desc: "No more spots and film on glasses" },
              { title: "Softer Laundry", desc: "Clothes feel softer and last longer" },
              { title: "Less Soap Needed", desc: "Soft water lathers better, saving you money" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Better Water?</h2>
          <p className="text-slate-300 mb-8">We'll test your water and recommend the right filtration system for your home.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Get a Free Water Test</Link>
        </div>
      </section>
    </div>
  );
}
