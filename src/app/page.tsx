"use client"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import SectionTwo from "./dashboard/section-two/page"
import HotPackagesSection from "./dashboard/section-three/page"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [prevImage, setPrevImage] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const images = ["/Herosection/gunung.svg", "/Herosection/Pantai_dashboard.svg"]

  const goToNextImage = () => {
    if (transitioning) return

    const currentIdx = currentImage
    setPrevImage(currentIdx)
    setTransitioning(true)

    const nextIndex = (currentImage + 1) % images.length
    setCurrentImage(nextIndex)

    setTimeout(() => {
      setTransitioning(false)
    }, 600)
  }

  const goToPrevImage = () => {
    if (transitioning) return

    const currentIdx = currentImage
    setPrevImage(currentIdx)
    setTransitioning(true)

    const prevIndex = currentImage === 0 ? images.length - 1 : currentImage - 1
    setCurrentImage(prevIndex)

    setTimeout(() => {
      setTransitioning(false)
    }, 600)
  }

  // Auto transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImage, transitioning])

  return (
    <div className="min-h-screen bg-white">
      {/* Import Header */}
      <Header />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-4 pt-24 md:py-10 md:pt-36 lg:pt-48">

        {/* Hero Section Card */}
        <div className="relative w-full overflow-hidden rounded-xl md:rounded-3xl shadow-lg">
          {/* Image Slider */}
          <div className="relative aspect-[4/5] xs:aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9] w-full">
            {/* Current Image */}
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt={`Slide ${currentImage + 1}`}
              className={`absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 ease-in-out ${
                transitioning ? "z-10" : "z-20"
              }`}
            />

            {/* Previous Image (for dissolve effect) */}
            {transitioning && (
              <img
                src={images[prevImage] || "/placeholder.svg"}
                alt={`Previous slide`}
                className="absolute inset-0 w-full h-full object-cover scale-110 z-0"
              />
            )}

            {/* Content Overlay - Mobile First Design */}
            <div className="absolute inset-0 z-30 p-4 sm:p-6 md:p-12 flex flex-col justify-end md:justify-center">
              <div className="max-w-xl bg-black/30 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                  Selamat Datang di
                  <br className="hidden xs:block" />
                  <span className="text-orange-300 md:text-white"> Indojavatrip</span>
                </h1>
                <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-6 max-w-md">
                  Rasakan dunia seperti belum pernah sebelumnya dengan tur kami yang dirancang dengan cermat. Pilih
                  paket perjalanan Anda di sini dan nikmati petualangan Anda!
                </p>
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-medium px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-md transition-colors w-full md:w-auto md:max-w-[180px]">
                    Get Started
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm sm:text-base font-medium px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-md transition-colors hidden xs:block">
                    Explore Packages
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons - Modified to be at top right on mobile */}
            <div className="absolute top-4 right-4 sm:bottom-6 sm:right-6 sm:top-auto z-40 flex gap-2 md:gap-4">
              <button
                onClick={goToPrevImage}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-2 md:p-3 transition-colors"
                aria-label="Previous image"
                disabled={transitioning}
              >
                <ArrowLeft size={16} className="sm:hidden" />
                <ArrowLeft size={20} className="hidden sm:block" />
              </button>
              <button
                onClick={goToNextImage}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-2 md:p-3 transition-colors"
                aria-label="Next image"
                disabled={transitioning}
              >
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={20} className="hidden sm:block" />
              </button>
            </div>

            {/* Image Indicators (dots) */}
            <div className="absolute bottom-4 left-0 right-0 z-40 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!transitioning && index !== currentImage) {
                      setPrevImage(currentImage)
                      setCurrentImage(index)
                      setTransitioning(true)
                      setTimeout(() => setTransitioning(false), 600)
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    currentImage === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Hello World</h2>
</section> */}
<SectionTwo />
<HotPackagesSection />
    </div>
  )
}

