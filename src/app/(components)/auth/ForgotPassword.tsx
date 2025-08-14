"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowLeft } from "lucide-react";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "@/lib/schemas/auth";
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
import { useSpringBootAuth } from "@/hooks/useSpringBootAuth";

interface ForgotPasswordProps {
    onBackToSignIn: () => void;
}

export default function ForgotPassword({ onBackToSignIn }: ForgotPasswordProps) {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const { forgotPassword, isLoading, error, clearError } = useSpringBootAuth();

    const form = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
        try {
            clearError();
            await forgotPassword(data.email);
            setIsEmailSent(true);
        } catch (error) {
            console.error("Erreur d'envoi d'email:", error);
        }
    };

    if (isEmailSent) {
        return (
            <div className="w-full max-w-md mx-auto">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Email envoyé !
                    </h2>
                    <p className="text-gray-600">
                        Nous avons envoyé un lien de réinitialisation à votre adresse email.
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-sm text-gray-500">
                        Vérifiez votre boîte de réception et suivez les instructions pour réinitialiser votre mot de passe.
                    </p>

                    <Button
                        onClick={onBackToSignIn}
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour à la connexion
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Mot de passe oublié
                </h2>
                <p className="text-gray-600">
                    Entrez votre email pour recevoir un lien de réinitialisation
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="votre@email.com"
                                            className="pl-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#3C3C8C] hover:bg-[#2A2A6B] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        {isLoading ? "Envoi..." : "Envoyer le lien"}
                    </Button>
                </form>
            </Form>

            <div className="mt-6 text-center">
                <button
                    type="button"
                    onClick={onBackToSignIn}
                    className="text-[#3C3C8C] hover:text-[#2A2A6B] font-medium flex items-center justify-center mx-auto"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour à la connexion
                </button>
            </div>
        </div>
    );
} 