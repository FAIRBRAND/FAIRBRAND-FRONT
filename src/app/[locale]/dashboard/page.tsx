"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
    const { user } = useAuth();

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Tableau de bord
                            </h1>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Se déconnecter
                            </button>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <h2 className="text-lg font-semibold text-blue-900 mb-2">
                                Bienvenue !
                            </h2>
                            <p className="text-blue-800">
                                Vous êtes connecté en tant que{" "}
                                <span className="font-medium">
                                    {user?.firstName} {user?.lastName}
                                </span>
                                {" "}({user?.email})
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Profil
                                </h3>
                                <p className="text-gray-600">
                                    Gérez vos informations personnelles et vos préférences.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Sécurité
                                </h3>
                                <p className="text-gray-600">
                                    Modifiez votre mot de passe et vos paramètres de sécurité.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Activité
                                </h3>
                                <p className="text-gray-600">
                                    Consultez votre historique d'activité récente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
} 