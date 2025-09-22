"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Eye, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Certification {
  id: string;
  title: string;
  recipient: string;
  recipientEmail: string;
  training: string;
  issueDate: string;
  status: "issued" | "pending" | "revoked";
}

const mockCertifications: Certification[] = [
  {
    id: "1",
    title: "Certification React Développeur",
    recipient: "Jean Dupont",
    recipientEmail: "jean@example.com",
    training: "Introduction à React",
    issueDate: "2024-03-15",
    status: "issued",
  },
  {
    id: "2",
    title: "Certification Next.js Avancé",
    recipient: "Marie Martin",
    recipientEmail: "marie@example.com",
    training: "Next.js Avancé",
    issueDate: "2024-03-20",
    status: "issued",
  },
  {
    id: "3",
    title: "Certification TypeScript",
    recipient: "Pierre Durand",
    recipientEmail: "pierre@example.com",
    training: "TypeScript pour les débutants",
    issueDate: "2024-03-25",
    status: "pending",
  },
];

export default function CertificationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [certifications] = useState<Certification[]>(mockCertifications);

  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.training.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestion des certifications
          </h1>
          <p className="text-gray-600 mt-2">
            Gérez les certifications délivrées aux étudiants
          </p>
        </div>
        <Button className="bg-brand-blue text-white hover:bg-blue-700">
          <Award className="w-4 h-4 mr-2" />
          Nouvelle certification
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Certifications délivrées
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ce mois</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des certifications</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher une certification..."
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
                    Certification
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Destinataire
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Formation
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Date d&apos;émission
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
                {filteredCertifications.map((cert) => (
                  <tr key={cert.id} className=" hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{cert.title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{cert.recipient}</div>
                        <div className="text-sm text-gray-500">
                          {cert.recipientEmail}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{cert.training}</td>
                    <td className="py-3 px-4">{cert.issueDate}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          cert.status === "issued"
                            ? "bg-green-100 text-green-800"
                            : cert.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {cert.status === "issued"
                          ? "Délivrée"
                          : cert.status === "pending"
                          ? "En attente"
                          : "Révoquée"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
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
