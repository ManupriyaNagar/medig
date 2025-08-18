"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  { name: "Medicine", sub: "SAVE 23%",  img: "/img2.webp", color: "bg-blue-50" },
  { name: "Lab Tests", sub: "UPTO 70% OFF",  img: "/img1.webp", color: "bg-green-50" },
  { name: "Doctor Consult", sub: "", img: "/img2.webp", color: "bg-purple-50" },
  { name: "Healthcare", sub: "UPTO 60% OFF",  img: "/img1.webp", color: "bg-yellow-100" },
  { name: "Health Blogs", sub: "",  img: "/img2.webp", color: "bg-pink-50" },
  { name: "PLUS", sub: "SAVE 5% EXTRA",  img: "/img1.webp", color: "bg-indigo-50" },
  { name: "Offers", sub: "",  img: "/img2.webp", color: "bg-red-50" },
  { name: "Value Store", sub: "UPTO 50% OFF",  img: "/img2.webp", color: "bg-orange-50" },
];

export default function HomeCategories() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shop by Category</h2>
        <div className="flex gap-4 md:gap-6 overflow-x-auto py-4 px-2 scrollbar-hide">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center min-w-[100px] md:min-w-[120px] cursor-pointer transition-all duration-300 ease-in-out transform ${activeIndex === i ? 'scale-105' : 'hover:scale-105'}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`rounded-full p-4 mb-3 ${cat.color} shadow-sm transition-all duration-300 ${activeIndex === i ? 'shadow-md' : ''}`}>
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-800 text-center">{cat.name}</p>
              {cat.sub && (
                <p className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-1 rounded-full mt-1">{cat.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
