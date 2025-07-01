"use client";
import { useI18n } from "../../../../locales/client";
import { StepsSection as StepsSectionBase } from "@/components/StepsSection";

export default function StepsSection() {
    const t = useI18n();
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