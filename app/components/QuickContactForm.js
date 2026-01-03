"use client";

import { siteConfig } from "@/app/config/siteConfig";

export default function ServiceInquiry() {
  const { branding } = siteConfig;
  const { colors } = branding;

  const services = [
    "Brake Repair",
    "Check Engine Light",
    "Battery Replacement",
    "Oil Change",
    "Suspension & Steering",
    "General Diagnostics",
  ];

  return (
    <section className="relative py-20" style={{ backgroundColor: colors.dark }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* TWO-COLUMN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="text-gray-200">
            <h2
              className="text-3xl font-extrabold mb-6"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "4px",
                textDecorationColor: colors.primary,
              }}
            >
              We Can Help With:
            </h2>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-lg font-medium"
                >
                  <span
                    className="mt-1 h-6 w-6 flex items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.textOnDark,
                    }}
                  >
                    ✓
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-400">
              Not sure what&apos;s wrong? No problem — just tell us what&apos;s going on.
            </p>

            <a
              href="/services"
              className="inline-flex items-center gap-2 mt-8 px-6 py-4 rounded-md text-lg font-extrabold uppercase tracking-wide transition-all shadow-lg"
              style={{
                backgroundColor: colors.primary,
                color: colors.textOnDark,
              }}
            >
              View All Services →
            </a>
          </div>

          {/* RIGHT — DESKTOP: IFRAME / MOBILE: BUTTON */}
          <div>
            {/* Desktop only - iframe */}
            <div className="hidden md:block">
              <iframe
                src="https://api.veroclicks.com/widget/form/gnflYPAziSkpumPaJ7aq"
                className="w-full h-[770px] border-none overflow-hidden"
              />
            </div>

            {/* Mobile only - button */}
            <div className="md:hidden flex flex-col items-center text-center p-8 rounded-xl" style={{ backgroundColor: "#1f1f1f" }}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 mb-6">
                Fill out our quick form and we&apos;ll get back to you ASAP.
              </p>
              <a
                href="https://api.veroclicks.com/widget/form/gnflYPAziSkpumPaJ7aq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-lg font-extrabold uppercase tracking-wide transition-all shadow-lg"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.textOnDark,
                }}
              >
                Request Service →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
