"use client";

import { Clock, Wrench, Scale, User } from "lucide-react";
import { useI18n } from "../../../../locales/client";

export default function BenefitsCard() {
  const t = useI18n();

  const benefits = [
    {
      icon: Clock,
      text: t("benefitsCard.benefits.0"),
    },
    {
      icon: Wrench,
      text: t("benefitsCard.benefits.1"),
    },
    {
      icon: Scale,
      text: t("benefitsCard.benefits.2"),
    },
    {
      icon: User,
      text: t("benefitsCard.benefits.3"),
    },
  ];

  return (
    <section className="px-3 sm:px-4 md:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-100">
        <ul className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <li key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium break-words">
                  {benefit.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
