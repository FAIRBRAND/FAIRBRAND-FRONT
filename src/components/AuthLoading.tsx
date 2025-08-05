export const AuthLoading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3C3C8C] mx-auto"></div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Chargement...
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Vérification de votre session
                    </p>
                </div>
            </div>
        </div>
    );
}; 