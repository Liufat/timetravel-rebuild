import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

function CheckOutLayout() {
  return (
    <>
      <Header className={"text-color-black"} />
      <Outlet />
      <Footer />
    </>
  );
}

export default CheckOutLayout;
