// app/blog/prevent-frozen-pipes-winter/page.js
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import Image from "next/image";

export const metadata = {
  title: "How to Prevent Frozen Pipes This Winter | ABC Plumbing",
  description: "Protect your home from frozen pipe damage with these expert tips. Learn how to prevent frozen pipes and what to do if they freeze. ABC Plumbing serves North Richland Hills, TX.",
  keywords: "frozen pipes, prevent frozen pipes, winter plumbing, burst pipes, plumber North Richland Hills",
};

export default function FrozenPipesPost() {
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
                Seasonal Tips
              </span>
              <span className="text-slate-400 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How to Prevent Frozen Pipes This Winter
            </h1>
            <p className="text-slate-500">
              Published December 28, 2025 • by ABC Plumbing
            </p>
          </div>

          <div className="h-64 md:h-90 rounded-2xl relative overflow-hidden mb-10">
            <Image
            src="/Images/blog/frozen.jpg"
            alt="Plumber fixing a leaky faucet"
            fill
            className="object-cover"
            style={{ objectPosition: '00% 40%' }}
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed">
              While Texas winters are mild compared to northern states, we do get freezing temperatures that can wreak havoc on unprepared plumbing. A burst pipe can release hundreds of gallons of water, causing thousands of dollars in damage. Here's how to protect your home.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Do Pipes Freeze and Burst?</h2>
            <p className="text-slate-600 leading-relaxed">
              Water expands when it freezes. When water inside a pipe freezes, it creates pressure between the ice blockage and the closed faucet. This pressure can cause the pipe to burst—not at the frozen spot, but somewhere along the line where pressure builds up.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Pipes most at risk include those in unheated areas like attics, garages, and crawl spaces, as well as pipes along exterior walls with little insulation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Before the Cold Hits: Preparation Steps</h2>
            
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Insulate Exposed Pipes</h4>
                  <p className="text-slate-600 text-sm mt-1">Use foam pipe insulation on pipes in unheated areas. Pay special attention to pipes in the attic, garage, and under sinks on exterior walls.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Disconnect Outdoor Hoses</h4>
                  <p className="text-slate-600 text-sm mt-1">Remove hoses from outdoor faucets and drain them. If you have shutoff valves for outdoor faucets, close them and open the outside valve to drain any remaining water.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Know Your Main Shutoff</h4>
                  <p className="text-slate-600 text-sm mt-1">Make sure everyone in your household knows where the main water shutoff valve is. In an emergency, you'll need to turn it off quickly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Seal Cracks and Gaps</h4>
                  <p className="text-slate-600 text-sm mt-1">Check for gaps where pipes enter your home and seal them with caulk or insulation. Cold air can freeze pipes surprisingly fast.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">During a Freeze: What to Do</h2>
            
            <div className="bg-sky-50 rounded-xl p-6 my-8">
              <h4 className="font-semibold text-slate-900 mb-4">When temperatures drop below 32°F:</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">•</span>
                  <span><strong>Let faucets drip:</strong> A slight drip keeps water moving and relieves pressure if ice forms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">•</span>
                  <span><strong>Open cabinet doors:</strong> Let warm air reach pipes under sinks on exterior walls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">•</span>
                  <span><strong>Keep the heat on:</strong> Maintain at least 55°F, even if you're away.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">•</span>
                  <span><strong>Open the garage door:</strong> If you have water lines in the garage, let some heat in during extreme cold.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">If Your Pipes Freeze</h2>
            <p className="text-slate-600 leading-relaxed">
              If you turn on a faucet and only a trickle comes out, you likely have a frozen pipe. Here's what to do:
            </p>
            <ol className="list-decimal pl-6 text-slate-600 space-y-3 my-4">
              <li>Keep the faucet open so water can flow once the pipe thaws</li>
              <li>Apply heat to the frozen section using a hair dryer, heat lamp, or towels soaked in hot water</li>
              <li><strong>Never</strong> use an open flame or propane heater</li>
              <li>Check all faucets—if one pipe freezes, others may too</li>
              <li>If you can't locate the frozen area or can't thaw it, call a plumber</li>
            </ol>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-10">
              <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Emergency: If a Pipe Bursts
              </h3>
              <p className="text-red-700">
                Immediately shut off the main water supply to your home. Then call ABC Plumbing for emergency service. Move valuables away from the water and document damage for insurance.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Long-Term Solutions</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have recurring problems with frozen pipes, consider these permanent solutions:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 my-4">
              <li>Relocate exposed pipes to heated areas</li>
              <li>Install electric heat tape on vulnerable pipes</li>
              <li>Add insulation to walls containing pipes</li>
              <li>Upgrade to frost-proof outdoor faucets</li>
            </ul>
          </div>

          <div className="mt-12 p-8 bg-sky-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Worried About Your Pipes?</h3>
            <p className="text-slate-600 mb-6">
              ABC Plumbing can inspect your home for vulnerable pipes and install insulation or heat tape before winter hits. We also offer 24/7 emergency service if the worst happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all text-center shadow-lg shadow-sky-500/30"
              >
                Schedule an Inspection
              </Link>
              <a
                href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all text-center border border-slate-200"
              >
                Emergency: {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
