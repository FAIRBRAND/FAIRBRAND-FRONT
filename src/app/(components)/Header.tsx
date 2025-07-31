"use client";

import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useI18n } from "../../../locales/client";
import LocaleSelect from "./LocaleSelect";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const params = useParams();
  const locale = params.locale as string;

  const t = useI18n();

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'careers', 'opportunities', 'success', 'steps'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("header.about"), id: "about" },
    { href: "#opportunities", label: t("header.careers"), id: "opportunities" },
    { href: "#success", label: t("header.privacy"), id: "success" },
    { href: "#steps", label: t("header.faqs"), id: "steps" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : ''}`}>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className={`header-curve-white relative overflow-hidden smooth-transition ${isScrolled ? 'bg-white/95' : ''}`}>
          <div className="width-full mx-5 px-8 py-8 text-center relative">
            <div className="flex items-center align-center justify-between">
              {/* Left */}
              <div className="flex items-center space-x-20 relative z-20">
                <div className="font-bold text-3xl text-gray-900 hover-scale smooth-transition cursor-pointer">
                  Fair-Brand
                </div>
                <nav className="flex items-center space-x-10">
                  {navLinks.map(({ href, label, id }) => (
                    <a
                      key={label}
                      href={href}
                      className={`text-gray-900 smooth-transition font-bold hover:text-[#3C3C8C] hover-lift relative ${activeSection === id ? 'text-[#3C3C8C]' : ''
                        }`}
                    >
                      {label}
                      {activeSection === id && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3C3C8C] animate-scale-in"></div>
                      )}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right */}
              <div className="flex justify-end items-center space-x-4 header-content-right">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black text-white hover:bg-gray-800 w-12 h-12 smooth-transition hover-lift"
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* Auth Button */}
                <Link href={`/${locale}/auth`}>
                  <Button className="bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] px-6 py-2 rounded-full smooth-transition hover-lift font-medium">
                    {t("header.authenticate")}
                  </Button>
                </Link>

                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full smooth-transition hover-lift font-medium">
                  {t("header.contactUs")}
                </Button>
                <LocaleSelect />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-100">
        <div className="mx-3 sm:mx-5 px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl sm:text-3xl text-gray-900">
              Fair-Brand
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black text-white hover:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              {/* Auth Button - Mobile */}
              <Link href={`/${locale}/auth`}>
                <Button className="hidden sm:flex bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm">
                  {t("header.authenticate")}
                </Button>
              </Link>

              <Button className="hidden sm:flex bg-black text-white hover:bg-gray-800 px-4 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-200 font-medium text-sm sm:text-base">
                {t("header.contactUs")}
              </Button>

              <div className="hidden sm:block">
                <LocaleSelect />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black text-white hover:bg-gray-800 w-10 h-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-4">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-200 space-y-4">
                {/* Auth Button - Mobile Menu */}
                <Link href={`/${locale}/auth`}>
                  <Button className="w-full bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] py-3 rounded-full transition-all duration-200 font-medium">
                    {t("header.authenticate")}
                  </Button>
                </Link>

                <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full transition-all duration-200 font-medium">
                  {t("header.contactUs")}
                </Button>
                <LocaleSelect />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
