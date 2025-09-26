"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, File, Plus, Edit, Trash2, Eye } from "lucide-react";
import { useState } from "react";

interface ContentItem {
  id: string;
  title: string;
  type: "video" | "document" | "quiz" | "assignment";
  trainingId: string;
  trainingTitle: string;
  order: number;
  duration?: string;
  size?: string;
  status: "published" | "draft" | "archived";
}

const mockContent: ContentItem[] = [
  {
    id: "1",
    title: "Introduction à React",
    type: "video",
    trainingId: "1",
    trainingTitle: "Introduction à React",
    order: 1,
    duration: "15:30",
    status: "published",
  },
  {
    id: "2",
    title: "Guide d'installation",
    type: "document",
    trainingId: "1",
    trainingTitle: "Introduction à React",
    order: 2,
    size: "2.5 MB",
    status: "published",
  },
  {
    id: "3",
    title: "Quiz - Les bases",
    type: "quiz",
    trainingId: "1",
    trainingTitle: "Introduction à React",
    order: 3,
    status: "published",
  },
  {
    id: "4",
    title: "Projet pratique",
    type: "assignment",
    trainingId: "1",
    trainingTitle: "Introduction à React",
    order: 4,
    status: "draft",
  },
];

export default function ContentManagementPage() {
  const [selectedTraining, setSelectedTraining] = useState<string>("all");
  const [content] = useState<ContentItem[]>(mockContent);

  const filteredContent =
    selectedTraining === "all"
      ? content
      : content.filter((item) => item.trainingId === selectedTraining);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-5 h-5 text-red-500" />;
      case "document":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "quiz":
        return <File className="w-5 h-5 text-green-500" />;
      case "assignment":
        return <File className="w-5 h-5 text-purple-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "Vidéo";
      case "document":
        return "Document";
      case "quiz":
        return "Quiz";
      case "assignment":
        return "Devoir";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestion du contenu
          </h1>
          <p className="text-gray-600 mt-2">
            Organisez et gérez le contenu de vos formations
          </p>
        </div>
        <Button className="bg-brand-blue text-white hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter du contenu
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total contenu</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{content.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vidéos</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {content.filter((item) => item.type === "video").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <File className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {content.filter((item) => item.type === "document").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brouillons</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {content.filter((item) => item.status === "draft").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contenu des formations</CardTitle>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTraining}
              onChange={(e) => setSelectedTraining(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="all">Toutes les formations</option>
              <option value="1">Introduction à React</option>
              <option value="2">Next.js Avancé</option>
              <option value="3">TypeScript pour les débutants</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {getTypeIcon(item.type)}
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.trainingTitle} • {getTypeLabel(item.type)} #
                      {item.order}
                    </p>
                    <div className="flex items-center space-x-4 mt-1">
                      {item.duration && (
                        <span className="text-xs text-gray-500">
                          Durée: {item.duration}
                        </span>
                      )}
                      {item.size && (
                        <span className="text-xs text-gray-500">
                          Taille: {item.size}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      item.status === "published"
                        ? "bg-green-100 text-green-800"
                        : item.status === "draft"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status === "published"
                      ? "Publié"
                      : item.status === "draft"
                      ? "Brouillon"
                      : "Archivé"}
                  </span>

                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
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
