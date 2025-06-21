'use client';

// --- SVG Icons Components ---
const MarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-antique-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-antique-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CoachingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-antique-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-b from-off-white to-white min-h-screen flex flex-col justify-center">
      <h1 className="font-title text-5xl font-bold text-center text-primary tracking-tight mb-8 drop-shadow-lg">
        Bienvenue chez{" "}
        <span className="text-antique-gold underline decoration-wavy decoration-golden-beige">
          FAIRBRAND
        </span>
      </h1>
      <p className="font-body max-w-3xl mx-auto text-center text-lg md:text-xl text-primary/80 mb-12 leading-relaxed">
        Des formations et coachings professionnels sur mesure, pensés pour vous
        aider à exceller dans votre carrière et à atteindre vos objectifs.
      </p>

      <section className="mb-16 px-6 py-10 bg-white rounded-3xl shadow-xl ring-1 ring-golden-beige/50 max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-300">
        <h2 className="font-title text-3xl font-semibold mb-6 text-primary border-b-2 border-golden-beige pb-2">
          Nos Formations phares
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary">
          {[
            {
              title: "Marketing Digital",
              description:
                "Maîtrisez les dernières stratégies pour booster votre visibilité en ligne et convertir vos prospects.",
              icon: <MarketingIcon />,
            },
            {
              title: "Développement Personnel",
              description:
                "Renforcez votre confiance et vos compétences pour atteindre votre plein potentiel.",
              icon: <DevelopmentIcon />,
            },
            {
              title: "Coaching en Entreprise",
              description:
                "Optimisez la performance de vos équipes grâce à des méthodes éprouvées.",
              icon: <CoachingIcon />,
            },
          ].map(({ title, description, icon }) => (
            <li
              key={title}
              className="bg-off-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-title text-xl font-semibold mb-2">{title}</h3>
              <p className="font-body text-primary/80 text-sm leading-snug">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary p-8 rounded-3xl max-w-3xl mx-auto text-center shadow-lg ring-1 ring-antique-gold">
        <h2 className="font-title text-3xl font-semibold mb-5 text-off-white">
          Contactez-nous
        </h2>
        <p className="font-body mb-4 text-golden-beige text-lg">
          Vous avez des questions ou souhaitez un accompagnement personnalisé ?
          <br />
          N’hésitez pas à nous contacter !
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-off-white text-lg font-medium">
          <a
            href="mailto:contact@fairbrand.com"
            className="font-body inline-block bg-antique-gold hover:bg-golden-beige text-primary px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
          >
            Contact par Email
          </a>
          <a
            href="tel:+261341234567"
            className="font-body inline-block border-2 border-golden-beige text-off-white hover:bg-golden-beige hover:text-primary px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
          >
            Appelez-nous
          </a>
        </div>
      </section>
    </main>
  );
}
