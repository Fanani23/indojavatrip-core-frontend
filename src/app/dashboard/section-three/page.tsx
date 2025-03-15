"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TourPackage {
  id: number
  destination: string
  days: number
  nights: number
  image: string
}

const HotPackagesSection: React.FC = () => {
  const packages: TourPackage[] = [
    {
      id: 1,
      destination: "Jawa Timur",
      days: 2,
      nights: 1,
      image: "/Herosection/gunungtest.png",
    },
    {
      id: 2,
      destination: "Jawa Timur",
      days: 3,
      nights: 2,
      image: "/Herosection/gunungtest.png",
    },
    {
      id: 3,
      destination: "Jawa Timur",
      days: 4,
      nights: 3,
      image: "/Herosection/gunungtest.png",
    },
    {
      id: 4,
      destination: "Bali",
      days: 3,
      nights: 2,
      image: "/images/bali.jpg",
    },
    {
      id: 5,
      destination: "Lombok",
      days: 4,
      nights: 3,
      image: "/images/lombok.jpg",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [totalSlides, setTotalSlides] = useState(0)

  // Handle window resize for responsive slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Recalculate total slides when slidesToShow changes
  useEffect(() => {
    // Calculate total number of full slides needed
    setTotalSlides(Math.ceil(packages.length / slidesToShow))
    
    // Reset current slide if it's out of bounds after resize
    if (currentSlide >= Math.ceil(packages.length / slidesToShow)) {
      setCurrentSlide(0)
    }
  }, [slidesToShow, packages.length, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Get visible packages based on current slide and slidesToShow
  const getVisiblePackages = () => {
    const startIndex = currentSlide * slidesToShow
    const endIndex = Math.min(startIndex + slidesToShow, packages.length)
    return packages.slice(startIndex, endIndex)
  }

  // Calculate card aspect ratio based on 384x457
  const aspectRatio = 457 / 384

  return (
    <section className="w-full bg-orange-400 py-8 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Hot Packages</h2>
        <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Establishments that offer lodging facilities to travelers, including hotels, resorts, motels, bed and
          breakfasts, and vacation rentals, transportation options such as rental cars, taxis, buses, cruises, and other
          modes of travel.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative px-4 sm:px-12 md:px-16">
        {/* Left Arrow Button - Fixed vertical centering */}
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
              transform: slidesToShow === 1 
                ? `translateX(-${currentSlide * 100}%)` 
                : `translateX(-${currentSlide * (100 / slidesToShow) * slidesToShow}%)`,
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-shrink-0 transition-all duration-500 ease-in-out px-2"
                style={{
                  width: slidesToShow === 1 
                    ? "100%" 
                    : `${100 / slidesToShow}%`,
                }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full group">
                  <div className="relative" style={{ paddingTop: `${aspectRatio * 100}%` }}>
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.destination}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{pkg.destination}</h3>
                      <p className="text-white text-xs sm:text-sm">
                        {pkg.days} Hari / {pkg.nights} Malam
                      </p>
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
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button - Fixed vertical centering */}
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
  )
}

export default HotPackagesSection