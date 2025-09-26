"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Payment {
  id: string;
  user: string;
  userEmail: string;
  training: string;
  amount: number;
  currency: string;
  status: "completed" | "pending" | "failed" | "refunded";
  paymentMethod: string;
  date: string;
}

const mockPayments: Payment[] = [
  {
    id: "1",
    user: "Jean Dupont",
    userEmail: "jean@example.com",
    training: "Introduction à React",
    amount: 99.99,
    currency: "EUR",
    status: "completed",
    paymentMethod: "Carte bancaire",
    date: "2024-03-15",
  },
  {
    id: "2",
    user: "Marie Martin",
    userEmail: "marie@example.com",
    training: "Next.js Avancé",
    amount: 149.99,
    currency: "EUR",
    status: "completed",
    paymentMethod: "PayPal",
    date: "2024-03-20",
  },
  {
    id: "3",
    user: "Pierre Durand",
    userEmail: "pierre@example.com",
    training: "TypeScript pour les débutants",
    amount: 79.99,
    currency: "EUR",
    status: "pending",
    paymentMethod: "Carte bancaire",
    date: "2024-03-25",
  },
];

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [payments] = useState<Payment[]>(mockPayments);

  const filteredPayments = payments.filter(
    (payment) =>
      payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.training.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestion des paiements
          </h1>
          <p className="text-gray-600 mt-2">
            Suivez et gérez tous les paiements de la plateforme
          </p>
        </div>
        <Button className="bg-brand-blue text-white hover:bg-blue-700">
          <CreditCard className="w-4 h-4 mr-2" />
          Nouveau paiement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenus totaux
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Paiements ce mois
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taux de succès
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historique des paiements</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un paiement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Utilisateur
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Formation
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Montant
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Méthode
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Statut
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className=" hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{payment.user}</div>
                        <div className="text-sm text-gray-500">
                          {payment.userEmail}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{payment.training}</td>
                    <td className="py-3 px-4 font-medium">
                      {payment.amount} {payment.currency}
                    </td>
                    <td className="py-3 px-4">{payment.paymentMethod}</td>
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          payment.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : payment.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : payment.status === "failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {payment.status === "completed"
                          ? "Terminé"
                          : payment.status === "pending"
                          ? "En attente"
                          : payment.status === "failed"
                          ? "Échec"
                          : "Remboursé"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        Voir détails
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
