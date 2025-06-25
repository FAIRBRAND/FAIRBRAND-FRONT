"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../../../../locales/client";

export default function UnlockPathSection() {
  const t = useI18n();

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
          {t("unlockPathSection.title1")}
          <br />
          {t("unlockPathSection.title2")}
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed px-2 sm:px-0">
          {t("unlockPathSection.description")}
        </p>
      </div>

      <div className="pt-2 sm:pt-4 text-center">
        <Button className="bg-primary backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
          {t("unlockPathSection.buttonText")}
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
}
