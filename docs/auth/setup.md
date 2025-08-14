# Configuration de l'Authentification

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fairbrand_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optionnel)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Configuration de la base de données

1. Configurez votre base de données PostgreSQL
2. Mettez à jour l'URL de connexion dans `DATABASE_URL`
3. Générez le client Prisma :
   ```bash
   npx prisma generate
   ```
4. Appliquez les migrations :
   ```bash
   npx prisma migrate dev --name init
   ```

## Configuration Google OAuth (optionnel)

1. Allez sur Google Cloud Console
2. Créez des identifiants OAuth 2.0
3. Ajoutez `http://localhost:3000/api/auth/callback/google` aux URIs de redirection autorisés
4. Copiez le Client ID et Client Secret dans votre `.env.local`

## Fonctionnalités implémentées

- Authentification email/mot de passe
- Google OAuth (optionnel)
- Inscription / Connexion / Déconnexion
- Réinitialisation de mot de passe
- Protection des routes privées
- Gestion des sessions
- Contexte d'authentification + hook `useAuth`

## Exemples rapides

### Hook useAuth
```tsx
import { useAuth } from "@/contexts/AuthContext";

function MyComponent() {
  const { user, isLoading, isAuthenticated } = useAuth();
  if (isLoading) return <div>Chargement...</div>;
  if (!isAuthenticated) return <div>Non connecté</div>;
  return <div>Bienvenue {user?.firstName}!</div>;
}
```

### Protection des routes
```tsx
import { ProtectedRoute } from "@/components/ProtectedRoute";

function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>Contenu protégé</div>
    </ProtectedRoute>
  );
}
```
