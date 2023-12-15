import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import MemberSideBar from "./MemberSideBar";

function MemberLayout() {
  return (
    <>
      <Header className={"text-color-black"} />
      <div className="d-flex justify-content-center pb-5 p-md-5 gap-5">
        <div className="d-none d-md-block col-10 col-md-4 col-lg-3 col-xl-2">
          <MemberSideBar />
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberLayout;
