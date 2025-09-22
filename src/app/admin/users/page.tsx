"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, MoreHorizontal, Edit, Trash2 } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joinDate: string;
  trainingsCompleted: number;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean@example.com",
    role: "Étudiant",
    status: "active",
    joinDate: "2024-01-15",
    trainingsCompleted: 5,
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie@example.com",
    role: "Formateur",
    status: "active",
    joinDate: "2024-02-20",
    trainingsCompleted: 12,
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "pierre@example.com",
    role: "Étudiant",
    status: "inactive",
    joinDate: "2024-03-10",
    trainingsCompleted: 2,
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users] = useState<User[]>(mockUsers);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestion des utilisateurs
          </h1>
          <p className="text-gray-600 mt-2">
            Gérez les utilisateurs de la plateforme
          </p>
        </div>
        <Button className="bg-brand-blue text-white hover:bg-blue-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Ajouter un utilisateur
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des utilisateurs</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un utilisateur..."
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
                    Nom
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Rôle
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Statut
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Formations terminées
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Date d&apos;inscription
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className=" hover:bg-gray-50">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status === "active" ? "Actif" : "Inactif"}
                      </span>
                    </td>
                    <td className="py-3 px-4">{user.trainingsCompleted}</td>
                    <td className="py-3 px-4">{user.joinDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
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
