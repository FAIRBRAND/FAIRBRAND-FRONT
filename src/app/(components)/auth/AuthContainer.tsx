"use client";

import { useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

type AuthMode = "signin" | "signup" | "forgot-password";

export default function AuthContainer() {
    const [authMode, setAuthMode] = useState<AuthMode>("signin");
    const [isLoading, setIsLoading] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Animation d'entrée
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleToggleMode = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setAuthMode(authMode === "signin" ? "signup" : "signin");
            setIsTransitioning(false);
        }, 150);
    };

    const handleForgotPassword = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setAuthMode("forgot-password");
            setIsTransitioning(false);
        }, 150);
    };

    const handleBackToSignIn = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setAuthMode("signin");
            setIsTransitioning(false);
        }, 150);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#3C3C8C] via-[#2A2A6B] to-[#1A1A4A] flex items-center justify-center p-4">
                <div className="animate-pulse">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4"></div>
                    <div className="h-8 bg-white/20 rounded w-48 mx-auto mb-2"></div>
                    <div className="h-4 bg-white/20 rounded w-64 mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#3C3C8C] via-[#2A2A6B] to-[#1A1A4A] flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-md">
                {/* Logo et branding */}
                <div className="text-center mb-8 animate-scale-in">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl hover-scale smooth-transition hover-glow cursor-pointer group">
                        <span className="text-2xl font-bold text-[#3C3C8C] group-hover:scale-110 smooth-transition">F</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2 hover-bounce smooth-transition cursor-default">FAIRBRAND</h1>
                    <p className="text-white/80 text-lg">
                        Votre parcours vers le succès professionnel
                    </p>
                </div>

                {/* Container du formulaire */}
                <div className={`bg-white rounded-2xl shadow-2xl p-8 smooth-transition hover-glow ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                    {authMode === "signin" && (
                        <div className="animate-slide-in-right">
                            <SignIn
                                onToggleMode={handleToggleMode}
                                onForgotPassword={handleForgotPassword}
                            />
                        </div>
                    )}

                    {authMode === "signup" && (
                        <div className="animate-slide-in-left">
                            <SignUp onToggleMode={handleToggleMode} />
                        </div>
                    )}

                    {authMode === "forgot-password" && (
                        <div className="animate-slide-in-right">
                            <ForgotPassword onBackToSignIn={handleBackToSignIn} />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-6 animate-fade-in">
                    <p className="text-white/60 text-sm">
                        © 2024 FAIRBRAND. Tous droits réservés.
                    </p>
                </div>
            </div>
        </div>
    );
} 