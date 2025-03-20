"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header" // Import Header
import Footer from "@/components/Footer" // Import Footer
import CardList from "@/components/Cardlist" // Import CardList
import packages from "@/data/listPaket.json" // Import data paket

export default function AllPackagesPage() {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State untuk mengontrol dropdown

  const categories = [
    "Jawa Timur 2H/1M",
    "Jawa Timur 3H/2M",
    "Jawa Timur 4H/3M",
    "Jawa Timur 5H/4M",
    "Jawa Timur 6H/5M",
    "Jawa Tengah",
    "Lombok",
    "Semeru",
    "Jawa Timur & Tengah",
  ]

  const handleCardClick = (pkg: any) => {
    router.push(
      `/product?title=${encodeURIComponent(pkg.title)}&rating=${pkg.rating}&duration=${pkg.duration}&image=${pkg.image}`,
    )
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {" "}
      {/* Menambahkan flex untuk tata letak */}
      <Header /> {/* Menambahkan Header */}
      <main className="flex-grow pt-12 md:pt-16 lg:pt-20">
        {" "}
        {/* Mengurangi jarak atas */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            {" "}
            {/* Mengurangi jarak bawah */}
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-orange-500 text-left">Products</h1>{" "}
            {/* Teks Products di kiri */}
          </div>

          <div className="flex justify-between items-center mb-6">
            {/* All Products Button */}
            <div className="flex items-center gap-4">
              <button className="border-2 border-orange-500 text-orange-500 bg-white rounded-full px-4 py-2 text-sm md:text-base font-medium hover:bg-orange-500 hover:text-white transition-colors">
                All Products
              </button>

              {/* Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
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
                          onClick={() => {
                            alert(`Selected: ${category}`) // Ganti dengan logika yang diinginkan
                            setIsDropdownOpen(false) // Tutup dropdown setelah memilih
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
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

          {/* Product grid - Keeping 4 columns with larger cards but no white boxes */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-full mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => handleCardClick(pkg)} // Navigasi ke halaman product
                className="cursor-pointer"
              >
                <CardList title={pkg.title} rating={pkg.rating} duration={pkg.duration} image={pkg.image} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer /> {/* Menambahkan Footer */}
    </div>
  )
}

