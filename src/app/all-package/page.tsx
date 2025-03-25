"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardList from "@/components/Cardlist";
import { getKategoriByLanguage } from "@/data/language/data-kategori"; // Import fungsi untuk mendapatkan data kategori berdasarkan bahasa
import allPackageLanguageData from "@/data/language/all-package"; // Import data bahasa

// Definisi tipe untuk package
interface Package {
  id: string | number;
  title: string;
  rating: number;
  duration: string;
  image: string;
  [key: string]: any; // Untuk properti lain yang mungkin ada
}

// Definisi tipe untuk kategori
interface Category {
  category: string;
  packages: Package[];
}

export default function AllPackagesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Tambahkan state untuk bahasa, inisialisasi dari localStorage atau default ke "id"
  const [language, setLanguage] = useState<"id" | "en" | "ms" | "zh">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("selectedLanguage") as "id" | "en" | "ms" | "zh") || "id";
    }
    return "id"; // Default ke bahasa Indonesia
  });

  // Ambil teks berdasarkan bahasa yang dipilih
  const langData = allPackageLanguageData[language];

  // State untuk data kategori dan kategori yang dipilih
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // State untuk loading
  const [isLoading, setIsLoading] = useState(true);

  // Ambil kategori dari URL parameter
  const categoryParam = searchParams.get("category");

  // Ambil data kategori berdasarkan bahasa
  useEffect(() => {
    setIsLoading(true); // Set loading saat data sedang diambil
    const data = getKategoriByLanguage(language);
    setCategoriesData(data);

    // Set kategori yang dipilih berdasarkan URL parameter atau default ke "All Products"
    setSelectedCategory(categoryParam || langData.allProducts);

    setIsLoading(false); // Matikan loading setelah data selesai diambil
  }, [language, categoryParam, langData.allProducts]);

  // Effect untuk menyimpan bahasa ke localStorage saat bahasa berubah
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", language);
    }
  }, [language]);

  // Ambil daftar kategori dari data kategori
  const categories = categoriesData.map((cat) => cat.category);

  // Filter paket berdasarkan kategori yang dipilih
  const filteredPackages: Package[] =
    selectedCategory === langData.allProducts
      ? categoriesData.flatMap((cat) => cat.packages) // Semua paket
      : categoriesData.find((cat) => cat.category === selectedCategory)?.packages || []; // Paket berdasarkan kategori

  const handleCardClick = (pkg: Package) => {
    router.push(
      `/product?title=${encodeURIComponent(pkg.title)}&rating=${pkg.rating}&duration=${pkg.duration}&image=${pkg.image}`
    );
  };

  // Fungsi untuk menangani perubahan kategori
  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return; // Jangan lakukan apa-apa jika kategori sama

    setSelectedCategory(category);
    setIsDropdownOpen(false);

    // Update URL dengan kategori yang dipilih
    if (category === langData.allProducts) {
      router.replace(window.location.pathname); // Hapus parameter kategori
    } else {
      router.replace(`${window.location.pathname}?category=${encodeURIComponent(category)}`);
    }
  };

  // Handler khusus untuk tombol All Products
  const handleAllProductsClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Mencegah default behavior

    if (selectedCategory !== langData.allProducts) {
      setSelectedCategory(langData.allProducts);
      router.replace(window.location.pathname);
    }
  };

  // Pastikan halaman tidak glitch dengan menampilkan loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Berikan properti language dan setLanguage ke Header */}
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow pt-12 md:pt-16 lg:pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-orange-500 text-left">
              {selectedCategory}
            </h1>
          </div>

          <div className="flex justify-between items-center mb-6">
            {/* All Products Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleAllProductsClick}
                className={`border-2 ${
                  selectedCategory === langData.allProducts
                    ? "border-orange-500 text-orange-500 bg-white"
                    : "border-gray-300 text-gray-500"
                } rounded-full px-4 py-2 text-sm md:text-base font-medium hover:bg-orange-500 hover:text-white transition-colors`}
              >
                {langData.allProducts}
              </button>

              {/* Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-orange-500 text-white rounded-full px-4 py-2 text-sm md:text-base flex items-center gap-2 hover:bg-orange-600 transition-colors"
                >
                  {langData.category}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleCategoryChange(category)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedCategory === category
                              ? "bg-orange-500 text-white"
                              : "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                          } transition-colors`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-full mx-auto">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => handleCardClick(pkg)}
                  className="cursor-pointer"
                >
                  <CardList
                    title={pkg.title}
                    rating={pkg.rating}
                    duration={pkg.duration}
                    image={pkg.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-12">{langData.noData}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}