import LegalPageLayout from "./LegalPageLayout"; 

export default function ConditionsGenerales() {
  return (
    <LegalPageLayout
      title="Conditions Générales d'Utilisation"
      lastUpdated="15 janvier 2025"
    >
      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Objet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les présentes conditions générales d'utilisation (ci-après dénommées
            « CGU ») ont pour objet de définir les modalités et conditions
            d'utilisation des services proposés sur le site Fair-Brand (ci-après
            dénommé « le Service »).
          </p>
          <p className="text-gray-700 leading-relaxed">
            L'utilisation du Service implique l'acceptation pleine et entière
            des présentes CGU par l'utilisateur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Définitions
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              <strong>« Utilisateur » :</strong> toute personne physique ou
              morale utilisant le Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>« Service » :</strong> l'ensemble des fonctionnalités et
              contenus proposés par Fair-Brand.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>« Contenu » :</strong> tous éléments composant le Service
              (textes, images, vidéos, etc.).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Accès au Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Service est accessible gratuitement à tout utilisateur disposant
            d'un accès à Internet. Tous les frais supportés par l'utilisateur
            pour accéder au Service (matériel informatique, logiciels, connexion
            Internet, etc.) sont à sa charge.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fair-Brand se réserve le droit de modifier, suspendre ou interrompre
            le Service à tout moment sans préavis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Utilisation du Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'utilisateur s'engage à utiliser le Service conformément à sa
            destination et dans le respect des lois et règlements en vigueur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Il est notamment interdit :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              D'utiliser le Service à des fins illégales ou non autorisées
            </li>
            <li>De porter atteinte aux droits de propriété intellectuelle</li>
            <li>
              De diffuser des contenus illicites, diffamatoires ou portant
              atteinte à l'ordre public
            </li>
            <li>De perturber le fonctionnement du Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Propriété Intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'ensemble des éléments composant le Service (textes, images,
            vidéos, logos, etc.) sont protégés par les droits de propriété
            intellectuelle et appartiennent à Fair-Brand ou à ses partenaires.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du Service, quel que soit
            le moyen ou le procédé utilisé, est interdite, sauf autorisation
            écrite préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Responsabilité
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fair-Brand s'efforce de fournir des informations aussi précises que
            possible. Toutefois, elle ne pourra être tenue responsable des
            omissions, des inexactitudes et des carences dans la mise à jour.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L'utilisateur utilise le Service sous sa seule responsabilité.
            Fair-Brand ne saurait être tenue responsable de tout dommage direct
            ou indirect résultant de l'utilisation du Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Données Personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le traitement des données personnelles est régi par notre
            <a
              href="/politique-de-confidentialite"
              className="text-blue-600 hover:text-blue-800 underline ml-1"
            >
              Politique de Confidentialité
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Modification des CGU
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Fair-Brand se réserve le droit de modifier les présentes CGU à tout
            moment. Les modifications entrent en vigueur dès leur publication
            sur le Service. Il appartient à l'utilisateur de consulter
            régulièrement les CGU.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Droit Applicable et Juridiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les présentes CGU sont soumises au droit français. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question relative aux présentes CGU, vous pouvez nous
            contacter à l'adresse :
            <a
              href="mailto:contact@fair-brand.com"
              className="text-blue-600 hover:text-blue-800 underline ml-1"
            >
              contact@fair-brand.com
            </a>
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
