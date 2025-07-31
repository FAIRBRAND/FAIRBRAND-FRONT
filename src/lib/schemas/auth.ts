import { z } from 'zod';

export const signInSchema = z.object({
    email: z
        .string()
        .min(1, 'Email est requis')
        .email('Format d\'email invalide'),
    password: z
        .string()
        .min(1, 'Mot de passe est requis')
        .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

export const signUpSchema = z.object({
    firstName: z
        .string()
        .min(1, 'Prénom est requis')
        .min(2, 'Le prénom doit contenir au moins 2 caractères'),
    lastName: z
        .string()
        .min(1, 'Nom est requis')
        .min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z
        .string()
        .min(1, 'Email est requis')
        .email('Format d\'email invalide'),
    password: z
        .string()
        .min(1, 'Mot de passe est requis')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'),
    confirmPassword: z
        .string()
        .min(1, 'Confirmation du mot de passe est requise'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
});

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, 'Email est requis')
        .email('Format d\'email invalide'),
});

export const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(1, 'Mot de passe est requis')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'),
    confirmPassword: z
        .string()
        .min(1, 'Confirmation du mot de passe est requise'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
});

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>; 