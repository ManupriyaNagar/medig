"use client";
import { useState } from "react";

const categories = [
  "Hair Oils",
  "Top Picks - Hair Care",
  "Hair Essentials",
  "Hair Conditioners",
  "Shampoos & Conditioners",
  "Hair Serums",
  "Hair Creams & Masks",
  "Hair Colour",
  "Hair Sprays, Gels & Wax",
];

const brands = [
  "Aruba Essentials",
  "Khadi Pure Herbal",
  "Dabur",
  "WOW Skin Science",
  "Khadi Organique",
  "Herbal Canada",
  "Parachute",
  "Deemark",
  "Khadi Mauri Herbal",
];

const productTags = [
  "Scalp",
  "Dandruff",
  "Amla",
  "Nourishment",
  "Bhringraj",
  "Follicles",
  "Khadi",
  "Premature Greying",
  "Ayurvedic",
];

const trendingProducts = [
  {
    id: 1,
    title: "Scalpe+ Expert Anti Dandruff Shampoo",
    image: "/img8.png",
    rating: "4.3",
    reviews: 3616,
    price: 268,
    oldPrice: 335,
    offer: "20% off",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    title: "Bontress PRO+ Scalp Serum",
    image: "/img8.png",
    rating: "4.2",
    reviews: 262,
    price: 1305,
    oldPrice: 1500,
    offer: "13% off",
  },
  {
    id: 3,
    title: "Bare Anatomy Anti Frizz Shampoo",
     image: "/img8.png",
    rating: "4.6",
    reviews: 161,
    price: 539,
    oldPrice: 595,
    offer: "9% off",
  },
];

const allProducts = [
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
     image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
  {
    id: 5,
    title: "Mamaearth Onion Hair Oil",
    image: "/img8.png",
    rating: "4.2",
    reviews: 601,
    price: 381,
    oldPrice: 419,
    offer: "9% off",
  },
  {
    id: 6,
    title: "Dabur Amla Hair Oil",
    image: "/img8.png",     
    rating: "4.3",
    reviews: 206,
    price: 255,
    oldPrice: 340,
    offer: "25% off",
  },
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
      image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
    image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
     image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
     image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
      image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    title: "Parachute 100% Pure Coconut Hair Care Oil",
     image: "/img8.png",
    rating: "4.5",
    reviews: 1073,
    price: 314,
    oldPrice: 361,
    offer: "13% off",
    tag: "BEST SELLER",
  },
];

const HairOilPage = () => {
  const [sort, setSort] = useState("Relevance");

  return (
    <div className="container mx-auto flex px-6 py-8 gap-6">
      {/* Sidebar */}
      <aside className="w-64 hidden lg:block">
        <div className="mb-6">
          <h3 className="font-semibold mb-2">CATEGORIES</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            {categories.map((cat, i) => (
              <li key={i} className={i === 0 ? "text-red-500 font-medium" : ""}>
                {cat}
              </li>
            ))}
            <li className="text-blue-500 cursor-pointer">SHOW ALL</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">BRANDS</h3>
          <input
            type="text"
            placeholder="Search Brands"
            className="w-full border rounded px-2 py-1 text-sm mb-2"
          />
          <ul className="space-y-1 text-sm text-gray-600">
            {brands.map((brand, i) => (
              <li key={i}>{brand}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">PRODUCT TAGS</h3>
          <input
            type="text"
            placeholder="Search Product Tags"
            className="w-full border rounded px-2 py-1 text-sm mb-2"
          />
          <ul className="space-y-1 text-sm text-gray-600">
            {productTags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Trending */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Trending Hair care products</h2>
            <button className="text-red-500 font-semibold">SEE ALL</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {trendingProducts.map((p) => (
              <div key={p.id} className="border rounded-md p-4 relative">
                {p.tag && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                    {p.tag}
                  </span>
                )}
                <img src={p.image} alt={p.title} className="h-32 mx-auto" />
                <h3 className="text-sm font-medium mt-2">{p.title}</h3>
                <div className="flex items-center text-xs mt-1">
                  <span className="bg-green-600 text-white px-1 rounded mr-2">
                    {p.rating}★
                  </span>
                  <span className="text-gray-500">{p.reviews} ratings</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold">₹{p.price}</span>
                  {p.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through text-sm">
                      ₹{p.oldPrice}
                    </span>
                  )}
                  {p.offer && (
                    <span className="ml-2 text-green-600 text-sm">{p.offer}</span>
                  )}
                </div>
                <button className="text-red-500 font-semibold mt-2">ADD</button>
              </div>
            ))}
          </div>
        </section>

        {/* All Products */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">All Products</h2>
            <div className="text-sm">
              Sort By:{" "}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allProducts.map((p) => (
              <div key={p.id} className="border rounded-md p-4 relative">
                {p.tag && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                    {p.tag}
                  </span>
                )}
                <img src={p.image} alt={p.title} className="h-32 mx-auto" />
                <h3 className="text-sm font-medium mt-2">{p.title}</h3>
                <div className="flex items-center text-xs mt-1">
                  <span className="bg-green-600 text-white px-1 rounded mr-2">
                    {p.rating}★
                  </span>
                  <span className="text-gray-500">{p.reviews} ratings</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold">₹{p.price}</span>
                  {p.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through text-sm">
                      ₹{p.oldPrice}
                    </span>
                  )}
                  {p.offer && (
                    <span className="ml-2 text-green-600 text-sm">{p.offer}</span>
                  )}
                </div>
                <button className="text-red-500 font-semibold mt-2">ADD</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HairOilPage;
