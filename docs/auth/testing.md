# Tests de l'Authentification

## Configuration initiale

1. Variables d'environnement : Créez un fichier `.env.local` (voir `docs/auth/setup.md`)
2. Base de données :
```bash
npm run db:generate
npm run db:migrate
npm run db:init
```

## Tests manuels

### 1. Inscription d'utilisateur
- Aller sur `/auth`
- Cliquer sur "S'inscrire"
- Remplir le formulaire avec des données valides
- Vérifier que l'utilisateur est créé et connecté automatiquement

### 2. Connexion avec email/mot de passe
- Utiliser l'utilisateur de test : `test@example.com` / `password123`
- Vérifier la redirection vers le dashboard
- Vérifier l'affichage du nom dans le header

### 3. Connexion Google OAuth (optionnel)
- Cliquer sur "Continuer avec Google"
- Suivre le processus OAuth
- Vérifier la création du compte et la connexion

### 4. Protection des routes
- Essayer d'accéder à `/dashboard` sans être connecté
- Vérifier la redirection vers `/auth`
- Se connecter et vérifier l'accès au dashboard

### 5. Déconnexion
- Cliquer sur le bouton de déconnexion
- Vérifier la redirection vers la page d'accueil
- Vérifier que l'accès au dashboard est bloqué

### 6. Réinitialisation de mot de passe
- Aller sur `/auth`
- Cliquer sur "Mot de passe oublié"
- Entrer un email valide
- Vérifier la génération du token (en développement)
- Utiliser le lien de réinitialisation
- Définir un nouveau mot de passe

## Tests automatisés (à implémenter)

```typescript
// Exemple de tests avec Jest et Testing Library
describe('Authentication', () => {
  test('should register new user', async () => {
    // Test d'inscription
  });

  test('should login with valid credentials', async () => {
    // Test de connexion
  });

  test('should protect private routes', async () => {
    // Test de protection des routes
  });
});
```

## Dépannage

### Erreurs courantes

1. "Prisma Client not found"
```bash
npm run db:generate
```

2. "Database connection failed"
- Vérifier l'URL de la base de données dans `.env.local`
- Vérifier que PostgreSQL est démarré

3. "NextAuth secret not set"
- Ajouter `NEXTAUTH_SECRET` dans `.env.local`

4. "Google OAuth error"
- Vérifier les identifiants Google dans `.env.local`
- Vérifier les URIs de redirection dans Google Cloud Console

### Logs utiles

```bash
# Voir les logs Prisma
DEBUG=prisma:* npm run dev

# Voir les logs NextAuth
DEBUG=next-auth:* npm run dev
```
