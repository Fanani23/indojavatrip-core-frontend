"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import kategori from "@/data/kategori.json"; // Import kategori.json
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi
import { headerLanguageData } from "@/data/language/header"; // Import data bahasa

interface HeaderProps {
  language: string;
  setLanguage: (newLanguage: string) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePackageOpen, setIsMobilePackageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const packageRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize useRouter

  const langData = headerLanguageData[language] || headerLanguageData["id"]; // Fallback to Indonesian if language not found

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (packageRef.current && !packageRef.current.contains(event.target as Node)) {
        setIsPackageOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navigation to all-package with selected category
  const handleCategoryClick = (category: string) => {
    router.push(`/all-package?category=${encodeURIComponent(category)}`);
    setIsPackageOpen(false); // Close the dropdown after navigation
    setIsMobilePackageOpen(false); // Close mobile dropdown
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Close mobile menu when clicking on a link
  const handleMobileNavigation = (url: string) => {
    router.push(url);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="h-10 w-10 md:h-16 md:w-16"
              onClick={() => router.push('/')} 
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              {langData.home}
            </a>

            {/* Package Dropdown */}
            <div className="relative" ref={packageRef}>
              <button
                onClick={() => {
                  setIsPackageOpen(!isPackageOpen);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                aria-expanded={isPackageOpen}
              >
                {langData.package}
                <ChevronDown size={16} className={`ml-1 transition-transform ${isPackageOpen ? "rotate-180" : ""}`} />
              </button>
              {isPackageOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  {kategori.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryClick(cat.category)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                      >
                        {cat.category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              {langData.contact}
            </a>

            {/* Language Dropdown */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsPackageOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                aria-expanded={isLanguageOpen}
              >
                {langData.language}
                <ChevronDown size={16} className={`ml-1 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
              </button>
              {isLanguageOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  <li>
                    <button
                      onClick={() => {
                        setLanguage("id");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                    >
                      Indonesia
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setLanguage("ms");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                    >
                      Malaysia
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setLanguage("zh");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                    >
                      Chinese
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavigation('/');
                }}
              >
                {langData.home}
              </a>

              {/* Mobile Package Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => {
                    setIsMobilePackageOpen(!isMobilePackageOpen);
                    setIsMobileLanguageOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 transition-colors py-2"
                  aria-expanded={isMobilePackageOpen}
                >
                  <span>{langData.package}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isMobilePackageOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobilePackageOpen && (
                  <ul className="mt-2 pl-4 border-l-2 border-gray-200">
                    {kategori.map((cat) => (
                      <li key={cat.id} className="py-2">
                        <button
                          onClick={() => handleCategoryClick(cat.category)}
                          className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                        >
                          {cat.category}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a
                href="/contact"
                className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavigation('/contact');
                }}
              >
                {langData.contact}
              </a>

              {/* Mobile Language Dropdown */}
              <div>
                <button
                  onClick={() => {
                    setIsMobileLanguageOpen(!isMobileLanguageOpen);
                    setIsMobilePackageOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 transition-colors py-2"
                  aria-expanded={isMobileLanguageOpen}
                >
                  <span>{langData.language}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isMobileLanguageOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileLanguageOpen && (
                  <ul className="mt-2 pl-4 border-l-2 border-gray-200">
                    <li className="py-2">
                      <button
                        onClick={() => {
                          setLanguage("id");
                          setIsMobileLanguageOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        Indonesia
                      </button>
                    </li>
                    <li className="py-2">
                      <button
                        onClick={() => {
                          setLanguage("en");
                          setIsMobileLanguageOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        English
                      </button>
                    </li>
                    <li className="py-2">
                      <button
                        onClick={() => {
                          setLanguage("ms");
                          setIsMobileLanguageOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        Malaysia
                      </button>
                    </li>
                    <li className="py-2">
                      <button
                        onClick={() => {
                          setLanguage("zh");
                          setIsMobileLanguageOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        Chinese
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}