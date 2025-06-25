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
    <section
      className="space-y-8 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-10"
      id="careers"
    >
      <div className="space-y-6">
        <div className="bg-primary rounded-3xl py-8 px-3 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 text-center">
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

              <div className="text-center">
                <Button className="mx-auto bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-10 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
                  {t("opportunitiesSection.buttonText")}
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-white">
              <ul className="space-y-4 lg:space-y-6">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4 px-8">
                    <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-3"></div>
                    <p className="lg:text-lg leading-relaxed opacity-90">
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
