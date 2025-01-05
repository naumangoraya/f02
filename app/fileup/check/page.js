"use client";
import React, { useState } from "react";
import Additems from "../../../components/fileupload/Additems";

function Check() {
  const [products] = useState([
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "Keyboard",
    "Monitor",
  ]);

  return (
    <>
      <Additems items={products} heading="Products" title1="Product" />
    </>
  );
}

export default Check;
