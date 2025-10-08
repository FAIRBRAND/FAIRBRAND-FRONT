import { Card } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export const CreditCardVisual = () => {
  return (
    <Card className="mb-6 p-6 bg-gradient-to-r from-primary to-brand-blue text-white rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">Carte bancaire</p>
          <p className="text-lg font-semibold">**** **** **** ****</p>
        </div>
        <CreditCard className="w-8 h-8" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-xs opacity-80">Titulaire</p>
          <p className="text-sm">Votre nom</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-80">Expiration</p>
          <p className="text-sm">MM/AA</p>
        </div>
      </div>
    </Card>
  );
};
