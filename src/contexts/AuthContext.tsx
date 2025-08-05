"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

interface AuthContextType {
    user: Session["user"] | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(status === "loading");
    }, [status]);

    const value = {
        user: session?.user || null,
        isLoading,
        isAuthenticated: !!session?.user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 