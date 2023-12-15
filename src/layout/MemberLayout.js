import React from "react";
import { Outlet } from "react-router-dom";
import MemberSideBar from "../pages/member/MemberSideBar";

function MemberLayout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <main className="d-flex justify-content-around pb-5 p-md-5">
            <div className="d-none d-md-block col-10 col-md-4 col-lg-3 col-xl-3">
              <MemberSideBar />
            </div>
            <div className="col-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default MemberLayout;
