import Image from "next/image";
import { sectionTwoData, SectionTwoContent } from "@/data/language/section-two";

export default function SectionTwo({ language }: { language: string }) {
  const data: SectionTwoContent = sectionTwoData[language] || sectionTwoData["id"]; // Fallback to Indonesian if language not found

  return (
    <div className="bg-white py-12 pt-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Images with improved positioning */}
        <div className="relative">
          {/* First image (Mountain) - Top left */}
          <div className="relative w-[85%] sm:w-[75%] lg:w-[70%] max-w-[400px] mx-0 md:mx-auto lg:mx-0">
            <Image
              src="/Herosection/gunung2.png"
              alt="Gunung Bromo"
              width={400}
              height={280}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>

          {/* Second image (Jeep) - Bottom right with greater offset */}
          <div className="relative w-[85%] sm:w-[75%] lg:w-[70%] max-w-[400px] mt-[-40px] sm:mt-[-60px] lg:mt-[-80px] ml-[15%] sm:ml-[25%] lg:ml-[30%]">
            <Image
              src="/Herosection/gunung3.png"
              alt="Transportasi Wisata"
              width={400}
              height={280}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center space-y-6 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {data.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">{data.description}</p>
          <div className="space-y-4">
            {/* Hotel Section */}
            <div className="flex items-center space-x-4">
              <img
                src="/Herosection/iconHotel.svg"
                alt="Hotel Icon"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {data.hotel.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {data.hotel.description}
                </p>
              </div>
            </div>

            {/* Accommodation Section */}
            <div className="flex items-center space-x-4">
              <img
                src="/Herosection/iconAkomodasi.svg"
                alt="Akomodasi Icon"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {data.accommodation.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {data.accommodation.description}
                </p>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors w-full sm:w-auto">
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
}