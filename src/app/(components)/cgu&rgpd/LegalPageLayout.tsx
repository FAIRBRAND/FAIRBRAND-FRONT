import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">Dernière mise à jour : {lastUpdated}</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">{children}</div>
      </main>

      {/* Footer minimal */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Fair-Brand. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
