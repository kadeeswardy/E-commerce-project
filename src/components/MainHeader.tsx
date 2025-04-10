import React, { useState } from "react";
import { mainMenuItems } from "../constants/navigation";
import { Icon } from "@iconify/react";

export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Section */}
        <div className="flex items-center space-x-2">
          <p className="font-bold text-2xl text-gray-800">STORE</p>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <Icon icon={isMenuOpen ? "ic:outline-close" : "ic:outline-menu"} className="text-3xl" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {mainMenuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Favorites, Wishlist, Cart) */}
        <div className="flex items-center gap-6">
          {[
            { icon: "lucide:heart", count: 5 },
            { icon: "lucide:scale", count: 2 },
            { icon: "lucide:shopping-cart", count: 3 },
          ].map((action, index) => (
            <button
              key={index}
              className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <span className="absolute top-0 right-0 block w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {action.count}
              </span>
              <Icon icon={action.icon} className="text-2xl text-gray-700" />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 py-6 px-4">
          {mainMenuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};