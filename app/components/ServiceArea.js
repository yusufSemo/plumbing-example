// app/components/ServiceArea.js
// UPDATED: Now links to individual location pages for better SEO
"use client";

import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";
import { locationsConfig } from "@/app/config/locationsConfig";

export default function ServiceArea() {
  const { branding, business } = siteConfig;
  const { colors } = branding;
  const { locations, headquarters } = locationsConfig;

  // Get headquarters location for the map
  const hqLocation = locations.find((loc) => loc.isHeadquarters);
  const mapQuery = hqLocation?.mapQuery || "North+Richland+Hills+TX";

  return (
    <section className="py-10" style={{ backgroundColor: colors.dark }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — SERVICE AREA TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-200">
              Proudly Serving{" "}
              <span style={{ color: colors.primary }}>{headquarters}</span> &
              the DFW Area
            </h2>

            <p className="text-gray-300 mb-6">
              {business.name} provides honest, reliable plumbing services
              throughout the DFW metroplex. Click any city to learn more about
              our services there.
            </p>

            {/* City links - now clickable to location pages */}
            <ul className="grid grid-cols-2 gap-y-2 text-gray-200 font-medium">
              {locations.slice(0, 6).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    • {location.city}
                    {location.isHeadquarters && (
                      <span className="text-sky-400 text-xs ml-1">(HQ)</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* View all link */}
            {locations.length > 6 && (
              <Link
                href="/locations"
                className="inline-block mt-4 text-sky-400 hover:text-sky-300 font-medium transition-colors"
              >
                View all {locations.length} service areas →
              </Link>
            )}

            <p className="mt-6 text-sm text-gray-400">
              Not sure if you&apos;re in our service area? Give us a call — we&apos;re
              happy to help.
            </p>
          </div>

          {/* RIGHT — GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden shadow-xl h-[380px]">
            <iframe
              title="Service Area Map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
