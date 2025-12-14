export const metadata = {
  title: "Pricing | VeroClicks",
  description: "Simple, powerful pricing designed for contractors who want real results.",
};

export default function PricingPage() {
  return (
    <div className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 bg-linear-to-b from-(--brand)/20 to-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-black animate-underline">Plans & Pricing</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Choose the system that fits your business. No contracts, no hidden fees.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="py-14 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* PROFESSIONAL SYSTEM — MOST POPULAR */}
        <div className="relative rounded-3xl border-2 border-(--brand) p-10 shadow-md hover:shadow-lg transition bg-white hover:-translate-y-1 duration-300">

          {/* MOST POPULAR BADGE */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm rounded-full 
                          bg-(--brand) text-white font-semibold">
            Most Popular
          </div>

          <h2 className="text-2xl font-bold mt-4 mb-2">Professional System</h2>
          <p className="text-gray-600 mb-6">
            The essential system for contractors who want more calls, more reviews, and reliable automation.
          </p>

          <div className="text-5xl font-extrabold mb-6">
            $297<span className="text-xl font-normal text-gray-500">/mo</span>
          </div>

          <a
            href="https://buy.stripe.com/3cIfZaf5H4aF303eoQ2wU00"
            className="block bg-(--brand) text-white text-center py-3 rounded-xl font-semibold mb-8 
                       hover:bg-(--brand-dark) transition"
          >
            Start Now
          </a>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>✔ Custom Website (3–5 pages)</li>
            <li>✔ Hosting & Unlimited Maintenance</li>
            <li>✔ Functional Quote Forms + Notifications</li>
            <li>✔ Missed-Call Text Back Automation</li>
            <li>✔ Review Request Automation (4–5 stars)</li>
            <li>✔ We Respond to Your Positive Reviews</li>
            <li>✔ Text + Email Confirmations</li>
            <li>✔ Unified Inbox (Email, SMS, FB, IG, Google)</li>
            <li>✔ Google Business Profile Monitoring</li>
            <li>✔ Long-Term Lead Nurture System</li>
          </ul>
        </div>

        {/* PREMIUM GROWTH SYSTEM — BRAND NEW */}
        <div className="relative rounded-3xl border border-gray-300 p-10 shadow-sm hover:shadow-lg transition bg-white hover:-translate-y-1 duration-300">

          {/* BRAND NEW BADGE */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm rounded-full 
                          bg-gray-200 text-gray-700 font-semibold">
            Brand New
          </div>

          <h2 className="text-2xl font-bold mt-4 mb-2">Premium Growth System</h2>
          <p className="text-gray-600 mb-6">
            Advanced tools for businesses ready to scale. Includes everything in Professional plus growth-focused SEO tools.
          </p>

          <div className="text-5xl font-extrabold mb-6">
            $397<span className="text-xl font-normal text-gray-500">/mo</span>
          </div>

          <a
            href="https://buy.stripe.com/5kQ28kf5H22xdEH6Wo2wU01"
            className="block bg-black text-white text-center py-3 rounded-xl font-semibold mb-8 
                       hover:bg-gray-900 transition"
          >
            Start Now
          </a>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>✔ Everything in Professional</li>
            <li>✔ Full On-Page SEO Optimization</li>
            <li>✔ Monthly Blog Articles + Location Pages</li>
            <li>✔ High-Quality Backlinks (SEO Boost)</li>
            <li>✔ Voice Search Optimization (Siri + Alexa)</li>
            <li>✔ Weekly Google Business Profile Updates</li>
            <li>✔ Priority Support Access</li>
          </ul>
        </div>

      </section>

      {/* ============================
          FEATURE DESCRIPTION SECTION
      ============================= */}
      <section className="max-w-6xl mx-auto px-6 py-22">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-extrabold text-center mb-4">
        Professional System $297
        <span className="text-xl font-normal align-baseline text-gray-500">/mo</span>
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Everything inside the Professional System is built to get you more calls, more reviews,
          and more repeat customers — without adding work to your plate.
        </p>

        {/* GRID START */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 
                          transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Custom High-Conversion Website</h3>
            <p className="text-gray-600 leading-relaxed">
              We build a clean, fast, high-converting contractor website designed to turn visitors into real jobs.
              Whether replacing an outdated site or starting fresh, we handle everything — including mobile optimization 
              and SEO-ready structure.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Unlimited Hosting + Maintenance</h3>
            <p className="text-gray-600 leading-relaxed">
              We host your site on fast, secure servers and provide unlimited updates — photos, services, pricing, 
              content changes, anything you need within 24–72 hours.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Functional Quote Forms + Notifications</h3>
            <p className="text-gray-600 leading-relaxed">
              Your quote form instantly notifies both you and the customer. All leads flow into your unified inbox so you 
              never miss a job opportunity.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Auto Missed-Call Text Back</h3>
            <p className="text-gray-600 leading-relaxed">
              Missed calls instantly trigger an automated text that directs customers to your website or quote form, 
              saving lost revenue every day.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">5-Star Review System</h3>
            <p className="text-gray-600 leading-relaxed">
              Our automated review system drives consistent 5-star reviews, filters bad feedback, and responds to your 
              positive reviews for you.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Reputation Management</h3>
            <p className="text-gray-600 leading-relaxed">
              We monitor your Google Business Profile daily, push updates, send alerts, and help you build authority 
              through professional engagement.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Automated Text + Email Confirmations</h3>
            <p className="text-gray-600 leading-relaxed">
              Appointment confirmations, reminders, and follow-ups are automatically sent — reducing no-shows and 
              improving customer trust.
            </p>
          </div>

          {/* FEATURE BOX */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Unified Inbox</h3>
            <p className="text-gray-600 leading-relaxed">
              All messages — Email, SMS, Google, Facebook, Instagram, website chat — flow into one inbox for easy tracking 
              and fast responses.
            </p>
          </div>

        </div>
      </section>

      {/* ============================
          PREMIUM FEATURE SECTION
      ============================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Premium Growth System $397
        <span className="text-xl font-normal align-baseline text-gray-500">/mo</span>
          <br />
        <span className="text-4xl font-extrabold text-center">
            Extra Features
        </span>
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Everything in the Professional System, plus advanced tools built for scaling contractors.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PREMIUM FEATURE */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Full On-Page SEO Optimization</h3>
            <p className="text-gray-600 leading-relaxed">
              We fully optimize your pages, titles, headers, and local SEO signals to help your business rank higher on Google.
            </p>
          </div>

          {/* PREMIUM FEATURE */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Monthly Blog Articles + Location Pages</h3>
            <p className="text-gray-600 leading-relaxed">
              Each month we create SEO-driven content that grows your domain authority and expands your ranking radius.
            </p>
          </div>

          {/* PREMIUM FEATURE */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">High-Quality Backlinks</h3>
            <p className="text-gray-600 leading-relaxed">
              Premium backlinks help boost your credibility and improve organic rankings faster than traditional SEO alone.
            </p>
          </div>

          {/* PREMIUM FEATURE */}
          <div className="bg-linear-to-b from-white to-(--brand-light)/20 shadow-sm rounded-2xl p-10 
                          border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--brand) mb-4">Voice Search Optimization</h3>
            <p className="text-gray-600 leading-relaxed">
              We configure your business to show up properly on voice assistants like Siri and Alexa — a rapidly growing search channel.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center bg-(--brand-light)/20 px-6">
        <h2 className="text-3xl font-bold mb-4">Not sure which plan fits your business?</h2>
        <p className="text-gray-700 mb-6">
          Book a free call — we’ll walk through exactly what your business needs to grow.
        </p>
        <a
          href="/book"
          className="inline-block bg-(--brand) text-white py-3 px-6 rounded-xl font-semibold 
                     hover:bg-(--brand-dark) transition"
        >
          Book a Demo
        </a>
      </section>

    </div>
  );
}
