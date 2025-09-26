"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Users,
  Clock,
  BookOpen,
} from "lucide-react";

interface Training {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  enrolledStudents: number;
  status: "active" | "draft" | "archived";
  createdAt: string;
}

const mockTrainings: Training[] = [
  {
    id: "1",
    title: "Introduction à React",
    description:
      "Apprenez les bases de React et créez vos premières applications",
    instructor: "Marie Martin",
    duration: "8 heures",
    enrolledStudents: 45,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Next.js Avancé",
    description: "Maîtrisez les fonctionnalités avancées de Next.js",
    instructor: "Jean Dupont",
    duration: "12 heures",
    enrolledStudents: 32,
    status: "active",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "TypeScript pour les débutants",
    description:
      "Découvrez TypeScript et améliorez vos compétences en JavaScript",
    instructor: "Pierre Durand",
    duration: "6 heures",
    enrolledStudents: 0,
    status: "draft",
    createdAt: "2024-03-10",
  },
];

export default function TrainingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [trainings] = useState<Training[]>(mockTrainings);

  const filteredTrainings = trainings.filter(
    (training) =>
      training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestion des formations
          </h1>
          <p className="text-gray-600 mt-2">
            Créez et gérez vos formations en ligne
          </p>
        </div>
        <Button className="bg-brand-blue text-white hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle formation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Formations actives
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Étudiants inscrits
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Heures de formation
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156h</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des formations</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrainings.map((training) => (
              <Card
                key={training.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{training.title}</CardTitle>
                  <p className="text-sm text-gray-600">
                    {training.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Formateur:</span>
                      <span>{training.instructor}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Durée:</span>
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Inscrits:</span>
                      <span>{training.enrolledStudents}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          training.status === "active"
                            ? "bg-green-100 text-green-800"
                            : training.status === "draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {training.status === "active"
                          ? "Active"
                          : training.status === "draft"
                          ? "Brouillon"
                          : "Archivée"}
                      </span>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
