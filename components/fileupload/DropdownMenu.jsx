"use client"; // Ensures this component runs client-side

import React from "react";

const DropdownMenu = ({ items, label, selectedItem, setSelectedItem }) => {
  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Label */}
      <label className="block text-white font-medium mb-2">{label}</label>

      {/* Dropdown */}
      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
        className="w-full rounded-lg border-[1.5px] border-gray-700 bg-gray-900 py-3 px-5 text-white outline-none transition focus:border-blue-500"
        style={{
          maxHeight: "200px", // Limit height to 200px
          overflowY: items.length > 10 ? "auto" : "hidden", // Show scrollbar if more than 10 items
        }}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {items.map((item, index) => (
          <option key={index} value={item} className="py-3">
            {item}
          </option>
        ))}
      </select>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        select::-webkit-scrollbar {
          width: 8px;
        }
        select::-webkit-scrollbar-track {
          background: #2d2d2d; /* Dark background for the scrollbar track */
          border-radius: 10px;
        }
        select::-webkit-scrollbar-thumb {
          background-color: #4a4a4a; /* Lighter gray for the thumb */
          border-radius: 10px;
        }
        select::-webkit-scrollbar-thumb:hover {
          background-color: #666666; /* Lighter color on hover */
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;
