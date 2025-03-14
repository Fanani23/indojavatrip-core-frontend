"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const packageRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

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

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-10 w-10 md:h-16 md:w-16" />
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
            <a href="/" className="text-gray-700 hover:text-blue-500 transition-colors">
              Home
            </a>

            {/* Package Dropdown */}
            <div className="relative" ref={packageRef}>
              <button
                onClick={() => {
                  setIsPackageOpen(!isPackageOpen);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                aria-expanded={isPackageOpen}
              >
                Package
                <ChevronDown size={16} className={`ml-1 transition-transform ${isPackageOpen ? "rotate-180" : ""}`} />
              </button>
              {isPackageOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  <li>
                    <a
                      href="/package1"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Package 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/package2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Package 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/package3"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Package 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="/package4"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Package 4
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <a href="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">
              Contact
            </a>

            {/* Language Dropdown */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsPackageOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                aria-expanded={isLanguageOpen}
              >
                Language
                <ChevronDown size={16} className={`ml-1 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
              </button>
              {isLanguageOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  <li>
                    <button
                      onClick={() => {
                        alert("Switched to Indonesian");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Indonesia
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        alert("Switched to English");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        alert("Switched to Malaysian");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Malaysia
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        alert("Switched to Chinese");
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Chinese
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-2 border-t border-gray-200">
            <ul className="space-y-2">
              <li>
                <a href="/" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>

              <li>
                <div className="py-1">
                  <button
                    onClick={() => {
                      setIsPackageOpen(!isPackageOpen);
                      setIsLanguageOpen(false);
                    }}
                    className="flex items-center w-full py-1 text-gray-700 hover:text-blue-500 transition-colors"
                    aria-expanded={isPackageOpen}
                  >
                    Package
                    <ChevronDown size={16} className={`ml-1 transition-transform ${isPackageOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isPackageOpen && (
                    <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                      <li>
                        <a
                          href="/package1"
                          className="block py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Package 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="/package2"
                          className="block py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Package 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="/package3"
                          className="block py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Package 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="/package4"
                          className="block py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Package 4
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li>
                <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>

              <li>
                <div className="py-1">
                  <button
                    onClick={() => {
                      setIsLanguageOpen(!isLanguageOpen);
                      setIsPackageOpen(false);
                    }}
                    className="flex items-center w-full py-1 text-gray-700 hover:text-blue-500 transition-colors"
                    aria-expanded={isLanguageOpen}
                  >
                    Language
                    <ChevronDown size={16} className={`ml-1 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isLanguageOpen && (
                    <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                      <li>
                        <button
                          onClick={() => {
                            alert("Switched to Indonesian");
                            setIsLanguageOpen(false);
                          }}
                          className="block w-full text-left py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Indonesia
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            alert("Switched to English");
                            setIsLanguageOpen(false);
                          }}
                          className="block w-full text-left py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            alert("Switched to Malaysian");
                            setIsLanguageOpen(false);
                          }}
                          className="block w-full text-left py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Malaysia
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            alert("Switched to Chinese");
                            setIsLanguageOpen(false);
                          }}
                          className="block w-full text-left py-1 text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          Chinese
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}