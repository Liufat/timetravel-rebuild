import React from "react";
import styled from "styled-components";
import logo from "./../image/icon/logo/logo_white.svg";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import CartIcon from "./CartIcon";

const StyledSearchWrap = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(CiSearch)`
  position: absolute;
  width: 1.5rem;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  color: var(--color-white);
`;

const StyledSearchInput = styled.input`
  background-color: transparent;
  border: 1px solid var(--color-white);
  border-radius: 30px;
  color: var(--color-white);
  padding-left: 2.5rem;
  &::placeholder {
    color: var(--color-white);
  }
  &:focus {
    outline: none;
  }
`;

function Header() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="d-flex justify-content-between aling-items-center">
          <div className="d-flex col-12 col-lg-8 col-xl-5 justify-content-between align-items-center">
            <RxHamburgerMenu
              className="col-1 d-lg-none"
              style={{ color: "white" }}
            />
            <NavLink className="col-3 col-md-3" to="/homepage">
              <img alt="logo" src={logo} />
            </NavLink>
            <CartIcon className="d-lg-none col-1 h-100 " />

            <NavLink
              className="d-none d-lg-block text-color-white"
              to="itinerary"
            >
              行程
            </NavLink>
            <NavLink className="d-none d-lg-block text-color-white" to="foods">
              美食
            </NavLink>
            <NavLink className="d-none d-lg-block text-color-white" to="stays">
              住宿
            </NavLink>
            <NavLink
              className="d-none d-lg-block text-color-white"
              to="tickets"
            >
              票券
            </NavLink>
            <StyledSearchWrap className="d-none d-lg-flex d-xl-none col-lg-3 align-items-center">
              <StyledSearchIcon className=" h-100" />
              <StyledSearchInput type="text" placeholder="搜尋" />
            </StyledSearchWrap>
          </div>
          <div className="d-flex col-lg-2 col-xl-5 justify-content-between align-items-center">
            <StyledSearchWrap className="d-none d-xl-flex align-items-center">
              <StyledSearchIcon className=" h-100" />
              <StyledSearchInput type="text" placeholder="搜尋" />
            </StyledSearchWrap>
            <NavLink className="d-none d-lg-block text-color-white" to="member">
              登入
            </NavLink>
            <NavLink className="d-none d-lg-block text-color-white" to="member">
              註冊
            </NavLink>
            <CartIcon className="d-none d-lg-block h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
