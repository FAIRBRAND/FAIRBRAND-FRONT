"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../../../../locales/client";

export default function CareerSection() {
  const t = useI18n();
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left - Icon */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center">
              <div className="w-full h-full lg:w-32 lg:h-32 bg-black rounded-full flex items-center justify-center">
                {/* Spiral Icon */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-4 border-black rounded-full"></div>
                  <div className="absolute inset-2 border-4 border-white rounded-full"></div>
                  <div className="absolute inset-4 border-4 border-white rounded-full"></div>
                  <div className="absolute inset-6 border-4 border-white rounded-full"></div>
                  <div className="absolute inset-8 border-4 border-white rounded-full"></div>
                  <div className="absolute inset-10 border-4 border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block w-px h-96 bg-gray-300"></div>

          {/* Right */}
          <div className="flex-1 text-center lg:text-left space-y-6 px-5 py-5">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                {t("careerSection.title")}
                <br />
                {t("careerSection.title2")}
              </h2>

              <p className="text-xl lg:text-2xl font-semibold text-gray-800">
                {t("careerSection.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl">
                {t("careerSection.description")}
              </p>

              <div className="pt-4">
                <Button className="bg-antique-gold backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-12 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
                  {t("exploreCareerCard.exploreCareer")}
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
