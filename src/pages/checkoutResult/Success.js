import React from "react";
import successIcon from "./../../image/icon/success_cart.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 50vh;
`;

function Success() {
  return (
    <div className="d-flex flex-column align-items-center gap-3 pb-5">
      <StyledImg src={successIcon} />
      <h1 className="text-color-primary">付款成功</h1>
      <h2>感謝您選擇Time Travel，我們祝您旅途愉快</h2>
    </div>
  );
}

export default Success;
