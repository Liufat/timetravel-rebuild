import React from "react";
import styled from "styled-components";
import logo from "./../image/icon/logo/logo_white.svg";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

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
          <div className="d-flex col-xl-5 justify-content-between align-items-center">
            <NavLink className="col-xl-3" to="/homepage">
              <img alt="logo" src={logo} />
            </NavLink>

            <StyledLink to="itinerary">行程</StyledLink>
            <StyledLink to="foods">美食</StyledLink>
            <StyledLink to="stays">住宿</StyledLink>
            <StyledLink to="tickets">票券</StyledLink>
          </div>
          <div className="d-flex col-xl-5 justify-content-between">
            <StyledSearchWrap>
              <StyledSearchIcon className="h-100" />
              <StyledSearchInput type="text" placeholder="搜尋" />
            </StyledSearchWrap>
            <StyledLink to="member">登入</StyledLink>
            <StyledLink to="member">註冊</StyledLink>
            <StyledCartIcon className="h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
