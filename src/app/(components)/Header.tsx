"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "../../../locales/client";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useI18n();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-title font-bold text-off-white">
              FAIRBRAND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="font-body text-off-white hover:text-golden-beige transition-colors duration-300"
            >
              {t("new")}
            </Link>
            <Link
              href="/projets"
              className="font-body text-off-white hover:text-golden-beige transition-colors duration-300"
            >
              Projets
            </Link>
            <Link
              href="/contact"
              className="font-body text-off-white hover:text-golden-beige transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-off-white hover:text-golden-beige focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-golden-beige/20 pt-4">
            <Link
              href="/"
              className="block font-body text-off-white hover:text-golden-beige transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/projets"
              className="block font-body text-off-white hover:text-golden-beige transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="/contact"
              className="block font-body text-off-white hover:text-golden-beige transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
