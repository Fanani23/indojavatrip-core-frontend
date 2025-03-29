import type React from "react"
import { ChevronRight } from "lucide-react"

interface CardPackageProps {
  destination: string
  days?: number
  nights?: number
  image: string
  aspectRatio: number
  language?: string // Add language prop
}

const CardPackage: React.FC<CardPackageProps> = ({
  destination,
  days,
  nights,
  image,
  aspectRatio,
  language = "id", // Default to Indonesian
}) => {
  // Translations for different languages
  const translations = {
    id: {
      hotDeal: "HOT DEAL",
      choosePackage: "Pilih Paket",
      days: "Hari",
      nights: "Malam",
    },
    en: {
      hotDeal: "HOT DEAL",
      choosePackage: "Choose Package",
      days: "Days",
      nights: "Nights",
    },
    ms: {
      hotDeal: "TAWARAN HEBAT",
      choosePackage: "Pilih Pakej",
      days: "Hari",
      nights: "Malam",
    },
    zh: {
      hotDeal: "热门优惠",
      choosePackage: "选择套餐",
      days: "天",
      nights: "晚",
    },
  }

  // Get the correct translations based on language
  const text = translations[language as keyof typeof translations] || translations.id

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full group">
      <div className="relative" style={{ paddingTop: `${aspectRatio * 100}%` }}>
        <img
          src={image || "/placeholder.svg"}
          alt={destination}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{destination}</h3>
          {days !== undefined && nights !== undefined && (
            <p className="text-white text-xs sm:text-sm">
              {days} {text.days} / {nights} {text.nights}
            </p>
          )}
        </div>
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">{text.hotDeal}</div>
      </div>
      <div className="p-4">
        <button className="flex items-center text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200">
          {text.choosePackage}
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  )
}

export default CardPackage

