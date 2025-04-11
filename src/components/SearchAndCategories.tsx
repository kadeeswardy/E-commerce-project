
import { Icon } from "@iconify/react";
import { categories } from "../constants/navigation";

export const SearchAndCategories = () => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <Icon icon="lucide:search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center justify-center h-auto py-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition duration-300"
            >
              <Icon icon={category.icon} className="text-2xl mb-2 text-gray-700" />
              <span className="text-xs text-gray-600">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};