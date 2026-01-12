// app/blog/when-to-call-emergency-plumber/page.js
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import Image from "next/image";

export const metadata = {
  title: "When to Call an Emergency Plumber: 5 Situations That Can't Wait | ABC Plumbing",
  description: "Learn which plumbing emergencies need immediate attention and which can wait. 24/7 emergency plumber available in North Richland Hills, TX.",
  keywords: "emergency plumber, plumbing emergency, burst pipe, clogged drain, plumber North Richland Hills, 24 hour plumber",
};

export default function EmergencyPlumberPost() {
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
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                Emergency
              </span>
              <span className="text-slate-400 text-sm">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              When to Call an Emergency Plumber: 5 Situations That Can't Wait
            </h1>
            <p className="text-slate-500">
              Published December 20, 2025 • by ABC Plumbing
            </p>
          </div>

          <div className="h-64 md:h-90 rounded-2xl relative overflow-hidden mb-10">
            <Image
            src="/Images/blog/flood.png"
            alt="Plumber fixing a leaky faucet"
            fill
            className="object-cover"
            style={{ objectPosition: '00% 40%' }}
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed">
              It's 2 AM and something's wrong with your plumbing. Do you call for emergency service or wait until morning? Making the right call can save you hundreds—or prevent thousands in damage. Here's how to know when you have a true plumbing emergency.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Quick Rule of Thumb</h3>
              <p className="text-red-700">
                If you can't stop the water, if there's sewage involved, or if waiting could cause significant property damage—it's an emergency. Call immediately.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5 True Plumbing Emergencies</h2>

            <div className="bg-slate-50 rounded-xl p-6 my-8 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Burst or Broken Pipes
              </h3>
              <p className="text-slate-600 mb-3">
                A burst pipe can release gallons of water per minute. This is always an emergency.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">What to do right now:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Shut off the main water valve immediately</li>
                  <li>• Turn off electricity if water is near outlets</li>
                  <li>• Call an emergency plumber</li>
                  <li>• Start removing water to minimize damage</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Sewage Backup
              </h3>
              <p className="text-slate-600 mb-3">
                Raw sewage in your home is a health hazard. Don't try to clean it yourself—it contains dangerous bacteria.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">What to do right now:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Stop using all water in the house</li>
                  <li>• Keep family and pets away from affected areas</li>
                  <li>• Open windows for ventilation</li>
                  <li>• Call an emergency plumber immediately</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                No Water at All
              </h3>
              <p className="text-slate-600 mb-3">
                If you suddenly have no water and your neighbors do, you may have a serious main line issue or leak.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">What to do right now:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Check if neighbors have water (could be a city issue)</li>
                  <li>• Look for wet spots in your yard (main line leak)</li>
                  <li>• Check your water meter—if it's spinning with all fixtures off, you have a leak</li>
                  <li>• Call for emergency service if it's your line</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Gas Line Leak
              </h3>
              <p className="text-slate-600 mb-3">
                If you smell rotten eggs or hear hissing near gas lines, leave immediately. This is life-threatening.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">What to do right now:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Don't turn on any lights or electronics</li>
                  <li>• Don't use your phone inside the house</li>
                  <li>• Get everyone out immediately</li>
                  <li>• Call 911 and your gas company from outside</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 my-8 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Overflowing Toilet (That Won't Stop)
              </h3>
              <p className="text-slate-600 mb-3">
                If the shutoff valve doesn't work and water keeps flowing, you need emergency help to prevent flooding.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">What to do right now:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Try the shutoff valve behind the toilet</li>
                  <li>• If that fails, shut off main water supply</li>
                  <li>• Remove water with towels and a wet vac</li>
                  <li>• Call for emergency service</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Issues That Can Usually Wait</h2>
            <p className="text-slate-600 leading-relaxed">
              Not every plumbing problem needs a 2 AM service call. These issues are annoying but can typically wait for regular business hours:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 my-4">
              <li><strong>Dripping faucets:</strong> Wasteful but not urgent</li>
              <li><strong>Slow drains:</strong> Unless completely blocked</li>
              <li><strong>Running toilet:</strong> Unless it won't stop overflowing</li>
              <li><strong>Small leaks under sinks:</strong> Put a bucket under it and call in the morning</li>
              <li><strong>No hot water:</strong> Inconvenient but not damaging</li>
              <li><strong>Low water pressure:</strong> Usually not an emergency unless sudden</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-10">
              <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Save Money Tip
              </h3>
              <p className="text-amber-700">
                Emergency service rates are typically 1.5-2x regular rates. If you can safely contain the problem (shutoff valve + bucket), waiting until morning can save significant money. But never wait if there's risk of major damage or health hazards.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Be Prepared Before Emergencies Happen</h2>
            <p className="text-slate-600 leading-relaxed">
              The best time to prepare for a plumbing emergency is before it happens:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 my-4">
              <li>Know where your main water shutoff is (and make sure it works)</li>
              <li>Keep a plumber's number saved in your phone</li>
              <li>Have basic supplies: bucket, towels, flashlight, adjustable wrench</li>
              <li>Know the location of shutoffs for individual fixtures</li>
            </ul>
          </div>

          <div className="mt-12 p-8 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">24/7 Emergency Plumbing</h3>
            <p className="text-slate-600 mb-6">
              ABC Plumbing offers round-the-clock emergency service in North Richland Hills and surrounding areas. When you have a true emergency, we'll be there fast.
            </p>
            <a
              href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all text-center shadow-lg shadow-red-600/30 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: {siteConfig.business.phone}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
