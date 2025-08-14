# FAIR-003 : Intégration Frontend avec APIs SpringBoot

## Résumé de l'implémentation

Cette branche implémente la connexion du frontend Next.js aux APIs SpringBoot d'authentification existantes, avec gestion des tokens, refresh automatique, et protection des routes.

## Fonctionnalités implémentées

### ✅ Client API avec Axios
- **Fichier** : `src/lib/api-client.ts`
- Gestion automatique des headers d'authentification
- Refresh automatique des tokens via intercepteurs
- Gestion centralisée des erreurs
- Stockage sécurisé des tokens dans localStorage

### ✅ Hook d'authentification personnalisé
- **Fichier** : `src/hooks/useSpringBootAuth.ts`
- Gestion des états (loading, error, user)
- Méthodes pour login, register, logout, forgot password
- Intégration avec le router Next.js

### ✅ Protection des routes
- **Fichier** : `src/components/auth/ProtectedRoute.tsx`
- Composant de protection automatique
- Redirection vers `/auth` si non authentifié
- Gestion des états de chargement

### ✅ Composants d'authentification mis à jour
- **SignIn** : Utilise l'authentification SpringBoot
- **SignUp** : Utilise l'authentification SpringBoot  
- **ForgotPassword** : Utilise l'authentification SpringBoot

### ✅ Types TypeScript
- **Fichier** : `src/types/springboot-api.ts`
- Interfaces pour toutes les réponses API
- Types pour les rendez-vous (selon spec-appointment.yml)
- Types d'erreur et de succès standardisés

### ✅ Page de test
- **Fichier** : `src/app/[locale]/test-auth/page.tsx`
- Interface de test pour vérifier l'intégration
- Tests de connexion, inscription, et appels API

## Structure des fichiers

```
src/
├── lib/
│   └── api-client.ts          # Client Axios avec intercepteurs
├── hooks/
│   └── useSpringBootAuth.ts   # Hook d'authentification
├── components/auth/
│   ├── ProtectedRoute.tsx     # Protection des routes
│   ├── SignIn.tsx             # Connexion (mis à jour)
│   ├── SignUp.tsx             # Inscription (mis à jour)
│   ├── ForgotPassword.tsx     # Mot de passe oublié (mis à jour)
│   └── AuthTest.tsx           # Composant de test
├── types/
│   └── springboot-api.ts      # Types TypeScript
└── app/[locale]/
    └── test-auth/
        └── page.tsx            # Page de test
```

## Configuration requise

### Variables d'environnement
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

### Endpoints SpringBoot requis
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `GET /api/auth/me`

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

### 2. Hook d'authentification
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

### Stockage
- Access token et refresh token dans localStorage
- Expiration automatique gérée côté client
- Nettoyage automatique lors de la déconnexion

### Refresh automatique
- Intercepteur Axios pour détecter les erreurs 401
- Tentative de refresh automatique du token
- Déconnexion automatique si le refresh échoue

### Sécurité
- Tokens supprimés lors de la déconnexion
- Vérification de l'expiration des tokens
- Gestion des erreurs d'authentification

## Tests

### Page de test
Accédez à `/test-auth` pour tester :
- Connexion utilisateur
- Inscription utilisateur
- Appels API sécurisés
- Déconnexion
- Gestion des erreurs

### Tests manuels
1. Démarrer le serveur SpringBoot sur le port 8080
2. Configurer `NEXT_PUBLIC_API_BASE_URL` dans `.env.local`
3. Tester la connexion sur `/auth`
4. Vérifier la protection des routes
5. Tester le refresh automatique des tokens

## Critères d'acceptation

### ✅ Auth frontend/backend synchronisée
- Composants d'authentification utilisent les APIs SpringBoot
- Gestion des états synchronisée entre frontend et backend
- Redirections automatiques après authentification

### ✅ Tokens gérés
- Stockage sécurisé des tokens
- Refresh automatique en cas d'expiration
- Nettoyage automatique lors de la déconnexion

### ✅ API calls sécurisées
- Headers d'authentification automatiques
- Protection des routes privées
- Gestion des erreurs d'authentification

## Prochaines étapes

1. **Implémentation Google OAuth** avec SpringBoot
2. **Gestion des rôles** et permissions
3. **Tests automatisés** pour l'authentification
4. **Monitoring** des sessions et tokens
5. **Audit** de sécurité et logs

## Dépannage

### Erreurs courantes
1. **"API_BASE_URL not set"** : Vérifier la variable d'environnement
2. **"CORS error"** : Configurer CORS côté SpringBoot
3. **"Token expired"** : Vérifier la configuration des tokens
4. **"Authentication failed"** : Vérifier les endpoints SpringBoot

### Logs utiles
```bash
# Voir les logs de l'API client
console.log(apiClient.getAccessToken);

# Voir l'état d'authentification
console.log(useSpringBootAuth());
```

## Documentation complète

Voir `SPRINGBOOT_INTEGRATION.md` pour la documentation détaillée de l'intégration.
