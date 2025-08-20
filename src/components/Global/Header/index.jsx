"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navData from "@/data/navitem.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#71AA49] text-white text-center py-1 text-xs">
        <p className="text-[10px] md:text-xs">Free delivery on orders above ₹999 | Use code MEDI100 for 10% off on your first order</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-3 md:px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-green-600 flex items-center">
              <Image src="/logo.png" alt="MediGlucks" width={140} height={80} className="w-20 md:w-full mr-1 md:mr-2 h-auto" />
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for medicines, health products and more"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#71AA49] text-white p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="hidden md:flex items-center text-sm font-medium hover:text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Account
            </button>
            <button className="flex items-center text-xs md:text-sm font-medium hover:text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 w-4 md:w-5 mr-0.5 md:mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden xs:inline">Cart</span>
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search (visible on mobile only) */}
        <div className="mt-2 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search medicines & products"
              className="w-full py-1.5 md:py-2 px-3 md:px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-1 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="hidden md:block border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 md:space-x-8">
            {navData.menu.slice(0, 6).map((item, index) => (
              <li 
                key={index} 
                className="relative py-2 group"
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="text-xs md:text-sm font-medium hover:text-green-600 flex items-center">
                  {item.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4 ml-0.5 md:ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {activeCategory === index && (
                  <div className="absolute left-0 mt-2 w-48 md:w-60 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    <div className="p-3 md:p-4">
                      {item.subcategories.slice(0, 8).map((subcat, subIndex) => (
                        <div key={subIndex} className="mb-2">
                          {typeof subcat === 'string' ? (
                            <Link href="#" className="block text-xs md:text-sm hover:text-green-600">
                              {subcat}
                            </Link>
                          ) : (
                            <div>
                              <Link href="#" className="block text-xs md:text-sm font-medium hover:text-green-600">
                                {subcat.name}
                              </Link>
                              <div className="ml-2 md:ml-3 mt-1">
                                {subcat.items && subcat.items.slice(0, 4).map((item, itemIndex) => (
                                  <Link href="#" key={itemIndex} className="block text-[10px] md:text-xs text-gray-600 hover:text-green-600 mt-0.5 md:mt-1">
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg z-50">
          <div className="p-3">
            <ul className="space-y-3">
              {navData.menu.slice(0, 6).map((item, index) => (
                <li key={index}>
                  <button 
                    className="text-sm font-medium w-full text-left flex justify-between items-center"
                    onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                  >
                    {item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 md:h-4 w-3.5 md:w-4 transition-transform ${activeCategory === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeCategory === index && (
                    <div className="mt-1.5 md:mt-2 ml-3 md:ml-4 space-y-1.5 md:space-y-2">
                      {item.subcategories.slice(0, 5).map((subcat, subIndex) => (
                        <div key={subIndex} className="mb-1.5 md:mb-2">
                          {typeof subcat === 'string' ? (
                            <Link href="#" className="block text-xs md:text-sm text-gray-600">
                              {subcat}
                            </Link>
                          ) : (
                            <div>
                              <Link href="#" className="block text-xs md:text-sm font-medium">
                                {subcat.name}
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}