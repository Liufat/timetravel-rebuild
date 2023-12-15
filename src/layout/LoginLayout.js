import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import backGroundLink from "./../image/img/member/BG_member.jpg";
import logo from "./../image/icon/logo/logo_white.svg";
import colorLogo from "./../image/icon/logo/logo.svg";

const StyledBackground = styled.div`
  height: 100vh;
  @media screen and (min-width: 768px) {
    background-image: url(${backGroundLink});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

function LoginLayout() {
  return (
    <StyledBackground>
      <div className="pt-4 pt-md-0 d-flex flex-column flex-md-row h-100 w-100 justify-content-start justify-content-md-around  align-items-center gap-4 gap-md-0">
        <div className="col-5 col-md-3">
          <NavLink to="/homepage">
            <img src={logo} alt="logo" className="d-none d-md-block" />
            <img src={colorLogo} alt="logo" className=" d-md-none" />
          </NavLink>
        </div>
        <Outlet />
      </div>
    </StyledBackground>
  );
}

export default LoginLayout;
