"use client";

import { useState } from 'react';
import { useSpringBootAuth } from '@/hooks/useSpringBootAuth';
import { apiClient } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AuthTest() {
  const { user, login, register, logout, isLoading, error, clearError } = useSpringBootAuth();
  const [testEmail, setTestEmail] = useState('test@example.com');
  const [testPassword, setTestPassword] = useState('password123');
  const [testFirstName, setTestFirstName] = useState('John');
  const [testLastName, setTestLastName] = useState('Doe');
  const [apiResponse, setApiResponse] = useState<string>('');

  const handleTestLogin = async () => {
    try {
      clearError();
      setApiResponse('');
      await login({ email: testEmail, password: testPassword });
      setApiResponse('Connexion réussie !');
    } catch (error) {
      setApiResponse(`Erreur de connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  };

  const handleTestRegister = async () => {
    try {
      clearError();
      setApiResponse('');
      await register({
        firstName: testFirstName,
        lastName: testLastName,
        email: testEmail,
        password: testPassword,
      });
      setApiResponse('Inscription réussie !');
    } catch (error) {
      setApiResponse(`Erreur d'inscription: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  };

  const handleTestLogout = async () => {
    try {
      await logout();
      setApiResponse('Déconnexion réussie !');
    } catch (error) {
      setApiResponse(`Erreur de déconnexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  };

  const handleTestApiCall = async () => {
    try {
      setApiResponse('');
      // Test d'un appel API sécurisé
      const response = await apiClient.get('/api/appointments');
      setApiResponse(`Appel API réussi: ${JSON.stringify(response, null, 2)}`);
    } catch (error) {
      setApiResponse(`Erreur API: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Test d'Intégration SpringBoot</h2>
      
      {/* État actuel */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">État actuel :</h3>
        <p><strong>Authentifié :</strong> {user ? 'Oui' : 'Non'}</p>
        <p><strong>Chargement :</strong> {isLoading ? 'Oui' : 'Non'}</p>
        {user && (
          <div>
            <p><strong>Utilisateur :</strong> {user.name} ({user.email})</p>
            <p><strong>Token :</strong> {apiClient.getAccessToken ? 'Présent' : 'Absent'}</p>
          </div>
        )}
        {error && (
          <p className="text-red-600"><strong>Erreur :</strong> {error}</p>
        )}
      </div>

      {/* Test de connexion */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="font-semibold mb-3">Test de connexion :</h3>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
          />
          <Button onClick={handleTestLogin} disabled={isLoading} className="w-full">
            Tester la connexion
          </Button>
        </div>
      </div>

      {/* Test d'inscription */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="font-semibold mb-3">Test d'inscription :</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <Input
            type="text"
            placeholder="Prénom"
            value={testFirstName}
            onChange={(e) => setTestFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Nom"
            value={testLastName}
            onChange={(e) => setTestLastName(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
          />
          <Button onClick={handleTestRegister} disabled={isLoading} className="w-full">
            Tester l'inscription
          </Button>
        </div>
      </div>

      {/* Test d'appel API */}
      {user && (
        <div className="mb-6 p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Test d'appel API sécurisé :</h3>
          <Button onClick={handleTestApiCall} disabled={isLoading} className="w-full">
            Tester l'appel API
          </Button>
        </div>
      )}

      {/* Déconnexion */}
      {user && (
        <div className="mb-6 p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Déconnexion :</h3>
          <Button onClick={handleTestLogout} disabled={isLoading} variant="destructive" className="w-full">
            Se déconnecter
          </Button>
        </div>
      )}

      {/* Réponse de l'API */}
      {apiResponse && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold mb-2">Réponse :</h3>
          <pre className="text-sm text-blue-800 whitespace-pre-wrap">{apiResponse}</pre>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold mb-2 text-yellow-800">Instructions :</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Assurez-vous que le serveur SpringBoot est démarré sur le port 8080</li>
          <li>• Configurez la variable NEXT_PUBLIC_API_BASE_URL dans .env.local</li>
          <li>• Vérifiez que les endpoints d'authentification sont disponibles</li>
          <li>• Testez d'abord l'inscription, puis la connexion</li>
        </ul>
      </div>
    </div>
  );
}
