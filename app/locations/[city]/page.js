// app/locations/[city]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/app/config/siteConfig";
import {
  locationsConfig,
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/app/config/locationsConfig";

// Generate all city pages at build time
export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    city: slug,
  }));
}

// Dynamic metadata per city
export async function generateMetadata({ params }) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `Plumber in ${location.city}, ${location.stateAbbr} | ${siteConfig.business.name}`,
    description: location.metaDescription,
    openGraph: {
      title: `${location.city} Plumbing Services | ${siteConfig.business.name}`,
      description: location.metaDescription,
    },
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  const { business, branding } = siteConfig;
  const { services } = locationsConfig;

  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            name: business.name,
            description: location.metaDescription,
            telephone: business.phone,
            email: business.email,
            areaServed: {
              "@type": "City",
              name: location.city,
              containedInPlace: { "@type": "State", name: location.state },
            },
            priceRange: "$$",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {location.isHeadquarters && (
            <span className="inline-block bg-sky-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Our Home Base
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {location.isHeadquarters
              ? `${location.city}&apos;s Trusted Local Plumber`
              : `Professional Plumbing Services in ${location.city}, ${location.stateAbbr}`}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {location.isHeadquarters
              ? `We&apos;re headquartered right here in ${location.city}. When you call, you&apos;re talking to your neighbors.`
              : `Serving ${location.city} from our ${locationsConfig.headquarters} headquarters with ${location.responseTime} response times.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call Now: {business.phone}
            </a>
            <Link
              href="/booking"
              className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">
                {location.responseTime}
              </div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Licensed</div>
              <div className="text-gray-600 text-sm">& Insured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-gray-600 text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Upfront</div>
              <div className="text-gray-600 text-sm">Honest Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Unique per city */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Why {location.city} Homeowners Choose {business.name}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              {location.isHeadquarters ? (
                <>
                  As {location.city} locals ourselves, we&apos;ve been solving
                  plumbing problems for our neighbors for years. Our shop is
                  right here in town, which means faster response times and
                  technicians who genuinely know the area.
                </>
              ) : (
                <>
                  From our {locationsConfig.headquarters} headquarters, we&apos;ve
                  proudly served {location.city} homeowners for years. Our
                  technicians know the area well—from{" "}
                  {location.neighborhoods.slice(0, 2).join(" to ")} and
                  everywhere in between.
                </>
              )}
            </p>

            <p>
              {location.city}&apos;s water comes from{" "}
              {location.localFacts.waterSource}, and most homes here were built
              in the {location.localFacts.commonHomeAge}. We see specific issues
              that other plumbers might miss.{" "}
              {location.localFacts.climateNote}—something we factor into every
              repair recommendation.
            </p>

            {location.landmarks.length > 0 && (
              <p>
                Whether you&apos;re near {location.landmarks.slice(0, -1).join(", ")}
                {location.landmarks.length > 1 ? ", or " : ""}
                {location.landmarks.slice(-1)[0]}, our team can be at your door
                quickly. We&apos;ve built relationships throughout {location.city}{" "}
                and take pride in being the plumber locals recommend.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center text-slate-900">
            Plumbing Services in {location.city}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Every service available to {location.city} residents with our{" "}
            {location.responseTime} response time.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-5 rounded-lg border border-gray-200 hover:border-sky-500 hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 mb-1">
                  {service.name}
                </h3>
                <span className="text-sky-500 text-sm font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      {location.neighborhoods?.length > 0 && (
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {location.city} Neighborhoods We Serve
            </h2>
            <p className="text-gray-700 mb-6">
              Our technicians are familiar with every part of {location.city}.
              We provide full-service plumbing to these areas:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {location.neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="bg-gray-50 p-3 rounded-lg text-center text-gray-800"
                >
                  {neighborhood}
                </div>
              ))}
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              ZIP codes served: {location.zipCodes.join(", ")}
            </p>
          </div>
        </section>
      )}

      {/* Common Issues Section */}
      {location.localChallenges?.length > 0 && (
        <section className="py-14 px-6 bg-sky-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Common Plumbing Issues in {location.city}
            </h2>
            <p className="text-gray-700 mb-8">
              After years serving {location.city}, here&apos;s what we see most
              often:
            </p>

            <div className="space-y-4">
              {location.localChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-4"
                >
                  <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">
            Serving {location.city} & Surrounding Areas
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title={`${location.city} Service Area Map`}
              src={`https://www.google.com/maps?q=${location.mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {location.city} residents get fast, reliable service.{" "}
            {location.isHeadquarters
              ? "We&apos;re right around the corner."
              : `Average response: ${location.responseTime}.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call: {business.phone}
            </a>
            <Link
              href="/booking"
              className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Book Online
            </Link>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            Licensed & Insured • Available 24/7 for Emergencies
          </p>
        </div>
      </section>
    </main>
  );
}
