import React from "react";
import successIcon from "./../../image/icon/delete_cart.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 50vh;
`;

function Fail() {
  return (
    <div className="d-flex flex-column align-items-center gap-3 pb-5">
      <StyledImg src={successIcon} />
      <h1 className="text-center text-color-danger">喔喔，付款失敗</h1>
      <div>
        <h2 className="text-center d-md-inline">但不用擔心，您可以前往</h2>
        <h2 className="text-center d-md-inline text-color-primary">
          會員&rarr;訂單紀錄&rarr;交易中訂單
        </h2>
        <h2 className="text-center d-md-inline">嘗試重新付款</h2>
      </div>
    </div>
  );
}

export default Fail;
