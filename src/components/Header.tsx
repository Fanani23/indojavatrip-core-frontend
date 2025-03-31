"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { headerLanguageData } from "@/data/language/header";
import { AnimatePresence, motion } from "framer-motion";
import { getKategoriByLanguage } from "@/data/language/data-kategori";

interface HeaderProps {
  language: "id" | "en" | "ms" | "zh";
  setLanguage: (newLanguage: "id" | "en" | "ms" | "zh") => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePackageOpen, setIsMobilePackageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const packageRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const langData = headerLanguageData[language] || headerLanguageData["id"];
  const kategori = getKategoriByLanguage(language);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  useEffect(() => {
    if (isMobile) {
      // Di mobile, header selalu visible
      setIsVisible(true);
      return;
    }

    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Always show header when at top of page
        if (currentScrollY <= 0) {
          setIsVisible(true);
          setLastScrollY(currentScrollY);
          return;
        }

        // Hide header when scrolling down
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } 
        // Show header when scrolling up
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY, isMobile]);

  const handleCategoryClick = (category: string) => {
    router.push(`/all-package?category=${encodeURIComponent(category)}`);
    setIsPackageOpen(false);
    setIsMobilePackageOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: isMobile ? 0 : 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <motion.img
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-10 md:h-16 md:w-16"
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="/" 
              className="text-gray-700 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {langData.home}
            </motion.a>

            {/* Package Dropdown */}
            <div className="relative" ref={packageRef}>
              <motion.button
                onClick={() => {
                  setIsPackageOpen(!isPackageOpen);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                aria-expanded={isPackageOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {langData.package}
                <ChevronDown size={16} className={`ml-1 transition-transform ${isPackageOpen ? "rotate-180" : ""}`} />
              </motion.button>
              <AnimatePresence>
                {isPackageOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10"
                  >
                    {kategori.map((cat) => (
                      <motion.li
                        key={cat.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 * cat.id }}
                      >
                        <motion.button
                          onClick={() => handleCategoryClick(cat.category)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {cat.category}
                        </motion.button>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <motion.a 
              href="/contact" 
              className="text-gray-700 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {langData.contact}
            </motion.a>

            {/* Language Dropdown */}
            <div className="relative" ref={languageRef}>
              <motion.button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsPackageOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                aria-expanded={isLanguageOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {langData.language}
                <ChevronDown size={16} className={`ml-1 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
              </motion.button>
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10"
                  >
                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
                      <motion.button
                        onClick={() => setLanguage("id")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Indonesia
                      </motion.button>
                    </motion.li>
                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                      <motion.button
                        onClick={() => setLanguage("en")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        English
                      </motion.button>
                    </motion.li>
                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                      <motion.button
                        onClick={() => setLanguage("ms")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Malaysia
                      </motion.button>
                    </motion.li>
                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      <motion.button
                        onClick={() => setLanguage("zh")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Chinese
                      </motion.button>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
            >
              <nav className="flex flex-col space-y-4">
                <motion.a
                  href="/"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                    setIsMobileMenuOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {langData.home}
                </motion.a>

                {/* Mobile Package Dropdown */}
                <div className="border-b border-gray-100 pb-2">
                  <motion.button
                    onClick={() => {
                      setIsMobilePackageOpen(!isMobilePackageOpen);
                      setIsMobileLanguageOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 transition-colors py-2"
                    aria-expanded={isMobilePackageOpen}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{langData.package}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isMobilePackageOpen ? "rotate-180" : ""}`}
                    />
                  </motion.button>
                  <AnimatePresence>
                    {isMobilePackageOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 pl-4 border-l-2 border-gray-200"
                      >
                        {kategori.map((cat, index) => (
                          <motion.li
                            key={cat.id}
                            className="py-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * index }}
                          >
                            <motion.button
                              onClick={() => handleCategoryClick(cat.category)}
                              className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {cat.category}
                            </motion.button>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <motion.a
                  href="/contact"
                  className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {langData.contact}
                </motion.a>

                {/* Mobile Language Dropdown */}
                <div>
                  <motion.button
                    onClick={() => {
                      setIsMobileLanguageOpen(!isMobileLanguageOpen);
                      setIsMobilePackageOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 transition-colors py-2"
                    aria-expanded={isMobileLanguageOpen}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{langData.language}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isMobileLanguageOpen ? "rotate-180" : ""}`}
                    />
                  </motion.button>
                  <AnimatePresence>
                    {isMobileLanguageOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 pl-4 border-l-2 border-gray-200"
                      >
                        <motion.li
                          className="py-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 }}
                        >
                          <motion.button
                            onClick={() => {
                              setLanguage("id");
                              setIsMobileLanguageOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Indonesia
                          </motion.button>
                        </motion.li>
                        <motion.li
                          className="py-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <motion.button
                            onClick={() => {
                              setLanguage("en");
                              setIsMobileLanguageOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            English
                          </motion.button>
                        </motion.li>
                        <motion.li
                          className="py-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <motion.button
                            onClick={() => {
                              setLanguage("ms");
                              setIsMobileLanguageOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Malaysia
                          </motion.button>
                        </motion.li>
                        <motion.li
                          className="py-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <motion.button
                            onClick={() => {
                              setLanguage("zh");
                              setIsMobileLanguageOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left text-gray-700 hover:text-orange-500 transition-colors"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Chinese
                          </motion.button>
                        </motion.li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}