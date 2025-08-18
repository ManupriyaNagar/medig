"use client";

import Image from "next/image";

export default function ProductCarousel({ heading, subheading, products }) {
  return (
    <section className="container mx-auto w-full px-6 py-8">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="text-gray-500 text-sm">{subheading}</p>
      </div>

      {/* Scrollable product list */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {products.map((product, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-white border rounded-lg shadow-sm hover:shadow-md transition p-3"
          >
            {/* Product Image */}
            <div className="w-full h-40 flex items-center justify-center">
              <Image
                src={product.img}
                alt={product.title}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <p className="text-sm font-medium mt-3 line-clamp-2">
              {product.title}
            </p>

            {/* Price section */}
            <div className="mt-2 text-sm">
              <p className="text-gray-400">
                MRP{" "}
                <span className="line-through">₹{product.mrp.toFixed(2)}</span>
              </p>
              <p className="font-semibold text-lg">
                ₹{product.price.toFixed(2)}{" "}
                <span className="text-red-500 text-sm font-medium">
                  ({product.discount}%)
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
