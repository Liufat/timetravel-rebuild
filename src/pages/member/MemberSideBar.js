import React from "react";
import { NavLink } from "react-router-dom";
import picture from "./../../image/img/itinerary_home.jpg";
import styled from "styled-components";

const StyledPictureWrap = styled.div`
  width: 5rem;
  height: 5rem;
  border: transparent;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function MemberSideBar() {
  return (
    <div className="d-flex flex-column gap-4 box-shadow py-5">
      <div className="d-flex flex-column align-items-center">
        <StyledPictureWrap style={{ backgroundImage: `url(${picture})` }} />
        <span className="text-color-primary">生日哥</span>
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <NavLink className="text-color-primary">修改個人資訊</NavLink>
        <NavLink>重設密碼</NavLink>
        <NavLink>訂單紀錄</NavLink>
        <NavLink>我的行程規劃</NavLink>
        <NavLink>我的票夾</NavLink>
        <NavLink>我的評論</NavLink>
        <NavLink>我的收藏</NavLink>
      </div>
    </div>
  );
}

export default MemberSideBar;
