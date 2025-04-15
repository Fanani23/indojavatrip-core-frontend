"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import CardList from "@/components/Cardlist"
import { getKategoriByLanguage } from "@/data/language/data-kategori"
import sectionFourLanguageData from "@/data/language/section-four"

interface SectionFourProps {
  language: "id" | "en" | "ms" | "zh"
}

// Define a proper type for the package object
interface Package {
  id: string | number
  title: string
  rating: number
  duration: string
  image: string
  // Add other properties that might be used elsewhere
}

export default function SectionFour({ language }: SectionFourProps) {
  const router = useRouter()

  // Data kategori berdasarkan bahasa
  const categories = getKategoriByLanguage(language)

  // Ambil paket dari kategori pertama (atau kategori lainnya jika diperlukan)
  const packages = categories.flatMap((category) => category.packages).slice(0, 8) // Ambil 8 paket pertama

  // Ambil teks berdasarkan bahasa
  const langData = sectionFourLanguageData[language]

  // Hitung tinggi minimum untuk judul
  const minTitleHeight = useMemo(() => {
    // Gunakan nilai tetap yang cukup untuk 2 baris teks
    // Ini lebih konsisten daripada menghitung berdasarkan panjang teks
    return 48 // Tinggi untuk 2 baris teks dengan line-height normal
  }, [])

  const handleCardClick = (pkg: Package) => {
    router.push(
      `/product?title=${encodeURIComponent(pkg.title)}&rating=${pkg.rating}&duration=${pkg.duration}&image=${pkg.image}`,
    )
  }

  const handleLearnMoreClick = () => {
    router.push("/all-package")
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-orange-500">{langData.title}</h2>
          <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-gray-500 mb-8">
            {langData.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} onClick={() => handleCardClick(pkg as Package)} className="cursor-pointer h-full">
              <CardList
                title={pkg.title}
                rating={pkg.rating}
                duration={pkg.duration}
                image={pkg.image}
                minTitleHeight={minTitleHeight}
              />
            </div>
          ))}
        </div>

        {/* Button Learn More */}
        <div className="text-center mt-8">
          <button
            onClick={handleLearnMoreClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            {langData.learnMore}
          </button>
        </div>
      </div>
    </section>
  )
}
