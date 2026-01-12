// app/components/ReviewsSection.jsx

"use client";

import { siteConfig } from "@/app/config/siteConfig";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "North Richland Hills, TX",
    text: "Called them for an emergency leak at 10pm and they were here within an hour. Fixed the problem quickly and the price was exactly what they quoted. Couldn't ask for better service.",
    rating: 5,
    service: "Emergency Leak Repair",
  },
  {
    id: 2,
    name: "Robert J.",
    location: "Haltom City, TX",
    text: "Had them install a new water heater. The team was professional, cleaned up after themselves, and took the time to explain how to maintain it. Fair price and great work.",
    rating: 5,
    service: "Water Heater Installation",
  },
  {
    id: 3,
    name: "Maria G.",
    location: "Keller, TX",
    text: "Finally found a plumber I can trust. They've helped us with multiple issues over the past year and always show up on time, do quality work, and charge fairly. Highly recommend.",
    rating: 5,
    service: "General Plumbing",
  },
];

export default function ReviewsSection() {
  const { business } = siteConfig;

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what homeowners in North Richland Hills and surrounding areas have to say about our plumbing services.
          </p>
        </header>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-sky-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Service tag */}
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mb-4">
                {review.service}
              </span>

              {/* Review text */}
              <p className="text-slate-700 leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-5xl font-bold text-slate-900">4.9</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-600">Based on 200+ reviews from satisfied customers</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                See All Google Reviews
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:bg-sky-600 transition-all"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Reviews shown reflect individual customer experiences with {business.name}.
        </p>

      </div>
    </section>
  );
}
