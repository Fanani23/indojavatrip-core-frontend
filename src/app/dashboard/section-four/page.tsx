import React from "react";
import CardList from "@/components/Cardlist";
import packages from "@/data/listPaket.json";

export default function SectionFour() {
  // Only display first 8 packages
  const displayedPackages = packages.slice(0, 8);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-orange-500">
            Paket Terpopuler
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 pb-6">
            Temukan destinasi yang tak terlupakan di Jawa Timur, Indonesia. Percayakan pada keahlian dan kualitas layanan kami yang tak tertandingi. Inilah sebabnya mengapa pelancong cerdas memilih Indojavatrip.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-12">
          {displayedPackages.map((pkg) => (
            <CardList
              key={pkg.id}
              title={pkg.title}
              rating={pkg.rating}
              duration={pkg.duration}
              image={pkg.image}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-md bg-orange-500 px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}