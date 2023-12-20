import React from "react";
import styled from "styled-components";
import logo from "./../image/icon/logo/logo_white.svg";
import colorLogo from "./../image/icon/logo/logo.svg";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import CartIcon from "./CartIcon";
import { useMemberContext } from "../context/MemberContext";

const StyledSearchWrap = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(CiSearch)`
  position: absolute;
  width: 1.5rem;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  color: var(--color-black);
  &.text-color-white {
    color: var(--color-white);
  }
`;

const StyledSearchInput = styled.input`
  background-color: transparent;
  border-radius: 30px;
  padding-left: 2.5rem;
  color: var(--color-black);
  border: 1px solid var(--color-black);
  &::placeholder {
    color: var(--color-black);
  }
  &.text-color-white {
    border: 1px solid var(--color-white);
    color: var(--color-white);
    &::placeholder {
      color: var(--color-white);
    }
  }

  &:focus {
    outline: none;
  }
`;

function Header({ className }) {
  const productLinkArray = [
    { link: "sites", name: "行程" },
    { link: "foods", name: "美食" },
    { link: "hotels", name: "住宿" },
    { link: "tickets", name: "票券" },
  ];

  const memberLinkArray = [
    { link: "login", name: "登入" },
    { link: "register", name: "註冊" },
  ];

  const generateProductLink = () => {
    return productLinkArray.map((v) => (
      <NavLink
        className={`d-none d-lg-block ${className}`}
        to={`/${v.link}`}
        key={v.link}
      >
        {v.name}
      </NavLink>
    ));
  };

  const generateMemberLink = () => {
    return memberLinkArray.map((v) => (
      <NavLink
        className={`d-none d-lg-block ${className}`}
        to={`/${v.link}`}
        key={v.link}
      >
        {v.name}
      </NavLink>
    ));
  };
  const member = useMemberContext();

  return (
    <div className="container">
      <div className="row py-4">
        <div className="d-flex justify-content-between aling-items-center">
          <div className="d-flex col-12 col-lg-8 col-xl-5 justify-content-between align-items-center">
            <RxHamburgerMenu className={`col-1 d-lg-none ${className}`} />
            <NavLink className="col-3 col-md-3" to="/homepage">
              <img
                alt="logo"
                src={className === "text-color-white" ? logo : colorLogo}
              />
            </NavLink>
            <CartIcon className={`d-lg-none col-1 h-100 ${className}`} />

            {generateProductLink(className)}

            <StyledSearchWrap className="d-none d-lg-flex d-xl-none col-lg-3 align-items-center">
              <StyledSearchIcon className={`h-100 ${className}`} />
              <StyledSearchInput
                type="text"
                placeholder="搜尋"
                className={className}
              />
            </StyledSearchWrap>
          </div>
          <div className="d-flex col-lg-2 col-xl-5 justify-content-between align-items-center">
            <StyledSearchWrap className="d-none d-xl-flex align-items-center">
              <StyledSearchIcon className={`h-100 ${className}`} />
              <StyledSearchInput
                type="text"
                placeholder="搜尋"
                className={className}
              />
            </StyledSearchWrap>

            {generateMemberLink(className)}

            <NavLink to={"/cart"}>
              <CartIcon className={`d-none d-lg-block h-100 ${className}`} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
