"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });

    if (error) {
      setError(error.message || "Erreur de paiement");
      setLoading(false);
    } else {
      // TODO: Envoyer paymentMethod.id au backend
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto p-6 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold">Titre de la formation</h2>
        <p className="text-muted-foreground">Prix : 99,00 €</p>
        <div>
          <Label htmlFor="card">Informations carte bancaire</Label>
          <div className="border rounded p-2 mt-1">
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
          </div>
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" disabled={!stripe || loading} className="w-full">
          {loading ? "Paiement en cours..." : "Payer"}
        </Button>
      </form>
    </Card>
  );
};

export default PaymentForm;
