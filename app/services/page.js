import FAQ from "@/app/components/FAQ";

export const metadata = {
  title: "Services | VeroClicks",
  description:
    "Websites, automation, and marketing systems built specifically for contractors.",
};
const trades = [
  { name: "General Contractors", img: "contractor.jpg" },
  { name: "Mechanic Shops", img: "mechanic.jpg" },
  { name: "Electricians", img: "electrician.jpg" },
  { name: "Plumbers", img: "plumber.jpg" },
  { name: "HVAC Companies", img: "HVAC.jpg" },
  { name: "Roofers", img: "roofer.jpg" },
  { name: "Landscapers", img: "landscape.jpg" },
  { name: "Painters", img: "paint.jpg" },
  { name: "Concrete Contractors", img: "concrete.jpg" },
];
const faqs = [
  {
    question: "How long does it take to get set up?",
    answer: "Most clients are live within 7 days depending on the system."
  },
  {
    question: "Do you work with small or new businesses?",
    answer: "Yes. Many of our clients are just getting started and want things built correctly from day one."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No lock-ins. You pay month-to-month and stay because the system works."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We handle updates, fixes, and improvements so you don't have to."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="py-24 text-center px-6">
        <h1 className="text-xl md:text-5xl font-extrabold mb-6 animate-underline">
          Systems Built for Contractors
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We don&apos;t sell templates or gimmicks. We build real marketing systems
          that help contractors get more calls, book more jobs, and grow without chaos.
        </p>
      </section>

      <section className="py-20 bg-(--brand-light)/20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-extrabold text-center mb-12">
      Who We Help
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {trades.map((trade) => (
        <div
          key={trade.name}
          className="group relative overflow-hidden rounded-2xl border shadow-sm bg-white"
        >
          <div className="relative h-48 w-full">
            <img
              src={`/Images/trades/${trade.img}`}
              alt={trade.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute inset-0 flex items-end p-4">
            <h3 className="text-white text-lg font-bold">
              {trade.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= SERVICES ================= */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16">
            What We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 border rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                High-Converting Websites
              </h3>
              <p className="text-gray-600">
                Fast, SEO-friendly websites designed to turn visitors into
                phone calls, form fills, and booked jobs — not just “look nice.”
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Lead Capture & Automation
              </h3>
              <p className="text-gray-600">
                Forms, SMS, email follow-ups, missed-call text back, and booking
                systems so you never lose a lead again.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Local SEO Foundations
              </h3>
              <p className="text-gray-600">
                Proper page structure, service pages, and technical setup so Google
                understands what you do and where you work.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY IT WORKS ================= */}
      <section className="py-24 bg-(--brand-light)/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-1xl md:text-5xl font-extrabold mb-6 animate-underline">
            Why Contractors Choose VeroClicks
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We build systems the same way contractors build businesses —
            simple, reliable, and designed to work without babysitting.
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FAQ
        title="Frequently Asked Questions"
        items={faqs}
      />

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-(--brand)">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Want to See If This Fits Your Business?
        </h2>
        <p className="text-white/80 mb-8">
          Book a quick call and we’ll walk through your situation honestly.
        </p>
        <a
          href="/book"
          className="inline-block bg-white text-(--brand) px-8 py-3 rounded-xl font-semibold"
        >
          Book a Call
        </a>
      </section>

    </div>
  );
}
