import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UseAuthFormProps {
    onSuccess?: () => void;
    onError?: (error: string) => void;
}

export const useAuthForm = ({ onSuccess, onError }: UseAuthFormProps = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const signInWithCredentials = async (email: string, password: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Email ou mot de passe incorrect");
                onError?.(result.error);
            } else {
                onSuccess?.();
                router.push("/dashboard");
            }
        } catch (err) {
            setError("Une erreur est survenue");
            onError?.(err as string);
        } finally {
            setIsLoading(false);
        }
    };

    const signInWithGoogle = async () => {
        setIsLoading(true);
        setError(null);

        try {
            await signIn("google", { callbackUrl: "/dashboard" });
        } catch (err) {
            setError("Erreur lors de la connexion avec Google");
            onError?.(err as string);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (userData: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erreur lors de l'inscription");
            }

            // Connexion automatique après inscription
            await signInWithCredentials(userData.email, userData.password);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors de l'inscription");
            onError?.(err as string);
        } finally {
            setIsLoading(false);
        }
    };

    const forgotPassword = async (email: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erreur lors de l'envoi de l'email");
            }

            onSuccess?.();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors de l'envoi de l'email");
            onError?.(err as string);
        } finally {
            setIsLoading(false);
        }
    };

    const resetPassword = async (token: string, password: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erreur lors de la réinitialisation");
            }

            onSuccess?.();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors de la réinitialisation");
            onError?.(err as string);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        signInWithCredentials,
        signInWithGoogle,
        register,
        forgotPassword,
        resetPassword,
        clearError: () => setError(null),
    };
}; 