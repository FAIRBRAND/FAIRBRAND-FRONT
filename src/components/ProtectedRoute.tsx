"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthLoading } from "./AuthLoading";

interface ProtectedRouteProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
	redirectTo?: string;
}

export const ProtectedRoute = ({ children, fallback, redirectTo = "/auth" }: ProtectedRouteProps) => {
	const { isAuthenticated, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			router.push(redirectTo);
		}
	}, [isAuthenticated, isLoading, redirectTo, router]);

	if (isLoading) {
		return fallback || <AuthLoading />;
	}

	if (!isAuthenticated) {
		return null;
	}

	return <>{children}</>;
}; 