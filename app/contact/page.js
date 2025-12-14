export const metadata = {
  title: "Contact | VeroClicks",
  description: "Get in touch with VeroClicks. Call us, message us, or schedule a demo.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Whether you have questions about our systems, pricing, or want to get started — 
          we&apos;re here to help contractors grow.
        </p>
      </section>

      {/* INFO BLOCK */}
      <section className="pt-8 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {/* PHONE */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-(--brand-light) text-(--brand) mb-4">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Call Us</h3>
            <p className="text-gray-600">904-410-4681</p>
          </div>

          {/* EMAIL SUPPORT */}
            <div className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-(--brand-light) text-(--brand) mb-4">
                <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Email Support</h3>
            <p className="text-gray-600">yusuf@veroclicks.com</p>
            <p className="text-gray-600">Open 24/7 — Always here to help</p>
            </div>


          {/* LOCATION */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-(--brand-light) text-(--brand) mb-4">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Nationwide</h3>
            <p className="text-gray-600">Serving contractors across the U.S.</p>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-(--brand-light)/20">
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl font-extrabold mb-6">
            Send Us a Message
          </h2>

          <p className="text-gray-600 mb-10">
            Prefer to message? Fill out the form below and we&apos;ll get back to you shortly.
          </p>

          <form className="space-y-6 text-left">

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-xl focus:ring-(--brand) focus:border-(--brand)"
                placeholder="John Contractor"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-(--brand) focus:border-(--brand)"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full px-4 py-3 border rounded-xl h-32 focus:ring-(--brand) focus:border-(--brand)"
                placeholder="How can we help your business?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-(--brand) text-white py-3 rounded-xl font-semibold hover:bg-(--brand-dark) transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to talk instead?</h2>
        <p className="text-gray-600 mb-6">Book a quick 30-minute discovery call. No pressure, just clarity.</p>

        <a
          href="/book"
          className="inline-block bg-(--brand) text-white py-3 px-6 rounded-xl font-semibold hover:bg-(--brand-dark) transition"
        >
          Book a Call
        </a>
      </section>

    </div>
  );
}
