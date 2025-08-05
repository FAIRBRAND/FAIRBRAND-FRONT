"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "../../../locales/client";

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Mail, label: "Email" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const t = useI18n();

  const locale = useCurrentLocale();
  const navLinks = [
    { href: "#about", label: t("footer.about") },
    { href: "#coaching", label: t("footer.coaching") },
    { href: "#testimonials", label: t("footer.testimonials") },
    { href: "#privacy", label: t("footer.privacy") },
    { href: "#blog", label: t("footer.blog") },
  ];

  const legalLinks = [
    { href: `/${locale}/confidential`, label: t("footer.confidentiality") },
    { href: `/${locale}/legal-page`, label: t("footer.terms") },
  ];

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium tracking-wide transform hover:scale-105 transition-transform duration-300">
            Fair-Brand LOGO
          </h2>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-5xl lg:text-4xl font-bold tracking-tight leading-tight mb-12 animate-fade-in">
            {t("footer.started")}
          </h3>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center pl-4 pr-2">
                <Mail className="h-5 w-5 text-gray-400 transition-colors duration-200" />
              </div>
              <Input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 border-0 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:scale-105">
                {t("footer.try")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Social Links */}
          <div className="flex items-center gap-4 bg-white rounded-full px-8 py-6 transform hover:scale-105 transition-transform duration-300">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className="text-black hover:text-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-black hover:bg-white transition-all duration-300 border border-white rounded-[1rem] px-7 py-2 hover:border-white/40 text-lg transform hover:scale-105 hover:shadow-lg"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal Links Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-6">
            {legalLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-6 sm:gap-8">
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm hover:underline underline-offset-4 transform hover:scale-105"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <div className="hidden sm:block w-px h-4 bg-white/30 opacity-50"></div>
                )}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-xs opacity-75 hover:opacity-100 transition-opacity duration-300">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}
