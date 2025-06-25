"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../../../../locales/client";

export default function UnlockPathSection() {
  const t = useI18n();
  return (
    <div className="space-y-8">
      <div className="space-y-6 text-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
          {t("unlockPathSection.title1")}
          <br />
          {t("unlockPathSection.title2")}
        </h2>

        <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
          {t("unlockPathSection.description")}
        </p>
      </div>

      <div className="pt-4 text-center">
        <Button className="bg-primary backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-12 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
          {t("unlockPathSection.buttonText")}
          <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
}
