"use client";

import Image from "next/image";

const labTests = [
  { name: "Full Body Checkups", img: "/img2.webp" },
  { name: "Vitamins",  img: "/img3.webp"  },
  { name: "Diabetes",  img: "/img4.webp" },
  { name: "Fever & Infection",  img: "/img5.webp"  },
  { name: "Hair & Skin Care", img: "/img1.webp"  },
  { name: "Thyroid",  img: "/img7.webp"  },
  { name: "Women Care",  img: "/img8.png"  },
];

export default function LabTests() {
  return (
    <section className="w-full px-6 py-8 container mx-auto">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Lab Tests by Health Concern</h2>
        <p className="text-sm text-gray-500">
          Powered by <span className="font-bold text-red-600">Thyrocare</span>
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {labTests.map((test, i) => (
          <div
            key={i}
            className="min-w-[150px] bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <Image
              src={test.img}
              alt={test.name}
              width={150}
              height={150}
              className="rounded-t-lg"
            />
            <p className="text-sm font-medium text-center py-2">{test.name}</p>
          </div>
        ))}
      </div>

      {/* Order with Prescription Box */}
      <div className="mt-8 bg-blue-50 rounded-lg shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left side */}
        <div className="flex items-start gap-4">
          <Image
            src="/prescription.png"
            alt="Prescription"
            width={50}
            height={50}
          />
          <div>
            <h3 className="font-semibold text-lg">Order with Prescription</h3>
            <p className="text-gray-600 text-sm">
              Upload prescription and we will deliver your medicines
            </p>
            <button className="mt-3 bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-green-700">
              Upload
            </button>
          </div>
        </div>

        {/* Right side (Steps) */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs h-fit">
              1
            </span>
            Upload a photo of your prescription
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs h-fit">
              2
            </span>
            Add delivery address and place the order
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs h-fit">
              3
            </span>
            We will call you to confirm the medicines
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs h-fit">
              4
            </span>
            Sit back! Medicines will be delivered at your doorstep
          </div>
        </div>
      </div>
    </section>
  );
}
