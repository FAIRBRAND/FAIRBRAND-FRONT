# Intégration Frontend avec APIs SpringBoot

## Configuration requise

### 1. Variables d'environnement

Créez un fichier `.env.local` avec les configurations suivantes :

```env
# Configuration de l'API SpringBoot
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080

# Configuration NextAuth (à remplacer par l'authentification SpringBoot)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Configuration Google OAuth (optionnel)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Configuration de la base de données
DATABASE_URL="postgresql://username:password@localhost:5432/fairbrand_db"
```

### 2. Endpoints SpringBoot requis

L'API SpringBoot doit exposer les endpoints suivants :

- `POST /api/auth/login` - Connexion utilisateur
- `POST /api/auth/register` - Inscription utilisateur
- `POST /api/auth/refresh` - Rafraîchissement du token
- `POST /api/auth/logout` - Déconnexion
- `POST /api/auth/forgot-password` - Mot de passe oublié
- `POST /api/auth/reset-password` - Réinitialisation du mot de passe
- `GET /api/auth/me` - Informations utilisateur connecté

## Structure des données

### Login Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Login Response
```json
{
  "user": {
    "id": "123",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "name": "John Doe"
  },
  "tokens": {
    "accessToken": "jwt-access-token",
    "refreshToken": "jwt-refresh-token",
    "expiresIn": 3600
  }
}
```

### Register Request
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "user@example.com",
  "password": "password123"
}
```

## Fonctionnalités implémentées

### 1. Client API avec Axios
- Gestion automatique des headers d'authentification
- Refresh automatique des tokens
- Gestion des erreurs centralisée
- Intercepteurs pour l'authentification

### 2. Hook d'authentification
- `useSpringBootAuth()` - Hook principal pour l'authentification
- Gestion des états (loading, error, user)
- Méthodes pour login, register, logout, etc.

### 3. Protection des routes
- Composant `ProtectedRoute` pour sécuriser les pages
- Redirection automatique vers `/auth` si non authentifié
- Gestion des états de chargement

### 4. Composants mis à jour
- `SignIn` - Utilise l'authentification SpringBoot
- `SignUp` - Utilise l'authentification SpringBoot
- `ForgotPassword` - Utilise l'authentification SpringBoot

## Utilisation

### 1. Protection d'une route
```tsx
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>Contenu protégé</div>
    </ProtectedRoute>
  );
}
```

### 2. Utilisation du hook d'authentification
```tsx
import { useSpringBootAuth } from '@/hooks/useSpringBootAuth';

export default function MyComponent() {
  const { user, login, logout, isLoading } = useSpringBootAuth();
  
  // Utiliser les méthodes d'authentification
}
```

### 3. Appels API sécurisés
```tsx
import { apiClient } from '@/lib/api-client';

// Les tokens sont automatiquement ajoutés aux headers
const appointments = await apiClient.get('/api/appointments');
```

## Gestion des tokens

### 1. Stockage
- Access token et refresh token stockés dans localStorage
- Expiration automatique gérée côté client
- Nettoyage automatique lors de la déconnexion

### 2. Refresh automatique
- Intercepteur Axios pour détecter les erreurs 401
- Tentative de refresh automatique du token
- Déconnexion automatique si le refresh échoue

### 3. Sécurité
- Tokens supprimés lors de la déconnexion
- Vérification de l'expiration des tokens
- Gestion des erreurs d'authentification

## Tests

### 1. Test de connexion
```bash
# Démarrer le serveur SpringBoot
# Démarrer le frontend Next.js
npm run dev

# Tester la connexion sur /auth
```

### 2. Test de protection des routes
- Essayer d'accéder à `/dashboard` sans être connecté
- Vérifier la redirection vers `/auth`
- Se connecter et vérifier l'accès au dashboard

### 3. Test des tokens
- Vérifier le stockage des tokens dans localStorage
- Tester l'expiration et le refresh automatique
- Vérifier la déconnexion et le nettoyage des tokens

## Dépannage

### Erreurs courantes

1. **"API_BASE_URL not set"**
   - Vérifier la variable `NEXT_PUBLIC_API_BASE_URL` dans `.env.local`

2. **"CORS error"**
   - Configurer CORS côté SpringBoot pour autoriser `http://localhost:3000`

3. **"Token expired"**
   - Vérifier la configuration des tokens côté SpringBoot
   - Vérifier la durée de vie des tokens

4. **"Authentication failed"**
   - Vérifier les endpoints d'authentification SpringBoot
   - Vérifier la structure des données envoyées/reçues

## Prochaines étapes

1. **Implémentation Google OAuth** avec SpringBoot
2. **Gestion des rôles** et permissions
3. **Tests automatisés** pour l'authentification
4. **Monitoring** des sessions et tokens
5. **Audit** de sécurité et logs
