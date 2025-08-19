"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductPage({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto w-full px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`w-16 h-16 border rounded-lg overflow-hidden cursor-pointer ${
                  mainImage === img ? "border-red-500" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i}`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center border rounded-lg p-6">
            <Image
              src={mainImage}
              alt={product.title}
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-4">By {product.brand}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
              {product.rating} ★
            </span>
            <p className="text-gray-600 text-sm">
              {product.reviews} Ratings & {product.reviewCount} Reviews
            </p>
          </div>

          {/* Highlights */}
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            {product.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Price */}
          <div className="mb-4">
            <p className="text-2xl font-bold">
              ₹{product.price}{" "}
              <span className="text-gray-500 line-through text-lg ml-2">
                ₹{product.mrp}
              </span>
              <span className="text-green-600 font-semibold ml-2">
                {product.discount}% off
              </span>
            </p>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Add to Cart */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Ratings & Reviews */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Ratings & Reviews</h2>
        {product.customerReviews.map((rev, i) => (
          <div key={i} className="border-b py-4">
            <p className="font-medium">{rev.user}</p>
            <p className="text-sm text-yellow-500">{rev.rating} ★</p>
            <p className="text-gray-600 text-sm mt-1">{rev.comment}</p>
          </div>
        ))}
      </div>

      {/* Similar Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {product.similar.map((item, i) => (
            <div
              key={i}
              className="min-w-[180px] border rounded-lg p-3 text-center shadow-sm"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={120}
                className="mx-auto object-contain"
              />
              <p className="text-sm font-medium mt-2 line-clamp-2">
                {item.title}
              </p>
              <p className="text-red-500 font-semibold mt-1">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
