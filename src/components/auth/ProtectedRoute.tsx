"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSpringBootAuth } from '@/hooks/useSpringBootAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  fallback, 
  redirectTo = '/auth' 
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useSpringBootAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  // Afficher un loader pendant la vérification de l'authentification
  if (isLoading) {
    return fallback || (
      <div className="min-h-screen bg-gradient-to-br from-[#3C3C8C] via-[#2A2A6B] to-[#1A1A4A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl font-bold text-[#3C3C8C]">F</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Vérification...</h2>
          <p className="text-white/80">Vérification de votre authentification</p>
        </div>
      </div>
    );
  }

  // Si non authentifié, ne rien afficher (redirection en cours)
  if (!isAuthenticated) {
    return null;
  }

  // Si authentifié, afficher le contenu protégé
  return <>{children}</>;
}
