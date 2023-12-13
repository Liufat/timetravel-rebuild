import React from "react";
import bannerLogo from "./../../../image/icon/logo/logo_white.svg";
import styled from "styled-components";
import { IoMdBriefcase } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCouch } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
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

const StyleButton = styled.button`
  border: none;
  background-color: var(--color-primary);
  color: var(--color-white);
`;
function Banner() {
  return (
    <section className="d-flex flex-column justify-content-around align-items-center w-100 h-100">
      <div className="col-4">
        <img className="h-100" alt="logo" src={bannerLogo} />
      </div>
      <div className="d-flex w-100 flex-column align-items-center gap-5">
        <div className="d-flex">
          <StyledSelect>
            <span>行程</span>
            <IoMdBriefcase />
          </StyledSelect>
          <StyledSelect className="active">
            <span>美食</span>
            <IoFastFoodSharp />
          </StyledSelect>
          <StyledSelect>
            <span>住宿</span>
            <FaCouch />
          </StyledSelect>
          <StyledSelect>
            <span>票券</span>
            <IoTicketSharp />
          </StyledSelect>
        </div>
        <div className="d-flex col-4 gap-0">
          <StyledInput
            className="w-100 px-3 py-2"
            type="text"
            placeholder="請輸入關鍵字"
          />
          <StyleButton className="col-2">
            <span>搜尋</span>
          </StyleButton>
        </div>
      </div>
    </section>
  );
}

export default Banner;
