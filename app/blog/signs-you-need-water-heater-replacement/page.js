// app/blog/signs-you-need-water-heater-replacement/page.js
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import Image from "next/image";

export const metadata = {
  title: "7 Signs You Need a Water Heater Replacement | ABC Plumbing",
  description: "Is your water heater failing? Learn the 7 warning signs that indicate it's time for a water heater replacement. Expert advice from ABC Plumbing in North Richland Hills, TX.",
  keywords: "water heater replacement, water heater repair, hot water heater, plumber North Richland Hills, water heater installation",
};

export default function WaterHeaterPost() {
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
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
                Maintenance
              </span>
              <span className="text-slate-400 text-sm">6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              7 Signs You Need a Water Heater Replacement
            </h1>
            <p className="text-slate-500">
              Published January 5, 2026 • by ABC Plumbing
            </p>
          </div>

          <div className="h-64 md:h-90 rounded-2xl relative overflow-hidden mb-10">
            <Image
            src="/Images/blog/heater.png"
            alt="Plumber fixing a leaky faucet"
            fill
            className="object-cover"
            style={{ objectPosition: '00% 40%' }}
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed">
              Your water heater works hard every day, providing hot water for showers, dishes, and laundry. But like all appliances, it has a limited lifespan. Knowing when to replace your water heater can save you from cold showers—or worse, a flooded home.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How Long Do Water Heaters Last?</h2>
            <p className="text-slate-600 leading-relaxed">
              Traditional tank water heaters typically last 8-12 years, while tankless models can last 15-20 years with proper maintenance. If your water heater is approaching or has exceeded its expected lifespan, it's time to start watching for these warning signs.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The 7 Warning Signs</h2>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Age Over 10 Years
              </h3>
              <p className="text-slate-600 pl-11">
                Check the serial number on your water heater to find its age. If it's over 10 years old and showing any other symptoms, replacement is likely more cost-effective than repair.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Rusty or Discolored Water
              </h3>
              <p className="text-slate-600 pl-11">
                If hot water from your taps looks rusty or has a metallic taste, it could mean the inside of your tank is corroding. This rust will eventually cause leaks.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Strange Noises
              </h3>
              <p className="text-slate-600 pl-11">
                Rumbling, popping, or banging sounds indicate sediment buildup at the bottom of the tank. This sediment hardens over time and reduces efficiency, eventually causing damage.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Leaking Around the Base
              </h3>
              <p className="text-slate-600 pl-11">
                Water pooling around your water heater is a serious sign. While it could be a valve issue, it often indicates a crack in the tank itself—which means replacement is necessary.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Inconsistent Water Temperature
              </h3>
              <p className="text-slate-600 pl-11">
                If your water temperature fluctuates wildly or you're running out of hot water faster than usual, the heating element may be failing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Higher Energy Bills
              </h3>
              <p className="text-slate-600 pl-11">
                An aging water heater has to work harder to heat water, which shows up on your utility bills. A new, efficient model could save you 10-20% on water heating costs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                Frequent Repairs
              </h3>
              <p className="text-slate-600 pl-11">
                If you're calling a plumber every few months for water heater issues, those repair costs add up. At some point, replacement becomes the smarter investment.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Tank vs. Tankless: Which Should You Choose?</h2>
            <p className="text-slate-600 leading-relaxed">
              When replacing your water heater, consider whether a tankless model might be right for you:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-sky-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Tank Water Heaters</h4>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>✓ Lower upfront cost</li>
                  <li>✓ Simple installation</li>
                  <li>✓ Works during power outages (gas)</li>
                  <li>✗ Takes up more space</li>
                  <li>✗ Higher operating costs</li>
                </ul>
              </div>
              <div className="bg-sky-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Tankless Water Heaters</h4>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>✓ Endless hot water</li>
                  <li>✓ Energy efficient</li>
                  <li>✓ Longer lifespan</li>
                  <li>✗ Higher upfront cost</li>
                  <li>✗ May need electrical upgrades</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-10">
              <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Don't Wait for a Failure
              </h3>
              <p className="text-red-700">
                A water heater that fails suddenly can cause significant water damage to your home. If you notice multiple warning signs, schedule an inspection before you're dealing with an emergency.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-sky-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready for a New Water Heater?</h3>
            <p className="text-slate-600 mb-6">
              ABC Plumbing installs both tank and tankless water heaters. We'll help you choose the right size and type for your home and budget. Free estimates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all text-center shadow-lg shadow-sky-500/30"
              >
                Get a Free Quote
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
