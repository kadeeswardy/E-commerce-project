import React from 'react';

const Sidebar: React.FC = () => {
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas'];
  const categories = ['Electronics', 'Fashion', 'Home', 'Sports'];

  return (
    <aside className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Brands</h3>
          {brands.map((brand) => (
            <label key={brand} className="flex items-center mb-2 text-gray-600">
              <input
                type="checkbox"
                className="mr-2 accent-blue-600 w-4 h-4"
              />
              {brand}
            </label>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
          {categories.map((category) => (
            <label key={category} className="flex items-center mb-2 text-gray-600">
              <input
                type="checkbox"
                className="mr-2 accent-blue-600 w-4 h-4"
              />
              {category}
            </label>
          ))}
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;