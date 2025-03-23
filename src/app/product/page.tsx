"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import productDetails from "@/data/productDetails.json"
import Header from "@/components/Header"
import Footer from "@/components/Footer" // Import Footer
import CardList from "@/components/Cardlist"
import packages from "@/data/listPaket.json"

export default function ProductPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const title = searchParams.get("title")
  const [activeTab, setActiveTab] = useState("hari1")

  // Find product details based on title
  const product = productDetails.find((item) => item.title === title)

  if (!product) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-48 pb-20">
          <div className="max-w-lg mx-auto bg-gradient-to-b from-orange-50 to-white rounded-xl shadow-sm p-8 text-center border border-orange-100">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Segera Hadir!</h2>
            <p className="text-gray-600 mb-6">
              Paket wisata ini sedang dalam persiapan dan akan segera tersedia. Hubungi kami untuk informasi lebih
              lanjut.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Hubungi via WhatsApp
              </a>

              <button
                onClick={() => router.push("/")}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="mt-20 mb-12">
            <div className="flex justify-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-orange-500">Paket Wisata Tersedia</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.slice(0, 4).map((pkg) => (
                <div
                  key={pkg.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/product?title=${encodeURIComponent(pkg.title)}`)}
                >
                  <CardList title={pkg.title} rating={pkg.rating} duration={pkg.duration} image={pkg.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Get top 4 popular packages excluding the current product
  const popularPackages = packages
    .filter((pkg) => pkg.title !== product.title) // Exclude the current product
    .slice(0, 4) // Limit to 4 cards

  // Helper function to render content based on active tab
  const renderTabContent = () => {
    if (activeTab === "termasuk" && product.includes) {
      return (
        <div className="p-6 bg-white rounded-md">
          <ul className="list-disc ml-6 space-y-2">
            {product.includes.map((item, index) => (
              <li key={index} className="text-gray-700 text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    } else if (activeTab === "tidakTermasuk" && product.excludes) {
      return (
        <div className="p-6 bg-white rounded-md">
          <ul className="list-disc ml-6 space-y-2">
            {product.excludes.map((item, index) => (
              <li key={index} className="text-gray-700 text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    } else if (activeTab.startsWith("hari") && product.itinerary) {
      const dayIndex = Number.parseInt(activeTab.replace("hari", "")) - 1

      if (product.itinerary[dayIndex]) {
        const day = product.itinerary[dayIndex]
        return (
          <div className="p-6 bg-white rounded-md">
            <div className="mb-6">
              <h3 className="font-bold text-lg md:text-2xl mb-4 text-orange-500">{day.day}</h3>
              <ul className="list-disc ml-6 space-y-2">
                {day.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-700 text-sm md:text-base">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {product.notes && activeTab === "hari1" && (
              <div className="mt-8 border-t pt-6">
                <h3 className="font-bold text-base md:text-xl mb-3 text-orange-500">Catatan:</h3>
                <ul className="list-none space-y-2">
                  {product.notes.map((note, index) => (
                    <li key={index} className="text-gray-700 text-sm md:text-base">
                      - {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      }
    }

    return <div className="p-6 bg-white rounded-md text-gray-700 text-sm md:text-base">Konten tidak tersedia.</div>
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="container mx-auto px-4 pt-20 md:pt-32 lg:pt-40 pb-12">
        {/* Product Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image (Sticky) */}
          <div className="lg:sticky lg:top-32 lg:self-start lg:max-height-[calc(100vh-8rem)]">
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
                {product.image ? (
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500 text-sm md:text-base">No image available</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight text-black">{product.title}</h1>
              <p className="text-lg md:text-2xl font-light text-gray-600">{product.type}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-lg md:text-2xl">
                    {star}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <p className="text-2xl md:text-4xl font-bold text-black">{product.price}</p>

            {/* Custom Trip */}
            <p className="text-base md:text-xl text-gray-700 leading-relaxed">{product.customTrip}</p>

            {/* Tabs */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {/* Dynamically create day tabs based on itinerary length */}
                {product.itinerary &&
                  product.itinerary.map((day, index) => (
                    <button
                      key={`hari${index + 1}`}
                      className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center justify-center border-2 text-xs md:text-sm font-medium transition-all
                        ${
                          activeTab === `hari${index + 1}`
                            ? "border-orange-500 bg-orange-500 text-white"
                            : "border-gray-200 hover:border-orange-300 text-gray-700"
                        }`}
                      onClick={() => setActiveTab(`hari${index + 1}`)}
                    >
                      Hari {index + 1}
                    </button>
                  ))}

                {product.includes && (
                  <button
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center justify-center border-2 text-xs md:text-sm font-medium transition-all
                      ${
                        activeTab === "termasuk"
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-gray-200 hover:border-orange-300 text-gray-700"
                      }`}
                    onClick={() => setActiveTab("termasuk")}
                  >
                    Termasuk
                  </button>
                )}

                {product.excludes && (
                  <button
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center justify-center border-2 text-xs md:text-sm font-medium transition-all
                      ${
                        activeTab === "tidakTermasuk"
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-gray-200 hover:border-orange-300 text-gray-700"
                      }`}
                    onClick={() => setActiveTab("tidakTermasuk")}
                  >
                    Tidak Termasuk
                  </button>
                )}
              </div>

              {/* Tab Content */}
              <div className="mt-4">{renderTabContent()}</div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded transition-colors">
                {product.book || "Pesan"}
              </button>
              <button className="px-4 md:px-6 py-3 md:py-4 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded text-base md:text-lg font-semibold transition-colors">
                {product.contact || "Hubungi Langsung"}
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mt-20 mb-12">
          {" "}
          {/* Menambahkan jarak atas dan bawah */}
          <div className="flex justify-start">
            {" "}
            {/* Membuat teks rata tengah tetapi di sisi kiri */}
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-orange-500 mb-12">
              Rekomendasi Lainnya
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="cursor-pointer"
                onClick={() => router.push(`/product?title=${encodeURIComponent(pkg.title)}`)}
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

