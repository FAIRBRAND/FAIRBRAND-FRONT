"use client";

import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

type AuthMode = "signin" | "signup" | "forgot-password";

export default function AuthContainer() {
    const [authMode, setAuthMode] = useState<AuthMode>("signin");

    const handleToggleMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    };

    const handleForgotPassword = () => {
        setAuthMode("forgot-password");
    };

    const handleBackToSignIn = () => {
        setAuthMode("signin");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#3C3C8C] via-[#2A2A6B] to-[#1A1A4A] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo et branding */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-[#3C3C8C]">F</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">FAIRBRAND</h1>
                    <p className="text-white/80">
                        Votre parcours vers le succès professionnel
                    </p>
                </div>

                {/* Container du formulaire */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {authMode === "signin" && (
                        <SignIn
                            onToggleMode={handleToggleMode}
                            onForgotPassword={handleForgotPassword}
                        />
                    )}

                    {authMode === "signup" && (
                        <SignUp onToggleMode={handleToggleMode} />
                    )}

                    {authMode === "forgot-password" && (
                        <ForgotPassword onBackToSignIn={handleBackToSignIn} />
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-white/60 text-sm">
                        © 2024 FAIRBRAND. Tous droits réservés.
                    </p>
                </div>
            </div>
        </div>
    );
} 