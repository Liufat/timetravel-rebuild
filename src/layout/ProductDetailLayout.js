import React from "react";
import { Outlet } from "react-router-dom";

function ProductDetailLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProductDetailLayout;
