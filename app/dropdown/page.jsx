"use client";
import React, { useState } from "react";
import DropdownMenu from "../../components/fileupload/DropdownMenu";

const ProductDropdown = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const products = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "Keyboard",
    "Monitor",
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "Keyboard",
    "Monitor",
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "Keyboard",
    "Monitor",
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "Keyboard",
    "Monitor",
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <DropdownMenu
        items={products}
        label="Product"
        selectedItem={selectedProduct}
        setSelectedItem={setSelectedProduct}
      />
      {selectedProduct && (
        <div className="mt-1 text-white">
          You selected: <strong>{selectedProduct}</strong>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;
