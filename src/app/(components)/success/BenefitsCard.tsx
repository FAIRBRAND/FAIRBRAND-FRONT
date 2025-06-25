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
    <section className="pr-3 pl-3">
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
        <ul className="space-y-6 lg:space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
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
