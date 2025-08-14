"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { signUpSchema, type SignUpFormData } from "@/lib/schemas/auth";
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

interface SignUpProps {
    onToggleMode: () => void;
}

export default function SignUp({ onToggleMode }: SignUpProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, isLoading, error, clearError } = useSpringBootAuth();

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
        try {
            clearError();
            await register({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            });
        } catch (error) {
            console.error("Erreur d'inscription:", error);
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
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Prénom"
                                                className="pl-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                            />
                                        </div>
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
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Nom"
                                                className="pl-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                            />
                                        </div>
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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Mot de passe
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <Input
                                            {...field}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Votre mot de passe"
                                            className="pl-10 pr-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Confirmer le mot de passe
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <Input
                                            {...field}
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirmez votre mot de passe"
                                            className="pl-10 pr-10 bg-white border-gray-300 focus:border-[#3C3C8C] focus:ring-[#3C3C8C]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showConfirmPassword ? (
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