import { Card } from "@/components/ui/card";

interface PaymentSummaryProps {
  title: string;
  description: string;
  price: string;
}

export const PaymentSummary = ({
  title,
  description,
  price,
}: PaymentSummaryProps) => {
  return (
    <Card className="mb-8 p-8 shadow-lg rounded-2xl bg-white border-0">
      <h2 className="text-xl font-semibold mb-6 text-primary">
        Récapitulatif de la commande
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-primary text-lg">{title}</p>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <p className="text-3xl font-bold text-antique-gold">{price}</p>
      </div>
    </Card>
  );
};
