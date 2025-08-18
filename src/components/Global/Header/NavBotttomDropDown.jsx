"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import menuData from "@/data/navitem.json"; // Ensure this path is correct

const NavBottomDropDown = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="hidden md:flex space-x-2 lg:space-x-6 mt-2 md:mt-3 px-2 md:px-6 relative z-50">
      {menuData.menu.map((menu, index) => (
        <div
          key={menu.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Menu Button */}
          <button className="flex items-center gap-0.5 md:gap-1 text-xs md:text-sm text-black hover:text-blue-600 focus:outline-none">
            {menu.name}
            <ChevronDown size={14} className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          {/* Dropdown */}
          {activeMenu === index && (
            <div
              className={`absolute top-8 md:top-10 ${
                index < 4 ? "left-0" : "right-0"
              } bg-white border border-gray-300 rounded-lg shadow-lg p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-[280px] md:w-[450px] lg:w-[600px]`}
            >
              {/* Map Subcategories */}
              {menu.subcategories.map((subcategory, subIndex) => {
                if (typeof subcategory === "string") {
                  // Render simple subcategory as a title
                  return (
                    <div
                      key={subIndex}
                      className="font-bold text-black hover:bg-gray-100 p-2 rounded-md"
                    >
                      {subcategory}
                    </div>
                  );
                } else if (subcategory.name && subcategory.items) {
                  // Render subcategory with items
                  return (
                    <div key={subIndex}>
                      <div className="font-bold text-black mb-1 md:mb-2 text-xs md:text-sm">
                        {subcategory.name}
                      </div>
                      <ul className="">
                        {subcategory.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-black hover:bg-gray-100 p-1 md:p-2 rounded-md text-xs md:text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  return null; // Gracefully handle unexpected data
                }
              })}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBottomDropDown;
