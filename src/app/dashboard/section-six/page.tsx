"use client";

import { useState } from "react";
import Image from "next/image";

const ImageGallery = () => {
  const carouselSets = [
    {
      id: 1,
      mainImage: {
        url: "/Carosel-Pagesix/image2.jpg",
        alt: "Mountain jumping selfie",
      },
      sideImages: [
        { url: "/Carosel-Pagesix/image1.jpg", alt: "Group photo - Set 1" },
        { url: "/Carosel-Pagesix/image3.jpg", alt: "Mountain view - Set 1" },
        { url: "/Carosel-Pagesix/image4.jpg", alt: "Lake view - Set 1" },
        { url: "/Carosel-Pagesix/image5.jpg", alt: "Tree view - Set 1" },
      ],
    },
    {
      id: 2,
      mainImage: {
        url: "/Carosel-Pagesix/image6.png",
        alt: "Beautiful lake view",
      },
      sideImages: [
        { url: "/Carosel-Pagesix/image7.png", alt: "Group photo - Set 2" },
        { url: "/Carosel-Pagesix/image8.png", alt: "Mountain view - Set 2" },
        { url: "/Carosel-Pagesix/image9.png", alt: "Lake view - Set 2" },
        { url: "/Carosel-Pagesix/image10.png", alt: "Tree view - Set 2" },
      ],
    },
    {
      id: 3,
      mainImage: {
        url: "/Carosel-Pagesix/image11.png",
        alt: "Magnificent crater view",
      },
      sideImages: [
        { url: "/Carosel-Pagesix/image12.png", alt: "Group photo - Set 3" },
        { url: "/Carosel-Pagesix/image13.png", alt: "Mountain view - Set 3" },
        { url: "/Carosel-Pagesix/image14.png", alt: "Lake view - Set 3" },
        { url: "/Carosel-Pagesix/image15.png", alt: "Tree view - Set 3" },
      ],
    },
    {
      id: 4,
      mainImage: {
        url: "/Carosel-Pagesix/image16.png",
        alt: "Beautiful sunset view",
      },
      sideImages: [
        { url: "/Carosel-Pagesix/image17.png", alt: "Group photo - Set 4" },
        { url: "/Carosel-Pagesix/image18.png", alt: "Mountain view - Set 4" },
        { url: "/Carosel-Pagesix/image19.png", alt: "Lake view - Set 4" },
        { url: "/Carosel-Pagesix/image20.png", alt: "Tree view - Set 4" },
      ],
    },
    {
      id: 5,
      mainImage: {
        url: "/Carosel-Pagesix/image21.png",
        alt: "Group adventure selfie",
      },
      sideImages: [
        { url: "/Carosel-Pagesix/image22.png", alt: "Group photo - Set 5" },
        { url: "/Carosel-Pagesix/image23.png", alt: "Mountain view - Set 5" },
        { url: "/Carosel-Pagesix/image24.png", alt: "Lake view - Set 5" },
        { url: "/Carosel-Pagesix/image25.png", alt: "Tree view - Set 5" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title outside card - visible on mobile and tablet */}
        <h3 className="text-center text-xl font-bold mb-4 lg:hidden text-orange-400">
          Jelajahi tempat terindah
          <br />
          bersama kami
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left side - Main Image */}
          <div className="lg:col-span-5 xl:col-span-5 relative rounded-2xl overflow-hidden shadow-lg">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[832px]">
              {carouselSets.map((set, index) => (
                <div
                  key={set.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={set.mainImage.url || "/placeholder.svg"}
                    alt={set.mainImage.alt}
                    fill
                    className="object-cover"
                    priority={index === currentIndex}
                    sizes="(max-width: 1024px) 100vw, 564px"
                  />
                </div>
              ))}

              {/* Title and navigation inside card for desktop only */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black/70 to-transparent hidden lg:block">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  Jelajahi tempat terindah
                  <br />
                  bersama kami
                </h3>

                {/* Navigation thumbnails for desktop */}
                <div className="mt-3 md:mt-4 flex space-x-2 overflow-x-auto pb-2">
                  {carouselSets.map((set, index) => (
                    <button
                      key={set.id}
                      onClick={() => handleIndexClick(index)}
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-all ${
                        index === currentIndex
                          ? "border-white scale-105"
                          : "border-white/40"
                      }`}
                      aria-label={`View image set ${index + 1}`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={set.mainImage.url || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Grid of images */}
          <div className="lg:col-span-7 xl:col-span-7 mt-4 lg:mt-0">
            {/* Mobile and Tablet: Show only 2 images */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="rounded-xl overflow-hidden relative shadow-md h-48 sm:h-56 md:h-64">
                <Image
                  src={carouselSets[currentIndex].sideImages[0].url || "/placeholder.svg"}
                  alt={carouselSets[currentIndex].sideImages[0].alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 329px"
                />
              </div>
              <div className="rounded-xl overflow-hidden relative shadow-md h-48 sm:h-56 md:h-64">
                <Image
                  src={carouselSets[currentIndex].sideImages[1].url || "/placeholder.svg"}
                  alt={carouselSets[currentIndex].sideImages[1].alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 329px"
                />
              </div>
            </div>

            {/* Desktop: Show all 4 images in grid */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-4 md:gap-5">
              {/* First row */}
              <div className="rounded-xl overflow-hidden relative shadow-md h-60 md:h-80 lg:h-[400px]">
                <Image
                  src={carouselSets[currentIndex].sideImages[0].url || "/placeholder.svg"}
                  alt={carouselSets[currentIndex].sideImages[0].alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  sizes="(max-width: 1024px) 50vw, 329px"
                />
              </div>
              <div className="rounded-xl overflow-hidden relative shadow-md h-60 md:h-80 lg:h-[400px]">
                <Image
                  src={carouselSets[currentIndex].sideImages[1].url || "/placeholder.svg"}
                  alt={carouselSets[currentIndex].sideImages[1].alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  sizes="(max-width: 1024px) 50vw, 329px"
                />
              </div>

              {/* Second row */}
              <div className="rounded-xl overflow-hidden relative shadow-md h-60 md:h-80 lg:h-[400px]">
                <Image
                  src={carouselSets[currentIndex].sideImages[2].url || "/placeholder.svg"}
                  alt={carouselSets[currentIndex].sideImages[2].alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  sizes="(max-width: 1024px) 50vw, 329px"
                />
              </div>
              <div className="rounded-xl overflow-hidden relative shadow-md h-60 md:h-80 lg:h-[400px]">
                <Image
                  src={carouselSets[currentIndex].sideImages[3].url || "/placeholder.svg"}
                  alt={carouselSets[currentIndex].sideImages[3].alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  sizes="(max-width: 1024px) 50vw, 329px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation thumbnails - below cards on mobile and tablet */}
        <div className="mt-6 flex justify-center lg:hidden">
          <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2">
            {carouselSets.map((set, index) => (
              <button
                key={set.id}
                onClick={() => handleIndexClick(index)}
                className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-orange-500 scale-105"
                    : "border-gray-300"
                }`}
                aria-label={`View image set ${index + 1}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={set.mainImage.url || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* "Show more" button */}
        <div className="mt-12 sm:mt-14 md:mt-16 flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
            Tampilkan lebih banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;