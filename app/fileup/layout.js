import React from "react";
import Check from "./Check";
import PlatformManager from "./PlatformManager";

function ProductsAndPlatforms() {
  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      {/* Product Manager */}
      <div className="flex-1">
        <Check />
      </div>

      {/* Platform Manager */}
      <div className="flex-1">
        <PlatformManager />
      </div>
    </div>
  );
}

export default ProductsAndPlatforms;
