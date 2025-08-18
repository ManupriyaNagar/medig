"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedProductHighlight() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div 
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden my-8 md:my-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 md:h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 md:h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* <svg className="absolute -left-16 top-1/4 text-blue-100 w-64 h-64 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.3,42.1C65.2,55,54.6,66.3,41.9,73.4C29.2,80.5,14.6,83.5,-0.9,85C-16.3,86.4,-32.6,86.4,-45.8,79.6C-59.1,72.8,-69.2,59.2,-76.4,44.7C-83.5,30.2,-87.7,15.1,-86.2,0.9C-84.7,-13.4,-77.4,-26.8,-69.1,-39.7C-60.8,-52.6,-51.4,-65,-39.7,-72.1C-28,-79.2,-14,-80.9,0.6,-81.9C15.1,-82.9,30.2,-83.2,44.7,-76.4Z" transform="translate(100 100)" />
        </svg> */}
        
        {/* <svg className="absolute -right-16 bottom-1/4 text-indigo-100 w-72 h-72 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-73.2C62.1,-65.3,74.5,-52.6,79.4,-37.8C84.3,-22.9,81.7,-5.9,76.8,8.9C71.9,23.7,64.8,36.2,54.6,46.6C44.4,57,31.1,65.3,16.3,70.5C1.6,75.8,-14.6,78.1,-30.2,74.3C-45.8,70.6,-60.8,60.8,-70.4,47.2C-80,33.5,-84.3,16.8,-83.2,0.6C-82.2,-15.5,-75.8,-31,-66.4,-44.1C-57,-57.2,-44.5,-67.9,-30.8,-75.5C-17.1,-83.1,-2.1,-87.7,11.8,-85.5C25.8,-83.3,33.3,-81.1,47.7,-73.2Z" transform="translate(100 100)" />
        </svg> */}
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          style={{ opacity, scale }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-blue-900">Premium Health Products</h2>
          <p className="text-base md:text-lg text-blue-700 max-w-2xl mx-auto px-2">Discover our carefully selected range of premium health products designed to enhance your wellbeing</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Product 1 */}
          <motion.div 
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 w-full md:w-1/3 relative z-10 border border-blue-100"
            style={{ y: y1 }}
          >
            <div className="bg-blue-50 rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6 flex justify-center">
              <Image 
                src="/img1.webp" 
                alt="Premium Supplement" 
                width={200} 
                height={200}
                className="object-contain h-32 md:h-48"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-blue-800">Immune Support Complex</h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Advanced formula with Vitamin C, D, Zinc and Elderberry</p>
            <div className="flex justify-between items-center">
              <span className="text-xl md:text-2xl font-bold text-blue-600">₹599</span>
              <motion.button 
                className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
            <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 bg-red-500 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full ">
              20% OFF
            </div>
          </motion.div>
          
          {/* Product 2 */}
          <motion.div 
            className="bg-white rounded-xl md:rounded-2xl  p-4 md:p-6 w-full md:w-1/3 relative z-20 border border-blue-100 mt-6 md:mt-12"
            style={{ y: y2 }}
          >
            <div className="bg-green-50 rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6 flex justify-center">
              <Image 
                src="/img1.webp" 
                alt="Ayurvedic Medicine" 
                width={200} 
                height={200}
                className="object-contain h-32 md:h-48"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-green-800">Ayurvedic Wellness Blend</h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Traditional herbs for natural immunity and vitality</p>
            <div className="flex justify-between items-center">
              <span className="text-xl md:text-2xl font-bold text-green-600">₹499</span>
              <motion.button 
                className="px-3 md:px-4 py-1.5 md:py-2 bg-green-600 text-white text-sm md:text-base rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
            <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 bg-green-500 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full ">
              NEW
            </div>
          </motion.div>
          
          {/* Product 3 */}
          <motion.div 
            className="bg-white rounded-xl md:rounded-2xl  p-4 md:p-6 w-full md:w-1/3 relative z-10 border border-blue-100 mt-6 md:mt-0"
            style={{ y: y3 }}
          >
            <div className="bg-purple-50 rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6 flex justify-center">
              <Image 
                src="/img1.webp" 
                alt="Protein Supplement" 
                width={200} 
                height={200}
                className="object-contain h-32 md:h-48"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-purple-800">Premium Protein Formula</h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">High-quality protein with essential amino acids</p>
            <div className="flex justify-between items-center">
              <span className="text-xl md:text-2xl font-bold text-purple-600">₹899</span>
              <motion.button 
                className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-600 text-white text-sm md:text-base rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
            <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 bg-blue-500 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg">
              BESTSELLER
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}