# FAIRBRAND Frontend

Projet Next.js (App Router) avec authentification (NextAuth), Prisma et i18n.

## Sommaire

- Installation & démarrage: voir ci-dessous
- Authentification (setup): `docs/auth/setup.md`
- Tests Auth (manuels): `docs/auth/testing.md`
- Dépannage & logs: `docs/auth/testing.md#dépannage`

## Installation

1. Installer les dépendances
```bash
npm install
```

2. Variables d'environnement: créer `.env.local` (voir `docs/auth/setup.md`)

3. Base de données Prisma
```bash
npm run db:generate
npm run db:migrate
npm run db:init
```

4. Démarrer le serveur
```bash
npm run dev
```

## Liens utiles
- Next.js docs: https://nextjs.org/docs
- Prisma docs: https://www.prisma.io/docs
- NextAuth docs: https://next-auth.js.org
