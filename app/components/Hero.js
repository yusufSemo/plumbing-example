"use client";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../config/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full min-h-[100dvh] flex items-center">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/Images/hero.jpg"
        alt="Professional plumber at work"
        fill
        priority
        className="object-cover" 
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl px-6 mx-auto py-20">
        <div className="max-w-2xl">

          {/* BADGE */}
          <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="text-sm font-medium text-white/90">Available 24/7 for Emergencies</span>
          </div>

          {/* HEADLINE */}
          <h1 className="animate-slide-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Reliable Plumbing.
            <br />
            <span className="animate-underline">Done Right</span> the First Time.
          </h1>

          {/* SUBTEXT */}
          <p className="animate-slide-up-delay-2 mt-6 text-lg md:text-xl text-slate-200 max-w-lg leading-relaxed">
            Local plumbing services in North Richland Hills. Quality work, fair pricing, and no surprises.
          </p>

          {/* CTA BUTTONS */}
          <div className="animate-slide-up-delay-3 mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="btn-primary text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get a Free Quote
            </Link>

            <a
              href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, "")}`}
              className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-lg backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.business.phone}
            </a>
          </div>

          {/* TRUST INDICATORS */}
          <div className="animate-slide-up-delay-3 mt-12 flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Same-Day Service</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
