import React from "react";
import { Outlet } from "react-router-dom";

function MemberLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MemberLayout;
