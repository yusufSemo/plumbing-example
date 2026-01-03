import FAQ from "@/app/components/FAQ";
import servicesConfig from "./servicesConfig";

export const metadata = {
  title: servicesConfig.meta.title,
  description: servicesConfig.meta.description,
};

export default function ServicesPage() {
  const config = servicesConfig;

  return (
    <div className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="py-24 text-center px-6">
        <h1 className="text-xl md:text-5xl font-extrabold mb-6 animate-underline">
          {config.hero.headline}
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {config.hero.subheadline}
        </p>
        {config.hero.ctaText && config.hero.ctaLink && (
          <a
            href={config.hero.ctaLink}
            className="inline-block mt-8 bg-(--brand) text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            {config.hero.ctaText}
          </a>
        )}
      </section>

      {/* ================= WHO WE SERVE / AUDIENCES ================= */}
      {config.audiences && config.audiences.items.length > 0 && (
        <section className="py-20 bg-(--brand-light)/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              {config.audiences.sectionTitle}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {config.audiences.items.map((item) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-2xl border shadow-sm bg-white"
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={`${config.audiences.imageBasePath}${item.img}`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SERVICES ================= */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16">
            {config.services.sectionTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {config.services.items.map((service) => (
              <div
                key={service.title}
                className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                {service.icon && (
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                )}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-(--brand-light)/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-5xl font-extrabold mb-6 animate-underline">
            {config.whyChooseUs.headline}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            {config.whyChooseUs.subheadline}
          </p>

          {config.whyChooseUs.points && config.whyChooseUs.points.length > 0 && (
            <ul className="max-w-xl mx-auto text-left space-y-3">
              {config.whyChooseUs.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-(--brand) font-bold">✓</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      {config.testimonials && config.testimonials.items.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              {config.testimonials.sectionTitle}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-2xl shadow-sm bg-gray-50"
                >
                  {testimonial.rating && (
                    <div className="mb-3 text-yellow-500">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                  )}
                  <p className="text-gray-700 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="font-semibold">{testimonial.author}</div>
                  {testimonial.role && (
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      <FAQ title={config.faq.sectionTitle} items={config.faq.items} />

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-(--brand)">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          {config.cta.headline}
        </h2>
        <p className="text-white/80 mb-8">{config.cta.subheadline}</p>
        <a
          href={config.cta.buttonLink}
          className="inline-block bg-white text-(--brand) px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
        >
          {config.cta.buttonText}
        </a>
      </section>
    </div>
  );
}