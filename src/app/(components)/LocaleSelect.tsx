"use client";
import { useChangeLocale, useCurrentLocale } from "../../../locales/client";

const locales = [
  { value: "en", flag: "🇺🇸", label: "EN" },
  { value: "fr", flag: "🇫🇷", label: "FR" },
];

export default function LocaleSelect() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      className="hidden md:flex items-center space-x-2 text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer appearance-none pr-8"
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
    >
      {locales.map(({ value, flag, label }) => (
        <option key={value} value={value}>
          {flag} {label}
        </option>
      ))}
    </select>
  );
}
