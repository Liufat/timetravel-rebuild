import React from "react";
import ProductSidebar from "../pages/products/ProductSidebar";
import Breadcrumb from "../ui/Breadcrumb";
import Arrangement from "../ui/Arrangement";
import { Outlet } from "react-router-dom";

function ProductLayout({ children }) {
  return (
    <>
      <div className="container pb-5">
        <div className="row">
          <main className="col-11">
            <div className="d-flex py-5 justify-content-between">
              <Breadcrumb />
              <Arrangement />
            </div>
            <div className="d-flex justify-content-between gap-5">
              <div className="d-none d-md-block col-md-3">
                <ProductSidebar />
              </div>
              <div className="col-12 col-md-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductLayout;
