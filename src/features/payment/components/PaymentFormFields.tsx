"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CreditCard, Shield } from "lucide-react";
import { CreditCardVisual } from "./CreditCardVisual";

interface PaymentFormFieldsProps {
  onPaymentSuccess: (paymentMethod: any) => void;
  onPaymentError: (error: string) => void;
  price: string;
}

export const PaymentFormFields = ({
  onPaymentSuccess,
  onPaymentError,
  price,
}: PaymentFormFieldsProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
      onPaymentError(error.message || "Erreur de paiement");
      setLoading(false);
    } else {
      onPaymentSuccess(paymentMethod);
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 shadow-lg rounded-2xl bg-white border-0">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-primary">
        <CreditCard className="w-6 h-6 mr-3" />
        Informations de paiement
      </h2>

      <CreditCardVisual />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label
            htmlFor="card"
            className="text-base font-medium text-primary mb-2 block"
          >
            Détails de la carte
          </Label>
          <div className="border border-gray-200 rounded-xl p-4 mt-2 bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 shadow-sm">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#171c5e",
                    "::placeholder": { color: "#9ca3af" },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="flex items-center text-sm text-muted-foreground bg-green-50 p-4 rounded-xl border border-green-100">
          <Shield className="w-5 h-5 mr-3 text-green-600" />
          Paiement sécurisé par Stripe
        </div>

        <Button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-medium transition-all duration-200 rounded-xl shadow-lg hover:shadow-xl"
        >
          {loading ? "Traitement du paiement..." : `Payer ${price}`}
        </Button>
      </form>
    </Card>
  );
};
