"use client";

import { siteConfig } from "@/app/config/siteConfig";

export default function ServiceArea() {
  const { branding, business } = siteConfig;
  const { colors } = branding;

  return (
    <section
      className="py-10"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — SERVICE AREA TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-200">
              Proudly Serving{" "}
              <span style={{ color: colors.primary }}>
                North Richland Hills
              </span>{" "}
              & Nearby Areas
            </h2>

            <p className="text-gray-300 mb-6">
              {business.name} provides honest, reliable auto repair services
              throughout the DFW area. If you’re nearby, chances are we can help.
            </p>

            <ul className="grid grid-cols-2 gap-y-2 text-gray-200 font-medium">
              <li>• North Richland Hills</li>
              <li>• Fort Worth</li>
              <li>• Hurst</li>
              <li>• Keller</li>
              <li>• Haltom City</li>
              <li>• Watauga</li>
            </ul>

            <p className="mt-6 text-sm text-gray-400">
              Not sure if you’re in our service area? Give us a call — we’re happy
              to help.
            </p>
          </div>

          {/* RIGHT — GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden shadow-xl h-[380px]">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps?q=North+Richland+Hills+TX&output=embed"
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
