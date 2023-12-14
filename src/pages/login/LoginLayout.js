import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import backGroundLink from "./../../image/img/member/BG_member.jpg";
import logo from "./../../image/icon/logo/logo_white.svg";

const StyledBackground = styled.div`
  height: 100vh;
  background-image: url(${backGroundLink});
`;

function LoginLayout() {
  return (
    <StyledBackground>
      <div className="d-flex h-100 w-100 justify-content-around align-items-center">
        <div className="col-3">
          <NavLink to="/homepage">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <Outlet />
      </div>
    </StyledBackground>
  );
}

export default LoginLayout;
