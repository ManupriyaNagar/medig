"use client";

import Image from "next/image";

const brands = [
  { name: "Himalaya", logo: "/img1.webp" },
  { name: "Dabur", logo: "/img2.webp" },
  { name: "Patanjali", logo: "/img3.webp" },
  { name: "Dr. Reddy's", logo: "/img4.webp" },
  { name: "Cipla", logo: "/img5.webp" },
  { name: "Sun Pharma", logo: "/img6.webp" },
  { name: "Abbott", logo: "/img7.webp" },
  { name: "Zydus", logo: "/img1.webp" },
];

export default function FeaturedBrands() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">Featured Brands</h2>
          <p className="text-gray-600 text-sm md:text-base">Trusted healthcare brands we partner with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-3 md:p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative h-12 md:h-16 w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Brand Categories */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6">Shop by Brand Category</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 md:p-5 border-b">
                <h4 className="font-semibold text-base md:text-lg">Ayurvedic Brands</h4>
                <p className="text-gray-600 text-sm mt-1">Traditional healing wisdom</p>
              </div>
              <div className="p-4 md:p-5">
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-center text-gray-700 hover:text-green-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Himalaya
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Dabur
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Patanjali
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Baidyanath
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 md:p-5 border-b">
                <h4 className="font-semibold text-base md:text-lg">Pharmaceutical Giants</h4>
                <p className="text-gray-600 text-sm mt-1">Leading medical research</p>
              </div>
              <div className="p-4 md:p-5">
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-center text-gray-700 hover:text-green-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Sun Pharma
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Cipla
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Dr. Reddy's
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Zydus
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-5 border-b">
                <h4 className="font-semibold text-lg">International Brands</h4>
                <p className="text-gray-600 text-sm mt-1">Global healthcare leaders</p>
              </div>
              <div className="p-5">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Abbott
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    GSK
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Pfizer
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Johnson & Johnson
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}