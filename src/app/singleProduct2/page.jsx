"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  "Uses and benefits",
  "Side effects",
  "How to use",
  "How drug works",
  "Safety advice",
  "Missed dose",
  "Alternate Brands",
  "Quick tips",
  "Fact box",
  "Interaction with drugs",
  "Patient concerns",
  "User feedback",
  "FAQs"
];

import { useEffect } from "react";

export default function MedicinePage() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto w-full bg-white h-screen flex">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-green-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* LEFT SIDEBAR - Quick Navigation */}
      <aside className="w-1/4 overflow-y-auto border-r pr-4 sticky top-0">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold text-lg mb-4"
        >
          Overview of Dolo 650 Tablet
        </motion.h2>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-3 text-gray-700 text-sm"
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`cursor-pointer transition-colors duration-200 ${
                selectedSection === item ? 'text-red-500 font-semibold' : 'hover:text-red-500'
              }`}
              onClick={() => setSelectedSection(item)}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </aside>
      
      {/* Image Modal */}
      {isImageZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Image
            src="/products/dolo650.png"
            alt="Dolo 650 Tablet"
            width={360}
            height={360}
            className="object-contain cursor-pointer"
            onClick={() => setIsImageZoomed(false)}
          />
        </div>
      )}
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-green-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Responsive Design */}
      <main className="w-full md:w-2/4 overflow-y-auto px-6">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-2"
        >
          Dolo 650 Tablet
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-500 mb-4"
        >
          MARKETER: Micro Labs Ltd
        </motion.p>
      </main>

      {/* MAIN CONTENT */}
      <main className="w-2/4 overflow-y-auto px-6">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-2"
        >
          Dolo 650 Tablet
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-500 mb-4"
        >
          MARKETER: Micro Labs Ltd
        </motion.p>

        {/* Image */}
        <motion.div 
          className="flex items-center justify-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/img8.png"
            alt="Dolo 650 Tablet"
            width={180}
            height={180}
            className={`object-contain cursor-pointer transition-transform duration-300 ${
              isImageZoomed ? 'scale-150' : ''
            }`}
            onClick={() => setIsImageZoomed(!isImageZoomed)}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Product Introduction */}
            <h2 className="text-lg font-semibold mb-2">Product Introduction</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Dolo 650 Tablet helps relieve pain and fever by blocking the release
              of certain chemical messengers responsible for fever and pain. It is
              used to treat headaches, migraine, toothaches, sore throats,
              period (menstrual) pains, arthritis, muscle aches, and the common
              cold.
            </p>

            {/* Uses */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <h2 className="text-lg font-semibold mb-2">Uses of Dolo 650 Tablet</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-700 text-sm">
                <li>Pain relief</li>
                <li>Treatment of Fever</li>
              </ul>
            </motion.div>

            {/* Side Effects */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <h2 className="text-lg font-semibold mb-2">Side Effects</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-700 text-sm">
                <li>Headache</li>
                <li>Constipation</li>
                <li>Itching</li>
                <li>Insomnia (difficulty sleeping)</li>
                <li>Nausea</li>
                <li>Vomiting</li>
              </ul>
            </motion.div>

            {/* How to Use */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <h2 className="text-lg font-semibold mb-2">How to Use</h2>
              <p className="text-gray-700 text-sm mb-6">
                Take this medicine in the dose and duration as advised by your
                doctor. Swallow it as a whole. Do not chew, crush or break it.
                Dolo 650 Tablet is to be taken with food.
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-1/4 overflow-y-auto border-l pl-4">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 border rounded-lg p-4 mb-4"
        >
          <p className="text-gray-500 text-sm line-through">MRP ₹34.5</p>
          <p className="text-2xl font-bold text-green-700">₹29.3</p>
          <p className="text-sm text-gray-500 mb-4">Inclusive of all taxes</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#71AA49] hover:bg-[#71AA49] text-white py-2 rounded-lg"
          >
            Add to Cart
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border rounded-lg p-4"
        >
          <h3 className="font-semibold mb-2">Delivery</h3>
          <p className="text-sm text-gray-600 mb-2">
            Get in <span className="text-green-600 font-semibold">30 minutes</span>
          </p>
          <p className="text-xs text-gray-500">
            Delivering to: <span className="font-medium">122019, Gurgaon</span>
          </p>
        </motion.div>
      </aside>
    </div>
  );
}
