// app/components/WhyChooseUs.jsx

"use client";

import { siteConfig } from "@/app/config/siteConfig";

export default function WhyChooseUs() {
  const { business } = siteConfig;

  const reasons = [
    {
      title: "Upfront Pricing",
      description:
        "No hidden fees or surprise charges. We provide detailed quotes before any work begins so you know exactly what to expect.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Licensed & Insured",
      description:
        "Fully licensed Texas plumbers with comprehensive insurance. Your home is protected and you have peace of mind.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Same-Day Service",
      description:
        "Plumbing emergencies can't wait. We offer same-day appointments and 24/7 emergency service when you need us most.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5,000+", label: "Jobs Completed" },
    { value: "4.9", label: "Star Rating" },
    { value: "24/7", label: "Emergency Service" },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* SECTION HEADER */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            North Richland Hills&apos; Trusted <span className="text-sky-500">Plumbing Experts</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            {business.name} has been serving the North Richland Hills community with reliable, honest plumbing services. Here&apos;s why homeowners choose us.
          </p>
        </header>

        {/* REASONS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {reasons.map((item, index) => (
            <article 
              key={item.title} 
              className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-sky-100 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-400 text-sm font-bold flex items-center justify-center group-hover:bg-sky-100 group-hover:text-sky-500 transition-colors">
                {index + 1}
              </div>

              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* STATS BAR */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl p-10 shadow-xl shadow-sky-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sky-100 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Ready to experience the {business.name} difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get a Free Quote
            </a>
            <a
              href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-sky-200 hover:bg-sky-50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {business.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
