"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/siteConfig";
import contactConfig from "./contactConfig";

export default function ContactPage() {
  const { branding, business } = siteConfig;
  const { colors } = branding;
  const config = contactConfig;

  const [formData, setFormData] = useState({});
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook up to your form handler / API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900">
      {/* ================= HOURS + FORM ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — HOURS */}
          <div className="text-slate-900">
            <h2
              className="text-3xl font-extrabold mb-8"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "4px",
                textDecorationColor: colors.primary,
              }}
            >
              {config.hours.sectionTitle}
            </h2>

            <div className="space-y-4">
              {config.hours.schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-slate-200"
                >
                  <span className="font-medium">{item.days}</span>
                  <span className="text-slate-600">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-900">After hours?</strong> Leave us a
                message and we&apos;ll get back to you first thing next business
                day.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="rounded-xl shadow-xl p-8 bg-gray-200 border border-slate-200">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {config.form.sectionTitle}
            </h3>
            <p className="text-slate-600 mb-6">{config.form.subheadline}</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-slate-900 text-xl font-bold">
                  {config.form.successMessage}
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {config.form.fields.map((field) =>
                  field.type === "textarea" ? (
                    <textarea
                      key={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={field.rows || 4}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white text-black text-base font-medium focus:outline-none focus:ring-2"
                      style={{ outlineColor: colors.primary }}
                    />
                  ) : (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white text-black text-base font-medium focus:outline-none focus:ring-2"
                      style={{ outlineColor: colors.primary }}
                    />
                  )
                )}

                {/* CONSENT */}
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1"
                  />
                  <p>
                    {config.form.consentText}{" "}
                    <a
                      href={config.form.privacyLink}
                      className="underline"
                      style={{ color: colors.primary }}
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full mt-2 px-6 py-4 rounded-md text-lg font-extrabold uppercase tracking-wide transition-all shadow-lg hover:scale-[1.02]"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.textOnDark,
                  }}
                >
                  {config.form.submitText}
                </button>
              </form>
            )}

            <p className="text-xs text-slate-500 mt-4 text-center">
              No spam. No pressure. Just honest help from {business.name}.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="py-20 text-center px-6 bg-white">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: colors.primary }}
        >
          {config.hero.headline}
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          {config.hero.subheadline}
        </p>
      </section>

      {/* ================= CONTACT METHODS ================= */}
      <section className="pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {config.contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow w-full md:w-[calc(33.333%-1.5rem)] min-w-[250px] max-w-[350px]"
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span className="text-3xl">{method.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              {method.lines.map((line, i) => (
                <p key={i} className="text-slate-600">
                  {line}
                </p>
              ))}
            </a>
          ))}
        </div>
      </section>

      
      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6 bg-white">
        <h2 className="text-3xl font-extrabold mb-4" style={{ color: colors.primary }}>{config.cta.headline}</h2>
        <p className="text-slate-600 mb-8">{config.cta.subheadline}</p>
        <a
          href={config.cta.buttonLink}
          className="inline-block px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wide transition-all hover:scale-105"
          style={{
            backgroundColor: colors.primary,
            color: colors.textOnDark,
          }}
        >
          {config.cta.buttonText}
        </a>
      </section>
    </div>
  );
}
