"use client";

import Image from "next/image";

export default function MedicinePage() {
  return (
    <div className="container mx-auto w-full bg-white h-screen flex">
      {/* LEFT SIDEBAR */}
      <aside className="w-1/4 overflow-y-auto border-r pr-4">
        <h2 className="font-semibold text-lg mb-4">Overview of Dolo 650 Tablet</h2>
        <ul className="space-y-3 text-gray-700 text-sm">
          <li className="cursor-pointer hover:text-red-500">Uses and benefits</li>
          <li className="cursor-pointer hover:text-red-500">Side effects</li>
          <li className="cursor-pointer hover:text-red-500">How to use</li>
          <li className="cursor-pointer hover:text-red-500">How drug works</li>
          <li className="cursor-pointer hover:text-red-500">Safety advice</li>
          <li className="cursor-pointer hover:text-red-500">Missed dose</li>
          <li className="cursor-pointer hover:text-red-500">Alternate Brands</li>
          <li className="cursor-pointer hover:text-red-500">Quick tips</li>
          <li className="cursor-pointer hover:text-red-500">Fact box</li>
          <li className="cursor-pointer hover:text-red-500">Interaction with drugs</li>
          <li className="cursor-pointer hover:text-red-500">Patient concerns</li>
          <li className="cursor-pointer hover:text-red-500">User feedback</li>
          <li className="cursor-pointer hover:text-red-500">FAQs</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-2/4 overflow-y-auto px-6">
        <h1 className="text-2xl font-bold mb-2">Dolo 650 Tablet</h1>
        <p className="text-sm text-gray-500 mb-4">MARKETER: Micro Labs Ltd</p>

        {/* Image */}
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/products/dolo650.png"
            alt="Dolo 650 Tablet"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

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
        <h2 className="text-lg font-semibold mb-2">Uses of Dolo 650 Tablet</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700 text-sm">
          <li>Pain relief</li>
          <li>Treatment of Fever</li>
        </ul>

        {/* Side Effects */}
        <h2 className="text-lg font-semibold mb-2">Side Effects</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700 text-sm">
          <li>Headache</li>
          <li>Constipation</li>
          <li>Itching</li>
          <li>Insomnia (difficulty sleeping)</li>
          <li>Nausea</li>
          <li>Vomiting</li>
        </ul>

        {/* How to Use */}
        <h2 className="text-lg font-semibold mb-2">How to Use</h2>
        <p className="text-gray-700 text-sm mb-6">
          Take this medicine in the dose and duration as advised by your
          doctor. Swallow it as a whole. Do not chew, crush or break it.
          Dolo 650 Tablet is to be taken with food.
        </p>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-1/4 overflow-y-auto border-l pl-4">
        <div className="bg-gray-50 border rounded-lg p-4 mb-4">
          <p className="text-gray-500 text-sm line-through">MRP ₹34.5</p>
          <p className="text-2xl font-bold text-green-700">₹29.3</p>
          <p className="text-sm text-gray-500 mb-4">Inclusive of all taxes</p>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
            Add to Cart
          </button>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Delivery</h3>
          <p className="text-sm text-gray-600 mb-2">
            Get in <span className="text-green-600 font-semibold">30 minutes</span>
          </p>
          <p className="text-xs text-gray-500">
            Delivering to: <span className="font-medium">122019, Gurgaon</span>
          </p>
        </div>
      </aside>
    </div>
  );
}
