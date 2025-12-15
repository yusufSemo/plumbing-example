// app/components/WhyChooseUs.jsx
"use client";

import { siteConfig } from "@/app/config/siteConfig";

export default function WhyChooseUs() {
  const { branding } = siteConfig;
  const { colors } = branding;

  const reasons = [
    {
      title: "Honest Pricing",
      description:
        "Up-front pricing with no hidden fees or surprise charges.",
      icon: "💰",
    },
    {
      title: "Done Right the First Time",
      description:
        "Experienced local mechanic focused on quality repairs — not shortcuts.",
      icon: "🛠️",
    },
    {
      title: "Fast Turnaround",
      description:
        "We respect your time and work efficiently to get you back on the road.",
      icon: "⏱️",
    },
    {
      title: "Local & Trusted",
      description:
        "Proudly serving North Richland Hills with honest, reliable service.",
      icon: "📍",
    },
  ];

  return (
    <section
      className="relative py-20"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* SECTION HEADER */}
        <h2 className="text-4xl font-extrabold mb-4 text-gray-100">
          Why Choose{" "}
          <span style={{ color: colors.primary }}>
            Flip’s Auto Repair
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-300">
          Quality work, fair pricing, and honest service you can count on.
        </p>

        {/* REASONS */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div key={item.title} className="text-center">

              {/* ICON */}
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-extrabold text-gray-100 whitespace-nowrap">
                {item.title}
              </h3>

              {/* UNDERLINE */}
              <div
                className="mx-auto my-3 h-[3px] w-30"
                style={{ backgroundColor: colors.primary }}
              />

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
