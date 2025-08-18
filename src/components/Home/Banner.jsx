"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const banners = [
  {
    img: "/img2.webp",
    alt: "Prohance",
    title: "Premium Health Supplements",
    subtitle: "Boost your immunity with our premium range",
    cta: "Shop Now",
    bgColor: "from-blue-500/20 to-indigo-500/20",
    textColor: "text-blue-900"
  },
  {
    img: "/img8.png",
    alt: "Doctor Consultation",
    title: "Expert Medical Consultation",
    subtitle: "Connect with certified healthcare professionals",
    cta: "Book Appointment",
    bgColor: "from-green-500/20 to-teal-500/20",
    textColor: "text-green-900"
  },
  {
    img: "/img4.webp",
    alt: "Cancer Medicines",
    title: "Specialized Treatments",
    subtitle: "Quality medicines at affordable prices",
    cta: "Explore",
    bgColor: "from-purple-500/20 to-pink-500/20",
    textColor: "text-purple-900"
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] mb-8 md:mb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-blue-200 opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-16 md:-right-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-indigo-200 opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 md:-bottom-20 left-1/3 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 rounded-full bg-purple-200 opacity-20"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main banner content */}
      <div className="container mx-auto h-full relative z-10">
        <div className="flex h-full items-center justify-center pt-4 md:pt-0">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-4 max-w-7xl">
            {/* Text content */}
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={`text-${currentSlide}`}
            >
              <motion.span 
                className={`inline-block px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4 ${banners[currentSlide].textColor} bg-white shadow-sm`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                MediGlucks Premium
              </motion.span>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {banners[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 text-sm md:text-lg mb-4 md:mb-8 max-w-xs md:max-w-none mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {banners[currentSlide].subtitle}
              </motion.p>
              
              <motion.button 
                className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {banners[currentSlide].cta}
              </motion.button>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              className="w-full md:w-1/2 relative mt-4 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={`image-${currentSlide}`}
            >
              <div className={`relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl bg-gradient-to-r ${banners[currentSlide].bgColor}`}>
                <Image
                  src={banners[currentSlide].img}
                  alt={banners[currentSlide].alt}
                  fill
                  className="object-contain p-4 transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white opacity-10"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-3 md:bottom-6 left-0 right-0 flex justify-center gap-1 md:gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 w-6 md:w-8' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}