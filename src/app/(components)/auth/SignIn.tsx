"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { signInSchema, type SignInFormData } from "@/lib/schemas/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useI18n } from "../../../../locales/client";
import { useAuthForm } from "@/hooks/useAuthForm";

interface SignInProps {
    onToggleMode: () => void;
    onForgotPassword: () => void;
}

export default function SignIn({ onToggleMode, onForgotPassword }: SignInProps) {
    const t = useI18n();
    const [showPassword, setShowPassword] = useState(false);
    const { signInWithCredentials, signInWithGoogle, isLoading, error, clearError } = useAuthForm({
        onSuccess: () => {
            // Redirection gérée dans le hook
        },
        onError: (error) => {
            console.error("Erreur de connexion:", error);
        },
    });

    const form = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: SignInFormData) => {
        clearError();
        await signInWithCredentials(data.email, data.password);
    };

    const handleGoogleSignIn = () => {
        clearError();
        signInWithGoogle();
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {t("auth.signin.title")}
                </h2>
                <p className="text-gray-600">
                    {t("auth.signin.subtitle")}
                </p>
            </div>

            {/* Affichage des erreurs */}
            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            )}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-slide-in-right">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    {t("auth.signin.email")}
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder={t("auth.signin.emailPlaceholder")}
                                            className="pl-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C] smooth-transition"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    {t("auth.signin.password")}
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <Input
                                            {...field}
                                            type={showPassword ? "text" : "password"}
                                            placeholder={t("auth.signin.passwordPlaceholder")}
                                            className="pl-10 pr-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C] smooth-transition"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 smooth-transition-fast"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onForgotPassword}
                            className="text-sm text-[#3C3C8C] hover:text-[#2A2A6B] font-medium"
                        >
                            {t("auth.signin.forgotPassword")}
                        </button>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#3C3C8C] hover:bg-[#2A2A6B] text-white font-semibold py-3 px-4 rounded-lg smooth-transition hover-lift"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                                {t("auth.signin.signInLoading")}
                            </div>
                        ) : (
                            t("auth.signin.signInButton")
                        )}
                    </Button>
                </form>
            </Form>

            {/* Séparateur */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou</span>
                </div>
            </div>

            {/* Bouton Google OAuth */}
            <Button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                </svg>
                Continuer avec Google
            </Button>

            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    {t("auth.signin.noAccount")} {" "}
                    <button
                        type="button"
                        onClick={onToggleMode}
                        className="text-[#3C3C8C] hover:text-[#2A2A6B] font-semibold"
                    >
                        {t("auth.signin.createAccount")}
                    </button>
                </p>
            </div>
        </div>
    );
} 