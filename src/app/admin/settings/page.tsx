"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-gray-600 mt-2">
            Configurez votre plateforme d'apprentissage
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Paramètres généraux
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">Nom du site</Label>
              <Input id="siteName" defaultValue="FairBrand Academy" />
            </div>
            <div>
              <Label htmlFor="siteDescription">Description</Label>
              <Input
                id="siteDescription"
                defaultValue="Plateforme d'apprentissage en ligne"
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Email de contact</Label>
              <Input
                id="contactEmail"
                type="email"
                defaultValue="contact@fairbrand.com"
              />
            </div>
            <Button className="bg-brand-blue text-white hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paramètres de paiement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="stripeKey">Clé Stripe</Label>
              <Input id="stripeKey" type="password" placeholder="sk_test_..." />
            </div>
            <div>
              <Label htmlFor="currency">Devise par défaut</Label>
              <Input id="currency" defaultValue="EUR" />
            </div>
            <div>
              <Label htmlFor="taxRate">Taux de taxe (%)</Label>
              <Input id="taxRate" type="number" defaultValue="20" />
            </div>
            <Button className="bg-brand-blue text-white hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paramètres d'email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="smtpHost">Serveur SMTP</Label>
              <Input id="smtpHost" placeholder="smtp.gmail.com" />
            </div>
            <div>
              <Label htmlFor="smtpPort">Port SMTP</Label>
              <Input id="smtpPort" type="number" defaultValue="587" />
            </div>
            <div>
              <Label htmlFor="smtpUser">Utilisateur SMTP</Label>
              <Input id="smtpUser" type="email" />
            </div>
            <Button className="bg-brand-blue text-white hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Tester la connexion
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paramètres de sécurité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sessionTimeout">
                Timeout de session (minutes)
              </Label>
              <Input id="sessionTimeout" type="number" defaultValue="60" />
            </div>
            <div>
              <Label htmlFor="maxLoginAttempts">
                Tentatives de connexion max
              </Label>
              <Input id="maxLoginAttempts" type="number" defaultValue="5" />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="twoFactor" defaultChecked />
              <Label htmlFor="twoFactor">
                Authentification à deux facteurs
              </Label>
            </div>
            <Button className="bg-brand-blue text-white hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
