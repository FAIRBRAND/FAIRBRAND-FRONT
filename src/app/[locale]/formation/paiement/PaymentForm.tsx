"use client";
import { useState } from "react";
import { PaymentHeader } from "@/features/payment/components/PaymentHeader";
import { PaymentSummary } from "@/features/payment/components/PaymentSummary";
import { PaymentFormFields } from "@/features/payment/components/PaymentFormFields";

const PaymentForm = () => {
  const [error, setError] = useState<string | null>(null);

  const handlePaymentSuccess = (paymentMethod: any) => {
    console.log("Paiement réussi ! Objet de paiement :", paymentMethod);
    // TODO: Envoyer paymentMethod.id au backend
    alert("Paiement réussi ! Vérifiez la console pour les détails.");
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <div className="min-h-screen bg-off-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <PaymentHeader title="Paiement de la formation" />

        <PaymentSummary
          title="Titre de la formation"
          description="Formation complète en ligne"
          price="99,00 €"
        />

        <PaymentFormFields
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentError={handlePaymentError}
          price="99,00 €"
        />

        {error && (
          <div className="mt-4 text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-200">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
