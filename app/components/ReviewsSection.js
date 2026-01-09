"use client";

import Image from "next/image";
import { placeholderReviews } from "./reviews.placeholder";
import { siteConfig } from "@/app/config/siteConfig";
import { useEffect } from "react";

export default function ReviewsSection() {
  const { branding } = siteConfig;
  const { colors } = branding;

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://api.veroclicks.com/js/form_embed.js"]'
    );
    const script = existingScript || document.createElement("script");

    if (!existingScript) {
      script.src = "https://api.veroclicks.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      className="py-20"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
          What Customers Are Saying
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Real feedback from local customers we&apos;ve helped.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholderReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#1f1f1f] rounded-xl shadow-xl overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src={review.image}
                  alt="Auto repair work"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2 text-yellow-400">
                  {"★★★★★"}
                </div>

                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  “{review.text}”
                </p>

                <p className="text-sm font-semibold text-white">
                  {review.name}
                </p>

                <p className="text-xs text-gray-400">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Testimonials shown are from local customers and reflect individual
          experiences.
        </p>

        {/* Survey Widget */}
        <div className="mt-12">
          <iframe
            src="https://api.veroclicks.com/widget/survey/oD3v8LkuWbopQR5rsiVA"
            style={{ border: "none", width: "100%" }}
            scrolling="no"
            id="oD3v8LkuWbopQR5rsiVA"
            title="Customer Survey"
          />
        </div>
      </div>
    </section>
  );
}
