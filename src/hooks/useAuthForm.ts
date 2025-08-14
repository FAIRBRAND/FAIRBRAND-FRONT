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

    const withAsyncState = async <T>(fn: () => Promise<T>): Promise<T | undefined> => {
        setIsLoading(true);
        setError(null);
        try {
            return await fn();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Une erreur est survenue";
            setError(message);
            onError?.(message);
            return undefined;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchJson = async (url: string, init: RequestInit) => {
        const response = await fetch(url, init);
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error((data as any).error || "Requête échouée");
        }
        return data as unknown;
    };

    const signInWithCredentials = async (email: string, password: string) =>
        withAsyncState(async () => {
            const result = await signIn("credentials", { email, password, redirect: false });
            if (result?.error) {
                throw new Error("Email ou mot de passe incorrect");
            }
            onSuccess?.();
            router.push("/dashboard");
        });

    const signInWithGoogle = async () =>
        withAsyncState(async () => {
            await signIn("google", { callbackUrl: "/dashboard" });
        });

    const register = async (userData: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }) =>
        withAsyncState(async () => {
            await fetchJson("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
            await signInWithCredentials(userData.email, userData.password);
        });

    const forgotPassword = async (email: string) =>
        withAsyncState(async () => {
            await fetchJson("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            onSuccess?.();
        });

    const resetPassword = async (token: string, password: string) =>
        withAsyncState(async () => {
            await fetchJson("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password }),
            });
            onSuccess?.();
        });

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