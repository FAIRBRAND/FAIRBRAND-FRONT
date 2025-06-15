export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-b from-indigo-50 to-white min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-extrabold text-center text-indigo-900 tracking-tight mb-8 drop-shadow-lg">
        Bienvenue chez{" "}
        <span className="text-indigo-600 underline decoration-wavy decoration-indigo-400">
          FAIRBRAND
        </span>
      </h1>
      <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-indigo-700 mb-12 leading-relaxed">
        Des formations et coachings professionnels sur mesure, pensés pour vous
        aider à exceller dans votre carrière et à atteindre vos objectifs.
      </p>

      <section className="mb-16 px-6 py-10 bg-white rounded-3xl shadow-xl ring-1 ring-indigo-100 max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700 border-b-2 border-indigo-300 pb-2">
          Nos Formations phares
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-indigo-800">
          {[
            {
              title: "Marketing Digital",
              description:
                "Maîtrisez les dernières stratégies pour booster votre visibilité en ligne et convertir vos prospects.",
              icon: "📈",
            },
            {
              title: "Développement Personnel",
              description:
                "Renforcez votre confiance et vos compétences pour atteindre votre plein potentiel.",
              icon: "🌱",
            },
            {
              title: "Coaching en Entreprise",
              description:
                "Optimisez la performance de vos équipes grâce à des méthodes éprouvées.",
              icon: "🤝",
            },
          ].map(({ title, description, icon }) => (
            <li
              key={title}
              className="bg-indigo-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-indigo-700 text-sm leading-snug">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-indigo-100 p-8 rounded-3xl max-w-3xl mx-auto text-center shadow-lg ring-1 ring-indigo-200">
        <h2 className="text-3xl font-semibold mb-5 text-indigo-800">
          Contactez-nous
        </h2>
        <p className="mb-4 text-indigo-700 text-lg">
          Vous avez des questions ou souhaitez un accompagnement personnalisé ?
          <br />
          N’hésitez pas à nous contacter !
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-indigo-700 text-lg font-medium">
          <a
            href="mailto:contact@fairbrand.com"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
          >
            📧 contact@fairbrand.com
          </a>
          <a
            href="tel:+261341234567"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
          >
            📞 +261 34 12 345 67
          </a>
        </div>
      </section>
    </main>
  );
}
