"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../../../../locales/client";

export default function CareerSection() {
  const t = useI18n();

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
          {/* Left - Icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 flex items-center justify-center">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative">
                {/* Spiral Icon - Responsive */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-2 sm:border-4 border-black rounded-full"></div>
                  <div className="absolute inset-1 sm:inset-2 border-2 sm:border-4 border-white rounded-full"></div>
                  <div className="absolute inset-2 sm:inset-4 border-2 sm:border-4 border-white rounded-full"></div>
                  <div className="absolute inset-3 sm:inset-6 border-2 sm:border-4 border-white rounded-full"></div>
                  <div className="absolute inset-4 sm:inset-8 border-2 sm:border-4 border-white rounded-full"></div>
                  <div className="hidden sm:block absolute inset-10 border-4 border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block w-px h-64 xl:h-96 bg-gray-300"></div>

          {/* Right */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 px-2 sm:px-4 lg:px-5 py-2 sm:py-4 lg:py-5">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                {t("careerSection.title")}
                <br />
                {t("careerSection.title2")}
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                {t("careerSection.subtitle")}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl break-words">
                {t("careerSection.description")}
              </p>

              <div className="pt-2 sm:pt-4">
                <Button className="bg-antique-gold backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
                  {t("careerSection.button")}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
