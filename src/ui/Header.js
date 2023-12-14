import React from "react";
import styled from "styled-components";
import logo from "./../image/icon/logo/logo_white.svg";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const StyledLink = styled(NavLink)`
  color: var(--color-white);
`;

const StyledCartIcon = styled(FiShoppingCart)`
  color: var(--color-white);

  width: 1.5rem;
`;

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
          <div className="d-flex col-12 col-xl-5 justify-content-between align-items-center">
            <RxHamburgerMenu
              className="col-2 d-xl-none"
              style={{ color: "white" }}
            />
            <NavLink className="col-3 col-xl-3" to="/homepage">
              <img alt="logo" src={logo} />
            </NavLink>
            <CiSearch className="col-2 d-xl-none text-color-white" />

            <StyledLink className="d-none d-xl-block" to="itinerary">
              行程
            </StyledLink>
            <StyledLink className="d-none d-xl-block" to="foods">
              美食
            </StyledLink>
            <StyledLink className="d-none d-xl-block" to="stays">
              住宿
            </StyledLink>
            <StyledLink className="d-none d-xl-block" to="tickets">
              票券
            </StyledLink>
          </div>
          <div className="d-flex col-xl-5 justify-content-between">
            <StyledSearchWrap>
              <StyledSearchIcon className="d-none d-xl-block h-100" />
              <StyledSearchInput
                className="d-none d-xl-block"
                type="text"
                placeholder="搜尋"
              />
            </StyledSearchWrap>
            <StyledLink className="d-none d-xl-block " to="member">
              登入
            </StyledLink>
            <StyledLink className="d-none d-xl-block" to="member">
              註冊
            </StyledLink>
            <StyledCartIcon className="d-none h-100 d-xl-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
