import React from "react";
import { sectionFiveData, SectionFiveContent, Feature } from "@/data/language/section-five";

const FiturUnggulan: React.FC<{ language: string }> = ({ language }) => {
  const data: SectionFiveContent = sectionFiveData[language] || sectionFiveData["id"]; // Fallback to Indonesian if language not found

  return (
    <div
      className="bg-orange-400 text-foreground py-16"
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 text-center pb-10">
        {/* Judul Responsif */}
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 mt-4 md:mt-6 text-white">
          {data.title}
        </h2>
        {/* Deskripsi Responsif */}
        <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 text-white">
          {data.description}
        </p>
        {/* Grid Konten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 justify-items-center max-w-5xl mx-auto">
          {data.features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full max-w-xs pt-10"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
              >
                <span className="text-white text-2xl sm:text-3xl font-bold">
                  {index + 1}
                </span>
              </div>
              <div className="bg-white p-6 rounded-[20px] shadow-md w-full h-[380px] flex flex-col justify-center items-center z-0 relative">
                <div className="mb-6 flex justify-center mt-6">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-20 w-20"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-black">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiturUnggulan;