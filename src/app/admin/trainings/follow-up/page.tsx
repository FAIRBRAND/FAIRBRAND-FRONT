"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, CheckCircle, AlertCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TrainingProgress {
  id: string;
  trainingTitle: string;
  studentName: string;
  studentEmail: string;
  progress: number;
  lastActivity: string;
  status: "in_progress" | "completed" | "stalled";
  enrolledDate: string;
}

const mockProgress: TrainingProgress[] = [
  {
    id: "1",
    trainingTitle: "Introduction à React",
    studentName: "Jean Dupont",
    studentEmail: "jean@example.com",
    progress: 75,
    lastActivity: "2024-03-20",
    status: "in_progress",
    enrolledDate: "2024-03-01",
  },
  {
    id: "2",
    trainingTitle: "Next.js Avancé",
    studentName: "Marie Martin",
    studentEmail: "marie@example.com",
    progress: 100,
    lastActivity: "2024-03-18",
    status: "completed",
    enrolledDate: "2024-02-15",
  },
  {
    id: "3",
    trainingTitle: "TypeScript pour les débutants",
    studentName: "Pierre Durand",
    studentEmail: "pierre@example.com",
    progress: 25,
    lastActivity: "2024-03-10",
    status: "stalled",
    enrolledDate: "2024-03-05",
  },
];

export default function TrainingFollowUpPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [progress] = useState<TrainingProgress[]>(mockProgress);

  const filteredProgress = progress.filter(
    (item) =>
      item.trainingTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "in_progress":
        return "text-blue-600";
      case "stalled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "in_progress":
        return <Clock className="w-4 h-4" />;
      case "stalled":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Suivi des formations
          </h1>
          <p className="text-gray-600 mt-2">
            Suivez la progression des étudiants dans leurs formations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Étudiants actifs
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
              Formations terminées
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taux de completion moyen
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Étudiants en difficulté
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progression des étudiants</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un étudiant ou une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredProgress.map((item) => (
              <div key={item.id} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.trainingTitle}
                    </h3>
                    <p className="text-gray-600">
                      {item.studentName} • {item.studentEmail}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(item.status)}
                    <span
                      className={`text-sm font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status === "completed"
                        ? "Terminé"
                        : item.status === "in_progress"
                        ? "En cours"
                        : "En difficulté"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progression</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="w-full" />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500">
                    Inscrit le {item.enrolledDate} • Dernière activité:{" "}
                    {item.lastActivity}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Voir détails
                    </Button>
                    <Button variant="outline" size="sm">
                      Contacter
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
