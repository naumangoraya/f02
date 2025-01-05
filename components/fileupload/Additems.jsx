"use client";

import { useState } from "react";

const Additems = ({ items, heading, title1 }) => {
  const [products, setProducts] = useState(items || []);
  const [productName, setProductName] = useState("");

  const addProduct = () => {
    if (productName.trim()) {
      setProducts([...products, productName.trim()]);
      setProductName("");
    }
  };

  return (
    <div className=" pt-1 p-6 max-w-md mx-auto">
      {/* Card */}
      <div className="rounded-sm border border-gray-700 bg-gray-800 shadow-md p-6">
        <h3 className="font-medium text-white mb-4 text-center">{heading}</h3>

        {/* Input Field */}
        <input
          type="text"
          placeholder={`Enter ${title1} name`}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full rounded-lg border-[1.5px] border-gray-700 bg-gray-900 py-3 px-5 text-white outline-none transition focus:border-blue-500 mb-4"
        />

        {/* Add Button */}
        <button
          onClick={addProduct}
          className="w-full rounded-lg bg-blue-600 py-3 px-5 text-white font-medium hover:bg-blue-700 transition"
        >
          Add {title1}
        </button>
      </div>

      {/* Scrollable List */}
      <div className="mt-1 rounded-sm border border-gray-700 bg-gray-800 shadow-md p-6 h-[calc(100vh-300px)]">
        <h4 className="font-medium text-white mb-4 sticky top-0 bg-gray-800 z-10">
          {`${title1} List`}
        </h4>
        <ul className="h-[calc(100%-56px)] overflow-y-auto px-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
          {products.map((item, index) => (
            <li
              key={index}
              className="p-3 bg-gray-700 rounded-lg text-white mb-2 last:mb-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Additems;
