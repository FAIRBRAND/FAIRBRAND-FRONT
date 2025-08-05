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

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API Google+ 
4. Créez des identifiants OAuth 2.0
5. Ajoutez `http://localhost:3000/api/auth/callback/google` aux URIs de redirection autorisés
6. Copiez le Client ID et Client Secret dans votre fichier `.env.local`

## Fonctionnalités implémentées

- ✅ Authentification par email/mot de passe
- ✅ Authentification Google OAuth
- ✅ Inscription d'utilisateur
- ✅ Connexion/déconnexion
- ✅ Réinitialisation de mot de passe
- ✅ Protection des routes privées
- ✅ Gestion des sessions
- ✅ Context d'authentification
- ✅ Hooks personnalisés (useAuth)

## Utilisation

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

## Structure des fichiers

```
src/
├── lib/
│   ├── auth.ts              # Configuration NextAuth
│   ├── prisma.ts            # Client Prisma
│   └── schemas/
│       └── auth.ts          # Schémas de validation
├── contexts/
│   └── AuthContext.tsx      # Context d'authentification
├── components/
│   └── ProtectedRoute.tsx   # Protection des routes
├── app/
│   └── api/
│       └── auth/
│           ├── [...nextauth]/route.ts
│           ├── register/route.ts
│           ├── forgot-password/route.ts
│           └── reset-password/route.ts
└── types/
    └── next-auth.d.ts       # Types TypeScript
``` 