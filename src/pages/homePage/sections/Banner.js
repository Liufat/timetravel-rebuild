import React, { useState } from "react";
import bannerLogo from "./../../../image/icon/logo/logo_white.svg";
import styled from "styled-components";
import { IoMdBriefcase } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCouch } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import Button from "../../../ui/Button";

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    padding: 0 2rem;
  }
  color: var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
  opacity: 60%;
  &.active {
    border-bottom: 1px solid var(--color-white);
    color: var(--color-white);
    opacity: 100%;
  }
`;

const StyledInput = styled.input`
  border: none;
  &::placeholder {
    color: var(--color-grey);
  }
  &:focus {
    outline: none;
  }
`;

const SearchLink = ({ setActive, active, text, icon }) => {
  const onClick = () => {
    setActive(text);
  };
  return (
    <StyledSelect className={active === text ? "active" : ""} onClick={onClick}>
      <span className="text-color-white">{text}</span>
      {icon}
    </StyledSelect>
  );
};

const searchLinkArray = [
  { text: "行程", icon: <IoMdBriefcase /> },
  { text: "美食", icon: <IoFastFoodSharp /> },
  { text: "住宿", icon: <FaCouch /> },
  { text: "票券", icon: <IoTicketSharp /> },
];

function Banner() {
  const [active, setActive] = useState("行程");

  return (
    <section className="d-flex flex-column justify-content-around align-items-center pb-md-2 pb-xl-0 w-100 h-100">
      <div className="col-10 col-md-6 col-xl-4">
        <img className="h-100" alt="logo" src={bannerLogo} />
      </div>
      <div className="d-flex w-100 flex-column align-items-center gap-5">
        <div className="d-flex">
          {searchLinkArray.map((v) => (
            <SearchLink
              active={active}
              setActive={setActive}
              text={v.text}
              icon={v.icon}
              key={v.text}
            />
          ))}
        </div>
        <div className="d-flex col-10 col-xl-4 gap-0">
          <StyledInput
            className="w-100 px-3 py-2"
            type="text"
            placeholder="請輸入關鍵字"
          />
          <Button className="col-3 col-xl-2 btn-primary">
            <span>搜尋</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
