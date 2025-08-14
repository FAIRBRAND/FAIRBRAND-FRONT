"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { signUpSchema, type SignUpFormData } from "@/lib/schemas/auth";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input-with-icon";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface SignUpProps {
    onToggleMode: () => void;
}

export default function SignUp({ onToggleMode }: SignUpProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: SignUpFormData) => {
        setIsLoading(true);
        try {
            // TODO: Implémenter la logique d'inscription
            console.log("Sign up data:", data);

            // Simuler un délai d'inscription
            await new Promise(resolve => setTimeout(resolve, 1000));

            // TODO: Rediriger vers le dashboard après inscription réussie
        } catch (error) {
            console.error("Erreur d'inscription:", error);
            // TODO: Afficher un message d'erreur
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Créer un compte
                </h2>
                <p className="text-gray-600">
                    Rejoignez FAIRBRAND et commencez votre parcours
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">
                                        Prénom
                                    </FormLabel>
                                    <FormControl>
                                        <InputWithIcon
                                            {...field}
                                            type="text"
                                            placeholder="Prénom"
                                            leftIcon={<User className="h-5 w-5" />}
                                            className="bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">
                                        Nom
                                    </FormLabel>
                                    <FormControl>
                                        <InputWithIcon
                                            {...field}
                                            type="text"
                                            placeholder="Nom"
                                            leftIcon={<User className="h-5 w-5" />}
                                            className="bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <InputWithIcon
                                        {...field}
                                        type="email"
                                        placeholder="votre@email.com"
                                        leftIcon={<Mail className="h-5 w-5" />}
                                        className="bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                    />
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
                                    Mot de passe
                                </FormLabel>
                                <FormControl>
                                    <InputWithIcon
                                        {...field}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Votre mot de passe"
                                        leftIcon={<Lock className="h-5 w-5" />}
                                        rightAdornment={
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        }
                                        className="bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Confirmer le mot de passe
                                </FormLabel>
                                <FormControl>
                                    <InputWithIcon
                                        {...field}
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirmez votre mot de passe"
                                        leftIcon={<Lock className="h-5 w-5" />}
                                        rightAdornment={
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        }
                                        className="bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                    />
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
                        {isLoading ? "Création du compte..." : "Créer un compte"}
                    </Button>
                </form>
            </Form>

            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    Déjà un compte ?{" "}
                    <button
                        type="button"
                        onClick={onToggleMode}
                        className="text-[#3C3C8C] hover:text-[#2A2A6B] font-semibold"
                    >
                        Se connecter
                    </button>
                </p>
            </div>
        </div>
    );
} 