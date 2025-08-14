import AuthTest from "@/components/auth/AuthTest";

export default function TestAuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3C3C8C] via-[#2A2A6B] to-[#1A1A4A] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Test d'Intégration</h1>
          <p className="text-white/80">Vérification de la connexion avec les APIs SpringBoot</p>
        </div>
        
        <AuthTest />
      </div>
    </div>
  );
}
