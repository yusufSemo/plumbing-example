// app/blog/how-to-fix-leaky-faucet/page.js
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/app/config/siteConfig";

export const metadata = {
  title: "How to Fix a Leaky Faucet: A Step-by-Step Guide | ABC Plumbing",
  description: "Learn how to fix a leaky faucet yourself with our step-by-step guide. Find out when to DIY and when to call a professional plumber in North Richland Hills, TX.",
  keywords: "leaky faucet, fix faucet, dripping faucet, plumber North Richland Hills, faucet repair",
};

export default function LeakyFaucetPost() {
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
                DIY Tips
              </span>
              <span className="text-slate-400 text-sm">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How to Fix a Leaky Faucet: A Step-by-Step Guide
            </h1>
            <p className="text-slate-500">
              Published January 8, 2026 • by ABC Plumbing
            </p>
          </div>

          <div className="h-64 md:h-90 rounded-2xl relative overflow-hidden mb-10">
            <Image
            src="/Images/blog/leak.jpg"
            alt="Plumber fixing a leaky faucet"
            fill
            className="object-cover"
            style={{ objectPosition: '00% 40%' }}
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed">
              That constant drip-drip-drip from your faucet isn't just annoying—it's wasting water and money. A single leaky faucet can waste up to 3,000 gallons of water per year. The good news? Many faucet leaks are easy to fix yourself with basic tools.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Causes a Leaky Faucet?</h2>
            <p className="text-slate-600 leading-relaxed">
              Before you start the repair, it helps to understand why faucets leak. The most common causes include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 my-4">
              <li><strong>Worn O-rings:</strong> These small rubber rings can deteriorate over time</li>
              <li><strong>Corroded valve seat:</strong> Sediment buildup can cause corrosion</li>
              <li><strong>Worn washers:</strong> The friction of use wears them down</li>
              <li><strong>Loose parts:</strong> Packing nuts and adjusting rings can loosen</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Tools You'll Need</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 my-4">
              <li>Adjustable wrench</li>
              <li>Screwdrivers (Phillips and flathead)</li>
              <li>Replacement washers and O-rings</li>
              <li>Plumber's grease</li>
              <li>Towels or rags</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step-by-Step Instructions</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Step 1: Turn Off the Water Supply</h3>
            <p className="text-slate-600 leading-relaxed">
              Look under the sink for the shutoff valves and turn them clockwise to close. Turn on the faucet to release any remaining water and pressure.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Step 2: Remove the Handle</h3>
            <p className="text-slate-600 leading-relaxed">
              Pop off the decorative cap on the handle (if present), then remove the screw underneath. Gently pull the handle off. If it's stuck, use a handle puller or apply penetrating oil.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Step 3: Remove the Packing Nut</h3>
            <p className="text-slate-600 leading-relaxed">
              Use your wrench to unscrew the packing nut. Be careful not to scratch the fixture. The stem will come out with the nut.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Step 4: Inspect and Replace Parts</h3>
            <p className="text-slate-600 leading-relaxed">
              Examine the O-ring and seat washer. If they're damaged or worn, replace them. Take the old parts to a hardware store to find exact matches.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Step 5: Reassemble and Test</h3>
            <p className="text-slate-600 leading-relaxed">
              Apply plumber's grease to the new O-ring, then reassemble everything in reverse order. Turn the water back on and test for leaks.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-10">
              <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                When to Call a Professional
              </h3>
              <p className="text-amber-700">
                If the leak persists after replacing the washer and O-ring, or if you notice corrosion, it's time to call a professional. You should also call a plumber if you're dealing with a faucet that's more than 15 years old or if you're uncomfortable working with plumbing.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Save Water, Save Money</h2>
            <p className="text-slate-600 leading-relaxed">
              Fixing a leaky faucet is one of the easiest ways to reduce water waste in your home. Even a slow drip adds up over time. If you're dealing with multiple leaky faucets or more complex plumbing issues, our team at ABC Plumbing is here to help.
            </p>
          </div>

          <div className="mt-12 p-8 bg-sky-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Need Help With Your Faucet?</h3>
            <p className="text-slate-600 mb-6">
              If DIY isn't your thing or the problem is more complex, we're just a call away. ABC Plumbing offers fast, affordable faucet repair in North Richland Hills and surrounding areas.
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
