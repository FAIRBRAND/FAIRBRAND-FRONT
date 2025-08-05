"use client";

import { Search, Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useI18n } from "../../../locales/client";
import LocaleSelect from "./LocaleSelect";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "next-auth/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();
  const locale = params.locale as string;
  const { user, isAuthenticated } = useAuth();

  const t = useI18n();

  const navLinks = [
    { href: "#about", label: t("header.about") },
    { href: "#careers", label: t("header.careers") },
    { href: "#", label: t("header.privacy") },
    { href: "#", label: t("header.faqs") },
  ];

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="header-curve-white relative overflow-hidden">
          <div className="width-full mx-5 px-8 py-8 text-center relative">
            <div className="flex items-center align-center justify-between">
              {/* Left */}
              <div className="flex items-center space-x-20 relative z-20">
                <div className="font-bold text-3xl text-gray-900 hover-scale smooth-transition cursor-pointer">
                  Fair-Brand
                </div>
                <nav className="flex items-center space-x-10">
                  {navLinks.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="text-gray-900 smooth-transition font-bold hover:text-[#3C3C8C] hover-lift"
                    >
                      {label}
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

                {/* Auth Buttons */}
                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <Link href={`/${locale}/dashboard`}>
                      <Button className="bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] px-6 py-2 rounded-full smooth-transition hover-lift font-medium">
                        <User className="h-4 w-4 mr-2" />
                        {user?.firstName || "Dashboard"}
                      </Button>
                    </Link>
                    <Button
                      onClick={handleSignOut}
                      className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-full smooth-transition hover-lift font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Link href={`/${locale}/auth`}>
                    <Button className="bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] px-6 py-2 rounded-full smooth-transition hover-lift font-medium">
                      {t("header.authenticate")}
                    </Button>
                  </Link>
                )}

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
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Link href={`/${locale}/dashboard`}>
                    <Button className="hidden sm:flex bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {user?.firstName || "Dashboard"}
                    </Button>
                  </Link>
                  <Button
                    onClick={handleSignOut}
                    className="hidden sm:flex bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-full transition-all duration-200 font-medium text-sm"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Link href={`/${locale}/auth`}>
                  <Button className="hidden sm:flex bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm">
                    {t("header.authenticate")}
                  </Button>
                </Link>
              )}

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
                {/* Auth Buttons - Mobile Menu */}
                {isAuthenticated ? (
                  <>
                    <Link href={`/${locale}/dashboard`}>
                      <Button className="w-full bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] py-3 rounded-full transition-all duration-200 font-medium">
                        <User className="h-4 w-4 mr-2" />
                        {user?.firstName || "Dashboard"}
                      </Button>
                    </Link>
                    <Button
                      onClick={handleSignOut}
                      className="w-full bg-red-600 text-white hover:bg-red-700 py-3 rounded-full transition-all duration-200 font-medium"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Se déconnecter
                    </Button>
                  </>
                ) : (
                  <Link href={`/${locale}/auth`}>
                    <Button className="w-full bg-[#3C3C8C] text-white hover:bg-[#2A2A6B] py-3 rounded-full transition-all duration-200 font-medium">
                      {t("header.authenticate")}
                    </Button>
                  </Link>
                )}

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
