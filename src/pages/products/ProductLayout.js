import React from "react";
import Header from "../../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";

function ProductLayout() {
  return (
    <>
      <Header className={"text-color-black"} />
      <Outlet />
      <Footer />
    </>
  );
}

export default ProductLayout;
