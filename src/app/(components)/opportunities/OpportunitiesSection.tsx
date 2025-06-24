"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../../../../locales/client";

export default function OpportunitiesSection() {
  const t = useI18n();

  const painPoints = [
    t("opportunitiesSection.painPoints.0"),
    t("opportunitiesSection.painPoints.1"),
    t("opportunitiesSection.painPoints.2"),
    t("opportunitiesSection.painPoints.3"),
    t("opportunitiesSection.painPoints.4"),
    t("opportunitiesSection.painPoints.5"),
    t("opportunitiesSection.painPoints.6"),
    t("opportunitiesSection.painPoints.7"),
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-primary rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  {t("opportunitiesSection.title")}
                  <br />
                  {t("opportunitiesSection.title2")}
                  <br />
                  {t("opportunitiesSection.title3")}
                </h2>

                <p className="text-xl lg:text-2xl font-medium leading-relaxed opacity-90">
                  {t("opportunitiesSection.subtitle")}
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group"
                  size="lg"
                >
                  {t("opportunitiesSection.buttonText")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-white">
              <ul className="space-y-4 lg:space-y-6">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-3"></div>
                    <p className="text-base lg:text-lg leading-relaxed opacity-90">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
