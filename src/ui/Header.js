import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "./../image/icon/logo/logo_white.svg";
import colorLogo from "./../image/icon/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import CartIcon from "./CartIcon";
import { useMemberContext } from "../context/MemberContext";
import memberImage from "./../image/img/dog.png";
import { useLocalStorage } from "../hooks/useLocalStorage";

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

const StyledMemberIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50% 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledDropdown = styled.div`
  width: 180px;
  height: 400px;
  background-color: var(--color-white);
  top: 50px;
`;
const StyledDropdownRWD = styled.div`
  width: 120px;
  height: 400px;
  background-color: var(--color-white);
  top: 50px;
`;

function Header({ className }) {
  // 操控下拉選單的開關
  const [dropOpen, setDropOpen] = useState(false);
  const dropEl = useRef(null);
  useEffect(() => {
    const onClickOutSideHandles = (e) => {
      if (dropOpen && !dropEl.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    window.addEventListener("click", onClickOutSideHandles);
    return () => {
      window.removeEventListener("click", onClickOutSideHandles);
    };
  }, [dropOpen]);

  // 渲染link欄位
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

  // 登出
  const logout = () => {
    useLocalStorage.remove("member");
    setMember("");
  };

  ////////////////////////////////
  // 渲染會員登入欄位
  const { member, setMember } = useMemberContext();

  const generateMemberLink = () => {
    if (!member) {
      return memberLinkArray.map((v) => (
        <NavLink
          className={`d-none d-lg-block ${className}`}
          to={`/${v.link}`}
          key={v.link}
        >
          {v.name}
        </NavLink>
      ));
    } else {
      return (
        <div
          onClick={() => {
            setDropOpen(!dropOpen);
          }}
          className="d-none d-lg-flex align-items-center gap-4 position-relative pointer"
        >
          <StyledMemberIcon
            style={{
              backgroundImage: `url(${member.member_img || memberImage})`,
            }}
          />
          <div className="text-color-primary">{member.username}</div>
          <StyledDropdown
            className={`position-absolute collapse ${dropOpen && "show"}`}
          >
            <div className="px-3 h-100 d-flex flex-column justify-content-evenly box-shadow">
              <Link to={"/member"}>
                <span>修改個人資訊</span>
              </Link>
              <Link to={"/reset-password"}>
                <span>重設密碼</span>
              </Link>
              <Link to={"/order"}>
                <span>訂單紀錄</span>
              </Link>
              <Link>
                <span>我的行程規劃</span>
              </Link>
              <Link to={"/my-comment"}>
                <span>我的評論</span>
              </Link>
              <Link to={"my-collect"}>
                <span>我的收藏</span>
              </Link>
              <Link onClick={logout}>
                <span>登出</span>
              </Link>
            </div>
          </StyledDropdown>
        </div>
      );
    }
  };

  return (
    <div ref={dropEl} className="container  ">
      <div className="row py-4">
        <div className="d-flex justify-content-between aling-items-center">
          <div className="d-flex col-12 col-lg-8 col-xl-5 justify-content-between align-items-center position-relative">
            <StyledDropdownRWD
              className={`position-absolute box-shadow d-lg-none collapse ${
                dropOpen && "show"
              }`}
            >
              {member ? (
                <div className="px-3 h-100 d-flex flex-column justify-content-evenly ">
                  <StyledMemberIcon
                    style={{
                      backgroundImage: `url(${
                        member.member_img || memberImage
                      })`,
                    }}
                  />
                  <div className="text-color-primary">{member.username}</div>
                  <Link to={"/member"}>
                    <span>修改個人資訊</span>
                  </Link>
                  <Link to={"/reset-password"}>
                    <span>重設密碼</span>
                  </Link>
                  <Link to={"/order"}>
                    <span>訂單紀錄</span>
                  </Link>
                  <Link>
                    <span>我的行程規劃</span>
                  </Link>
                  <Link to={"/my-comment"}>
                    <span>我的評論</span>
                  </Link>
                  <Link to={"my-collect"}>
                    <span>我的收藏</span>
                  </Link>
                  <Link onClick={logout}>
                    <span>登出</span>
                  </Link>
                </div>
              ) : (
                <div className="px-3 h-100 d-flex flex-column justify-content-evenly align-items-center ">
                  <Link to={"/login"}>登入</Link>
                  <Link to={"/register"}>註冊</Link>
                  <Link to={"/sites"}>行程</Link>
                  <Link to={"/foods"}>美食</Link>
                  <Link to={"/hotels"}>住宿</Link>
                  <Link to={"/tickets"}>票券</Link>
                </div>
              )}
            </StyledDropdownRWD>
            <RxHamburgerMenu
              onClick={() => {
                setDropOpen(!dropOpen);
              }}
              className={`col-1 d-lg-none ${className}`}
            />
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
