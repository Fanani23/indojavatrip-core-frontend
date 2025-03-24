import React from "react";
import { ChevronRight } from "lucide-react";

interface CardPackageProps {
  destination: string;
  days?: number;
  nights?: number;
  image: string;
  aspectRatio: number;
}

const CardPackage: React.FC<CardPackageProps> = ({ destination, days, nights, image, aspectRatio }) => {
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
              {days} Hari / {nights} Malam
            </p>
          )}
        </div>
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          HOT DEAL
        </div>
      </div>
      <div className="p-4">
        <button className="flex items-center text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200">
          Pilih Paket
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CardPackage;