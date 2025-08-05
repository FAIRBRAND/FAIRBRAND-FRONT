import LegalPageLayout from "./LegalPageLayout";

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout
      title="Politique de Confidentialité"
      lastUpdated="15 janvier 2025"
    >
      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fair-Brand s'engage à protéger la confidentialité et la sécurité des
            données personnelles de ses utilisateurs. Cette politique de
            confidentialité explique comment nous collectons, utilisons,
            stockons et protégeons vos informations personnelles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En utilisant nos services, vous acceptez les pratiques décrites dans
            cette politique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Données Collectées
          </h2>

          <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">
            2.1 Données fournies directement
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Informations de profil</li>
            <li>Messages et communications</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mb-3">
            2.2 Données collectées automatiquement
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Adresse IP</li>
            <li>Type de navigateur et version</li>
            <li>Pages visitées et temps passé</li>
            <li>Données de géolocalisation approximative</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Utilisation des Données
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous utilisons vos données personnelles pour :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Fournir et améliorer nos services</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Communiquer avec vous (support, newsletters, notifications)</li>
            <li>Analyser l'utilisation de nos services</li>
            <li>Assurer la sécurité et prévenir la fraude</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Base Légale du Traitement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au RGPD, nous traitons vos données sur la base de :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Consentement :</strong> pour les newsletters et
              communications marketing
            </li>
            <li>
              <strong>Exécution du contrat :</strong> pour fournir nos services
            </li>
            <li>
              <strong>Intérêt légitime :</strong> pour améliorer nos services et
              assurer la sécurité
            </li>
            <li>
              <strong>Obligation légale :</strong> pour respecter les exigences
              réglementaires
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Partage des Données
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous ne vendons jamais vos données personnelles. Nous pouvons
            partager vos informations uniquement dans les cas suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              Avec des prestataires de services tiers (hébergement, analytics,
              support)
            </li>
            <li>En cas d'obligation légale ou de demande des autorités</li>
            <li>Pour protéger nos droits et assurer la sécurité</li>
            <li>En cas de fusion, acquisition ou cession d'activité</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous utilisons des cookies pour améliorer votre expérience. Les
            types de cookies utilisés :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Cookies essentiels :</strong> nécessaires au
              fonctionnement du site
            </li>
            <li>
              <strong>Cookies analytiques :</strong> pour comprendre
              l'utilisation du site
            </li>
            <li>
              <strong>Cookies de préférences :</strong> pour mémoriser vos choix
            </li>
            <li>
              <strong>Cookies marketing :</strong> pour personnaliser la
              publicité (avec consentement)
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Vous pouvez gérer vos préférences de cookies dans les paramètres de
            votre navigateur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Sécurité des Données
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous mettons en place des mesures techniques et organisationnelles
            appropriées pour protéger vos données :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Chiffrement des données en transit et au repos</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Surveillance et détection des intrusions</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Formation du personnel à la protection des données</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Vos Droits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Droit d'accès :</strong> obtenir une copie de vos données
            </li>
            <li>
              <strong>Droit de rectification :</strong> corriger des données
              inexactes
            </li>
            <li>
              <strong>Droit à l'effacement :</strong> demander la suppression de
              vos données
            </li>
            <li>
              <strong>Droit à la limitation :</strong> restreindre le traitement
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> récupérer vos données
              dans un format structuré
            </li>
            <li>
              <strong>Droit d'opposition :</strong> vous opposer au traitement
            </li>
            <li>
              <strong>Droit de retrait du consentement :</strong> à tout moment
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Pour exercer ces droits, contactez-nous à :
            <a
              href="mailto:privacy@fair-brand.com"
              className="text-blue-600 hover:text-blue-800 underline ml-1"
            >
              privacy@fair-brand.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Conservation des Données
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous conservons vos données personnelles uniquement pendant la durée
            nécessaire aux finalités pour lesquelles elles ont été collectées,
            ou selon les exigences légales. Les données sont supprimées de
            manière sécurisée à l'expiration de ces délais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Transferts Internationaux
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Si nous transférons vos données en dehors de l'Union européenne,
            nous nous assurons qu'un niveau de protection adéquat est maintenu,
            notamment par des clauses contractuelles types ou des décisions
            d'adéquation de la Commission européenne.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette politique peut être modifiée pour refléter les changements
            dans nos pratiques ou la réglementation. Nous vous informerons de
            toute modification importante par e-mail ou via notre site web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question concernant cette politique de confidentialité ou
            le traitement de vos données personnelles :
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>E-mail :</strong>
              <a
                href="mailto:privacy@fair-brand.com"
                className="text-blue-600 hover:text-blue-800 underline ml-1"
              >
                privacy@fair-brand.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Délégué à la Protection des Données :</strong>
              <a
                href="mailto:dpo@fair-brand.com"
                className="text-blue-600 hover:text-blue-800 underline ml-1"
              >
                dpo@fair-brand.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
