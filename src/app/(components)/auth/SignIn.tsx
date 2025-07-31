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

interface SignInProps {
    onToggleMode: () => void;
    onForgotPassword: () => void;
}

export default function SignIn({ onToggleMode, onForgotPassword }: SignInProps) {
    const t = useI18n();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: SignInFormData) => {
        setIsLoading(true);
        try {
            // TODO: Implémenter la logique d'authentification
            console.log("Sign in data:", data);

            // Simuler un délai d'authentification
            await new Promise(resolve => setTimeout(resolve, 1500));

            // TODO: Rediriger vers le dashboard après connexion réussie
        } catch (error) {
            console.error("Erreur de connexion:", error);
            // TODO: Afficher un message d'erreur
        } finally {
            setIsLoading(false);
        }
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

            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    {t("auth.signin.noAccount")}{" "}
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