import React from "react";
import styled from "styled-components";
import backGroundImg from "./../../../image/img/background2.png";
import Button from "../../../ui/Button";

const StyledSection = styled.section`
  height: 30rem;
  background-image: url(${backGroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledH1 = styled.h1`
  color: var(--color-white);
`;
const StyledH2 = styled.h2`
  color: var(--color-white);
`;
function WhyChoose() {
  return (
    <StyledSection className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column gap-5 align-items-center">
        <StyledH1>為什麼選擇TimeTravel？</StyledH1>
        <div className="d-flex flex-column align-items-center">
          <StyledH2 className="text-center text-xl-start">
            你知道世界上有超過百萬名自由行旅客選擇TimeTravel作為旅遊規劃網站嗎？
          </StyledH2>
          <StyledH2 className="text-center text-xl-start">
            他們透過TimeTravel找到安全又安心的體驗行程！
          </StyledH2>
        </div>
        <div>
          <Button className={"py-1 px-3 btn-transparent"}>
            <span>立即註冊</span>
          </Button>
        </div>
      </div>
    </StyledSection>
  );
}

export default WhyChoose;
