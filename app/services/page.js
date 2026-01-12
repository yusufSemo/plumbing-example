// app/services/page.js

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

const services = [
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for burst pipes, severe leaks, and plumbing disasters that can't wait.",
    icon: "🚨",
    featured: true,
  },
  {
    slug: "leak-detection-repair",
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find hidden leaks and professional repairs to stop water damage.",
    icon: "💧",
    featured: true,
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to clear clogs and keep your drains flowing smoothly.",
    icon: "🚿",
    featured: true,
  },
  {
    slug: "water-heater-services",
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance for tank and tankless water heaters.",
    icon: "🔥",
    featured: true,
  },
  {
    slug: "sewer-line-services",
    title: "Sewer Line Services",
    description: "Sewer line inspection, cleaning, repair, and replacement using trenchless technology.",
    icon: "🔧",
    featured: false,
  },
  {
    slug: "toilet-repair-installation",
    title: "Toilet Repair & Installation",
    description: "Expert toilet repairs, replacements, and new installations for any bathroom.",
    icon: "🚽",
    featured: false,
  },
  {
    slug: "faucet-fixture-services",
    title: "Faucet & Fixture Services",
    description: "Repair and installation of faucets, showerheads, and plumbing fixtures throughout your home.",
    icon: "🚰",
    featured: false,
  },
  {
    slug: "garbage-disposal-services",
    title: "Garbage Disposal Services",
    description: "Garbage disposal installation, repair, and replacement services.",
    icon: "♻️",
    featured: false,
  },
  {
    slug: "water-line-repair",
    title: "Water Line Repair",
    description: "Main water line repair and replacement to restore water flow to your home.",
    icon: "💦",
    featured: false,
  },
  {
    slug: "gas-line-services",
    title: "Gas Line Services",
    description: "Safe gas line installation, repair, and leak detection by licensed professionals.",
    icon: "⚡",
    featured: false,
  },
  {
    slug: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services from repairs to full remodel plumbing.",
    icon: "🛁",
    featured: false,
  },
  {
    slug: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    description: "Kitchen sink, dishwasher, and appliance plumbing installation and repair.",
    icon: "🍽️",
    featured: false,
  },
  {
    slug: "pipe-repair-replacement",
    title: "Pipe Repair & Replacement",
    description: "Pipe repair, repiping, and replacement services for damaged or outdated plumbing.",
    icon: "🔩",
    featured: false,
  },
  {
    slug: "water-filtration",
    title: "Water Filtration Systems",
    description: "Whole-home water filtration and softener installation for cleaner, better-tasting water.",
    icon: "🧊",
    featured: false,
  },
];

export const metadata = {
  title: "Plumbing Services in North Richland Hills, TX | ABC Plumbing",
  description: "Complete plumbing services in North Richland Hills, TX. From emergency repairs to installations, our licensed plumbers handle it all. Call for a free estimate.",
  keywords: "plumbing services, plumber North Richland Hills, emergency plumber, drain cleaning, water heater repair, leak repair",
};

export default function ServicesPage() {
  const { business } = siteConfig;
  const featuredServices = services.filter(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Plumbing Services
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            From emergency repairs to new installations, {business.name} provides comprehensive plumbing services to homes and businesses in North Richland Hills and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25"
            >
              Get a Free Quote
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

      {/* Featured Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Most Requested Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-sky-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sky-500 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Plumbing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-sky-200 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sky-500 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Area</h2>
          <p className="text-slate-600 mb-6">
            We proudly serve North Richland Hills and the surrounding DFW communities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "North Richland Hills",
              "Haltom City",
              "Keller",
              "Colleyville",
              "Southlake",
              "Grapevine",
              "Bedford",
              "Euless",
              "Hurst",
              "Fort Worth",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Plumber Today?
          </h2>
          <p className="text-slate-300 mb-8">
            Contact us for fast, reliable service. Free estimates on all jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30"
            >
              Get a Free Quote
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