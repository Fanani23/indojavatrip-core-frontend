import React from "react";

const FiturUnggulan: React.FC = () => {
  return (
    <div
      className="bg-orange-400 text-foreground py-16"
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 text-center pb-10">
        {/* Judul Responsif */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold mb-8 pt-10 text-white">
          Fitur Unggulan Kami
        </h2>
        {/* Deskripsi Responsif */}
        <p className="text-base sm:text-lg md:text-[22px] font-medium mb-12 text-white max-w-3xl mx-auto">
          Semua fitur yang kamu butuhkan untuk belajar lebih cepat dan efisien—langsung 
          dalam genggaman tanganmu!
        </p>
        {/* Grid Konten - Modified to reduce spacing between cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 justify-items-center max-w-5xl mx-auto">
          {/* Card 1 - Repositioned circle */}
          <div className="relative flex flex-col items-center w-full max-w-xs pt-10">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
            >
              <span className="text-white text-2xl sm:text-3xl font-bold">1</span>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md w-full h-[380px] flex flex-col justify-center items-center z-0 relative">
              <div className="mb-6 flex justify-center mt-6">
                <img
                  src="/Herosection/Pesan.svg"
                  alt="Pemesanan Mudah"
                  className="h-20 w-20"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">
                  Pemesanan Mudah
                </h3>
                <p className="text-sm sm:text-base font-normal text-black">
                  Pemesan kami dapat disesuaikan dengan petualangan impian dan preferensi Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Repositioned circle */}
          <div className="relative flex flex-col items-center w-full max-w-xs pt-10">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
            >
              <span className="text-white text-2xl sm:text-3xl font-bold">2</span>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md w-full h-[380px] flex flex-col justify-center items-center z-0 relative">
              <div className="mb-6 flex justify-center mt-6">
                <img
                  src="/HeroSection/Harga.svg"
                  alt="Harga Terjangkau"
                  className="h-20 w-20"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">
                  Harga Terjangkau
                </h3>
                <p className="text-sm sm:text-base font-normal text-black">
                  Indojavatrip memastikan kliennya menikmati harga yang terjangkau dan dapat diakses.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Repositioned circle */}
          <div className="relative flex flex-col items-center w-full max-w-xs md:col-span-2 lg:col-span-1 pt-10">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
            >
              <span className="text-white text-2xl sm:text-3xl font-bold">3</span>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md w-full h-[380px] flex flex-col justify-center items-center z-0 relative">
              <div className="mb-6 flex justify-center mt-6">
                <img
                  src="/Herosection/tur.svg"
                  alt="Beragam Tur"
                  className="h-20 w-20"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">
                  Beragam Tur
                </h3>
                <p className="text-sm sm:text-base font-normal text-black">
                  Kami menawarkan beragam tur khusus bagi mereka yang mencintai perjalanan di Jawa Timur, Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturUnggulan;