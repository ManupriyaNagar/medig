"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data
const topDeals = [
  {
    id: 1,
    title: "Wellbeing Nutrition Melts Into Vitamin D3 + K2",
    price: 649,
    mrp: 649,
    discount: null,
    rating: 4.3,
    reviews: 53,
    image: "/img8.png",
  },
  {
    id: 2,
    title: "Pure Nutrition Vitamin D3 + K2 For Immunity",
    price: 587,
    mrp: 599,
    discount: "2% off",
    rating: 3.6,
    reviews: 14,
    image: "/img8.png",
  },
  {
    id: 3,
    title: "Depura 60000 IU Vitamin D3 Oral Solution",
    price: 108,
    mrp: 115,
    discount: "6% off",
    rating: 4.5,
    reviews: 88,
   image: "/img8.png",
  },
  {
    id: 4,
    title: "Inlife Vitamin D3 5000 IU Softgels",
    price: 449,
    mrp: 799,
    discount: "44% off",
    rating: 4.4,
    reviews: 275,
    image: "/img8.png",
  },
];

const brands = [
  { id: 1, name: "INLIFE", logo: "/img8.png" },
  { id: 2, name: "DePURA", logo: "/img8.png" },
  { id: 3, name: "HealthKart", logo: "/img8.png" },
  { id: 4, name: "Tata 1mg", logo: "/img8.png" },
  { id: 5, name: "Carbamide Forte", logo: "/img8.png" },
];

export default function VitaminDPage() {
  const [dealIndex, setDealIndex] = useState(0);

  const nextDeal = () =>
    setDealIndex((prev) => (prev + 1) % topDeals.length);
  const prevDeal = () =>
    setDealIndex((prev) => (prev - 1 + topDeals.length) % topDeals.length);

  return (
    <div className="container mx-auto flex w-full">
      {/* Sidebar */}
      <aside className="w-64 p-4 border-r bg-white hidden lg:block">
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        <ul className="space-y-1 text-gray-700">
          <li className="cursor-pointer hover:text-black">Vitamin D</li>
          <li className="cursor-pointer">Vitamin B</li>
          <li className="cursor-pointer">Vitamin C</li>
        </ul>

        <h2 className="font-semibold text-lg mt-6 mb-2">Brands</h2>
        <input
          type="text"
          placeholder="Search Brands"
          className="w-full border rounded p-2 text-sm"
        />
        <ul className="space-y-1 mt-2 text-gray-700">
          <li>Tata 1mg (116)</li>
          <li>Inlife (69)</li>
          <li>Goodcalfort (9)</li>
        </ul>

        <h2 className="font-semibold text-lg mt-6 mb-2">Product Form</h2>
        <input
          type="text"
          placeholder="Search Form"
          className="w-full border rounded p-2 text-sm"
        />
        <ul className="space-y-1 mt-2 text-gray-700">
          <li>Tablet (540)</li>
          <li>Soft Gel (185)</li>
          <li>Bottle (80)</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Vitamin D</h1>

        {/* Top Deals */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold">Top Deals</h2>
            <button className="text-sm text-blue-600">See All</button>
          </div>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {topDeals.map((deal) => (
             <div
  key={deal.id}
  className="w-60 p-4 border rounded-2xl bg-white shadow-md flex-shrink-0 relative 
             hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
>
  {/* Discount Badge */}
  {deal.discount && (
    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
      {deal.discount}
    </span>
  )}

  {/* Product Image */}
  <img
    src={deal.image}
    alt={deal.title}
    className="h-32 w-full object-contain mb-3"
  />

  {/* Product Title */}
  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
    {deal.title}
  </h3>

  {/* Rating */}
  <p className="text-yellow-500 text-xs font-medium flex items-center gap-1 mb-2">
    ⭐ {deal.rating}
    <span className="text-gray-500">({deal.reviews})</span>
  </p>

  {/* Price */}
  <div className="text-sm mt-1">
    <span className="font-bold text-lg text-gray-800">₹{deal.price}</span>{" "}
    {deal.mrp !== deal.price && (
      <span className="text-gray-500 text-xs line-through ml-1">₹{deal.mrp}</span>
    )}
  </div>

  {/* Add Button */}
  <button className="w-full mt-3 py-2 text-sm bg-[#71AA49] hover:bg-[#5f8d3d] 
                     text-white rounded-lg font-medium transition-colors duration-200">
    ADD TO CART
  </button>
</div>

              ))}
            </div>
            {/* Arrows */}
            <button
              onClick={prevDeal}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextDeal}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </section>

        {/* Top Brands */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Top Brands</h2>
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="w-32 h-20 flex items-center justify-center border rounded-lg bg-white shadow-sm flex-shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold">All Products</h2>
            <select className="border p-2 rounded text-sm">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topDeals.concat(topDeals).map((product) => (
              <div
                key={product.id + "-all"}
                className="p-4 border rounded-lg bg-white shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-full object-contain mb-3"
                />
                <h3 className="text-sm font-medium line-clamp-2 mb-1">
                  {product.title}
                </h3>
                <p className="text-green-600 text-xs font-semibold">
                  {product.rating} ★ ({product.reviews})
                </p>
                <div className="text-sm mt-2">
                  <span className="font-bold">₹{product.price}</span>{" "}
                  {product.discount && (
                    <span className="text-gray-500 text-xs line-through ml-1">
                      ₹{product.mrp}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <p className="text-green-600 text-xs">{product.discount}</p>
                )}
                <button className="w-full mt-2 py-1 text-sm bg-[#71AA49] text-white rounded">
                  ADD
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
