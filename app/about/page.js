import Image from "next/image";

export const metadata = {
  title: "About Us | VeroClicks",
  description: "Learn why contractors trust VeroClicks for websites, automation, and growth.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-18">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              We Partner With <br />
              Contractors & <br />
              Trade Workers
            </h1>

            <p className="text-gray-600 font-medium mb-6">
              Our business only works when yours thrives. Contractors trust us to
              transform their marketing, websites, and automation systems for real growth.
            </p>

            <a 
              href="/book"
              className="px-6 py-3 bg-(--brand) text-white rounded-lg font-semibold hover:bg-(--brand-dark) transition-all"
            >
              Contact Us Today
            </a>
          </div>

          <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden">
            <Image
                src="/Images/CEO.png"
                alt="Founder of VeroClicks"
                width={500}
                height={600}
                className="object-cover rounded-xl"
                priority
            />
            </div>

        </div>
      </section>

      {/* BADGES + STATS */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-8">You are in great hands!</h2>

          <div className="grid md:grid-cols-5 gap-8 bg-(--brand-light)/20 p-8 rounded-2xl shadow">
            <Stat number="35+" label="Projects Completed" />
            <Stat number="24+" label="5-Star Reviews" />
            <Stat number="1 Years" label="In Business" />
            <Stat number="74%" label="Avg Client Growth" />
            <Stat number="4100+" label="Leads Generated" />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="px-6 max-w-6xl mx-auto pb-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          We Are Precise In Business <br />
          And Purposeful In Our Work
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT VALUES */}
          <div className="space-y-12">

            <Value 
              number="1"
              title="Transparent & Passionate"
              text="We genuinely care about our clients and the work we produce. Your success is our mission."
            />

            <Value 
              number="2"
              title="Integrity"
              text="We maintain standards that reflect only the best — both for your business and ours."
            />
          </div>

          {/* RIGHT VALUES */}
          <div className="space-y-12">

            <Value 
              number="3"
              title="Partnership"
              text="We don't treat you like a client — we treat you like a partner. We only win when you win."
            />

            <Value 
              number="4"
              title="Adaptive"
              text="Markets change. We help your business adapt with data-driven strategy and flexible systems."
            />
          </div>

        </div>

        {/* QUOTE */}
        <div className="mt-20 bg-(--brand-light)/30 p-10 rounded-2xl text-center shadow">
          <p className="text-xl italic text-gray-800 mb-4">
            “The only way to grow a business is to work ON your business, not just IN it —
            and that's what we help you do.”
          </p>
          <p className="font-bold text-lg">— Yusuf Semo, Founder of VeroClicks</p>
        </div>
      </section>

    </div>
  );
}

/* Reusable Components */
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold text-(--brand)">{number}</p>
      <p className="text-sm text-gray-700">{label}</p>
    </div>
  );
}

function Value({ number, title, text }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-(--brand) border-2 border-(--brand) h-10 w-10 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}
