// app/locations/page.js
import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import {
  locationsConfig,
  getLocationsByResponseTime,
} from "@/app/config/locationsConfig";

export const metadata = {
  title: `Service Areas | ${siteConfig.business.name}`,
  description: `${siteConfig.business.name} serves ${locationsConfig.locations.length} cities across the DFW metroplex. Find your local plumber.`,
};

export default function LocationsPage() {
  const sortedLocations = getLocationsByResponseTime();
  const { business } = siteConfig;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Areas We Serve in DFW
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Headquartered in {locationsConfig.headquarters}, we provide fast,
            reliable plumbing to {locationsConfig.locations.length} communities
            across the metroplex.
          </p>
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Call Now: {business.phone}
          </a>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            Find Your Local Plumbing Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-sky-500 transition-all block"
              >
                {location.isHeadquarters && (
                  <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-2 py-1 rounded mb-2">
                    Headquarters
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {location.city}, {location.stateAbbr}
                </h3>

                <div className="text-gray-600 text-sm space-y-1 mb-3">
                  <p>
                    <span className="font-medium">Response:</span>{" "}
                    {location.responseTime}
                  </p>
                  <p>
                    <span className="font-medium">Areas:</span>{" "}
                    {location.neighborhoods.slice(0, 3).join(", ")}
                    {location.neighborhoods.length > 3 && "..."}
                  </p>
                </div>

                <span className="text-sky-500 font-medium text-sm">
                  View {location.city} services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Don&apos;t See Your City?
          </h2>
          <p className="text-gray-700 mb-6">
            We serve a {locationsConfig.serviceRadius} radius from{" "}
            {locationsConfig.headquarters}. Give us a call—we may still be able
            to help.
          </p>
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Call to Check: {business.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
