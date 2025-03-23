"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardList from "@/components/Cardlist";
import kategori from "@/data/kategori.json";

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
  
  // Mengambil kategori dari URL parameter atau default ke "All Products"
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "All Products"
  );

  // Ambil daftar kategori dari data kategori.json
  const categories = (kategori as Category[]).map((cat) => cat.category);

  // Effect untuk memperbarui selectedCategory ketika URL berubah
  useEffect(() => {
    if (categoryParam) {
      // Pastikan kategori yang ada di URL valid
      if (categories.includes(categoryParam) || categoryParam === "All Products") {
        setSelectedCategory(categoryParam);
      }
    } else {
      // Jika tidak ada categoryParam, pastikan selectedCategory adalah "All Products"
      setSelectedCategory("All Products");
    }
  }, [categoryParam, categories]);

  // Filter paket berdasarkan kategori yang dipilih
  const filteredPackages: Package[] =
    selectedCategory === "All Products"
      ? (kategori as Category[]).flatMap((cat) => cat.packages) // Semua paket
      : (kategori as Category[]).find((cat) => cat.category === selectedCategory)?.packages || []; // Paket berdasarkan kategori

  const handleCardClick = (pkg: Package) => {
    router.push(
      `/product?title=${encodeURIComponent(pkg.title)}&rating=${pkg.rating}&duration=${pkg.duration}&image=${pkg.image}`
    );
  };

  // Fungsi untuk menangani perubahan kategori
  const handleCategoryChange = (category: string) => {
    // Jika kategori yang sama diklik, jangan lakukan apa-apa
    if (category === selectedCategory) {
      return;
    }
    
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    
    // Update URL dengan kategori yang dipilih
    if (category === "All Products") {
      // Untuk All Products, hapus parameter dari URL
      router.replace(window.location.pathname);
    } else {
      // Untuk kategori lain, tambahkan parameter
      router.replace(`${window.location.pathname}?category=${encodeURIComponent(category)}`);
    }
  };

  // Handler khusus untuk tombol All Products
  const handleAllProductsClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Mencegah default behavior
    
    // Hanya lakukan navigasi jika kita belum berada di All Products
    if (selectedCategory !== "All Products") {
      setSelectedCategory("All Products");
      router.replace(window.location.pathname);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
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
                  selectedCategory === "All Products"
                    ? "border-orange-500 text-orange-500 bg-white"
                    : "border-gray-300 text-gray-500"
                } rounded-full px-4 py-2 text-sm md:text-base font-medium hover:bg-orange-500 hover:text-white transition-colors`}
              >
                All Products
              </button>

              {/* Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-orange-500 text-white rounded-full px-4 py-2 text-sm md:text-base flex items-center gap-2 hover:bg-orange-600 transition-colors"
                >
                  Kategori
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
            <p className="text-center text-gray-500 mt-12">Data tidak ditemukan</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}