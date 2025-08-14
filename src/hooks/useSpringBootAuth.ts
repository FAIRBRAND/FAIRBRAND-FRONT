import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';
import type { LoginRequest, RegisterRequest, User } from '@/types/springboot-api';

interface UseSpringBootAuthReturn {
    // États
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;

    // Actions
    login: (credentials: LoginRequest) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    logout: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    resetPassword: (token: string, newPassword: string) => Promise<void>;
    clearError: () => void;

    // Utilitaires
    refreshUser: () => Promise<void>;
}

export const useSpringBootAuth = (): UseSpringBootAuthReturn => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Vérifier l'authentification au chargement
    useEffect(() => {
        const checkAuth = async () => {
            try {
                setIsLoading(true);

                // Vérifier si on a des tokens
                if (apiClient.isAuthenticated) {
                    // TODO: Appeler l'API pour récupérer les infos utilisateur
                    // await refreshUser();
                }
            } catch (error) {
                console.error('Error checking auth:', error);
                // En cas d'erreur, déconnecter l'utilisateur
                await logout();
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Connexion
    const login = useCallback(async (credentials: LoginRequest) => {
        try {
            setIsLoading(true);
            setError(null);

            const { user: userData, tokens } = await apiClient.login(credentials);

            setUser(userData);
            router.push('/dashboard');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erreur de connexion';
            setError(errorMessage);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    // Inscription
    const register = useCallback(async (data: RegisterRequest) => {
        try {
            setIsLoading(true);
            setError(null);

            const { user: userData, tokens } = await apiClient.register(data);

            setUser(userData);
            router.push('/dashboard');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erreur d\'inscription';
            setError(errorMessage);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    // Déconnexion
    const logout = useCallback(async () => {
        try {
            setIsLoading(true);
            await apiClient.logout();
        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
            setUser(null);
            setIsLoading(false);
            router.push('/auth');
        }
    }, [router]);

    // Mot de passe oublié
    const forgotPassword = useCallback(async (email: string) => {
        try {
            setIsLoading(true);
            setError(null);

            await apiClient.forgotPassword(email);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'envoi de l\'email';
            setError(errorMessage);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Réinitialisation du mot de passe
    const resetPassword = useCallback(async (token: string, newPassword: string) => {
        try {
            setIsLoading(true);
            setError(null);

            await apiClient.resetPassword(token, newPassword);
            router.push('/auth');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la réinitialisation';
            setError(errorMessage);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    // Rafraîchir les informations utilisateur
    const refreshUser = useCallback(async () => {
        try {
            // TODO: Appeler l'API pour récupérer les infos utilisateur mises à jour
            // const userData = await apiClient.get<User>('/api/auth/me');
            // setUser(userData);
        } catch (error) {
            console.error('Error refreshing user:', error);
            // En cas d'erreur, déconnecter l'utilisateur
            await logout();
        }
    }, [logout]);

    // Effacer les erreurs
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        // États
        user,
        isLoading,
        isAuthenticated: !!user && apiClient.isAuthenticated,
        error,

        // Actions
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        clearError,

        // Utilitaires
        refreshUser,
    };
};
