import React from "react";
import { Outlet } from "react-router-dom";

function CheckOutLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CheckOutLayout;
