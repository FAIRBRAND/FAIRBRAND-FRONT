import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface PaymentHeaderProps {
  title: string;
}

export const PaymentHeader = ({ title }: PaymentHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center text-primary hover:text-primary/80 transition-colors rounded-xl p-2 hover:bg-white"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour
      </button>

      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        {title}
      </h1>
    </>
  );
};
