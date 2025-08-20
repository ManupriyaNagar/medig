"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MedicinePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // List of sections
  const sections = [
    "Product Introduction",
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
    "FAQs",
  ];

  // refs for sections
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.3 } // middle of screen
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="container mx-auto w-full bg-white h-screen flex">
      {/* LEFT SIDEBAR - Quick Navigation */}
      <aside className="w-1/4 overflow-y-auto border-r pr-4 sticky top-0 h-screen">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold text-lg mb-4"
        >
          Overview of Dolo 650 Tablet
        </motion.h2>
        <ul className="space-y-3 text-gray-700 text-sm">
          {sections.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-colors duration-200 ${
                activeSection === item ? "text-red-500 font-semibold" : "hover:text-red-500"
              }`}
              onClick={() => {
                sectionRefs.current[item]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-2/4 overflow-y-auto px-6 space-y-10 scroll-smooth">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-2"
        >
          Dolo 650 Tablet
        </motion.h1>
        <p className="text-sm text-gray-500 mb-4">MARKETER: Micro Labs Ltd</p>

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
              isImageZoomed ? "scale-150" : ""
            }`}
            onClick={() => setIsImageZoomed(!isImageZoomed)}
          />
        </motion.div>

        {/* Sections */}
        {sections.map((title, i) => (
          <section
            key={i}
            id={title}
            ref={(el) => (sectionRefs.current[title] = el)}
            className="py-10"
          >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. {title} content goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem, eaque velit neque doloremque officia eligendi culpa voluptatem odit praesentium possimus adipisci totam aperiam provident eius reiciendis esse labore repellendus reprehenderit perspiciatis voluptate at aliquam molestias. Obcaecati nulla non maiores!
            </p>
          </section>
        ))}
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
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white border rounded-lg p-4" > <h3 className="font-semibold mb-2">Delivery</h3> <p className="text-sm text-gray-600 mb-2"> Get in <span className="text-green-600 font-semibold">30 minutes</span> </p> <p className="text-xs text-gray-500"> Delivering to: <span className="font-medium">122019, Gurgaon</span> </p> </motion.div>
      </aside>
    </div>
  );
}
