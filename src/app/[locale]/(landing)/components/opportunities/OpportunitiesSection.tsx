"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OpportunitiesSection() {
  const t = useTranslations();

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
      className="space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8 md:py-10"
      id="careers"
    >
      <div>
        <div className="bg-primary rounded-2xl sm:rounded-3xl py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center w-full max-w-7xl">
            {/* Left Content */}
            <div className="text-white space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  {t("opportunitiesSection.title")}
                  <br />
                  {t("opportunitiesSection.title2")}
                  <br />
                  {t("opportunitiesSection.title3")}
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-90">
                  {t("opportunitiesSection.subtitle")}
                </p>
              </div>

              <div className="pt-2 sm:pt-4">
                <Button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
                  {t("opportunitiesSection.buttonText")}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-white">
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {painPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 px-2 sm:px-3 md:px-4"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-2 sm:mt-2.5 md:mt-3"></div>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90 break-words">
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
