export const metadata = {
  title: "Get a Quote | ABC Plumbing",
  description:
    "Request a plumbing quote from ABC Plumbing. Fast response, honest pricing, and reliable service.",
};

export default function QuotePage() {
  return (
    <div className="bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Get a Plumbing Quote
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Our online quote system is coming soon. In the meantime, give us a call
          or send us a message and we’ll get you a fast, honest estimate.
        </p>

        {/* Placeholder Box */}
        <div className="border border-dashed border-gray-300 rounded-2xl p-10 mb-12">
          <p className="text-gray-500 text-sm font-medium">
            Quote Form Placeholder
          </p>
          <p className="text-gray-400 text-sm mt-2">
            (Name, Phone, Service Type, Description)
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:1234567890"
            className="px-8 py-4 bg-(--brand) text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            Call for a Quote
          </a>

          <a
            href="/contact"
            className="px-8 py-4 border border-(--brand) text-(--brand) rounded-xl font-semibold hover:bg-(--brand)/5 transition"
          >
            Contact Us
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Emergency service available. Licensed & insured.
        </p>
      </section>
    </div>
  );
}
