"use client";

import LocationDropdown from "./NavLocation";
import { useState } from "react";

const SearchBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="container mx-auto px-4 py-2 rounded-md">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          {/* Location Selector */}
          <LocationDropdown />
    
          {/* Search Input */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for Medicines and Health Products"
            />
          </div>
    
          {/* Quick Order Button */}
          <div className="flex items-center space-x-4">
            <div className="text-blue-600 font-bold">
              <span className="text-blue-500 material-icons">bolt</span> QUICK BUY! Get 15% off 
            </div>
            <button className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Quick order
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-2">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-600 p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Location (Condensed) */}
            <div className="flex-shrink-0">
              <LocationDropdown />
            </div>
          </div>

          {/* Search Input */}
          <div className="w-full mb-2">
            <input
              type="text"
              className="w-full px-3 py-2 text-sm rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search Medicines..."
            />
          </div>

          {/* Quick Order - Collapsed on mobile */}
          <div className="flex items-center justify-between">
            <div className="text-blue-600 font-medium text-sm">
              <span className="text-blue-500 material-icons text-sm">bolt</span> QUICK BUY! 15% off
            </div>
            <button className="bg-green-400 text-white text-sm px-3 py-1.5 rounded-md hover:bg-red-600">
              Quick order
            </button>
          </div>

          {/* Mobile Menu (Expandable) */}
          {isMenuOpen && (
            <div className="mt-2 p-2 bg-white rounded-md shadow-lg border border-gray-200">
              <nav className="space-y-2">
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-50 text-blue-700">Home</a>
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-50 text-blue-700">Categories</a>
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-50 text-blue-700">Lab Tests</a>
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-50 text-blue-700">Health Blog</a>
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-50 text-blue-700">My Account</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  