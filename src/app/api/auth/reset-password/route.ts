import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { resetPasswordSchema } from "@/lib/schemas/auth";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { token, password } = body;

        if (!token) {
            return NextResponse.json(
                { error: "Token de réinitialisation requis" },
                { status: 400 }
            );
        }

        // Valider le nouveau mot de passe
        const { password: validatedPassword } = resetPasswordSchema.parse({ password, confirmPassword: password });

        // Vérifier le token
        const verificationToken = await prisma.verificationToken.findUnique({
            where: { token },
        });

        if (!verificationToken) {
            return NextResponse.json(
                { error: "Token de réinitialisation invalide" },
                { status: 400 }
            );
        }

        if (verificationToken.expires < new Date()) {
            return NextResponse.json(
                { error: "Token de réinitialisation expiré" },
                { status: 400 }
            );
        }

        // Trouver l'utilisateur
        const user = await prisma.user.findUnique({
            where: { email: verificationToken.identifier },
        });

        if (!user) {
            return NextResponse.json(
                { error: "Utilisateur non trouvé" },
                { status: 404 }
            );
        }

        // Hasher le nouveau mot de passe
        const hashedPassword = await bcrypt.hash(validatedPassword, 12);

        // Mettre à jour le mot de passe
        await prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });

        // Supprimer le token utilisé
        await prisma.verificationToken.delete({
            where: { token },
        });

        return NextResponse.json(
            { message: "Mot de passe réinitialisé avec succès" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erreur lors de la réinitialisation du mot de passe:", error);
        return NextResponse.json(
            { error: "Erreur lors de la réinitialisation du mot de passe" },
            { status: 500 }
        );
    }
} 