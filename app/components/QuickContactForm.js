"use client";

import { siteConfig } from "@/app/config/siteConfig";

export default function ServiceInquiry() {
  const { branding, business } = siteConfig;
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
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — SERVICES LIST */}
          <div className="order-2 md:order-1 text-gray-200">
            <h2 className="text-3xl font-extrabold mb-6" style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationThickness: "4px",
              textDecorationColor: colors.primary,
            }}>
              We Can Help With:
            </h2>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-lg font-medium"
                >
                  <span
                    className="mt-1 h-6 w-6 flex items-center justify-center rounded-full text-green-600 text-sm font-bold"
                    style={{ backgroundColor: colors.primary }}
                  >
                    ✓
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-400">
              Not sure what’s wrong? No problem — just tell us what you’re
              experiencing.
            </p>

            {/* VIEW ALL SERVICES CTA */}
            <a
              href="/services"
              className="
                inline-flex items-center gap-2
                mt-8 px-6 py-4
                rounded-md
                text-lg font-extrabold
                uppercase tracking-wide
                transition-all shadow-lg
              "
              style={{
                backgroundColor: colors.primary,
                color: colors.textOnDark,
              }}
            >
              View All Services →
            </a>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="order-1 md:order-2">
            <div
              className="rounded-xl shadow-2xl p-8 text-white"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <h3 className="text-3xl font-extrabold mb-2">
                Get a{" "}
                <span style={{ color: colors.primary }}>
                  Quick Quote
                </span>
              </h3>

              <p className="text-base text-gray-300 mb-6">
                Tell us what’s going on and we’ll get back to you fast.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted");
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="
                    w-full px-4 py-3
                    rounded-md bg-white text-black
                    text-base font-medium
                    focus:outline-none focus:ring-2
                  "
                  style={{ outlineColor: colors.primary }}
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="
                    w-full px-4 py-3
                    rounded-md bg-white text-black
                    text-base font-medium
                    focus:outline-none focus:ring-2
                  "
                  style={{ outlineColor: colors.primary }}
                />

                <textarea
                  placeholder="Brief description (optional)"
                  rows={3}
                  className="
                    w-full px-4 py-3
                    rounded-md bg-white text-black
                    text-base font-medium
                    focus:outline-none focus:ring-2
                  "
                  style={{ outlineColor: colors.primary }}
                />

                {/* CONSENT CHECKBOX (REQUIRED) */}
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />
                  <p>
                    I agree to receive calls and text messages from{" "}
                    <strong>{business.name}</strong> regarding my request.
                    Message & data rates may apply. Reply STOP to opt out.{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      className="underline"
                      style={{ color: colors.primary }}
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* PRIMARY CTA */}
                <button
                  type="submit"
                  className="
                    w-full mt-2
                    px-6 py-4
                    rounded-md
                    text-lg font-extrabold
                    uppercase tracking-wide
                    transition-all shadow-lg
                  "
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.textOnDark,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Request a Quote
                </button>
              </form>


              <p className="text-xs text-gray-400 mt-4">
                No spam. No pressure. Just honest help from{" "}
                {business.name}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
