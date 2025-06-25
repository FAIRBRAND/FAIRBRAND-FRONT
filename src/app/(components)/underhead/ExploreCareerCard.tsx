import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import SocialIcons from "./SocialIcons";
import { useI18n } from "../../../../locales/client";

export default function ExploreCareerCard() {
  const t = useI18n();

  return (
    <>
      <div className="flex-4 space-y-12" id="about">
        <div className="space-y-8">
          <h3 className="text-4xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            {t("exploreCareerCard.explore")} <br />
            <span className="text-white">{t("exploreCareerCard.career")}</span>
          </h3>

          <p className="text-2xl text-white font-bold leading-relaxed">
            {t("exploreCareerCard.ready")}
          </p>
        </div>

        <Button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 px-12 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-xl">
          {t("exploreCareerCard.exploreCareer")}
          <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
        <SocialIcons />
      </div>
    </>
  );
}
