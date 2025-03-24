"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardPackage from "@/components/Cardpackage";
import kategori from "@/data/kategori.json"; // Import kategori.json
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const HotPackagesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [totalSlides, setTotalSlides] = useState(0);
  const router = useRouter(); // Initialize useRouter

  // Handle window resize untuk responsif slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recalculate total slides ketika slidesToShow berubah
  useEffect(() => {
    const total = Math.ceil(kategori.length / slidesToShow);
    setTotalSlides(total);

    // Reset current slide jika out of bounds setelah resize
    if (currentSlide >= total) {
      setCurrentSlide(0);
    }
  }, [slidesToShow, kategori.length, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Handle card click untuk navigasi ke halaman all-package dengan kategori yang dipilih
  const handleCardClick = (category: string) => {
    router.push(`/all-package?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="w-full bg-orange-400 py-8 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 mt-4 md:mt-6">
          Kategori Paket Wisata
        </h2>
        <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-4 md:mb-8">
          Pilih kategori perjalanan Anda dan nikmati pengalaman yang tak terlupakan.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative px-4 sm:px-12 md:px-16">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg z-10 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-800" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden mx-4 sm:mx-0">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {kategori.map((cat) => (
              <div
                key={cat.id}
                className="flex-shrink-0 transition-all duration-500 ease-in-out px-2 cursor-pointer"
                style={{
                  width: `${100 / slidesToShow}%`,
                }}
                onClick={() => handleCardClick(cat.category)} // Navigate to all-package with category
              >
                <CardPackage
                  destination={cat.category}
                  image={cat.image}
                  days={cat.days}
                  nights={cat.nights}
                  aspectRatio={457 / 384} // Aspect ratio for the card
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg z-10 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-800" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-4" : "bg-white/40"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HotPackagesSection;