export const metadata = {
  title: "Book a Demo | VeroClicks",
  description:
    "Schedule a free demo call and see how VeroClicks helps contractors get more jobs.",
};

export default function BookPage() {
  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Book a Free Demo
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Schedule a quick 30-minute call. We’ll walk through your business,
          show you how the system works, and see if it’s a good fit.
        </p>
      </section>

      {/* CALENDAR EMBED */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">

          <div className="rounded-2xl border shadow-sm overflow-hidden">
  <iframe
    src="https://api.veroclicks.com/widget/booking/q1dxe8NKFfzQtXnXJvJq"
    className="w-full h-[720px]"
    frameBorder="0"
    scrolling="no"
    loading="lazy"
  />
</div>


          <p className="text-sm text-gray-500 text-center mt-6">
            You’ll receive a confirmation by text and email after booking.
          </p>

        </div>
      </section>

    </div>
  );
}
