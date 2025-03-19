"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import productDetails from "@/data/productDetails.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Import Footer
import CardList from "@/components/Cardlist";
import packages from "@/data/listPaket.json";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get("title");
  const [activeTab, setActiveTab] = useState("hari1");

  // Find product details based on title
  const product = productDetails.find((item) => item.title === title);

  if (!product) {
    return <div className="text-center py-20 text-xl font-medium">Produk tidak ditemukan.</div>;
  }

  // Get top 4 popular packages excluding the current product
  const popularPackages = packages
    .filter((pkg) => pkg.title !== product.title) // Exclude the current product
    .slice(0, 4); // Limit to 4 cards

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
      );
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
      );
    } else if (activeTab.startsWith("hari") && product.itinerary) {
      const dayIndex = Number.parseInt(activeTab.replace("hari", "")) - 1;

      if (product.itinerary[dayIndex]) {
        const day = product.itinerary[dayIndex];
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
        );
      }
    }

    return <div className="p-6 bg-white rounded-md text-gray-700 text-sm md:text-base">Konten tidak tersedia.</div>;
  };

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
        <div className="mt-20 mb-12"> {/* Menambahkan jarak atas dan bawah */}
          <div className="flex justify-start"> {/* Membuat teks rata tengah tetapi di sisi kiri */}
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
                <CardList
                  title={pkg.title}
                  rating={pkg.rating}
                  duration={pkg.duration}
                  image={pkg.image}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer /> {/* Menambahkan Footer */}
    </div>
  );
}