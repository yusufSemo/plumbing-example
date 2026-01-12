// app/components/ServiceAreasSection.js
// Drop this into any service page to show where you offer that service
// Links back to location pages for internal linking

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import { locationsConfig } from "@/app/config/locationsConfig";

export default function ServiceAreasSection({
  serviceName = "this service",
  variant = "default", // "default" | "compact"
  maxCities = null,
}) {
  const { business } = siteConfig;
  const { locations, headquarters } = locationsConfig;

  const displayLocations = maxCities ? locations.slice(0, maxCities) : locations;

  if (variant === "compact") {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 text-slate-900">
          {serviceName} Service Areas
        </h3>
        <ul className="space-y-2">
          {displayLocations.slice(0, 6).map((location) => (
            <li key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="text-sky-600 hover:text-sky-800 text-sm"
              >
                {location.city}, {location.stateAbbr}
              </Link>
            </li>
          ))}
        </ul>
        {locations.length > 6 && (
          <Link
            href="/locations"
            className="block mt-3 text-sm text-gray-600 hover:text-sky-600"
          >
            + {locations.length - 6} more areas
          </Link>
        )}
      </div>
    );
  }

  // Default full variant
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">
          Where We Offer {serviceName}
        </h2>

        <p className="text-gray-700 mb-8 max-w-3xl">
          We provide {serviceName.toLowerCase()} throughout the DFW area.
          Dispatched from our {headquarters} headquarters, our technicians can
          reach you fast.
        </p>

        {/* City Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {displayLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="bg-white border border-gray-200 rounded-lg p-3 hover:border-sky-500 hover:shadow-md transition-all text-center group"
            >
              <span className="font-medium text-slate-900 group-hover:text-sky-600">
                {location.city}
              </span>
              <span className="block text-xs text-gray-500 mt-1">
                {location.responseTime}
              </span>
              {location.isHeadquarters && (
                <span className="inline-block mt-1 text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded">
                  HQ
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* View all if limited */}
        {maxCities && locations.length > maxCities && (
          <p className="text-center mb-6">
            <Link
              href="/locations"
              className="text-sky-600 hover:text-sky-800 font-medium"
            >
              View all {locations.length} service areas →
            </Link>
          </p>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need {serviceName.toLowerCase()} but don&apos;t see your city? Call to
            check.
          </p>
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
