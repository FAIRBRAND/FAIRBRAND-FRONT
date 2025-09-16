"use client";
import StepCard from "./StepCard";
import ActionButton from "./ActionButton";
import ImageWithRoundedCorner from "./ImageWithRoundedCorner";
import { useTranslations } from "next-intl";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepsSectionProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  imageSrc: string;
  imageAlt: string;
  steps: Step[];
}

const StepsSectionBase: React.FC<StepsSectionProps> = ({
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
  imageSrc,
  imageAlt,
  steps,
}) => (
  <section className="w-full flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto py-8 px-2 md:px-8 gap-8">
    {/* Image au-dessus sur mobile, à gauche sur desktop */}
    <div className="w-full lg:w-1/2 flex justify-center items-end min-h-[220px] lg:min-h-[480px] mb-6 lg:mb-0">
      <ImageWithRoundedCorner
        src={imageSrc}
        alt={imageAlt}
        className="rounded-3xl w-full max-w-md h-[220px] sm:h-[320px] lg:h-[480px] object-cover shadow-2xl"
      />
    </div>
    {/* Contenu à droite ou dessous */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 relative z-10 items-center">
      {/* Bulle principale titre/slogan/bouton */}
      <div className="bg-[#3C3C8C] text-white rounded-[2.5rem] px-4 py-8 sm:px-8 sm:py-10 shadow-2xl flex flex-col items-center w-full max-w-2xl mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 text-center break-words w-full">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-2xl font-medium mb-6 text-white/90 text-center break-words w-full">
          {subtitle}
        </p>
        <div className="w-full flex justify-center">
          <ActionButton label={buttonLabel} onClick={onButtonClick} />
        </div>
      </div>
      {/* Steps en bulles séparées, centrées */}
      <div className="flex flex-col gap-6 w-full max-w-2xl items-center">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#3C3C8C] text-white rounded-[2.5rem] px-4 py-6 sm:px-8 shadow-xl flex items-center w-full"
          >
            <StepCard
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function StepsSection() {
  const t = useTranslations();
  const steps = [
    {
      number: "01",
      title: t("stepsSection.steps.0.title"),
      description: t("stepsSection.steps.0.description"),
    },
    {
      number: "02",
      title: t("stepsSection.steps.1.title"),
      description: t("stepsSection.steps.1.description"),
    },
    {
      number: "03",
      title: t("stepsSection.steps.2.title"),
      description: t("stepsSection.steps.2.description"),
    },
  ];
  return (
    <StepsSectionBase
      title={t("stepsSection.title")}
      subtitle={t("stepsSection.subtitle")}
      buttonLabel={t("stepsSection.button")}
      imageSrc="/homme.jpg"
      imageAlt={t("stepsSection.title")}
      steps={steps}
    />
  );
}
