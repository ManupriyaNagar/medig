"use client";
import { Upload } from "lucide-react";

export default function PrescriptionOrder() {
  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-[#052e3b] to-[#0a4a5a] text-white px-6 md:px-20 py-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">
              Order via Prescription
            </h2>
            <p className="text-gray-300">
              Upload prescription and we will do the rest for you!
            </p>
            <p className="text-lg font-medium flex items-center space-x-2">
              <span className="text-yellow-400">1 Lakh</span>
              <span>users prefer this method</span>
            </p>
            {/* Icons row */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                <span>📋</span>
                <p>Licensed Pharmacists</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                <span>💊</span>
                <p>Genuine medicines</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                <span>📞</span>
                <p>Secure calls</p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="mt-8 md:mt-0">
            <img
              src="/doctor.png"
              alt="Doctor"
              className="w-64 md:w-80 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white px-6 md:px-20 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Box */}
          <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Enjoy Easy and hassle free ordering</h3>
              <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center py-8 cursor-pointer hover:bg-gray-50">
                <Upload className="w-8 h-8 text-gray-500" />
                <p className="mt-2 text-blue-600 font-medium">Upload Prescription</p>
              </div>
              <a href="#" className="text-sm text-gray-500 underline">
                What is valid prescription?
              </a>
            </div>
            <div className="mt-6 bg-blue-50 text-blue-600 px-4 py-2 rounded-md text-sm font-medium">
              Upto 25%* discount on every order
            </div>
          </div>

          {/* How pharmacist helps */}
          <div className="border rounded-lg shadow-sm p-6 space-y-4">
            <h3 className="text-lg font-semibold">How will the Pharmacist help you?</h3>
            <ul className="space-y-4">
              {[
                "Pharmacist will check items on prescription and add to cart",
                "You can ask for additional items if needed",
                "They will apply the best coupon & get you the max savings",
                "Choose the earliest delivery date",
                "Finally, Share payment methods options",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-gray-700">{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
