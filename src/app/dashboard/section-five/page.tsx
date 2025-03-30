import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { sectionFiveData, SectionFiveContent, Feature } from "@/data/language/section-five";

const FiturUnggulan: React.FC<{ language: string }> = ({ language }) => {
  const data: SectionFiveContent = sectionFiveData[language] || sectionFiveData["id"]; // Fallback to Indonesian if language not found
  const [isVisible, setIsVisible] = useState(false); // Track if the section is visible
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef} // Attach the ref to the section
      className="bg-orange-400 text-foreground py-16"
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 text-center pb-10">
        {/* Judul Responsif */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 mt-4 md:mt-6 text-white"
          initial={{ y: -50, opacity: 0 }} // Start above and invisible
          animate={isVisible ? { y: 0, opacity: 1 } : {}} // Slide to original position and fade in
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          {data.title}
        </motion.h2>

        {/* Deskripsi Responsif */}
        <motion.p
          className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 text-white"
          initial={{ y: -50, opacity: 0 }} // Start above and invisible
          animate={isVisible ? { y: 0, opacity: 1 } : {}} // Slide to original position and fade in
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Smooth animation with delay
        >
          {data.description}
        </motion.p>

        {/* Grid Konten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 justify-items-center max-w-5xl mx-auto">
          {data.features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-full max-w-xs pt-10"
              initial={{ y: 50, opacity: 0 }} // Start below and invisible
              animate={isVisible ? { y: 0, opacity: 1 } : {}} // Slide to original position and fade in
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3 + index * 0.2, // Delay each card animation
              }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiturUnggulan;