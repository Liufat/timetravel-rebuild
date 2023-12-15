import React from "react";
import Header from "../../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import ProductSidebar from "./ProductSidebar";
import Breadcrumb from "../../ui/Breadcrumb";
import Arrangement from "../../ui/Arrangement";

function ProductLayout() {
  return (
    <>
      <Header className={"text-color-black"} />
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

      <Footer />
    </>
  );
}

export default ProductLayout;
