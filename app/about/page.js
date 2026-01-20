import aboutConfig from "./aboutConfig";

export const metadata = {
  title: aboutConfig.meta.title,
  description: aboutConfig.meta.description,
};

export default function AboutPage() {
  const config = aboutConfig;

  return (
    <div className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {config.hero.headline.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < config.hero.headline.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {config.hero.subheadline}
            </p>

            {config.hero.ctaText && config.hero.ctaLink && (
              <a
                href={config.hero.ctaLink}
                className="inline-block px-8 py-4 bg-(--brand) text-white rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                {config.hero.ctaText}
              </a>
            )}
          </div>

          {/* Placeholder Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-(--brand)/10 rounded-3xl -z-10" />
            <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <div className="flex items-center justify-center h-[380px] bg-gray-200 text-gray-500 text-sm font-medium">
                Placeholder Image (Plumber at Work)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      {config.stats && config.stats.items.length > 0 && (
        <section className="px-6 max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            {config.stats.sectionTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-8 rounded-3xl bg-gradient-to-br from-(--brand)/5 to-(--brand)/10 border border-(--brand)/10">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center py-4">
                <p className="text-4xl md:text-5xl font-extrabold text-(--brand) mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= STORY ================= */}
      {config.story && config.story.paragraphs.length > 0 && (
        <section className="px-6 max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            {config.story.sectionTitle}
          </h2>

          <div className="space-y-6">
            {config.story.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ================= VALUES ================= */}
      <section className="px-6 max-w-6xl mx-auto pb-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          {config.values.sectionTitle.map((line, i) => (
            <span key={i}>
              {line}
              {i < config.values.sectionTitle.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {config.values.items.map((value, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-(--brand)/5 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-(--brand) text-white rounded-xl flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      {config.team && config.team.members.length > 0 && (
        <section className="px-6 max-w-6xl mx-auto pb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            {config.team.sectionTitle}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {config.team.members.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  Placeholder Image
                </div>

                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-(--brand) font-medium text-sm mb-2">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= QUOTE ================= */}
      {config.quote && (
        <section className="px-6 max-w-4xl mx-auto pb-24">
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-(--brand) to-(--brand-dark) text-white text-center">
            <div className="absolute top-6 left-8 text-6xl opacity-20">
              &quot;
            </div>
            <p className="text-xl md:text-2xl italic mb-6 leading-relaxed relative z-10">
              {config.quote.text}
            </p>
            <div>
              <p className="font-bold text-lg">
                {config.quote.author}
              </p>
              {config.quote.role && (
                <p className="text-white/70 text-sm">
                  {config.quote.role}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
