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
        <p className="text-base sm:text-lg md:text-[22px] font-medium mb-12 text-white">
          Semua fitur yang kamu butuhkan untuk belajar lebih cepat dan efisien—langsung <br />
          dalam genggaman tanganmu!
        </p>
        {/* Grid Konten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center">
            <div
              className="w-20 sm:w-24 h-20 sm:h-24 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 sm:top-3 sm:left-4 left-1/2 transform sm:translate-x-0 -translate-x-1/2 z-10"
            >
              <span className="text-white text-2xl sm:text-4xl font-bold">1</span>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md w-[362px] h-[418px] flex flex-col justify-center items-center mx-auto mt-14 z-0 relative">
              <div className="mb-6 flex justify-center">
                <img
                  src="/Herosection/Pesan.svg"
                  alt="Pemesanan Mudah"
                  className="h-24 sm:h-28 w-24 sm:w-28"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-black mb-2">
                  Pemesanan Mudah
                </h3>
                <p className="text-base sm:text-lg md:text-[16px] font-normal text-black">
                  Pemesan kami dapat disesuaikan dengan petualangan impian dan preferensi Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center">
            <div
              className="w-20 sm:w-24 h-20 sm:h-24 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 sm:top-3 sm:left-4 left-1/2 transform sm:translate-x-0 -translate-x-1/2 z-10"
            >
              <span className="text-white text-2xl sm:text-4xl font-bold">2</span>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md w-[362px] h-[418px] flex flex-col justify-center items-center mx-auto mt-14 z-0 relative">
              <div className="mb-6 flex justify-center">
                <img
                  src="/HeroSection/Harga.svg"
                  alt="Harga Terjangkau"
                  className="h-24 sm:h-28 w-24 sm:w-28"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-black mb-2">
                  Harga Terjangkau
                </h3>
                <p className="text-base sm:text-lg md:text-[16px] font-normal text-black">
                  Indojavatrip memastikan kliennya menikmati harga yang terjangkau dan dapat diakses.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center">
            <div
              className="w-20 sm:w-24 h-20 sm:h-24 bg-[#C14600] rounded-full flex items-center justify-center absolute top-0 sm:top-3 sm:left-4 left-1/2 transform sm:translate-x-0 -translate-x-1/2 z-10"
            >
              <span className="text-white text-2xl sm:text-4xl font-bold">3</span>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md w-[362px] h-[418px] flex flex-col justify-center items-center mx-auto mt-14 z-0 relative">
              <div className="mb-6 flex justify-center">
                <img
                  src="/Herosection/tur.svg"
                  alt="Beragam Tur"
                  className="h-24 sm:h-28 w-24 sm:w-28"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium text-black mb-2">
                  Beragam Tur
                </h3>
                <p className="text-base sm:text-lg md:text-[16px] font-normal text-black">
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
