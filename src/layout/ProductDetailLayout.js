import React from "react";
import { Outlet } from "react-router-dom";

function ProductDetailLayout() {
  return (
    <div className="container">
      <div className="row">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductDetailLayout;
