import Image from 'next/image';

export default function SectionTwo() {
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
            {/* <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold text-sm md:text-base">Travel Agencies</p>
              <p className="text-orange-500 text-sm md:text-base">Watch Video</p>
            </div> */}
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
            {/* <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold text-sm md:text-base">Destinasi Wisata Terbaik</p>
              <p className="text-gray-600 text-sm md:text-base">Bromo, Indonesia</p>
              <p className="text-orange-500 text-sm md:text-base">View More</p>
            </div> */}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center space-y-6 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Jelajahi <span className="text-orange-500">Keindahan Alam</span> yang Tak Terlupakan
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Nikmati pengalaman perjalanan terbaik dengan layanan wisata kami. Dari pemandangan matahari terbit di Gunung Bromo hingga menjelajahi pesona alam Gunung Rinjani, kami siap membawa Anda ke destinasi impian dengan layanan terbaik.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Hotel</h3>
                <p className="text-gray-600 text-sm md:text-base">Nikmati kenyamanan menginap dengan pilihan hotel terbaik.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Akomodasi</h3>
                <p className="text-gray-600 text-sm md:text-base">Perjalanan yang aman dan nyaman dengan layanan transportasi profesional.</p>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}