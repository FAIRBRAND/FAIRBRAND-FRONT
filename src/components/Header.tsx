'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">FAIRBRAND</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Accueil
                        </Link>
                        <Link href="/projets" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Projets
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
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
                    <div className="md:hidden mt-4 space-y-4">
                        <Link
                            href="/"
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/projets"
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projets
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
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