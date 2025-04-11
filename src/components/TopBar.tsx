
import { Icon } from "@iconify/react";
import { countries } from "../constants/countries";

export const TopBar = () => {
  return (
    <div className="w-full bg-gray-800 border-b">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-start gap-4">
          {countries.map((country) => (
            <button
              key={country.code}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 transition duration-300"
            >
              <Icon icon={country.icon} className="text-xl" />
              <span>{country.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
