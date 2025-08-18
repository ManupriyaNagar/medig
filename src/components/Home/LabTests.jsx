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
    <section className="w-full px-4 md:px-6 py-6 md:py-8 container mx-auto">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-1 sm:gap-0">
        <h2 className="text-lg md:text-xl font-semibold">Lab Tests by Health Concern</h2>
        <p className="text-xs md:text-sm text-gray-500">
          Powered by <span className="font-bold text-red-600">Thyrocare</span>
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
        {labTests.map((test, i) => (
          <div
            key={i}
            className="min-w-[120px] sm:min-w-[140px] md:min-w-[150px] bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <Image
              src={test.img}
              alt={test.name}
              width={150}
              height={150}
              className="rounded-t-lg w-full h-auto"
            />
            <p className="text-xs sm:text-sm font-medium text-center py-2">{test.name}</p>
          </div>
        ))}
      </div>

      {/* Order with Prescription Box */}
      <div className="mt-6 md:mt-8 bg-blue-50 rounded-lg shadow-sm p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
        {/* Left side */}
        <div className="flex items-start gap-3 md:gap-4">
          <Image
            src="/prescription.png"
            alt="Prescription"
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <div>
            <h3 className="font-semibold text-base md:text-lg">Order with Prescription</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Upload prescription and we will deliver your medicines
            </p>
            <button className="mt-2 md:mt-3 bg-green-600 text-white px-4 md:px-5 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-green-700">
              Upload
            </button>
          </div>
        </div>

        {/* Right side (Steps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-gray-700 mt-4 md:mt-0">
          <div className="flex gap-2 items-start">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs h-fit min-w-[20px] text-center">
              1
            </span>
            <span>Upload a photo of your prescription</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs h-fit min-w-[20px] text-center">
              2
            </span>
            <span>Add delivery address and place the order</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs h-fit min-w-[20px] text-center">
              3
            </span>
            <span>We will call you to confirm the medicines</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs h-fit min-w-[20px] text-center">
              4
            </span>
            <span>Sit back! Medicines will be delivered at your doorstep</span>
          </div>
        </div>
      </div>
    </section>
  );
}
