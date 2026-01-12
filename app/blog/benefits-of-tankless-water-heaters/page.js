// app/blog/benefits-of-tankless-water-heaters/page.js
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import Image from "next/image";

export const metadata = {
  title: "The Benefits of Tankless Water Heaters for Texas Homes | ABC Plumbing",
  description: "Is a tankless water heater right for your home? Learn about costs, energy savings, and installation from ABC Plumbing in North Richland Hills, TX.",
  keywords: "tankless water heater, on-demand water heater, water heater installation, energy efficient water heater, plumber North Richland Hills",
};

export default function TanklessWaterHeaterPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sky-500 hover:text-sky-600 transition-colors flex items-center gap-2 text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                Upgrades
              </span>
              <span className="text-slate-400 text-sm">7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The Benefits of Tankless Water Heaters for Texas Homes
            </h1>
            <p className="text-slate-500">
              Published December 15, 2025 • by ABC Plumbing
            </p>
          </div>

          <div className="h-64 md:h-90 rounded-2xl relative overflow-hidden mb-10">
            <Image
            src="/Images/blog/tankless.png"
            alt="Plumber fixing a leaky faucet"
            fill
            className="object-cover"
            style={{ objectPosition: '00% 40%' }}
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed">
              Tired of running out of hot water? Frustrated by high energy bills? A tankless water heater might be the upgrade your Texas home needs. Here's everything you need to know before making the switch.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How Tankless Water Heaters Work</h2>
            <p className="text-slate-600 leading-relaxed">
              Unlike traditional tank water heaters that constantly heat and store water, tankless units heat water on demand. When you turn on a hot water tap, cold water travels through a pipe into the unit, where a gas burner or electric element heats it instantly.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              This means you never run out of hot water—and you're not paying to keep 40-50 gallons heated 24/7.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Top Benefits</h2>

            <div className="grid gap-6 my-8">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Lower Energy Bills</h3>
                    <p className="text-slate-600">
                      Tankless water heaters are 24-34% more energy efficient for homes that use less than 41 gallons of hot water daily. Even high-use households see 8-14% savings. That can add up to $100+ per year.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Endless Hot Water</h3>
                    <p className="text-slate-600">
                      No more cold showers because someone else used all the hot water. A properly sized tankless heater provides continuous hot water for as long as you need it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Longer Lifespan</h3>
                    <p className="text-slate-600">
                      Tank water heaters last 10-15 years. Tankless units typically last 20+ years with proper maintenance. That's nearly double the lifespan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Space Savings</h3>
                    <p className="text-slate-600">
                      Tankless units are about the size of a suitcase and mount on the wall. Free up valuable floor space in your garage, utility closet, or basement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Reduced Flood Risk</h3>
                    <p className="text-slate-600">
                      No tank means no risk of a 40-gallon tank rupturing and flooding your home. This can also mean lower homeowner's insurance in some cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Cost Breakdown</h2>
            <p className="text-slate-600 leading-relaxed">
              Let's be honest about costs—tankless water heaters have a higher upfront price:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-900">Cost Factor</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Tank</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Tankless</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 text-slate-600">Unit Cost</td>
                    <td className="p-4 text-slate-600">$500-$1,500</td>
                    <td className="p-4 text-slate-600">$1,000-$3,000</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 text-slate-600">Installation</td>
                    <td className="p-4 text-slate-600">$300-$500</td>
                    <td className="p-4 text-slate-600">$1,000-$2,000</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 text-slate-600">Annual Operating Cost</td>
                    <td className="p-4 text-slate-600">$400-$600</td>
                    <td className="p-4 text-slate-600">$300-$500</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 text-slate-600">Lifespan</td>
                    <td className="p-4 text-slate-600">10-15 years</td>
                    <td className="p-4 text-slate-600">20+ years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 leading-relaxed">
              While the upfront cost is higher, the longer lifespan and lower operating costs often make tankless the better long-term investment—especially if you plan to stay in your home for 10+ years.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Is Tankless Right for Your Home?</h2>
            <p className="text-slate-600 leading-relaxed">
              Tankless water heaters aren't perfect for every situation. Here's how to decide:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Good Candidates
                </h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Households that frequently run out of hot water</li>
                  <li>• Homeowners planning to stay 10+ years</li>
                  <li>• Homes with natural gas available</li>
                  <li>• Those wanting to free up space</li>
                  <li>• Energy-conscious homeowners</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Consider Carefully
                </h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>• Very high simultaneous hot water demand</li>
                  <li>• Homes with only electric (no gas)</li>
                  <li>• Those on a tight budget</li>
                  <li>• Renters or those planning to move soon</li>
                  <li>• Homes with hard water (requires more maintenance)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Installation Considerations</h2>
            <p className="text-slate-600 leading-relaxed">
              Switching from tank to tankless isn't always straightforward. Your home may need:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 my-4">
              <li><strong>Gas line upgrade:</strong> Tankless units often require a larger gas line</li>
              <li><strong>Venting changes:</strong> Different venting requirements than tank heaters</li>
              <li><strong>Electrical work:</strong> Some units need dedicated circuits</li>
              <li><strong>Water softener:</strong> Hard water areas may need treatment to prevent scale buildup</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              A professional assessment can tell you exactly what's needed for your home and provide an accurate quote.
            </p>
          </div>

          <div className="mt-12 p-8 bg-sky-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Tankless Water Heater Consultation</h3>
            <p className="text-slate-600 mb-6">
              Wondering if tankless is right for your home? ABC Plumbing offers free consultations. We'll assess your hot water needs, check your home's setup, and give you an honest recommendation—with no pressure to buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all text-center shadow-lg shadow-sky-500/30"
              >
                Schedule Free Consultation
              </Link>
              <a
                href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all text-center border border-slate-200"
              >
                Call {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
