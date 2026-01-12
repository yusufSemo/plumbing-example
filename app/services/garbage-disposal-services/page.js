// app/services/garbage-disposal-services/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "Garbage Disposal Services in North Richland Hills, TX | ABC Plumbing",
  description: "Garbage disposal repair, installation, and replacement in North Richland Hills, TX. Jammed disposal? Not working? We can help. Same-day service.",
  keywords: "garbage disposal repair, garbage disposal installation, jammed disposal, plumber North Richland Hills, disposal replacement",
};

export default function GarbageDisposalPage() {
  const { business } = siteConfig;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Garbage Disposal Services</h1>
          <p className="text-lg text-slate-600 mb-8">Is your garbage disposal jammed, leaking, or not working? Our plumbers diagnose and fix disposal problems fast, or install a new unit if needed.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25">Get a Free Estimate</Link>
            <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Disposal Problems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Jammed Disposal", description: "Items stuck in the grinding chamber causing it to stop" },
              { title: "Not Turning On", description: "Electrical issues, reset problems, or motor failure" },
              { title: "Leaking", description: "Leaks from the sink flange, connections, or body" },
              { title: "Strange Noises", description: "Grinding, humming, or rattling sounds" },
              { title: "Bad Odors", description: "Persistent smells from food buildup" },
              { title: "Slow Draining", description: "Clogs in the disposal or drain line" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Disposal Not Working?</h2>
          <p className="text-slate-300 mb-8">We'll get it running again or install a new one—usually the same day.</p>
          <Link href="/quote" className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30">Get a Free Estimate</Link>
        </div>
      </section>
    </div>
  );
}
